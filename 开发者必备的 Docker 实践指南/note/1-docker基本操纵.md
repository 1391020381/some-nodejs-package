* docker pull ubuntu/docker pull openresty/openresty:1.13.6.2-alpine 拉取镜像
* docker images 查看镜像
* docker search nginx 搜索镜像
* docker rmi ubuntu:latest 删除镜像

* docker create nginx 创建任务
* docker start nginx 启动容器
* docker run --name nginx -d nginx
* docker ps  查看容器
* docker stop nginx 停止容器
* docker rm ngin 删除删除   docker rm -f nginx
* docker exec nginx more /etc/hostname 
* docker exec -it nginx bash

# 网络
## 暴露端口
* d$ sudo docker run -d --name mysql -e MYSQL_RANDOM_ROOT_PASSWORD=yes --expose 13306 --expose 23306 mysql:5.7

* 通过别名连接
纯粹的通过容器名来打开容器间的网络通道缺乏一定的灵活性，在 Docker 里还支持连接时使用别名来使我们摆脱容器名的限制。

$ sudo docker run -d --name webapp --link mysql:database webapp:latest

在这里，我们使用 --link <name>:<alias> 的形式，连接到 MySQL 容器，并设置它的别名为 database。当我们要在 Web 应用中使用 MySQL 连接时，我们就可以使用 database 来代替连接地址了。

String url = "jdbc:mysql://database:3306/webapp";


* 要让一个容器连接到另外一个容器,我们可以在容器 通过 docker create 或 docker run 创建时通过 --link 选项进行配置

* 容器间的网络已经打通，那么我们要如何在 Web 应用中连接到 MySQL 数据库呢？Docker 为容器间连接提供了一种非常友好的方式，我们只需要将容器的网络命名填入到连接地址中，就可以访问需要连接的容器了。

假设我们在 Web 应用中使用的是 JDBC 进行数据库连接的，我们可以这么填写连接。

String url = "jdbc:mysql://mysql:3306/webapp";

在这里，连接地址中的 mysql 就好似我们常见的域名解析，Docker 会将其指向 MySQL 容器的 IP 地址。



# 端口映射

* 就是我们需要在容器外通过网络访问容器中的应用。最简单的一个例子，我们提供了 Web 服务，那么我们就需要提供一种方式访问运行在容器中的 Web 应用。

在 Docker 中，提供了一个端口映射的功能实现这样的需求

* 要映射端口，我们可以在创建容器时使用 -p 或者是 --publish 选项。

$ sudo docker run -d --name nginx -p 80:80 -p 443:443 nginx:1.12

# 管理和存储数据
* 由于UnionFS支持挂载不同类型的文件系统到统一的目录结构中,`所以我们只需要将宿主操作系统中,文件系统里的文件目录挂载到容器中,便能够让容器内外共享这个文件`

## 挂载方式
* Dokcker提供了三种适用不同场景文件系统挂载方式:Bind Mount Volume 和 Tmpfs Mount

### 使用数据卷
* 数据卷的本质其实依然是宿主操作系统上的一个目录，只不过这个目录存放Docker内部,接受Docker的管理。
* $ sudo docker run -d --name webapp -v /webapp/storage webapp:latest

* $ sudo docker inspect webapp
[
    {
## ......
        "Mounts": [
            {
                "Type": "volume",
                "Name": "2bbd2719b81fbe030e6f446243386d763ef25879ec82bb60c9be7ef7f3a25336",
                "Source": "/var/lib/docker/volumes/2bbd2719b81fbe030e6f446243386d763ef25879ec82bb60c9be7ef7f3a25336/_data",
                "Destination": "/webapp/storage",
                "Driver": "local",
                "Mode": "",
                "RW": true,
                "Propagation": ""
            }
        ],
## ......
    }
]
* 数据卷命名
* $ sudo docker run -d --name webapp -v appdata:/webapp/storage webapp:latest

## 共享数据卷
* 数据卷的另一大作用是实现容器间的目录共享，也就是通过挂载相同的数据卷，让容器之间能够同时看到并操作数据卷中的内容。这个功能虽然也可以通过绑定挂载来实现，但通过数据卷来操作会更加的舒适、简单

## 删除数据卷

## 数据卷容器

## 备份和迁移数据卷



# 总结
1. 安装docker环境
2. 拉取需要的image
3. 创建容器
4. 容器间暴露端口  端口映射（dokcer 映射到宿主机）网络
5. 数据卷   保存数据的方式 包括保存 备份 迁移