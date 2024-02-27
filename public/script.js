// squad names als button met squad id 
//personen met squad id 
//als er op de knop word gedrukt met een bepaald id, moet er voor dat id gezocht worden bij elk persoon. 
//for each persoon in array check: if persoon has id van de gedrukte knop. dan moet persoon.naam worden weergegeven. 

let squadnameButton = document.querySelector(".squadname");
let personList = document.querySelector(".ul-personen");
let person = document.querySelector(".li-persoon-item")



//  click event listener voor elke squadname button
squadnameButton.forEach(button => {
    button.addEventListener('click', showSquad);
});

function showSquad() {
    personList.forEach(person => {
        if (person.squad_id === squad.squad_id) {//als het squad id van de persoon overeeen komt met de gekozen squad: vissable (remove hidden)
            person.classList.remove('hidden'); //toon de persoon
        } else {
            person.classList.add('hidden'); //verberg de persoon
        }
        
    });
}
