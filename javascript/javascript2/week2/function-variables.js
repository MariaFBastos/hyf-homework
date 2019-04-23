//Array of Functions
let functionsArr = [
    function(){ console.log('<3 LOVE. (as array)')},
    function(){ console.log(':) SMILE. (as array)')},
    function(){ console.log('¤ SUN. (as array)')}
]


for (let x = 0; x < functionsArr.length; x++){
    functionsArr[x]();   
}


//Object of functions
let functionsObj = {
    logLove : function(){ console.log('<3 LOVE. (as array)')},
    logSmile: function(){ console.log(':) SMILE. (as array)')},
    logSun  : function(){ console.log('¤ SUN. (as array)')}
};

functionsObj.logLove();
functionsObj.logSmile();
functionsObj.logSun();


//Functions as variables
const logLove  = function(){ console.log('<3 LOVE. (as variable)')};
const logSmile = function(){ console.log(':) SMILE. (as variable)')};
const logSun   = function(){ console.log('¤ SUN. (as variable)')};


//Regular functions
function logLove(){ 
    console.log('<3 LOVE. (as variable)')
};
   
function logSmile(){
    console.log(':) SMILE. (as variable)')
};

function logSun(){ 
    console.log('¤ SUN. (as variable)')
};