function whatToWear(temperature){
    if (temperature < 0) {
        return "use snow jacket";
    } else if (temperature < 5) {
        return "use heavy jacket";
    } else if (temperature < 10) {
        return "use wool coat";
    } else if (temperature < 20) {
        return "use light jacket";
    } else  {
        return "don't use any jacket";
    }  
}
whatToWear(-10)