const express = require('express');
const connectedDB = require('./config/dataBase');
const cors = require('cors');


//make server
const app = express();


//conect DB
connectedDB();

//Express.json
app.use(express.json({ extended: true }));
app.use(cors());

//PORT app
const PORT = process.env.PORT || 4000;

//Import route user
app.use('/api/users' , require( './routes/user' ));
app.use('/api/auth' , require( './routes/auth' ));
app.use('/api/caategory',require('./routes/category'));

//start app
app.listen( PORT, () =>{
    console.log(`Server on port ${PORT}`);
}); 