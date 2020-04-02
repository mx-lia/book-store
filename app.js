const express = require('express');
const app = express();

const { Book, Author, Publisher, Genre, BookGenre } = require('./sequelize');
