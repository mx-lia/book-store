const Sequelize = require('sequelize');
const sequelizeConfig = require('./config/sequelize.json');

const sequelize = new Sequelize(sequelizeConfig.database, sequelizeConfig.username, sequelizeConfig.password, {
    host: sequelizeConfig.host,
    port: sequelizeConfig.port,
    dialect: sequelizeConfig.dialect,
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
const Author = require('./models/author')(sequelize, Sequelize);
const Publisher = require('./models/publisher')(sequelize, Sequelize);
const Genre = require('./models/genre')(sequelize, Sequelize);
const BookGenre = require('./models/book-genre')(sequelize, Sequelize);

Book.belongsTo(Author, {foreignKey: {name: 'author'}, as: 'fk_author'});
Book.belongsTo(Publisher, {foreignKey: {name: 'publisher'}, as: 'fk_publisher'});
Book.belongsToMany(Genre, {foreignKey: {name: 'genre_id'}, through: BookGenre, unique: false});
Genre.belongsToMany(Book, {foreignKey: {name: 'book_id'}, through: BookGenre, unique: false });

sequelize.sync({ force: true })
.then(() => {
    console.log(`Database & tables created!`)
});

module.exports = {
  Book,
  Author,
  Publisher,
  Genre,
  BookGenre
};