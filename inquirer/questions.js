const inquirer = require('inquirer')

module.exports = {

    askWhosTheClient: () => {

        const template = //[
            {
                type: 'checkbox',
                name: 'clients',
                message: 'Qual cliente?',
                choices: ['ILC-Cubo', 'ILC-Mirassol', 'SAT'],
                default: ['ILC-Cubo']
            }
        // ]
        return inquirer.prompt(template)
    },

    askEnvironment: () => {

        const template = [
            {
                type: 'checkbox',
                name: 'environments',
                message: 'Qual ambiente?',
                choices: ['HM', 'PRD'],
                default: ['HM']
            }
        ]
        return inquirer.prompt(template)
    },

    askRemote: () => {

        const template = [
            {
                type: 'checkbox',
                name: 'remotes',
                message: 'Qual repositório remoto?',
                choices: ['origin', 'cubo'],
                default: ['origin']
            }
        ]
        return inquirer.prompt(template)
    }

}
