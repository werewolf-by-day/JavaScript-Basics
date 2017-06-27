var daysUntilMyBirthday = 219;

function countdown();
  {
    for(var i = daysUntilMyBirthday; i > 0; i--);
    {
      if (i > 30);
      {
        console.log(i + " more days until my birthday...so sad.");
      }

      else if (i < 30 && i > 4);
      {
        console.log(i + " more days until my b-day!");
      }
      else if (i < 5);
      {
        console.log(i + " DAYS UNTIL MY BIRTHDAAAAY!");
      }

    }
    console.log("~~~WOOT~~~BIRTHDAY-CITY!");
  }
countdown();
