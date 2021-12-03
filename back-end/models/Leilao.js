const connection = require('./connection');
const { ObjectId } = require("mongodb");

const getAll = () =>
  connection().then((db) => db.collection("products").find({}).toArray());

  const increaseBids = (id) =>
  connection().then((db) =>
    db
      .collection("products")
      .updateOne({ _id: ObjectId(id) }, { $inc: { bid: 5 } })
  );

  const getById = (id) =>
  connection().then((db) =>
    db.collection("products").findOne({ _id: ObjectId(id) })
  );

module.exports = {
  getAll,
  increaseBids,
  getById,
};
