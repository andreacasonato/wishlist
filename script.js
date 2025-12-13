const input = document.getElementById("input");
const button = document.getElementById("button");
const wishesDisplay = document.getElementById("wishes-display");

button.addEventListener("click", () => {
  const newWishText = input.value; // save text user typed

  if (newWishText.trim() === "") {
    alert("Please enter a wish!");
    return; // stop function if input empty
  }

  wishesDisplay.innerHTML = ""; // clear placeholder item

  const wishItem = document.createElement("div");
  wishItem.textContent = newWishText;

  wishesDisplay.appendChild(wishItem); // attach new wish to the display container

  input.value = ""; // clear input field
});
