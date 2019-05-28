function generateGatepass(){

    var supplierAuthCode = document.getElementById("supplierAuthCode").value
    var inventoryName = document.getElementById("inventoryName").value
    var inventoryAddress = document.getElementById("inventoryAddress").value
    var inventoryPhonenumber = document.getElementById("inventoryPhonenumber").value
    var customerName = document.getElementById("customerName").value
    var customerAddress = document.getElementById("customerAddress").value
    var customerPhonenumber = document.getElementById("customerPhonenumber").value
    var products = document.getElementById("products").value

    var data = JSON.stringify({
        "supplierAuthCode": supplierAuthCode,
        "inventoryName": inventoryName,
        "inventoryAddress": inventoryAddress,
        "inventoryPhonenumber": inventoryPhonenumber,
        "customerName": customerName,
        "customerAddress": customerAddress,
        "customerPhonenumber": customerPhonenumber,
        "products":products
      });
      
      var xhr = new XMLHttpRequest();
      xhr.withCredentials = false;
      
      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
          console.log(this.responseText);
        }
      });
      
      xhr.open("POST", "http://localhost:8080/secure-gate-pass/supplier/generate-gatepass");
      xhr.setRequestHeader("content-type", "application/json");
      xhr.setRequestHeader("cache-control", "no-cache");
      xhr.send(data);
}

function showPassword() {
    var x = document.getElementById("supplierAuthCode");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }