const express = require('express'),
    mongoose = require('mongoose'),
    dotenv = require('dotenv'),
    cors = require('cors');

const router = require('./router/home');

dotenv.config();

const app = express();
app.use(express.urlencoded({extended:false}));
app.use(cors());
app.use(express.json());

app.use(router);
app.use('/',(req,res) => res.status(404).json({err:"risorsa non trovata"}));

mongoose.connect(process.env.DB_URI)
.then(()=>{
    console.log("connessione al DB effettuata");
    app.listen(process.env.PORT || 3001 , ()=>console.log("applicazione in ascolto"));
}
)


app.set("view engine", "ejs");