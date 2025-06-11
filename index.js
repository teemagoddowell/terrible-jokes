import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const websiteName = "Terrible Jokes";
const jokesURL = "https://v2.jokeapi.dev/joke/Programming";
const ccYear = new Date().getFullYear();

app.use(express.urlencoded({extended: true}));
app.use(express.static("public/"));


app.get("/", async (req, res)=> {
    try {
        let result = (await axios.get(jokesURL)).data;

        if (result.joke) {
            let jokes = result.joke;
            res.render("index.ejs", {ccYear, websiteName, jokes});
        }
        else {
            let jokes = result.setup + "<br>" + result.delivery;
            res.render("index.ejs", {ccYear, websiteName, jokes});
        }
        

    } catch (error) {
        console.log("Error: " + error.message);
    }
    
})

app.listen(port, ()=> {
    console.log(`Server is listening on port ${port}`);
});

