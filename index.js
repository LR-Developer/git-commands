const clear = require('clear')
const chalk = require('chalk')
const figlet = require('figlet')

const git = require('./commands/git')
const inquirer = require('./inquirer')

clear()
console.log(
    chalk.white(
        figlet.textSync('Jesus Flow', { horizontalLayout: 'full' })
    )
)

const run = async () => {

    try {
        const answer = await inquirer.askWhosTheClient()

        if (!answer.clients.length) {
            console.log(chalk.red('x Escolha um cliente, ow animal!'))
            process.end()
        }

        if (answer.clients[0] == 'ILC') {
            const result = await git.updateDevelopCubo('/home/lr-developer/ghr/git-da-salvacao')
            console.log(chalk.green('✓ Pull realizado!'))
            console.log(result)
        }

    } catch (error) {

    }
}

run()
