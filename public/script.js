// squad names als button met squad id 
//personen met squad id 
//als er op de knop word gedrukt met een bepaald id, moet er voor dat id gezocht worden bij elk persoon. 
//for each persoon in array check: if persoon has id van de gedrukte knop. dan moet persoon.naam worden weergegeven. 

let squadnameButton = document.querySelectorAll(".squadname");
let personList = document.querySelector(".ul-personen");
let person = document.querySelectorAll  (".li-persoon-item");

let sortFilter = document.querySelector('#filter');
let names = document.querySelectorAll('a-persoon')
console.log(names)





//  click event listener voor elke squadname button
squadnameButton.forEach(button => {
    console.log('button works')
    button.addEventListener('click', showSquad);
});

function showSquad() {
    console.log("function gets called")
    personList.forEach(person => {
        if (person.squad_id === squad.squad_id) {//als het squad id van de persoon overeeen komt met de gekozen squad: vissable (remove hidden)
            person.classList.remove('hidden'); //toon de persoon
        } else {
            person.classList.add('hidden'); //verberg de persoon
        }
        
    });
}

