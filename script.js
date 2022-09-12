const defaultBtn = document.querySelector("#default-btn");
const customBtn = document.querySelector("#custom-btn");
const cancelBtn = document.querySelector("#cancel-btn");
const wrapper = document.querySelector(".wrapper");
const fileName = document.querySelector(".file-name");
const img = document.querySelector("img");

let regExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\$\+\~\_]+$/;

function defaultBtnActive() {
  defaultBtn.click();
}

defaultBtn.addEventListener("change", function () {
  const file = this.files[0];

  if (file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      const result = reader.result;
      img.src = result;

      wrapper.classList.add("active");
    }
  }

  if (this.value) {
    let valueStore = this.value.match(regExp);
    fileName.textContent = valueStore;
  }
})

cancelBtn.addEventListener("click", () => {
  img.src = "";
  wrapper.classList.remove("active");
})