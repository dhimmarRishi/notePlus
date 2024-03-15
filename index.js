const express = require('express')
const { router } = require('./routes/userauth')
const { userRouter } = require('./routes/user')
const { forLoggedUsers } = require('./middleware/auth')
// const { userRouter } = require('./routes/user')
const { setConnection } = require('./handlers/connectionHandler')
const bodyparser = require('body-parser')
const cookieParser = require('cookie-parser')
const port = 80;

app = express();
setConnection("mongodb://127.0.0.1:27017/noteUsers")

//express.bodyParser() is no longer bundled as part of express. You need to install it separately before loading:
urlencodedParser = bodyparser.urlencoded( { extended : true})

app.set('view engine' , 'ejs')
app.set('views' , 'views')
app.use(cookieParser())


// Seperately defing the parser while sending router
app.use('/' ,urlencodedParser , router)
app.use('/userPage' ,forLoggedUsers , userRouter)
app.use(express.static('public'))


app.listen(port , () => {
    console.log("Server running on port : " + port)
})

