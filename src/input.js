const inquirer = require('inquirer')
inquirer.prompt([ {
    type: 'input', 
    name: 'size', 
    message: 'Select size: large, medium and small', 
    default: 'medium'
  }]).then((answers) => { 
    console.log('结果为:')
    console.log(answers)
  })