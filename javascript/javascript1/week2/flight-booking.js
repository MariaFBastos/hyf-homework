function getFullname(firstname, surname){
	return firstname + ' ' + surname;
}
var fullname1 = getFullname('Maria', 'Bastos');
var fullname2 = getFullname('Susane', 'Antunes');

function getFullname(firstname, surname, useFormalName){
    if (useFormalName===true) {
        return('Lord ' + firstname + ' ' + surname);
      } else {
        return(firstname + ' ' + surname);
      }
}
getFullname('Maria', 'Bastos', false);
