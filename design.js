function addition()
{
    var a = parseInt(document.getElementById("n1").value);
    var b = parseInt(document.getElementById("n2").value);
    document.getElementById("res").textContent = a+b;
}

function substraction()
{
    var a = parseInt(document.getElementById("n1").value);
    var b = parseInt(document.getElementById("n2").value);
    document.getElementById("res").textContent = a-b;
}
function multiplication()
{
    var a = parseInt(document.getElementById("n1").value);
    var b = parseInt(document.getElementById("n2").value);
    document.getElementById("res").textContent = a*b;
}
function division()
{
    var a = parseInt(document.getElementById("n1").value);
    var b = parseInt(document.getElementById("n2").value);
    document.getElementById("res").textContent = a/b;
}