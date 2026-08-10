//your JS code here. If required.
const form = document.getElementById("voteForm");
const ageInput = document.getElementById("age");
const nameInput = document.getElementById("name");

function checkVotingAge(name, age) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age > 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = nameInput.value.trim();
  const age = ageInput.value.trim();

  if (name === "" || age === "") {
    alert("Please enter valid details.");
    return;
  }

  checkVotingAge(name, Number(age))
    .then((message) => {
      alert(message);
    })
    .catch((message) => {
      alert(message);
    });
});