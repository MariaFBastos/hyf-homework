function getWeekday (dateInput){
    var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var date = new Date(dateInput);
    var day = date.getDay();
    return weekdays[day];
}

getWeekday('Mar 16 2019');