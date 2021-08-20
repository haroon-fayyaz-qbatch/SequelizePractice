const db = require("../models/");

const User = db["User"];

const insertData = async (
  data = {
    name: "Haroon",
    email: "haroon@qbatch.com",
    age: 20,
    created_at: new Date(),
    updated_at: new Date(),
  }
) => {
  await User.create(data)
    .then((result) => {
      console.log(result.get({ plain: true }));
    })
    .catch((err) => {
      console.error(err);
    });
};

const main = async () => {
  await insertData();
};

main();
