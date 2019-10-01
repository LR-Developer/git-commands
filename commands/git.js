const git = require('simple-git/promise')
const chalk = require('chalk')
const CLI = require('clui')
const Spinner = CLI.Spinner

const spinner = new Spinner('Getting things done. Just wait bitch...')

module.exports = {

    status: async (workDir) => {

        try {

            const response = await git(workDir).status()

        } catch (error) {

            console.error(error)

        }
    },

    fetch: async (workDir, remote) => {

        spinner.start()

        try {

            const response = await git(workDir).fetch(remote)
            spinner.stop()
            return response

        } catch (error) {

            console.error(error)

        }
    },

    updateDevelopCubo: async (workDir) => {

        spinner.start()

        try {

            await git(workDir).raw(
                [
                    'checkout',
                    'master'
                ]
            )

            console.log(chalk.green('✓ Checkout realizado!'))

            const test = await git(workDir).pull('origin', 'master')

            spinner.stop()
            console.log(chalk.green('✓ Pull realizado!'))

            return test

        } catch (error) {

            console.error(error)

        }

    }

}
