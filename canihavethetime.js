var hour = 4;
var minute = 10;
var period = "AM";

if (minute < 30  && minute > 0 && period == "AM")
  {
  console.log("It's just after " + hour + " in the morning");
  }
  else if(minute > 30 && period == "AM")
  {
  console.log("It's almost " + (hour+1) + " in the morning");
}

else if (minute < 30 && minute > 0 && period == "PM")
  {
  console.log("It's just after " + hour + " in the evening");
  }
  else if(minute > 30 && period == "PM")
  {
  console.log("It's almost " + (hour+1) + " in the evening");
}

else if (minute == 30 && period == "AM")
  {
  console.log("It's exactly " + hour + ":" + minute + " in the morning");
  }
  else if(minute == 30 && period == "PM")
  {
  console.log("It's exactly " + hour + ":" + minute + " in the evening");
}

else if (minute == 00 && period == "AM")
  {
  console.log("It's exactly " + hour + ":00 in the morning");
  }
  else if(minute == 00 && period == "PM")
  {
  console.log("It's exactly " + hour + ":00 in the evening");
}
