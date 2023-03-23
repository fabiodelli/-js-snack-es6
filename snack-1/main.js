const automobili = [
    {
        marca: "Fiat",
        modello: "Panda",
        alimentazione: "Benzina"
    },
    {
        marca: "Ford",
        modello: "Fiesta",
        alimentazione: "Metano"
    },
    {
        marca: "Volkswagen",
        modello: "Golf",
        alimentazione: "Benzina"
    },
    {
        marca: "Renault",
        modello: "Clio",
        alimentazione: "Diesel"
    },
    {
        marca: "Toyota",
        modello: "Yaris",
        alimentazione: "Gpl"
    },
    {
        marca: "Opel",
        modello: "Corsa",
        alimentazione: "Benzina"
    },
    {
        marca: "Mercedes",
        modello: "Classe A",
        alimentazione: "Diesel"
    },
    {
        marca: "Audi",
        modello: "A3",
        alimentazione: "Benzina"
    },
    {
        marca: "BMW",
        modello: "Serie 1",
        alimentazione: "Diesel"
    },
    {
        marca: "Tesla",
        modello: "Model-Y",
        alimentazione: "Elettrica"
    }
];


const autoBenzina = automobili.filter(auto => auto.alimentazione === 'Benzina');
const autoDiesel = automobili.filter(auto => auto.alimentazione === 'Diesel');
const autoAlternative = automobili.filter(auto => auto.alimentazione !== 'Benzina' && auto.alimentazione !== 'Diesel');

console.log(autoAlternative,autoBenzina,autoDiesel);

