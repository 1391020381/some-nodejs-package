# 构建中使用变量
* 在 Dockerfile 里，我们可以用 ARG 指令来建立一个参数变量，我们可以在构建时通过构建指令传入这个参数变量，并且在 Dockerfile 里使用它

```
FROM debian:stretch-slim

## ......

ARG TOMCAT_MAJOR
ARG TOMCAT_VERSION

## ......

RUN wget -O tomcat.tar.gz "https://www.apache.org/dyn/closer.cgi?action=download&filename=tomcat/tomcat-$TOMCAT_MAJOR/v$TOMCAT_VERSION/bin/apache-tomcat-$TOMCAT_VERSION.tar.gz"

## ......

```
* 如果我们需要通过这个 Dockerfile 文件构建 Tomcat 镜像，我们可以在构建时通过 docker build 的 --build-arg 选项来设置参数变量
* $ sudo docker build --build-arg TOMCAT_MAJOR=8 --build-arg TOMCAT_VERSION=8.0.53 -t tomcat:8.0 ./tomcat


# 环境变量 ENV
* 环境变量的定义是通过ENV这个指令来完成的
```
FROM debian:stretch-slim

## ......

ENV TOMCAT_MAJOR 8
ENV TOMCAT_VERSION 8.0.53

## ......

RUN wget -O tomcat.tar.gz "https://www.apache.org/dyn/closer.cgi?action=download&filename=tomcat/tomcat-$TOMCAT_MAJOR/v$TOMCAT_VERSION/bin/apache-tomcat-$TOMCAT_VERSION.tar.gz"



```

* 由于环境变量在容器运行时依然有效，所以运行容器时我们还可以对其进行覆盖，在创建容器时使用 -e 或是 --env 选项，可以对环境变量的值进行修改或定义新的环境变量

* $ sudo docker run -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:5.7

* 另外需要说明一点，通过 ENV 指令和 ARG 指令所定义的参数，在使用时都是采用 $ + NAME 这种形式来占位的，所以它们之间的定义就存在冲突的可能性。对于这种场景，大家只需要记住，ENV 指令所定义的变量，永远会覆盖 ARG 所定义的变量，即使它们定时的顺序是相反的。

## 合并命令
* 大多数镜像会将命令合并到一条指令中，因为这种做法不但减少了镜像层的数量，也减少了镜像构建过程中反复创建容器的次数，提高了镜像构建的速度

## 构建缓存
* 建议将不容易发生变化的搭建过程放到 Dockerfile 的前部，充分利用构建缓存提高镜像构建的速度。另外，指令的合并也不宜过度，而是将易变和不易变的过程拆分，分别放到不同的指令里

* $ sudo docker build --no-cache ./webapp

## 搭配 ENTRYPOINT 和 CMD
* 即都是用来指定基于此镜像所创建容器里主进程的启动命令的
* 两个指令的区别在于，ENTRYPOINT 指令的优先级高于 CMD 指令。当 ENTRYPOINT 和 CMD 同时在镜像中被指定时，CMD 里的内容会作为 ENTRYPOINT 的参数，两者拼接之后，才是最终执行的命令。
* ENTRYPOINT 指令主要用于对容器进行一些初始化，而 CMD 指令则用于真正定义容器中主程序的启动命令。

```
## ......

COPY docker-entrypoint.sh /usr/local/bin/

ENTRYPOINT ["docker-entrypoint.sh"]

## ......

CMD ["redis-server"]



```