const express = require("express");
const dotenv = require("dotenv");
// const graphqlHTTP = require("express-graphql");

const app = express();
dotenv.config();

// bind express with graphql
// app.use(
//   "/graphql",
//   graphqlHTTP({
//     // pass in a schema property
//   })
// );

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
