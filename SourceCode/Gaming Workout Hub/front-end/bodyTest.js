// add event listeners to buttons that will be used with the backend
// to save a persons body info
const container = document.querySelector(".text_family");
const buttonArea = document.querySelector(".bodyTestMain");
const header1 = document.querySelector(".size_title");
const header2 = document.querySelector(".h4-subtitle");
const submitButton = document.querySelector(".submitTestButton");

const questionButtons = document.querySelectorAll(".questionsButtons");
let selected;

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

// function to make sure each section has been selected
function validateNum() {
  selected = document.querySelectorAll(".selected");
  const numSelected = selected.length;
  return numSelected === questionButtons.length;
}

// function to get the answers from the test into an object
function getBodyTest() {
  const obj = {};

  selected.forEach((element) => {
    const className = element.className;
    const index = className.indexOf("-button");
    const name = className.slice(0, index);
    obj[`${name}`] = element.textContent;
  });

  return obj;
}

//function to generate a reccomeneded workout
function generateWorkout(obj) {
  const { userBodyTypeQuestion: cur, desiredBodyTypeQuestion: desired } = obj;
  let mult;
  let goal;
  switch (cur) {
    case "Underweight":
      mult = 1.25;
      break;
    case "Slightly Underweight":
      mult = 1.3;
      break;
    case "Slightly Overweight":
      mult = 1.4;
      break;
    case "Overweight":
      mult = 1.35;
      break;
    default:
      alert("Something went wrong.");
      return 0;
  }
  switch (desired) {
    case "Slim":
      goal = 15;
      break;
    case "Slim-Fit":
      goal = 20;
      break;
    case "Fit":
      goal = 30;
      break;
    case "Muscular":
      goal = 15;
      break;
    default:
      alert("Something went wrong.");
      return 0;
  }
  const amount = Math.round(goal * mult);
  const title = "Recommended workout for today";
  const html = `
  <div class="rec-workout">${amount} Pushups</div>
  <br>
  <div class="rec-workout">${amount} Squats</div>
  <br>
  <div class="rec-workout">${amount} Sit Ups</div>
  <br>
  `;
  pageTransition(title, "", html);
}

// function to handle submit button
// event listener to ensure single selection in each section
questionButtons.forEach((element) => {
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

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  if (validateNum()) {
    const selections = getBodyTest();
    generateWorkout(selections);
  } else {
    alert("Please select a choice for each question.");
  }
});
