const popup = document.getElementById("popup");
const popupImage = document.getElementById("popupImage");
const popupTitle = document.getElementById("popupTitle");
const popupText = document.getElementById("popupText");

const closeBtn = document.getElementById("closePopup");

document.querySelectorAll(".openPopup").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    const img = this.querySelector("img");

    let imageSrc = img.src;

    // se for imagem de aviso, usa o href do link
    if (img.src.includes("contentwarning.png")) {
      imageSrc = this.href;
    }

    popupImage.src = imageSrc;

    popupTitle.textContent = img.alt;

    popup.style.display = "flex";
  });
});

closeBtn.addEventListener("click", function() {
  popup.style.display = "none";
});

popup.addEventListener("click", function(e) {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});