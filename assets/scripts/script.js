let toggleBtn;
let bigWrapper;
const header = document.querySelector("header");

function declear() {
  toggleBtn = document.querySelector("#toggle-btn");
  bigWrapper = document.querySelector(".big-wrapper");
  toggleBtn.addEventListener("click", toggleAnimation);
}

let dark = false;

declear();

function toggleAnimation() {
  // Clone Body
  dark = !dark;
  let clone = bigWrapper.cloneNode(true);
  console.log(person);
  if (dark) {
    clone.classList.remove("light");
    clone.classList.add("dark");
  } else {
    clone.classList.remove("dark");
    clone.classList.add("light");
  }
  clone.classList.add("copy");
  header.appendChild(clone);

  clone.addEventListener("animationend", () => {
    bigWrapper.remove();
    clone.classList.remove("copy");
    declear();
  });
}

toggleBtn.addEventListener("click", toggleAnimation);
