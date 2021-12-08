function gumb() {
    var x = document.getElementById('slika');
    if (x.src.match("assets/images/1.jpg")) {
        x.src = "assets/images/2.jpg";
    } else {
        x.src = "assets/images/1.jpg";
    }
}

function text1() {
    document.getElementById("text1").innerHTML = "Mario Savić, 2003, Ne bos dobil moj naslov! :D";
}

function text2() {
    alert("Mario Savić, 2003, Ne bos dobil moj naslov! :D");
}