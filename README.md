# GraphQL-React-Node
Client(React+Apollo), Server(NodeJS+GraphQL), Database(MongoDB)

--- USEFUL TIP ----
Hey guys, if you'd like to run both server and client at once you can use concurrently (https://www.npmjs.com/package/concurrently). 
After installing concurrently (`npm i concurrently -S`) on the server side, in my `/server/package.json` I have the following scripts:

  "scripts": {
    "client": "npm run start --prefix ../client",
    "server": "nodemon app.js",
    "dev": "concurrently \"npm run server\" \"npm run client\""
  }

Thus, when you type `npm run dev` it will start both your API and your React app in the same terminal/shell. Hope you find this useful!