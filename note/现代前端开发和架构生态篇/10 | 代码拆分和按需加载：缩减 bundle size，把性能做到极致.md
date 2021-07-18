* 按需加载表示代码模块在交互需要时,动态引入;而按需打包针对第三方业务库,及业务模块,只打包真正在运行时可能需要的代码


* 按需打包的概念和实施方法,目前按需打包一般通过两种方式进行:
1. 使用ES Module支持的Tree Shaking方案,在使用构建工具打包时,完成按需打包
2. 使用以 babel-plugin-import为主的Babel插件,实现自动按需打包。

# Tree Shaking实现按需打包


```
import { Button } from 'antd';

```
* 如果组件库提供啦ES Module版本,并开启了TreeShaking,我们就可以通过“摇树”特性，将不会被使用的代码在构建阶段移除。