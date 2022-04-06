var greets = require('./greets');

module.exports = {
    getRandom: function getRandom(numberOfgreets) {
        var limit = numberOfgreets > greets.length ? greets.length : numberOfgreets;

        var out = new Array(limit);
        var greet;

        for (var i = 0; i < limit; i++) {
            do {
                greet = greets[Math.floor(Math.random() * greets.length)];
            } while (out.indexOf(greet) > -1);
            out[i] = greet;
        }
        
        return out;
    },

    getByID: function getByID(id) {
        for (var i = 0; i < greets.length; i++) {
            if (greets[i].id == id) {
                return greets[i];
            }
        }
        return null;
    },    

    getByCategory: function getByCategory(category, numberOfgreets) {

        var categorygreets = greets.filter(function (greet) {
            return greet.category === category;
        });

        var limit = numberOfgreets > categorygreets.length ? categorygreets.length : numberOfgreets;

        var out = new Array(limit);
        var greet;

        for (var i = 0; i < limit; i++) {
            do {
                greet = categorygreets[Math.floor(Math.random() * categorygreets.length)];
            } while (out.indexOf(greet) > -1);
            out[i] = greet;
        }
        
        return out;
    }
        
}