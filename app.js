const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true});

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please check your data, no name."]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favoriteFruit: fruitSchema
});

const Fruit = mongoose.model("Fruit", fruitSchema);  //It will be converted to plural. (fruits)
const Person = mongoose.model("Person", personSchema);

const fruit = new Fruit({ 
    name: "Apple",
    rating: 5,
    review: "Pretty good."
});

const pineapple = new Fruit({
    name: "Pineapple",
    rating: 6,
    review: "Summer vibes"
});

//pineapple.save();

const person = new Person({
    name: "Bahar",
    age: 48,
    favoriteFruit: pineapple

});

//person.save();

mongoose.connection.close();



/* 
const kiwi = new Fruit({
    name: "Kiwi",
    rating: 10,
    review: "Cool"
});

const orange = new Fruit({
    name: "Orange",
    rating: 4,
    review: "Too sour."
});

const banana = new Fruit({
    name: "Banana",
    rating: 9,
    review: "For gym"
});


Fruit.insertMany([kiwi,orange,banana], function(err) {
    if(err) {
        console.log(err);
    }
    else {
        console.log("All fruits are succesfully added to fruitsDB.");
    }
}); */

//fruit.save();
/*
Fruit.updateOne({_id:"62148f055d9a71c08ed14214"},{name: "Peach"}, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Succesfully updated.");
    }
});

Fruit.deleteOne({name:"Peach"}, function(err) { //Also deleteMany()
    if (err) {
        console.log(err);
    } else {
        console.log("Succesfully deleted.");
    }
});

Fruit.find(function(err, fruits) {
    if (err) {
        console.log(err);
    } else {

        fruits.forEach(function(fruit) {
            console.log(fruit.name);
        });
    }
});

*/