//

module.exports = (connection, Sequelize) => {
	const AccAccount = connection.define('accAccount', {
		id: {
			type: Sequelize.UUID,
			defaultValue: Sequelize.UUIDV4,
			primaryKey: true
		},
		code: {
			type: Sequelize.STRING(10),
		
		},
		name: {
			type: Sequelize.STRING,
		},
		nature:{
			type: Sequelize.INTEGER,
		},
		kind: {
			type: Sequelize.INTEGER,
		},
		treeId: {
			type: Sequelize.UUID,
		},
		configTableId: {
			type: Sequelize.INTEGER,
		}
	},
		{
			indexes: [
				{
					using: 'BTREE',
					fields: ['id']
				},
			]
		}
	)
	return AccAccount
}