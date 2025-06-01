/*eslint-env browser*/

function dailySpecial() {
    var today = new Date();
    var day = today.getDay();
    var msg = "";
    var src = "";
    if (day == 0) {
        msg = "Shoyu Ramen";
        src = "img/eiliv-aceron-pNuCNvigfkc-unsplash.jpg"
    } else if (day == 1) {
        msg = "Ahi Tuna Poke Bowl";
        src = "img/jonathan-borba-Gkc_xM3VY34-unsplash.jpg"
    } else if (day == 2) {
        msg = "Seafood Ramen";
        src = "img/michele-blackwell-rAyCBQTH7ws-unsplash.jpg"
    } else if (day == 3) {
        msg = "Cali Poke Bowl";
        src = "img/pexels-photo-4828216.jpeg"
    } else if (day == 4) {
        msg = "Vegetable Ramen";
        src = "img/cody-chan-GXhmQt6MFX8-unsplash(2).jpg"
    } else if (day == 5) {
        msg = "Tofu Poke Bowl";
        src = "img/pexels-polina-tankilevitch-4828096.jpg"
    } else if (day == 6) {
        msg = "Tonkotsu Ramen";
        src = "img/frank-from-5-am-ramen-fHSTIBefNXQ-unsplash(1).jpg"
    }
    
    document.getElementById("dailySpecial").innerHTML = msg;
    document.getElementById("dailySpecialImg").src = src;
}
