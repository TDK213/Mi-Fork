//Archivo principal el cual arranca el servidor express
const express =require('express');
const morgan = require('morgan');

const rolesRoutes = require('./routes/roles.routes');
const rolesExercise = require('./routes/exercise.Routes');
const ExercisesRecords = require('./routes/exerciseHistory.Routes');



const app = express();

app.use(morgan('dev'))

app.use(express.json())

app.use(rolesRoutes);
app.use(rolesExercise);
app.use(ExercisesRecords);


app.listen(3000)
console.log('Sever port: 3000')