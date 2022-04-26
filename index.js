const express = require ('express');
const app = express();
const PORT = 3000;
const path = require('path');
const {User} = require("./db/dbconnect.js");

app.listen(PORT, function (err) {
    if (err) console.log("Error in server setup");
    console.log("Server listening on Port 3000");
});

const userRouter = require('./routes/user.js')
app.use(express.json());
app.use('/user',userRouter)

app.get('/', function (req, res) {
    console.log("HTML page is showing")
    res.sendFile(path.join(__dirname, './views/page.html'));
})


app.get('/test', async (req, res) => {
    const userData = {
        id: 1118889,
        name: "Dragan",
        lname: "Grbic",
        bdate: "28.9.1997.",
        sex: "Muski",
        job: 1
    };
    try {
        await User.create(
            userData
        )
    }catch (e) {
        console.log(e)
    }

})
