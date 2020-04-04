const Sequelize = require('sequelize');
const sequelizeConfig = require('./config/sequelize-config');

const sequelize = new Sequelize(sequelizeConfig.DB_NAME, sequelizeConfig.DB_USERNAME, sequelizeConfig.DB_PASSWORD, {
    host: sequelizeConfig.DB_HOST,
    port: sequelizeConfig.DB_PORT,
    dialect: sequelizeConfig.DB_DIALECT,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    define: {
        timestamps: false
    }
});

const Book = require('./models/book')(sequelize, Sequelize);
const BookCover = require('./models/book-cover')(sequelize, Sequelize);
const Author = require('./models/author')(sequelize, Sequelize);
const Publisher = require('./models/publisher')(sequelize, Sequelize);
const Genre = require('./models/genre')(sequelize, Sequelize);
const BookGenre = require('./models/book-genre')(sequelize, Sequelize);
const Customer = require('./models/customer')(sequelize, Sequelize);
const Order = require('./models/order')(sequelize, Sequelize);
const OrderDetail = require('./models/order-detail')(sequelize, Sequelize);

Book.belongsTo(Author, {foreignKey: {name: 'author', allowNull: false}, as: 'fk_author', onDelete: 'cascade'});
Book.belongsTo(Publisher, {foreignKey: {name: 'publisher', allowNull: false}, as: 'fk_publisher', onDelete: 'cascade'});
Book.belongsToMany(Genre, {foreignKey: {name: 'book'}, through: BookGenre, unique: false, onDelete: 'cascade', onUpdate: 'cascade'});
Genre.belongsToMany(Book, {foreignKey: {name: 'genre'}, through: BookGenre, unique: false, onDelete: 'cascade', onUpdate: 'cascade'});
Order.belongsTo(Customer, {foreignKey: {name: 'customer', allowNull: false}, as: 'fk_customer', onDelete: 'cascade'});
Order.belongsToMany(Book, {foreignKey: {name: 'order'}, through: OrderDetail, unique:false, onDelete: 'cascade', onUpdate: 'cascade'});
Book.belongsToMany(Order, {foreignKey: {name: 'book'}, through: OrderDetail, unique:false, onDelete: 'cascade', onUpdate: 'cascade'});
Book.hasOne(BookCover, {foreignKey: {name: 'book', allowNull: false, unique: true}, as: 'fk_book', onDelete: 'cascade'});

/* sequelize.sync({ force: true })
.then(() => {
    console.log(`Database & tables created!`)
}); */

module.exports = {
  Book,
  Author,
  Publisher,
  Genre,
  BookGenre,
  Customer,
  Order,
  OrderDetail
};