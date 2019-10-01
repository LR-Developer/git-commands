const git = require('simple-git/promise')
const chalk = require('chalk')
const CLI = require('clui')
const Spinner = CLI.Spinner

module.exports = {
    
    fetch: async (workDir, remote) => {
        
        const spinner = new Spinner('Estragando tudo. Aguarde...')
        spinner.start()

        try {

            const response = await git(workDir).fetch(remote)
            spinner.stop()
            console.log(chalk.green('✓ Fetch realizado!'))

        } catch (error) {

            console.error(error)

        }
    },

    checkout: async (workDir) => {

        const spinner = new Spinner('Estragando tudo. Aguarde...')
        spinner.start()

        try {

            await git(workDir).raw(
                [
                    'checkout',
                    'master'
                ]
            )

            spinner.stop()
            console.log(chalk.green('✓ Checkout realizado!'))

        } catch (error) {

            console.error(error)
        }

    },

    pull: async (workDir, remote, branch) => {

        const spinner = new Spinner('Estragando tudo. Aguarde...')
        spinner.start()

        try {

            const result = await git(workDir).pull(remote, branch)
            
            spinner.stop()
            console.log(chalk.green('✓ Pull realizado!'))

        } catch (error) {

            console.error(error)

        }

    },

    merge: async(workDir, remote, branchOrigem) => {

        const spinner = new Spinner('Estragando tudo. Aguarde...')
        spinner.start()

        try {

            const result = await git(workDir).raw(
                [
                    'merge',
                    '--no-ff',
                    remote + '/' + branchOrigem
                ]
            )

            spinner.stop()

            console.log('')

            return result
            
        } catch (error) {
            
            console.error(error)

        }

    }

}
