require("dotenv").config();
const Express = require("express")
const app = Express();
const dbConnection = require('./db')
const cors = require('cors');
app.use(require('./middleware/headers'));
app.use(cors())

const controllers = require('./controllers');

app.use(Express.json())
app.use('/user', controllers.userController);

// app.use(require("./middleware/validatte-jwtt"));
app.use("/journal", controllers.journalController)

dbConnection.authenticate()
    .then(()=> dbConnection.sync())
    .then(() => {
        app.listen(3000, () => {
            console.log(`[Server]: App is listening on 3000.`)
        })
    })
    .catch((err) => {
        console.log(`[Server]: Server crashed.  Error ${err}`)
    })



// app.listen(3000, () => {
//     console.log(`[Server]: App is listening on 3000.`)
// })


/* 
When we use require( ' dependency ' ) such as on line 1, we are importing and accessing dependencies we installed in our project. Our project's dependencies are housed in the . This is a great place to check for spelling errors.
When we use require( ' . /foldername/filename ' ) such as on line 5 to access information, we are following our file structure to walk through our various folders and access the correct file or function. This is another place to check for spelling errors.

*/