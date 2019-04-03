let activities = [];

function addActivity(date, activity, duration){
    let newActivity = new Object;
    newActivity.date = date;
    newActivity.activity = activity;
    newActivity.duration = duration;
    activities.push(newActivity);
}

console.log(activities)

//Just to show status
/* let totalUsage = 0;
function showStatus(activities){  
    for (let i = 0; i < activities.length; i++){
        totalUsage = totalUsage + activities[i].duration;
    }
    console.log("You have added " + activities.length + " activities. They amount to " + totalUsage + " min. of usage");
} */

let totalUsage = 0;
function showStatus(activities){
    debugger
    for (let i = 0; i < activities.length; i++){
        totalUsage = totalUsage + activities[i].duration;
        
        if (activities.length === 0){
            return "Add some activities before calling showStatus";
        } else if (totalUsage > 120){
            console.log("You have reached your limit, no more smartphoning for you!");       
        } else {
            console.log("You have added " + activities.length + " activities. They amount to " + totalUsage + " min. of usage");
        }
    }
}

showStatus(activities);