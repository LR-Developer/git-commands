const git = require('simple-git/promise')
const chalk = require('chalk')
const CLI = require('clui')
const Spinner = CLI.Spinner

module.exports = {

    status: async (workDir) => {

        try {

            const response = await git(workDir).status()

        } catch (error) {

            console.error(error)

        }
    },

    updateDevelopCubo: async (workDir) => {

        const status = new Spinner('Getting things done. Just wait bitch...')
        status.start()

        try {

            await git(workDir).raw(
                [
                    'checkout',
                    'master'
                ]
            )            
            
            console.log(chalk.green('✓ Checkout realizado!'))

            const test = await git(workDir).pull('origin', 'master')
            return test
            
        } catch (error) {
            
            console.error(error)
            
        } finally {
            status.stop()    
        }

    }

}
