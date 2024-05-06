let persone = [
    { nome: 'Wayne Barnett', ruolo: 'Founder & CEO', immagine: 'angela-caroll-chief-editor.jpg' },
    { nome: 'Angela Caroll', ruolo: 'Chief Editor', immagine: 'angela-caroll-chief-editor.jpg' },
    { nome: 'Walter Gordon', ruolo: 'Office Manager', immagine: 'walter-gordon-office-manager.jpg' },
    { nome: 'Angela Lopez', ruolo: 'Social Media Manager', immagine: 'angela-lopez-social-media-manager.jpg' },
    { nome: 'Scott Estrada', ruolo: 'Developer', immagine: 'scott-estrada-developer.jpg' },
    { nome: 'Babarra Ramos', ruolo: 'Graphic Designer', immagine: 'barbara-ramos-graphic-designer.jpg' },
];

for (let i = 0; i < persone.length; i++) {
    const element = persone[i];
    for (let key in persone[i]) {
        console.log(key, persone[i][key])
    }
}
