* 通过 core-js是一扇大门
1. 通过 core-js 我们可以窥见前端工程化的方方面面
2. core-js又和Babel深度绑定,因此学习core-js 也能帮助开发者更好理解babel生态,进而加深对前端生态的理解
3. 通过对core-js的解析,我们正好可以梳理前端一个极具特色的概念-polyfill（垫片/补丁）


* core-js工程一览
* core-js是一个由Lerna搭建的Monorepo风格的项目,在它的packages中,我们能看到五个相关的包
    - core-js 实现的基础垫片能力,是整个core-js的逻辑核心。可全局引入 也可单个引入
    - core-js-pure 提供不污染全局的垫片能力
    - core-js-compact 维护了按照 browserslist规范的垫片需求数据
    - core-js-builder 结合core-js-compact以及core-js,并利用webpack能力,根据需要打包出core-js代码
    - core-js-bundle


    # 寻找最佳Polyfill方案
    * babel-polyfill 结合 @babel/preset-env + useBuiltins（entry） + preset-env targets 


    * 如果某个业务代码中,并没有用到配置环境填充的polyfills,那么这些polyfills的引入依然出现了引用浪费的情况。

    * 除了在打包构建阶段植入polyfil以外,另一种思路是 '在线动态打补丁',这种方案以 Polyfill为代表


    * 从工程化的角度来说,一个趋于完美的polyfill设计应该满足的核心原则是按需还在补丁,这个按需加载主要包括两个方面:
        - 按照用户终端环境
        - 按照业务代码使用情况



    * core-js 和 Babel 生态绑定在一起，它们到底有什么联系，如何实现密切配合？

    * core-js 如何和 @babel/preset-env + useBuiltins（usage）配合，并利用 AST 技术，实现代码级别的按需引入？    