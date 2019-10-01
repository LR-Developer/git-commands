const clear = require('clear')
const chalk = require('chalk')
const figlet = require('figlet')

const git = require('./commands/git')
const questions = require('./inquirer/questions')

clear()
console.log(
    chalk.white(
        figlet.textSync('Jesus Flow', { horizontalLayout: 'full' })
    )
)

const run = async () => {

    try {
        const answerA = await questions.askWhosTheClient()

        if (!answerA.clients.length) {
            console.log(chalk.red('x Escolha um cliente, ow animal!'))
            process.end()
        }

        const answerB = await questions.askEnvironment()

        if (!answerB.environments.length) {
            console.log(chalk.red('x Escolha um ambiente, ow animal!'))
            process.end()
        }

        const answerC = await questions.askRemote()

        if (!answerC.remotes.length) {
            console.log(chalk.red('x Escolha um repositório, ow animal!'))
            process.end()
        }

        if (answerA.clients[0] == 'ILC' && answerB.environments[0] == 'HM' && answerC.remotes[0] == 'origin') {
            const result = await git.updateDevelopCubo('/home/lr-developer/ghr/git-da-salvacao')
            console.log(result)
        }


    } catch (error) {

    }
}

run()
