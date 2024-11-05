const express = require('express');
const app = express();
const port = 3000;

// Home page route
app.get('/', (req, res) => {
   res.send('<h1>Hey Vikas just testing my pipeline!</h1>');
   });

//   // About page route
   app.get('/about', (req, res) => {
     res.send('<h1>Hello World from About Page!</h1>');
     });

     app.listen(port, () => {
       console.log(`App running at <http://localhost>:${port}`);
       });
