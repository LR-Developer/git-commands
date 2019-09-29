const inquirer = require('inquirer')

module.exports = {

    askWhosTheClient : () => {

        const questions = [
            {
                type: 'checkbox',
                name: 'clients',
                message: 'Qual cliente?',
                choices: ['ILC', 'SAT'],
                default: ['ILC']
            }
        ]
        return inquirer.prompt(questions)
    }

}
