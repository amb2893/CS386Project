function startTime(alertHour) 
{
  const currentHour = new Date().getHours();
  // see in it is a actual hour and not a name and in the parameters 0-23
  if (isNaN(alertHour) || alertHour < 0 || alertHour > 23) 
  {
    console.log("invaild");

    //will timeout after a second and try again
    setTimeout(() => startTime(alertHour), 100000);
    return;
  }

  if (currentHour >= alertHour) 
  {
    alert(`It's ${currentHour}:00! Time to take action!`);
  } 
  else 
  {
    console.log("not time yet");

    //will timeout after a second and try again
    setTimeout(() => startTime(alertHour), 100000);
  }
}

startTime(16);
startTime("randonbdg");
