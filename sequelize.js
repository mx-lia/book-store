const argon2 = require("argon2");
const Sequelize = require("sequelize");
const sequelizeConfig = require("./config/sequelize-config");
const sequelize = new Sequelize(
  sequelizeConfig.DB_NAME,
  sequelizeConfig.DB_USERNAME,
  sequelizeConfig.DB_PASSWORD,
  {
    host: sequelizeConfig.DB_HOST,
    port: sequelizeConfig.DB_PORT,
    dialect: sequelizeConfig.DB_DIALECT,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    define: {
      timestamps: false,
    },
  }
);

const Book = require("./models/book")(sequelize, Sequelize);
const BookCover = require("./models/book-cover")(sequelize, Sequelize);
const Author = require("./models/author")(sequelize, Sequelize);
const Publisher = require("./models/publisher")(sequelize, Sequelize);
const Genre = require("./models/genre")(sequelize, Sequelize);
const BookGenre = require("./models/book-genre")(sequelize, Sequelize);
const Customer = require("./models/customer")(sequelize, Sequelize);
const Order = require("./models/order")(sequelize, Sequelize);
const OrderDetail = require("./models/order-detail")(sequelize, Sequelize);
const FavouriteBook = require("./models/favourite-book")(sequelize, Sequelize);
const Review = require("./models/review")(sequelize, Sequelize);

Book.belongsTo(Author, {
  foreignKey: { name: "author_id", allowNull: false },
  onDelete: "cascade",
  onUpdate: "cascade",
});
Book.belongsTo(Publisher, {
  foreignKey: { name: "publisher_id", allowNull: false },
  onDelete: "cascade",
  onUpdate: "cascade",
});
Book.hasOne(BookCover, {
  foreignKey: { name: "book_isbn", allowNull: false },
  as: "cover",
  onDelete: "cascade",
  onUpdate: "cascade",
});

Book.belongsToMany(Genre, {
  foreignKey: { name: "book_isbn", allowNull: false },
  through: BookGenre,
  onDelete: "cascade",
  onUpdate: "cascade",
});
Genre.belongsToMany(Book, {
  foreignKey: { name: "genre_id", allowNull: false },
  through: BookGenre,
  onDelete: "cascade",
  onUpdate: "cascade",
});

Order.belongsTo(Customer, {
  foreignKey: { name: "customer_id", allowNull: false },
  onDelete: "cascade",
  onUpdate: "cascade",
});

Order.belongsToMany(Book, {
  foreignKey: { name: "order_id", allowNull: false },
  through: OrderDetail,
  onDelete: "cascade",
  onUpdate: "cascade",
});
Book.belongsToMany(Order, {
  foreignKey: { name: "book_isbn", allowNull: false },
  through: OrderDetail,
  onDelete: "cascade",
  onUpdate: "cascade",
});

Customer.belongsToMany(Book, {
  foreignKey: { name: "customer_id", allowNull: false },
  through: FavouriteBook,
  onDelete: "cascade",
  onUpdate: "cascade",
});
Book.belongsToMany(Customer, {
  foreignKey: { name: "book_isbn", allowNull: false },
  through: FavouriteBook,
  onDelete: "cascade",
  onUpdate: "cascade",
});

Review.belongsTo(Book, {
  foreignKey: { name: "book_isbn", allowNull: false },
  onDelete: "cascade",
  onUpdate: "cascade",
});
Review.belongsTo(Customer, {
  foreignKey: { name: "customer_id", allowNull: false },
  onDelete: "cascade",
  onUpdate: "cascade",
});

Customer.prototype.isValidPassword = async function (password) {
  const compare = this.password
    ? await argon2.verify(this.password, password)
    : null;
  return compare;
};

OrderDetail.afterCreate(async (details, options) => {
  let book = await Book.findOne({ where: { isbn: details.book } });
  book.availableQuantity -= details.amount;
  book.save();
});

/* sequelize
  .sync({ force: true })
  .then((result) => {})
  .catch((err) => console.log(err)); */

module.exports = {
  Book,
  Author,
  Publisher,
  Genre,
  BookGenre,
  Customer,
  Order,
  OrderDetail,
  BookCover,
  FavouriteBook,
  Review,
};
