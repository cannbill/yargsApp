const yargs = require("yargs");
const Movie = require("./utils");

const app = (yargsObj) => {
    if (yargsObj.add) {
        const movie = new Movie(yargsObj.title, yargsObj.actor)
        movie.add();
        console.log(movie.list());
    } else if (yargsObj.addMulti) {
        const movie1 = new Movie(yargsObj.title1, yargsObj.actor1);
        const movie2 = new Movie(yargsObj.title2, yargsObj.actor2);
        movie1.add();
        movie2.add();
        console.log(movie1.list());
        console.log(movie2.list());
    } else {
        console.log("incorrect command");
    }
};
 
app(yargs.argv);
