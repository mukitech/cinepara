var overlay = document.querySelector(".overlay")
var popupbox = document.querySelector(".popup-box")
var addbutton = document.getElementById("add-pop")


addbutton.addEventListener("click",function(){
    overlay.style.display ="block"
    popupbox.style.display="block"
})



var cancel = document.getElementById("cancel")


cancel.addEventListener("click",function(event){
    event.preventDefault()
    overlay.style.display ="none"
    popupbox.style.display="none"
})



var container = document.querySelector(".container")
var addmovie = document.getElementById("add-movie")
var movieinput = document.getElementById("movie-input")
var directorinput = document.getElementById("director-input")
var moviedescription = document.getElementById("movie-description")


addmovie.addEventListener("click",function(event){
    event.preventDefault()
    var div =document.createElement("div")
    div.setAttribute("class","movie-container")
    div.innerHTML=`<h2>${movieinput.value}</h2>
    <h3>${directorinput.value}</h3>
    <p>${moviedescription.value}</p>
    <button onclick="deletemovie(event)">DELETE</button>`
    container.append(div)
    overlay.style.display ="none"
    popupbox.style.display="none"
})


function deletemovie(event){
    event.target.parentElement.remove()
}