let stopwatch;
let runningstate = 0; // 1 means the timecounter is running 0 means counter stopped
let stoptime = 0;
let startingtime;
let startstop = document.getElementById('startandstopbutton');
let stopclicktime;
let stoptimes = 0;
	
function timecounter(starttime){
    currentdate = new Date();
    stopwatch = document.getElementById('stopwatch');
    let timediff = currentdate.getTime() - starttime;

    if(runningstate == 0){
        timediff = timediff + stoptime
    }

    if(runningstate == 1){
      stopwatch.value = formattedtime(timediff);
      refresh = setTimeout('timecounter(' + starttime + ');',10);
    }

    else{
      window.clearTimeout(refresh);
      stoptime = timediff;
    }
}

function continuewatch(){
  if (runningstate == 0){
    runningstate = 1;
    startstop.value = 'Stop';
    continueclicktime = new Date().getTime() - stopclicktime;
    stoptimes += continueclicktime;
    timecounter(startingtime + stoptimes);
  }
}

function startandstop(){
    let startdate = new Date();
    let starttime = startdate.getTime();
    
    if(runningstate==0){
      startingtime = starttime;
      startstop.value = 'Stop';
      runningstate = 1;
      timecounter(starttime);
    }

    else{
      stopclicktime = new Date().getTime();
      startstop.value = 'Start';
      runningstate = 0;
    }
  }

function resetstopwatch(){
    stoptime = 0;
    stoptimes = 0;
    window.clearTimeout(refresh);

    if(runningstate == 1){
        let resetdate = new Date();
        let resettime = resetdate.getTime();
        timecounter(resettime);
    }

    else{
        stopwatch.value = "0:0:0:0";
    }
}

function formattedtime(unformattedtime){ 
    let decisec = Math.floor(unformattedtime/100) + '';
    let minute = Math.floor(unformattedtime/60000);
    let second = Math.floor(unformattedtime/1000) - 60 * minute;
    decisec = decisec.charAt(decisec.length - 1);
    let hour = Math.floor(minute/60) + '';
    second = second + '';
    minute = minute % 60 + '';


    return hour + ':' + minute + ':' + second + ':' + decisec;
}

function clearwatch(){
  document.getElementById('stopwatch').value = "0:0:0:0";
}

window.onload = clearwatch();
