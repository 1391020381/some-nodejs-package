# 保存和共享镜像
## 提交容器更改
* docker commit webapp / $ sudo docker commit -m "Configured" webapp
## 为镜像命名
## 镜像迁移

# 通过 Dockerfile 创建镜像
* Dockerfile -> docker build   -> Docker image

## Dockerfile的结构
* Dockerfile的指令简单分为五大类
    - 基础指令：用于定义新镜像的基础和性质。
    - 控制指令：是指导镜像构建的核心部分，用于描述镜像在构建过程中需要执行的命令。
    - 引入指令：用于将外部文件直接引入到构建镜像内部。
    - 执行指令：能够为基于镜像所创建的容器，指定在启动时需要执行的脚本或命令。
    - 配置指令：对镜像以及基于镜像所创建的容器，可以通过配置指令对其网络、用户等内容进行配置。

 ## 常见Dockerfile指令   
 ## FROM 
 * 通过FROM指令指定一个基础镜像，接下来所有的指令都是基于这个镜像所展开的。在镜像构建的过程中,Docker也会先获取到这个给出的基础镜像,再从这个镜像上进行构建操作。
 
 ```
FROM <image> [AS <name>]
FROM <image>[:<tag>] [AS <name>]
FROM <image>[@<digest>] [AS <name>]



 ```
 * 当然，一个 Dockerfile 要以 FROM 指令作为开始并不意味着 FROM 只能是 Dockerfile 中的第一条指令。在 Dockerfile 中可以多次出现 FROM 指令，当 FROM 第二次或者之后出现时，表示在此刻构建时，要将当前指出镜像的内容合并到此刻构建镜像的内容里。这对于我们直接合并两个镜像的功能很有帮助

 ## RUN
 ```
RUN <command>
RUN ["executable", "param1", "param2"]

 ```
 ## ENTRYPOINT 和 CMD

 ##  EXPOSE
 * EXPOSE <port> [<port>/<protocol>...]

## VOLUME
* VOLUME ["/data"]
## COPY 和 ADD
* 在制作新的镜像的时候，我们可能需要将一些软件配置、程序代码、执行脚本等直接导入到镜像内的文件系统里，使用 COPY 或 ADD 指令能够帮助我们直接从宿主机的文件系统里拷贝内容到镜像里的文件系统中

## 构建镜像
* docker build 可以接收一个参数，需要特别注意的是，这个参数为一个目录路径 ( 本地路径或 URL 路径 )，而并非 Dockerfile 文件的路径。在 docker build 里，这个我们给出的目录会作为构建的环境目录，我们很多的操作都是基于这个目录进行的。

例如，在我们使用 COPY 或是 ADD 拷贝文件到构建的新镜像时，会以这个目录作为基础目录。

在默认情况下，docker build 也会从这个目录下寻找名为 Dockerfile 的文件，将它作为 Dockerfile 内容的来源。如果我们的 Dockerfile 文件路径不在这个目录下，或者有另外的文件名，我们可以通过 -f 选项单独给出 Dockerfile 文件的路径。
* $ sudo docker build -t webapp:latest -f ./webapp/a.Dockerfile ./webapp

* $ sudo docker build -t webapp:latest ./webapp



* -f 
* -t 用它来指定新镜像的名称




* docker logs [OPTIONS] CONTAINER
  Options:
        --details        显示更多的信息
    -f, --follow         跟踪实时日志
        --since string   显示自某个timestamp之后的日志，或相对时间，如42m（即42分钟）
        --tail string    从日志末尾显示多少行日志， 默认是all
    -t, --timestamps     显示时间戳
        --until string   显示自某个timestamp之前的日志，或相对时间，如42m（即42分钟）

