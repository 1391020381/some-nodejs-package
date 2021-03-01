const inquirer = require('inquirer')
inquirer.prompt([ { 
    type: 'checkbox', 
    name: 'checkbox', 
    message: 'What do you like to drink?', 
    choices: ['black-tea', 'green-tea', 'milk-tea', new inquirer.Separator(), 'juice'], //可以在数组中插入分割符
    default: ['black-tea'] //这里需要用数组,不能像list一样用下标
  },
  {
    "name": "historyMode",
    "type": "confirm",
    "message": "Use history mode for router? \u001b[33m(Requires proper server setup for index fallback in production)\u001b[39m",
    "description": "By using the HTML5 History API, the URLs don't need the '#' character anymore.",
    "link": "https://router.vuejs.org/guide/essentials/history-mode.html"
  },
]).then((answers) => { 
    console.log('结果为:')
    console.log(answers)
  })
   