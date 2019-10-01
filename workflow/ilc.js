const git = require('../commands/git')

module.exports = {

    updateIlcCubo: async (workDir, remote, branch) => {

        try {

            const fetch = await git.fetch(workDir, remote)
            const checkout = await git.checkout(workDir)
            const pull = await git.pull(workDir, remote, branch)
            const merge = await git.merge(workDir, remote, 'merge-com-no-ff')

            console.log(merge)

        } catch (error) {

            console.error(error)

        }

    }

}
