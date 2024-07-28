import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import passport from 'passport';
import 'dotenv/config';
import stateRoutes from '../src/routes/stateRoutes';
import userRoutes from '../src/routes/userRoutes';
import './config/database';
import './config/passport';

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: false
  }));

app.use(passport.initialize());
app.use(passport.session());

app.use('/states', stateRoutes);
app.use('/users', userRoutes);


app.get('/',(req,res)=>{
  res.send('hi');
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});