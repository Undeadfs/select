const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const searchBox = document.querySelector(".search-box input");
const selectBox = document.querySelector(".select-box")
const optionsList = document.querySelectorAll(".option");

document.addEventListener("click",function(event){
  if (event.target.closest(".select-box")) {
    return true
  } else {
    optionsContainer.classList.remove("active")
}
});

// for (let i = 0 ; i < optionsList.length; i++){
//   optionsList[i].addEventListener("click",function() {
//     (document.querySelector(".color-change")) ? document.querySelector(".color-change").classList.remove("color-change") : '';
//     optionsList.classList.add("color-change");
//   });
// }

optionsList.forEach(item => {
  item.addEventListener("click",function(){
   if(document.querySelector(".color-change")) {
     document.querySelector(".color-change").classList.remove("color-change")
    };
    item.classList.add("color-change");
  })
 })

document.addEventListener("keydown",function(e){
  if(e.key == "Escape")
  optionsContainer.classList.remove("active")});

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");

  searchBox.value = "";
  filterList("");

  if (optionsContainer.classList.contains("active")) {
    searchBox.focus();
  }
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});

searchBox.addEventListener("keyup", function(e) {
  filterList(e.target.value);
});

const filterList = searchTerm => {
  searchTerm = searchTerm.toLowerCase();
  optionsList.forEach(option => {
    let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
    if (label.indexOf(searchTerm) != -1) {
      option.style.display = "block";
    } else {
      option.style.display = "none";
    }
  });
};

