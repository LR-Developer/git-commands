require('dotenv').config()

const clear = require('clear')
const chalk = require('chalk')
const figlet = require('figlet')

const ilc = require('./workflow/ilc')
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

        console.log('')

        if (answerA.clients[0] == 'ILC-Cubo') {
            // const result = await ilc.updateCubo('/home/lr-developer/ghr/git-da-salvacao', answerC.remotes[0], 'master')
            const result = await ilc.updateIlcCubo('/home/vagrant/estudos/git-da-salvacao', process.env.ILC_CUBO_REPO, process.env.ILC_CUBO_BRANCH_DESTINO)
        }


    } catch (error) {

        console.error(error)
    }
}

run()
