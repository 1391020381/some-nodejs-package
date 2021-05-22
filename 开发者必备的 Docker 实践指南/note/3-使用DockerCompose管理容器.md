# 解决容器管理问题

* Docker Componse 多容器定义和运行软件
* Dockerfile是将容器内运行环境搭建固化下来
* DockerCompose可以理解为将多个容器运行的方式和配置固化下来




## Docker Compose的基本使用逻辑
1. 如果需要的话，编写容器所需镜像的 Dockerfile；( 也可以使用现有的镜像 )
2. 编写用于配置容器的 docker-compose.yml；
3. 使用 docker-compose 命令启动应用。



## 启动和停止
* docker-compose up -d
* docker-compose 命令默认会识别当前控制台所在目录内的 docker-compose.yml 文件，而会以这个目录的名字作为组装的应用项目的名称。如果我们需要改变它们，可以通过选项 -f 来修改识别的 Docker Compose 配置文件，通过 -p 选项来定义项目名。
* docker-compose down

* 更建议大家像容器使用一样对待 Docker Compose 项目，做到随用随启，随停随删。也就是使用的时候通过 docker-compose up 进行，而短时间内不再需要时，通过 docker-compose down 清理它。


## 容器命令
* docker-compose logs nginx



## 常用的 Docker Compose 配置项

```
version: "3"

services:

  redis:
    image: redis:3.2
    networks:
      - backend
    volumes:
      - ./redis/redis.conf:/etc/redis.conf:ro
    ports:
      - "6379:6379"
    command: ["redis-server", "/etc/redis.conf"]

  database:
    image: mysql:5.7
    networks:
      - backend
    volumes:
      - ./mysql/my.cnf:/etc/mysql/my.cnf:ro
      - mysql-data:/var/lib/mysql
    environment:
      - MYSQL_ROOT_PASSWORD=my-secret-pw
    ports:
      - "3306:3306"

  webapp:
    build: ./webapp
    networks:
      - frontend
      - backend
    volumes:
      - ./webapp:/webapp
    depends_on:
      - redis
      - database

  nginx:
    image: nginx:1.12
    networks:
      - frontend
    volumes:
      - ./nginx/nginx.conf:/etc/nginx/nginx.conf:ro
      - ./nginx/conf.d:/etc/nginx/conf.d:ro
      - ./webapp/html:/webapp/html
    depends_on:
      - webapp
    ports:
      - "80:80"
      - "443:443"

networks:
  frontend:
  backend:

volumes:
  mysql-data:



```