 * env preset提供了一个 'useBuiltIns'参数,当参数设置为 'usage'时,就会加载上面所提到的最后一个优化措施,也就是只包含你所需要的polyfill。配置如下:
 ```
{
  "presets": [
    [
      "@babel/env",
      {
        "targets": {
          "edge": "17",
          "firefox": "60",
          "chrome": "67",
          "safari": "11.1"
        },
        "useBuiltIns": "usage"
      }
    ]
  ]
}

 ```