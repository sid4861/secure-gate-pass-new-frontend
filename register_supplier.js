function registerSupplier() {

    var supplierName = document.getElementById("supplierName").value
    var supplierAddress = document.getElementById("supplierAddress").value
    var supplierPhonenumber = document.getElementById("supplierPhonenumber").value
    var supplierEmail = document.getElementById("supplierEmail").value


    var data = JSON.stringify({
        "supplierName": supplierName,
        "supplierAddress":supplierAddress ,
        "supplierPhonenumber": supplierPhonenumber,
        "supplierEmail": supplierEmail
    });

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("POST", "https://secure-gate-pass-new.cfapps.io/secure-gate-pass/supplier/register");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("cache-control", "no-cache");


    xhr.send(data);
}