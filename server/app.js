const express = require("express");
const dotenv = require("dotenv");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
dotenv.config();

// allow cross-origin requests
app.use(cors());

// connect to database
mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@nodejs-database.l1yfw2q.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
);
mongoose.connection.once("open", () => {
  console.log("connected to database");
});

// bind express with graphql
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
    // pass in a schema property
  })
);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
