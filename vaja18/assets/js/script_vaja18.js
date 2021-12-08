function IzracunVsote() {
    var y = 6;
    var x = 3;
    var vsota = y + x;

    alert("Vsota: " + y + " + " + x + " = " + vsota);
}

function IzracunRazlike() {
    var y = 10;
    var x = 6;
    var razlika = y - x;

    alert("Razlika: " + y + " - " + x + " = " + razlika);
}

function IzracunKolicnika() {
    var y = 25;
    var x = 5;
    var kolicnik = y / x;

    alert("Kolicnik: " + y + " / " + x + " = " + kolicnik);
}

function IzracunProdukta() {
    var y = 12;
    var x = 8;
    var produkt = y * x;

    alert("Produkt: " + y + " * " + x + " = " + produkt);
}
///////////////////////////////////////////
function In() {
    var x = 10;
    var y = 5;

    // logični IN
    if (x < 15 && y > 2) {
        alert("True")
    }
}

function Ali() {
    var x = 15;
    var y = 4;

    // logični ALI
    if (x == 20 || y == 5) {
        alert("True")
    } else {
        alert("False")
    }
}

function Negacija() {
    var x = 25;
    var y = 5;

    // logična negacija
    if (!(x == y)) {
        alert("True")
    } else {
        alert("False")
    }
}
///////////////////////////////////////////
function niz() {
    niz1 = "To je stavek, ";
    niz2 = "ki se izpiše s stikanjem nizov!";
    niz3 = niz1 + niz2;
    document.getElementById("primer").innerHTML = niz3;
}
///////////////////////////////////////////
function XenakoY() {
    var x = 10;
    var y = 5;

    if (x == y) {
        alert("True")
    } else {
        alert("False")
    }
}

function XrazlicenY() {
    var x = 4;
    var y = 15;

    if (x != y) {
        alert("True")
    } else {
        alert("False")
    }
}

function XmanjsiY() {
    var x = 5;
    var y = 25;

    if (x < y) {
        alert("True")
    } else {
        alert("False")
    }
}

function XvecjiY() {
    var x = 45;
    var y = 4;

    if (x > y) {
        alert("True")
    } else {
        alert("False")
    }
}