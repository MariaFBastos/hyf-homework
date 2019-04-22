//List of spirit animals
let animals = ['Hedgehog', 'Red Panda','Hummingbird','Cougar (Mountain Lion)','Snow Leopard','Panther','Owl','Shark','Butterfly','Cheetah','Giraffe','Raccoon']

let result = '';
let inputValue = '';

function generateUserName(){
    inputValue = document.getElementById('userName').value;    

    let existingAnimal = document.getElementById('existingAnimal');
    let newAnimal      = document.getElementById('newAnimal');
    
    animal1 = animals[Math.floor(Math.random()*animals.length)];
    animal2 = animals[Math.floor(Math.random()*animals.length)];
    
    //If new animal radio is checked we show a new spirit animal by getting 2 random values from the array
    if (newAnimal.checked && inputValue != ""){
        result = inputValue + ' - ' + animal1 + '-' + animal2
    //if is existing animal, we just pick 1 random animal from the array.    
    } else if(existingAnimal.checked && inputValue != "") {

        result = inputValue + ' - ' + animal1 
    } else {
        result = 'Please insert a name and/or check one of the options above.'
    }
    document.getElementById('load').innerHTML = result;
}
document.getElementById('generate').addEventListener('click', generateUserName);