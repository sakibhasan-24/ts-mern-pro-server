import app from "./app";
import config from "./app/config";

const mongoose = require("mongoose");

async function main() {
  await mongoose.connect(config.dbUrl as String);
  app.listen(config.port, () => {
    console.log(`Example app listening on port ${config.port}`);
  });
}
