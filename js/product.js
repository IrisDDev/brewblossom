// Purchase Amount Increment/Decrement Counter
(function () {
  const quantityContainer = document.querySelector(".quantity");
  const minusBtn = quantityContainer.querySelector(".minus");
  const plusBtn = quantityContainer.querySelector(".plus");
  const inputBox = quantityContainer.querySelector(".input-box");

  updateButtonStates();

  quantityContainer.addEventListener("click", handleButtonClick);
  inputBox.addEventListener("input", handleQuantityChange);

  function updateButtonStates() {
    const value = parseInt(inputBox.value);
    minusBtn.disabled = value <= 1;
    plusBtn.disabled = value >= parseInt(inputBox.max);
  }

  function handleButtonClick(event) {
    if (event.target.classList.contains("minus")) {
      decreaseValue();
    } else if (event.target.classList.contains("plus")) {
      increaseValue();
    }
  }

  function decreaseValue() {
    let value = parseInt(inputBox.value);
    value = isNaN(value) ? 1 : Math.max(value - 1, 1);
    inputBox.value = value;
    updateButtonStates();
    handleQuantityChange();
  }

  function increaseValue() {
    let value = parseInt(inputBox.value);
    value = isNaN(value) ? 1 : Math.min(value + 1, parseInt(inputBox.max));
    inputBox.value = value;
    updateButtonStates();
    handleQuantityChange();
  }

  function handleQuantityChange() {
    let value = parseInt(inputBox.value);
    value = isNaN(value) ? 1 : value;

    // Execute your code here based on the updated quantity value
    console.log("Quantity changed:", value);
  }
})();

// Star Ratings on Product Page
const stars = document.querySelectorAll(".star"); // All the star divs

const filledStarSVG = `<svg width="24" height="24" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="star"><path id="Vector" d="M30.7813 38C30.5182 38.001 30.2614 37.919 30.0477 37.7656L20 30.4812L9.95235 37.7656C9.73769 37.9213 9.47908 38.0047 9.2139 38.0037C8.94872 38.0028 8.69072 37.9175 8.4772 37.7602C8.26367 37.603 8.10569 37.3819 8.02609 37.1289C7.94649 36.876 7.94939 36.6043 8.03439 36.3531L11.9531 24.7461L1.79689 17.7812C1.57689 17.6305 1.41086 17.4134 1.32304 17.1617C1.23521 16.9099 1.23021 16.6366 1.30875 16.3818C1.38729 16.127 1.54527 15.9039 1.75959 15.7453C1.97391 15.5866 2.23336 15.5007 2.50001 15.5H15.0297L18.8109 3.86325C18.8924 3.61202 19.0513 3.39304 19.265 3.23774C19.4786 3.08243 19.7359 2.99878 20 2.99878C20.2641 2.99878 20.5214 3.08243 20.7351 3.23774C20.9487 3.39304 21.1076 3.61202 21.1891 3.86325L24.9703 15.5039H37.5C37.767 15.5037 38.027 15.5891 38.242 15.7474C38.4569 15.9058 38.6156 16.1288 38.6946 16.3838C38.7736 16.6389 38.7689 16.9125 38.6812 17.1646C38.5935 17.4168 38.4273 17.6342 38.207 17.7851L28.0469 24.7461L31.9633 36.35C32.0267 36.5378 32.0446 36.7381 32.0154 36.9342C31.9861 37.1304 31.9107 37.3167 31.7952 37.4779C31.6797 37.6391 31.5275 37.7705 31.3512 37.8613C31.1749 37.9521 30.9796 37.9996 30.7813 38Z" fill="gold"/></g></svg>`;

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    // When a star is clicked, fill that star and all the previous stars
    for (let i = 0; i <= index; i++) {
      stars[i].innerHTML = filledStarSVG; // Replace the star with the filled SVG
    }
    // And reset the remaining stars
    for (let i = index + 1; i < stars.length; i++) {
      stars[
        i
      ].innerHTML = `<ion-icon name="star-outline" class="star-icon"></ion-icon>`; // Empty star
    }
  });
});

// Product Images Swap
function changeImage(imageSrc) {
  // Get the main image element
  const featuredImage = document.getElementById("featured-image");

  // Update the src of the main image with the clicked thumbnail's image
  featuredImage.src = imageSrc;
}

// Add active class to the current button (highlight it)
var header = document.getElementById("optionGrind");
var btns = header.getElementsByClassName("main-btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
