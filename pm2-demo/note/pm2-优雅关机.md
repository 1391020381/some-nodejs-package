# 优雅关机
* https://github.com/shipengqi/PM2-docs-Zh-CN/blob/master/best_practices/graceful_shutdown.md
* 一次优雅的关机,你的应用必须经过的5个步骤
    - 收到stop的通知
    - 请求负载均衡器不再接受请求
    - 完成所有正在进行的请求
    - 释放所有资源（数据库 队列）
    - 退出