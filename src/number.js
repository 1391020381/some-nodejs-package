const inquirer = require('inquirer')
inquirer.prompt([ {
    type: 'number', 
    name: 'number', 
    message: 'How much do you need?', 
    default: 1
  }]).then((answers) => { 
    console.log('结果为:')
    console.log(answers)
  })
  