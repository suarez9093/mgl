const openBtn = document.querySelector(".open-nav");
const closeBtn = document.querySelector(".close-nav");
const navigation = document.querySelector(".navigation");

openBtn.addEventListener("click", (e) => {
  navigation.classList.add("navigation-open");
});
closeBtn.addEventListener("click", (e) => {
  navigation.classList.remove("navigation-open");
});

function initMap() {
  // The location of Uluru
  var uluru = { lat: -15.87, lng: 100.9925 };
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({ position: uluru, map: map });
}
