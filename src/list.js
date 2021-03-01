const inquirer = require('inquirer')
inquirer.prompt([ {
    type: 'list', 
    name: 'list', 
    message: 'What do you like to drink?', 
    choices: ['black-tea', 'green-tea', 'milk-tea'],
    default: 1
  }]).then((answers) => { 
    console.log('结果为:')
    console.log(answers)
  })
  