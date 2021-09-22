const light = document.querySelector(".light");
const dark = document.querySelector(".dark");
const stayleSheet = document.getElementById("style-sheet")
light.addEventListener("click", function(){
    stayleSheet.setAttribute("href", "light-theme.css")
})
dark.addEventListener("click", function(){
    stayleSheet.setAttribute("href", "style.css")
})