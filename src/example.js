const inquirer = require('inquirer')
const questions = [
    {
      "name": "features",
      "message": "Check the features needed for your project:",
      "pageSize": 10,
      "type": "checkbox",
      "choices": [
        {
          "name": "Babel",
          "value": "babel",
          "short": "Babel",
          "description": "Transpile modern JavaScript to older  versions (for compatibility)",
          "link": "https://babeljs.io/",
          "checked": true
        },
        {
          "name": "Router",
          "value": "router",
          "description": "Structure the app with dynamic pages",
          "link": "https://router.vuejs.org/"
        },
        {
          "name": "Vuex",
          "value": "vuex",
          "description": "Manage the app state with a centralized store",
          "link": "https://vuex.vuejs.org/"
        },
        {
          "name": "Linter / Formatter",
          "value": "linter",
          "short": "Linter",
          "description": "Check and enforce code quality with ESLint or Prettier",
          "link": "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",
          "checked": true
        }
      ]
    },
    {
      "name": "historyMode",
      "type": "confirm",
      "message": "Use history mode for router? \u001b[33m(Requires proper server setup for index fallback in production)\u001b[39m",
      "description": "By using the HTML5 History API, the URLs don't need the '#' character anymore.",
      "link": "https://router.vuejs.org/guide/essentials/history-mode.html"
    },
    {
      "name": "eslintConfig",
      "type": "list",
      "message": "Pick a linter / formatter config:",
      "description": "Checking code errors and enforcing an homogeoneous code style is recommended."
    },
    {
      "name": "lintOn",
      "message": "Pick additional lint features:",
      "type": "checkbox",
      "choices": [
        {
          "name": "Lint on save",
          "value": "save",
          "checked": true
        },
        {
          "name": "Lint and fix on commit",
          "value": "commit"
        }
      ]
    }
  ]


  inquirer.prompt(questions).then((answers) => { console.log('结果为:',answers)})