const git = require('../commands/git')

module.exports = {

    updateCubo: async (workDir, remote, branch) => {

        try {

            const fetch = await git.fetch(workDir, remote)
            const checkout = await git.checkout(workDir)
            const pull = await git.pull(workDir, remote, branch)

            console.log(pull)

        } catch (error) {

            console.error(error)

        }

    }

}
