# 合理使用 npm ci 和 npm install
* npm ci 要求项目中必须存在 package-lock.json或 npm-shrinkwrap.json
* npm ci 完全根据 package-lock.json安装依赖,这样可以保证整个开发团队都使用版本完全一致的依赖
* npm ci 会先删除项目中的node_modules然后重新安装
* npm ci 永远不会改变package.json和package-lock.json



* 对于应用项目,建议上传 package-locak.json到仓库,以保证依赖安装的一致性。
* pcakage-locak.json一般会显著加速依赖安装时间。这是因为package-lock.json 中已经缓存了每个包的具体版本和下载链接，你不需要再去远程仓库进行查询，即可直接进入文件完整性校验环节，减少了大量网络请求。



* `实际上,依赖是否被打包,完全取决于项目里是否被引入了该模块`。dependencies 和 devDependencies 在业务中更多的只是一个规范作用


# 最佳实操建议
1. 优先使用 npm v5。4.2以上的npm版本,以保证npm的最基本先进性和稳定性
2. 项目的第一次搭建使用 npm install安装依赖包,并提交packge.json packge-lock.json 而不提交 node_modules目录
3. 其他项目成员首次 checkout/clone项目代码后,执行一次 npm install安装依赖包
4. 对于升级依赖包的需求


* 依赖 npm update命令升级到最新的小版本
* 依靠npm install @ 升级大版本
* 也可以手动修改 package.json中版本号,并执行 npm install来升级版本
* 本地验证升级后最新版本无问题,提交新的package.json package-lock.json文件

    - 对于降级依赖包的需求：执行 npm install @ 命令，验证没问题后，提交新的 package.json、package-lock.json 文件。

    - 删除某些依赖：