const openBtn = document.querySelector(".open-nav");
const closeBtn = document.querySelector(".close-nav");
const navigation = document.querySelector(".navigation");

openBtn.addEventListener("click", (e) => {
  navigation.classList.add("navigation-open");
});
closeBtn.addEventListener("click", (e) => {
  navigation.classList.remove("navigation-open");
});
