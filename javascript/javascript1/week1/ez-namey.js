var firstWord = ['adventurous' , 'ambitious' , 'amusing' , 'brave' , 'bright' , 'calm' , 'careful' , 'creative' , 'decisive' , 'dynamic'];
var secondWord = ['association', 'company', 'corporation', 'establishment', 'institute', 'organization', 'group', 'team', 'clan', 'crew'];
const randomFirstWord = Math.floor(Math.random() * 10) + 0;
const randomSecondWord = Math.floor(Math.random() * 10) + 0;
var startupName = firstWord[randomFirstWord] + secondWord[randomSecondWord];
var newStartupName = "\"The startup: \""+startupName+"\" contains "+startupName.length+" characters\"";
console.log(newStartupName);