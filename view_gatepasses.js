function viewGatepasses() {
    var supplierAuthCode = document.getElementById("supplierAuthCode").value

    var url = new URL("http://localhost:8080/secure-gate-pass/supplier/retrieve-gatepasses?supplierAuthCode=183586")
    url.searchParams.set('supplierAuthCode', supplierAuthCode)
    console.log(url)

    // Create a request variable and assign a new XMLHttpRequest object to it.
    var request = new XMLHttpRequest();

    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', url, true);

    request.onload = function () {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response);
        if (request.status >= 200 && request.status < 400) {
            var myTable = document.createElement('table');
            showTableHeaders(myTable)

            showTableData(data, myTable)
            
        } else {
            console.log('error');
        }

    }

    // Send request
    request.send();
}

function showTableHeaders(myTable) {

    var myRow = document.createElement('tr');

    var myHeader1 = document.createElement('th');
    myHeader1.innerHTML = "inventoryName";
    myRow.appendChild(myHeader1);

    var myHeader2 = document.createElement('th');
    myHeader2.innerHTML = "inventoryAddress";
    myRow.appendChild(myHeader2);

    var myHeader3 = document.createElement('th');
    myHeader3.innerHTML = "inventoryPhonenumber";
    myRow.appendChild(myHeader3);

    var myHeader4 = document.createElement('th');
    myHeader4.innerHTML = "customerName";
    myRow.appendChild(myHeader4);

    var myHeader5 = document.createElement('th');
    myHeader5.innerHTML = "customerAddress";
    myRow.appendChild(myHeader5);

    var myHeader6 = document.createElement('th');
    myHeader6.innerHTML = "customerPhonenumber";
    myRow.appendChild(myHeader6);

    var myHeader7 = document.createElement('th');
    myHeader7.innerHTML = "products";
    myRow.appendChild(myHeader7);

    var myHeader8 = document.createElement('th');
    myHeader8.innerHTML = "status";
    myRow.appendChild(myHeader8);

    var myHeader9 = document.createElement('th');
    myHeader9.innerHTML = "otp";
    myRow.appendChild(myHeader9);

    myTable.appendChild(myRow)
    document.getElementsByTagName('body')[0].appendChild(myTable)
}

function showTableData(data, myTable) {
    
    for (var i = 0; i < data.length; i++) {
        var myRow = document.createElement('tr');

        var myData1 = document.createElement('td');
        myData1.innerHTML = data[i]["inventoryName"]
        myRow.appendChild(myData1);

        var myData2 = document.createElement('td');
        myData2.innerHTML = data[i]["inventoryAddress"]
        myRow.appendChild(myData2);

        var myData3 = document.createElement('td');
        myData3.innerHTML = data[i]["inventoryPhonenumber"]
        myRow.appendChild(myData3);

        var myData4 = document.createElement('td');
        myData4.innerHTML = data[i]["customerName"]
        myRow.appendChild(myData4);

        var myData5 = document.createElement('td');
        myData5.innerHTML = data[i]["customerAddress"]
        myRow.appendChild(myData5);

        var myData6 = document.createElement('td');
        myData6.innerHTML = data[i]["customerPhonenumber"]
        myRow.appendChild(myData6);

        var myData7 = document.createElement('td');
        myData7.innerHTML = data[i]["products"]
        myRow.appendChild(myData7);

        var myData8 = document.createElement('td');
        myData8.innerHTML = data[i]["status"]
        myRow.appendChild(myData8);

        var myData9 = document.createElement('td');
        myData9.innerHTML = data[i]["otp"]
        myRow.appendChild(myData9);

        myTable.appendChild(myRow)
      }

      document.getElementsByTagName('body')[0].appendChild(myTable)
}
function showPassword() {
    var x = document.getElementById("supplierAuthCode");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}



