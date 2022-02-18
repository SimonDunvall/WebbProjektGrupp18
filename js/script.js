function showdev1() {
    $("#content").load("dev1.html");
}

function showdev2() {
    $("#content").load("dev2.html");
}

function showdev3() {
    $("#content").load("dev3.html");
}

function emailvalidation(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.match(mailformat)) {
        document.getElementById("email").style.color = "green";
    }
    else 
    {
        document.getElementById("email").style.color = "red";
    }

}
