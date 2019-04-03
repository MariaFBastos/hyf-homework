const seriesDurations = [
    {
      title: 'Game of thrones',
      days: 3,
      hours: 1,
      minutes: 0,  
    },
    {
      title: 'Friends',
      days: 3,
      hours: 14,
      minutes: 32,
    },
    {
      title: 'Orphan Black',
      days: 5,
      hours: 2,
      minutes: 22,
    }
  ]
  console.log(seriesDurations);

var timeConsumedAllSeries = 0;

for (let i=0; i < seriesDurations.length; i++){
    console.log(i);
    console.log(seriesDurations[i]);
    
    var currentSeries = (seriesDurations[i]);
    var totalMinutesSeries = ((currentSeries.days)*24)*60 + (currentSeries.hours)*60 + (currentSeries.minutes);
    var lifespanMinutes = ((80*365)*24)*60;
    var timeConsumed = (totalMinutesSeries * 100)/lifespanMinutes;
    var timeConsumedRound = Math.round(timeConsumed*100)/100;

    console.log(currentSeries.title + ' took ' + timeConsumedRound + '% of my life');

    timeConsumedAllSeries += timeConsumed
    
    var timeConsumedAllSeriesRound = Math.round(timeConsumedAllSeries*100)/100;

    console.log('In total that is ' + timeConsumedAllSeriesRound + '% of my life');
}




