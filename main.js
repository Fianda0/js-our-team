let persone = [
    {
        nome: 'Wayne Barnett', ruolo: 'Founder & CEO', immagine: '<img src="./img/wayne-barnett-founder-ceo.jpg">'
    },
    { nome: 'Angela Caroll', ruolo: 'Chief Editor', immagine: '<img src="./img/angela-caroll-chief-editor.jpg">' },
    { nome: 'Walter Gordon', ruolo: 'Office Manager', immagine: '<img src="./img/walter-gordon-office-manager.jpg">' },
    { nome: 'Angela Lopez', ruolo: 'Social Media Manager', immagine: '<img src="./img/angela-lopez-social-media-manager.jpg">' },
    { nome: 'Scott Estrada', ruolo: 'Developer', immagine: '<img src="./img/scott-estrada-developer.jpg">' },
    { nome: 'Babarra Ramos', ruolo: 'Graphic Designer', immagine: '<img src="./img/barbara-ramos-graphic-designer.jpg">' },
];

for (let i = 0; i < persone.length; i++) {
    const element = persone[i];
    for (let key in persone[i]) {
        console.log(key, persone[i][key])
        document.getElementById('membri').innerHTML += `<div>${persone[i][key]}</div>`
    }
}
