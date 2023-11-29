module.exports = {
    run: async () => {
        let account = await MODELS.User.findAll()
        if (account.length == 0) {
            account = [
                {
                    
                },
           
            ];
            await DB.account.bulkCreate(account)
        }
    }
};