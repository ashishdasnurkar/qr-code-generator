const form = document.getElementById("generate-form");
const qr = document.getElementById("qrcode");
// Button submit
const onGenerateSubmit = (e) => {
  e.preventDefault();
};

form.addEventListener("submit", onGenerateSubmit);
