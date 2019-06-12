var myNodelist = document.querySelectorAll('.btn');
myNodelist.forEach(function(b) {
    b.addEventListener("click", function(event) {
        var element = b.value;
        var input = document.getElementById("result");
        var currentValue = input.value
        input.value = currentValue + element;
    });

});


document.getElementById("add").addEventListener("click", function(event) {
    var addo = document.getElementById("add").value;
    var input = document.getElementById("result");
    var currentValue = input.value
    input.value = currentValue + addo;

});

document.getElementById("sub").addEventListener("click", function(event) {
    var subo = document.getElementById("sub").value;
    var input = document.getElementById("result");
    var currentValue = input.value
    input.value = currentValue + subo;

});
document.getElementById("mul").addEventListener("click", function(event) {
    var mulo = document.getElementById("mul").value;
    var input = document.getElementById("result");
    var currentValue = input.value
    input.value = currentValue + mulo;

});
document.getElementById("division").addEventListener("click", function(event) {
    var divisiono = document.getElementById("division").value;
    var input = document.getElementById("result");
    var currentValue = input.value
    input.value = currentValue + divisiono;
});

document.getElementById("equal").addEventListener("click", function(event) {
    var equal = document.getElementById("equal").value;
    var input = document.getElementById("result");
    var currentValue = input.value
    input.value = currentValue + equal;

    if (input.value == "=") {
        input.value = null;
        input.placeholder = "Error!";
    } else {
        var rfinalresult = eval(currentValue);
        currentValue = rfinalresult;
        input.value = currentValue;
        if (input.value == "Infinity") {
            input.value = null;
            input.placeholder = "Error!";
        }
    }
});

document.getElementById("clear").addEventListener("click", function(event) {
    var clear = document.getElementById("clear").value;
    var input = document.getElementById("result");
    input.value = null;
    input.placeholder = "0";
});

document.getElementById("dot").addEventListener("click", function(event) {
    var dot = document.getElementById("dot").value;
    var input = document.getElementById("result");
    var currentValue = input.value
    input.value = currentValue + dot;
});

document.getElementById("back").addEventListener("click", function(event) {
    var back = document.getElementById("result").value;
    document.getElementById("result").value = back.substring(0, back.length - 1);
    var input = document.getElementById("result");
    input.placeholder = "0";
});
