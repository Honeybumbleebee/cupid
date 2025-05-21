function submitForm() {
  alert("🎉 Thank you! Your registration has been submitted.");
  return false; // Prevent form submission
}

document.getElementById("darkToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
