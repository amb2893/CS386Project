///////////////////////////////
// VARIABLES
///////////////////////////////

// Preselected workouts
const bodyweight = {
  name: "Bodyweight Full-Body Workout",
  workouts: ["pushups", "squats", "lunges", "plank"],
  types: ["reps", "reps", "reps", "time"],
};
const cardio = {
  name: "Cardio Blast",
  workouts: ["burpies", "jumping-jacks", "squat-jumps", "mountain-climbers"],
  types: ["time", "time", "time", "time"],
};
const strength = {
  name: "Strength Training with Dumbbells",
  workouts: ["bicep-curls", "rows", "lunges", "flyes"],
  types: ["reps", "reps", "reps", "reps"],
};
const pushups = {
  name: "Pushups... A Lot of Them",
  workouts: ["pushups"],
  types: ["reps"],
};
const core = {
  name: "Core & Abs Burner",
  workouts: ["plank", "bicycle-crunches", "russian-twists", "leg-raises"],
  types: ["time", "time", "time", "time"],
};
const lower = {
  name: "Lower Body",
  workouts: ["squat", "calf-raises", "side-lunges"],
  types: ["reps", "reps", "reps"],
};
const stretch = {
  name: "Stretch & Mobility Routine",
  workouts: ["toe-touch", "hamstrings", "knee-to-chest-stretches"],
  types: ["time", "time", "time"],
};
const custom = {
  name: "Custom",
};

// get the whole workout container
const container = document.querySelector(".workout-selection-container");
// Use the area where the workout buttons where before
const buttonArea = document.querySelector(".workout-buttons");
let originalLayout;
if (window.location.pathname === "/SourceCode/workoutPlan.html")
  originalLayout = buttonArea.innerHTML;

// get headers
const header1 = document.querySelector(".size_title");
const header2 = document.querySelector(".size_sub_title");

let choice;
let curWorkout;
let curType;
let workoutType;
let timeRounds;

///////////////////////////////
// FUNCTIONS
///////////////////////////////

// // function to change and tranisitoin to new page layout
function pageTransition(title, subtitle, html) {
  return new Promise((resolve) => {
    // fade out
    container.classList.add("hide");

    // timeout for smooth transition
    setTimeout(function () {
      // change headers
      header1.textContent = title;
      header2.textContent = subtitle;

      // add html to document
      if (html) buttonArea.innerHTML = html;

      // fade back in
      container.classList.remove("hide");
      container.classList.add("reveal");

      resolve();
    }, 250);
    // have to remove it again for it to work continuously
    container.classList.remove("reveal");
  });
}

// PREVOIOUS WORKOING IMPLEMENTATION FOR CUSTOM WORKOUTS
// MIGHT COME BACK TO THIS IN THE FUTURE
// // function to handle custom workouts
// async function createCustomWorkout() {
//   // timeout for smooth transition
//   // change headers

//   const title = "Custom Workout";
//   const subtitle =
//     'In the area below, input each custom workout on its own line, followed by what type of workout it is, reps, or time. Workouts with multiple words should be combined with a "-"';

//   // add text area and submit button
//   const html = `<textarea class="custom-workout-input" rows="10" cols="50" placeholder="EX:\npushups reps\nrussian-twists time"></textarea>
//   <br>
//   <button class="form-submit-button"> Submit </button>`;

//   await pageTransition(title, subtitle, html);

//   // add an event listener to the submit button
//   document
//     .querySelector(".form-submit-button")
//     .addEventListener("click", function () {
//       // get the custom workout
//       choice = parseCustomWorkout();

//       // if choice is created, move to next part
//       if (choice) confirmQuestion("Custom");
//     });

//   // fade back in
//   container.classList.remove("hide");
//   container.classList.add("reveal");
// }

// // function to parse text for custom workouts
// function parseCustomWorkout() {
//   // get text from the text ares
//   const text = document.querySelector("textarea").value;
//   // separate by row
//   const rows = text.split("\n");
//   // create empty arrays for workouts and types
//   let workouts = [];
//   let types = [];
//   // for each row
//   for (const row of rows) {
//     // split into each word
//     const splitRow = row.trim().split(" ");
//     // make sure it has exactly 2 words
//     if (splitRow.length !== 2) {
//       header2.textContent =
//         "There should be exactly 1 workout and 1 workout type on each line";
//       workouts = [];
//       types = [];
//       return undefined;
//     }
//     // make sure the type is input correct
//     if (
//       splitRow[1].toLowerCase() !== "reps" &&
//       splitRow[1].toLowerCase() !== "time"
//     ) {
//       header2.textContent =
//         'Make sure to correctly include what type each workout is. "reps" or "time"';
//       workouts = [];
//       types = [];
//       return undefined;
//     }
//     // add to arrays
//     workouts.push(splitRow[0]);
//     types.push(splitRow[1]);
//   }
//   // return the custom workouts object
//   return { workouts, types };
// }

// function to confirm choice
function confirmQuestion(obj) {
  const chooseAgain = "Choose Workout Again";
  const title = "Confirm Choice";
  const subtitle = `You have chosen: ${obj.name}`;
  const html = `
    <button class="selectButton big-button" onclick="reminderQuestion()">Correct</button>
    <br>
    <button class="big-button" onclick="pageTransition('${chooseAgain}', '', originalLayout)">Change Answer</button>
  `;
  pageTransition(title, subtitle, html);

  choice = obj;
}

function navigateToCustom() {
  window.location.href = "customAlarm.html";
}
// function to ask how they want to workout
function reminderQuestion() {
  if (choice.name === "Custom") navigateToCustom();
  const title = "Choose Workout Style";
  const subtitle =
    "Choosing Interval will allow you set a specific time in-between each workout. Choosing round based will allow you to generate an exercise after every round (or whenever you have a break)";
  const html = `
    <button class="big-button" onclick="interval()">Interval</button>
    <br>
    <button class="big-button" onclick="rounds()">Round Based</button>
  `;
  pageTransition(title, subtitle, html);
}

// function to handle interval workouts
function interval() {
  workoutType = "interval";
  const title = "Interval Based Workouts";
  const subtitle =
    "Set a certain amount of time (in minutes) between every exercise";
  const html = `
      <div class="input-container">
        <input type="number" class="number-input" placeholder="Enter time" />
        <button class="timer-button" onclick="startTimer('interval', generateWorkout)">Start Timer</button>
      </div>
      <div class="timer">0:00</div>
  `;
  pageTransition(title, subtitle, html);
}

function playSound() {
  const sound = new Audio("../../media/timerEndSound.mp3");
  sound.play();
}

function startTimer(type, finishEvent, customTime = 10) {
  function tick() {
    const min = String(Math.trunc(time / 60)).padStart(1, 0);
    const sec = String(Math.trunc(time % 60)).padStart(2, 0);

    //in each call, print remaining time to UI
    timerDisplay.textContent = `${min}:${sec}`;

    // when 0 seconds, stop times and log out user
    if (time === 0) {
      playSound();
      clearInterval(timer);
      if (finishEvent) {
        finishEvent();
      }
    }

    // decrease time
    time--;
  }
  let time;
  const timerDisplay = document.querySelector(".timer");

  if (type === "interval") {
    const timerInput = document.querySelector(".number-input");
    const timerButton = document.querySelector(".timer-button");

    // get time desired
    time = timerInput.value;
    // convert to minutes
    time = time * 60;

    timerInput.classList.add("hide");
    timerButton.classList.add("hide");

    setTimeout(function () {
      timerInput.classList.remove("hide");
      timerButton.classList.remove("hide");
      timerInput.classList.add("reveal");
      timerButton.classList.add("reveal");
      setTimeout(function () {
        timerInput.classList.remove("reveal");
        timerButton.classList.remove("reveal");
      }, 250);
    }, time * 1000);
  } else {
    time = customTime * 6;
  }

  // call timer every second
  tick();
  const timer = setInterval(tick, 1000);
}

// function to handle roudn based workouts
async function rounds() {
  workoutType = "rounds";
  const title = "Round Based Workouts";
  const subtitle =
    "Input the game stat you would like your intensity to be based off of (for example how many eliminations you got in the last round). Click the start button to begin your workout";
  const html = ` 
  <div class="input-container">
    <input type="number" class="number-input" placeholder="Enter Stat" />
    <button class="rounds-button">Begin Workout</button>
  </div>`;
  await pageTransition(title, subtitle, html);
  document
    .querySelector(".rounds-button")
    .addEventListener("click", function () {
      const stat = document.querySelector(".number-input").value;
      stat
        ? generateWorkout(stat)
        : (header2.textContent = "Please input a stat");
    });
}

function generateWorkout(amount = 10) {
  {
    document.removeEventListener("keydown", handleSpaceBarTime);
    document.removeEventListener("keydown", handleSpaceBarReps);

    timeRounds = amount;
    getWorkout();

    const title = "Time to workout!";
    let subtitle;
    let html;
    if (curType === "time") {
      const totalTime = amount * 6;
      const mins = Math.floor(totalTime / 60);
      const secs = totalTime % 60;
      const timeDisplay = `${mins !== 0 ? `${mins} minutes` : " "} ${
        secs !== 0 ? ` ${secs} seconds.` : "."
      }`;
      subtitle = `Your workout is: ${curWorkout} for ${timeDisplay}`;
      html = `
      <p class="instructions">When you are ready press Space and your workout will begin in 5 seconds<br>You will then be taken back to the previous screen, waiting to start your next workout</p>
      <div class="timer">0:00</div>
      <div class="input-container">
        <button class="finish-workout" onclick=${
          workoutType === "rounds" ? "rounds()" : "interval()"
        }>Finish Workout</button>
        <button class="skip-button" onclick="generateWorkout(${amount})">Regenerate Workout</button>
      </div>
      `;
      document.addEventListener("keydown", handleSpaceBarTime);
    } else {
      subtitle = `Your workout is: ${amount} ${curWorkout}`;
      html = `
      <p class="instructions">Press Space when you are finished and you will then be taken back to the previous screen, waiting to start your next workout </p>
      <div class="input-container">
        <button class="finish-workout" onclick=${
          workoutType === "rounds" ? "rounds()" : "interval()"
        }>Finish Workout</button>
        <button class="skip-button" onclick="generateWorkout(${amount})">Regenerate Workout</button>
      </div>
      `;
      document.addEventListener("keydown", handleSpaceBarReps);
    }

    pageTransition(title, subtitle, html);
  }
}

function getWorkout() {
  const i = Math.trunc(Math.random() * choice.workouts.length);
  curWorkout = choice.workouts[i];
  curType = choice.types[i];
}

function handleSpaceBarTime(e) {
  {
    if (e.key === " ") {
      document.removeEventListener("keydown", handleSpaceBarTime);

      setTimeout(function () {
        startTimer(
          "workout",
          workoutType === "rounds" ? rounds : interval,
          timeRounds
        );
      }, 5000);
    }
  }
}

function handleSpaceBarReps(e) {
  {
    if (e.key === " ") {
      document.removeEventListener("keydown", handleSpaceBarReps);

      workoutType === "rounds" ? rounds() : interval();
    }
  }
}
// function
//call this function in the login function to
//alert the user at 10pm to get some rest
//issue #42
/*
function startTime() {
  const currentdate = new Date();
  let h = currentdate.getHours();

  //start the starttime function after 1 second to 
  //get a new time every second
  //may change to ever hour since
  //we are basing the time at the hour mark
  setTimeout(startTime, 1000);
  
  //Check for specific time if greater or equal to
  //10 pm
  if (h >= 22) 
  { 
  //alert the user
    alert("It's 10pm! Time to go to sleep!");
  }
}
*/

///////////////////////////////
// EVENT HANDLERS
///////////////////////////////

// add event listeners to buttons that will be used with the backend
// to save a persons body info
document.querySelectorAll(".questionsButtons").forEach((element) => {
  const questionParentNode = element.parentNode;
  const listNode = `.${questionParentNode.classList[0]}-button`;
  document.querySelectorAll(listNode).forEach((listElement) => {
    listElement.addEventListener("click", function () {
      document.querySelectorAll(listNode).forEach((listButton) => {
        listButton.classList.remove("selected");
      });
      this.classList.add("selected");
    });
  });
});


// register and login fail

// Check for query parameters and show alert if needed
window.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const message = urlParams.get("message");

  if (message === "exists") {
      alert("This email is already registered. Please log in.");
  }

  if (message === "user-not-found") {
      alert("User not found. Please register first.");
  }

  if (message === "invalid-credentials") {
      alert("Incorrect password. Please try again.");
  }
});

// contact confirmation
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const confirmation = document.getElementById("formConfirmation");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission
      
      // You can grab the values if you want to do something with them
      const name = document.getElementById("fname").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      // Clear the form
      form.reset();

      if (confirmation) {
        confirmation.style.display = "block";
      }
    });
  }
});