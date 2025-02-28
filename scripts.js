function selectWorkout(workout) {
  alert("You selected: " + workout);
}

function customWorkout() {
  let workout = prompt("Enter your custom workout:");
  if (workout) {
    alert("You created: " + workout);
  }
}
// Code for bodytest.html

document.querySelectorAll(".questionsButtons").forEach((element) => {
  const questionParentNode = element.parentNode;
  const listNode = `.${questionParentNode.classList[0]}-button`;
  document.querySelectorAll(listNode).forEach((listElement) => {
    listElement.addEventListener("click", function () {
      document.querySelectorAll(listNode).forEach((listButton) => {
        listButton.classList.remove("selected");
      });
      this.classList.add("selected");
      console.log(this);
    });
  });
});
