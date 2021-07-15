# Get的技能
1. 收集前端错误(原生 React Vue)
2. 编写错误上报逻辑
3. 利用Egg.js编写一个错误日志采集服务
4. 编写webpack插件自动上传sourcemap
5. 利用sourcemap还原压缩代码源代码位置
6. 利用Jest进行单元测试

# 工作流程
1. 收集错误
2. 上报错误
3. 代码上线打包将sourcemap文件上传至错误监控服务器
4. 发生错误时监控服务器接收错误并记录到日志中
5. 根据sourcemap和错误日志内容进行错误分析

# js常见异常
1. 运行时异常
2. 资源加载错误 js css image等。现在的web项目,往往依赖了大量的静态资源,而且一般也会有cdn存在。如果某个节点出现问题导致某个静态资源无法访问,就需要能够捕获这种异常并进行上报,方便第一时间解决问题。
3. 未处理的promsie错误
4. 异步请求错误(fetch与xhr)  window.addEventListener('unhandledrejection')

# 异常收集原理
* js异常的特点是,出现不会导致JS引擎崩溃最多只会终止当前执行的任务。
* try-catch
* window.onerror 最大的好处就是可以同步任务还是异步任务都可以捕获。 oneror返回值 onerror还有一个问题要注意  如果返回true 就不会被上抛了。不然控制台中还会看到错误日志
* window.addEventListener('error',()=>{})
* onerror无法捕获网络异常的错误
* 由于上面提到了addEventListener也能够捕获js错误，因此需要过滤避免重复上报，判断为资源错误的时候才进行上报。


```

window.addEventListener('error', event => (){ 
  // 过滤js error
  let target = event.target || event.srcElement;
  let isElementTarget = target instanceof HTMLScriptElement || target instanceof HTMLLinkElement || target instanceof HTMLImageElement;
  if (!isElementTarget) return false;
  // 上报资源地址
  let url = target.src || target.href;
  console.log(url);
}, true);


```

* async/await异常捕获


# 方案比较
 1. try/catch 同步方法
 2. onerror   同步方法/异步方法
 3. error事件监听     同步方法/异步方法/资源加载
 4. unhandlerejection    Promise

* 实际上我们可以将 unhandlerejection事件抛出的异常再次抛出就可以统一通过error事件进行处理

```

window.addEventListener("unhandledrejection", e => {
  throw e.reason
});
window.addEventListener('error', args => {
  console.log(
    'error event:', args
  );
  return true;
}, true);


```