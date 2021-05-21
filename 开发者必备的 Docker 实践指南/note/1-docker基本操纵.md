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