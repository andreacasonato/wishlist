const input = document.getElementById("input");
const button = document.getElementById("button");
const wishesDisplay = document.getElementById("wishes-display");

button.addEventListener("click", addWish);

// Also allow pressing Enter to add a wish
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addWish();
  }
});

function addWish() {
  const newWishText = input.value.trim();

  if (newWishText === "") {
    alert("Please enter a wish!");
    return;
  }

  // Clear the placeholder text when adding first wish
  if (
    wishesDisplay.children.length > 0 &&
    wishesDisplay.querySelector(".fa-file")
  ) {
    wishesDisplay.innerHTML = "";
  }

  // Create elements
  const wishItem = document.createElement("li");
  const iconsContainer = document.createElement("div");
  const doneIcon = document.createElement("i");
  const deleteIcon = document.createElement("i");

  // Set content and classes
  wishItem.textContent = newWishText;
  wishItem.classList.add("wish-item");
  iconsContainer.classList.add("icons-container");

  // Adding icons with proper classes
  doneIcon.classList.add("fa-solid", "fa-square-check", "done-icon");
  deleteIcon.classList.add("fa-solid", "fa-trash", "delete-icon");

  // Add event listeners to icons
  doneIcon.addEventListener("click", () => {
    wishItem.classList.toggle("completed");
  });

  deleteIcon.addEventListener("click", () => {
    wishItem.remove();

    // Show placeholder if no wishes left
    if (wishesDisplay.children.length === 0) {
      wishesDisplay.innerHTML = `
        <i class="fa-regular fa-file"></i>
        <p>No wishes here</p>
      `;
    }
  });

  // Build the structure
  iconsContainer.appendChild(doneIcon);
  iconsContainer.appendChild(deleteIcon);
  wishItem.appendChild(iconsContainer);
  wishesDisplay.appendChild(wishItem);

  // Clear input field
  input.value = "";
  input.focus(); // Keep focus on input for easy adding
}
