// Change text content dynamically
function changeText() {
    const textElement = document.getElementById("dynamic-text");
    textElement.textContent = "🎉 The text has been changed!";
  }
  
  // Modify CSS style via JavaScript
  function changeColor() {
    const styleElement = document.getElementById("style-text");
    styleElement.style.color = "crimson";
    styleElement.style.fontWeight = "bold";
  }
  
  // Add an element to the DOM
  function addElement() {
    const container = document.getElementById("element-container");
    if (!document.getElementById("new-item")) {
      const newElement = document.createElement("p");
      newElement.id = "new-item";
      newElement.textContent = "🌟 This is a new element added to the page!";
      newElement.style.marginTop = "10px";
      container.appendChild(newElement);
    }
  }
  
  // Remove the element from the DOM
  function removeElement() {
    const existing = document.getElementById("new-item");
    if (existing) {
      existing.remove();
    }
  }
  
