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
    },
	
	generateGreet: function generateGreet() {
	const words = [
    'Agnóstico', 
    'Alvíssaras',
    'Balaústre',
    'Beneplácito',
    'Cornucópia',
    'Cuntatório',
    'Deletério',
    'Desasnado',
    'Empedernido',
    'Filantropo',
    'Filaucioso',
    'Hebdomadário',
    'Horrípilo',
    'Iconoclasta',
    'Idiossincrasia',
    'Inócuo',
    'Juvenilizante',
    'Kafkaesco',
    'Lancinante',
    'Loquaz',
    'Mendacioso',
    'Modorrento',
    'Numismática',
    'Odiento',
    'Ósculo',
    'Prognóstico',
    'Putrefato',
    'Quimera',
    'Quintessância',
    'Recôndito',
    'Rufião',
    'Sectário',
    'Sumidade',
    'Taciturno',
    'Ufanismo',
    'Urdidura',
    'Verossimilhança',
    'Vicissitude',
    'Vitupério',
    'Warrantagem',
    'Xaropear',
    'Xifópago',
    'Yanomami',
    'Zaragatoa',
    'Zeugma',
    'Zoomórfico',
	];
	const verbs = [
    'Agnóstico', 
    'Alvíssaras',
    'Balaústre',
    'Beneplácito',
    'Cornucópia',
    'Cuntatório',
    'Deletério',
    'Desasnado',
    'Empedernido',
    'Filantropo',
    'Filaucioso',
    'Graçolar',
    'Hebdomadário',
    'Horrípilo',
    'Iconoclasta',
    'Idiossincrasia',
    'Inócuo',
    'Juvenilizante',
    'Kafkaesco',
    'Lancinante',
    'Loquaz',
    'Mendacioso',
    'Modorrento',
    'Nitidificar',
    'Numismática',
    'Odiento',
    'Ósculo',
    'Prognóstico',
    'Putrefato',
    'Quimera',
    'Quintessância',
    'Recôndito',
    'Rufião',
    'Sectário',
    'Sumidade',
    'Taciturno',
    'Tergiversar',
    'Ufanismo',
    'Urdidura',
    'Verossimilhança',
    'Vicissitude',
    'Vitupério',
    'Warrantagem',
    'Xaropear',
    'Xifópago',
    'Yanomami',
    'Zaragatoa',
    'Zeugma',
    'Zoomórfico',
	];
const goodMorning = 'Bom dia meus';
const draw = (terms) => Math.floor(Math.random() * terms.length);
const makeRole = word => {
    if (word[word.length] === 'a') {
        return '${word}dores';
    } 
    return '${word.slice(0, word.length - 1)}adores'
};
const generate = () => {
    const verb = draw(verbs);
    let word = draw(words);
    const role = makeRole(verbs[verb]);
    return `${goodMorning} ${role} de ${words[word]}s`
};
return(generate());
    }
        
}
