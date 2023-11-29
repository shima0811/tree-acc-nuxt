module.exports = (connection, Sequelize) => {
	const AccTree = connection.define('accTree', {
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
			unique: {
				args: true,
				msg: 'این  نام قبلا استفاده شده است'
			}
		},
		parentId: {
			type: Sequelize.UUID,
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
	return AccTree
}