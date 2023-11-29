module.exports = {
    run: async () => {
        let tree = await DB.tree.findAll()
        if (tree.length == 0) {
            tree = [
                {}
            ];
            await DB.tree.bulkCreate(tree)
        }
    }
};