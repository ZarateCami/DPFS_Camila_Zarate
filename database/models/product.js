const { validate } = require("uuid");

module.exports = (sequelize, DataTypes) => {

    const alias = 'Product';

    const cols = {
            id: {
                primaryKey: true,
                autoIncrement: true,
                type: DataTypes.INTEGER.UNSIGNED,
            },
            name: {
                type: DataTypes.STRING(255)
            },
            description: {
                type: DataTypes.TEXT,
            },
            image: {
                type: DataTypes.TEXT
            },
            category_id: {
                type: DataTypes.INTEGER,
                validate: {
                    isNumeric:true
                }
            },
            color_id: {
                type: DataTypes.INTEGER,
                validate: {
                    isNumeric:true
                }
            },
            price: {
                type: DataTypes.INTEGER.UNSIGNED
            },
    }

    const config = {
        tableName: 'products',
        timestamps: false
    }
    const Product = sequelize.define(alias, cols, config)

    return Product;

}