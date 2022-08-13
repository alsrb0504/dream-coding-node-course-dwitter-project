import SQ, { Sequelize } from "sequelize";
import { sequelize } from "../db/database.js";
import { User } from "./auth.js";
const DataTypes = SQ.DataTypes;

const Tweet = sequelize.define("tweet", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});
Tweet.belongsTo(User);

const INCLUDE_USER = {
  attributes: [
    "id",
    "text",
    "createdAt",
    "userId",
    [Sequelize.col("user.name"), "name"],
    [Sequelize.col("user.username"), "username"],
    [Sequelize.col("user.url"), "url"],
  ],
  include: {
    model: User,
    attributes: [],
  },
};

const ORDER_DESC = {
  order: [["createdAt", "DESC"]],
};

export const getAll = async () => {
  return Tweet.findAll({
    ...INCLUDE_USER,
    ...ORDER_DESC,
  });
};

export const getByUsername = async (username) => {
  return Tweet.findAll({
    ...INCLUDE_USER,
    ...ORDER_DESC,
    include: {
      ...INCLUDE_USER.include,
      where: { username },
    },
  });
};

export const getById = async (id) => {
  return Tweet.findOne({
    where: { id },
    ...INCLUDE_USER,
  });
};

export const create = async (text, userId) => {
  return Tweet.create({ text, userId }) //
    .then((data) => getById(data.dataValues.id));
};

export const update = async (id, text) => {
  return Tweet.findByPk(id, INCLUDE_USER) //
    .then((tweet) => {
      tweet.text = text;
      return tweet.save();
    });
};

export const remove = async (id) => {
  return Tweet.findByPk(id) //
    .then((tweet) => tweet.destroy());
};
