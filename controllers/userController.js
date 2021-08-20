const db = require("../models/");

const User = db["User"];

const insertData = async (
  data = {
    name: "Ahmad",
    email: "ahmad@qh.com",
    age: 42,
    created_at: new Date(),
    updated_at: new Date(),
  }
) => {
  User.create(data)
    .then((result) => {
      console.log("My Result: ", result.get({ raw: true }));
    })
    .catch((err) => {
      // console.error(err);
    });
};

const getData = async () => {
  User.scope("old")
    .findAll({ raw: true })
    .then((result) => {
      console.log(result);
    });
};

const main = async () => {
  await insertData();
  // await getData();
};

main();
