function back()
{
    window.location = "activity1.html"
}
function getScore()
{
    score = localStorage.getItem("score");
    document.getElementById("update").innerHTML = "<h1>puntaje: " + score + "</h1>";
}