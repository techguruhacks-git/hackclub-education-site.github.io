function toggle(){
    var x = document.getElementById("checkbt");
    var y = document.getElementById("ul");

    if (y.style.left === "0%") {
        y.style.left = "-100%";

    }
    else {
        y.style.left = "0%";
    }

}