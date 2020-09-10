const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "client/build")));

const table = {
   data: [
      {
         id: 1,
         firstName: "Tony",
         lastName: "Smith",
         password: "123",
         email: "t.smith@ukr.net",
         role: "developer",
         bDay: "3.4.84",
         phone: "+380111111111",
         country: "ireland",
      },
      {
         id: 2,
         firstName: "gil",
         lastName: "lopes",
         password: "132",
         email: "g.lopes@ukr.net",
         role: "hr",
         bDay: "2.5.82",
         phone: "+380222222222",
         country: "colombia",
      },
      {
         id: 3,
         firstName: "lily",
         lastName: "brock",
         password: "321",
         email: "l.brock@ukr.net",
         role: "secretary",
         bDay: "1.8.87",
         phone: "+380333333333",
         country: "Italy",
      },
      {
         id: 4,
         firstName: "ava",
         lastName: "cohen",
         password: "231",
         email: "a.cohen@ukr.net",
         role: "project-manager",
         bDay: "5.9.88",
         phone: "+380444444444",
         country: "luxemburg",
      },
   ],
};

app.get("/api/*", (req, res) => {
   res.send(table);
});
app.get("*", (req, res) => {
   res.sendfile(path.join(__dirname, "client/build", "index.html"));
});

app.listen(PORT, () => {
   console.log(`Server has been started on ${PORT} port...`);
});
