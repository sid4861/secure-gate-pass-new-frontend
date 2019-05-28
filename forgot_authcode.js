function retrieveAuthCode(){

    var supplierPhonenumber = document.getElementById("supplierPhonenumber").value

    var url = new URL("http://localhost:8080/secure-gate-pass/supplier/forgot-authcode?PhoneNumber=8308760642")
    url.searchParams.set('PhoneNumber', supplierPhonenumber)
    console.log(url)

    // Create a request variable and assign a new XMLHttpRequest object to it.
    var request = new XMLHttpRequest();

    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', url, true);

    request.onload = function () {
        // Begin accessing JSON data here
        var data = this.response;
        if (request.status >= 200 && request.status < 400) {
           
            //var para = document.createElement('p');
            //para.innerHTML = data.value;
            //document.getElementsByTagName('body')[0].appendChild(para)
            
        } else {
            console.log('error');
        }

    }

    // Send request
    request.send();
}
