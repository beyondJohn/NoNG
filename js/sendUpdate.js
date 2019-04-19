var updateJSON = localStorage.getItem('tempDb');
function soap() {
    var xmlhttp = new XMLHttpRequest();
    //xmlhttp.open('POST', 'http://localhost:53474/soap/webservice1.asmx', true);
    xmlhttp.open('POST', 'http://jhasim1.com/soap/webservice1.asmx', true);

    // build SOAP request
    var sr =
        '<?xml version="1.0" encoding="utf-8"?>' +
        '<soapenv:Envelope ' +
            'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ' +
            'xmlns:api="http://127.0.0.1/Integrics/Enswitch/API" ' +
            'xmlns:xsd="http://www.w3.org/2001/XMLSchema" ' +
            'xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">' +
            '<soapenv:Body>' +
                '<getJson xmlns="http://tempuri.org/"><myJSON><![CDATA['+
                updateJSON
                +']]></myJSON></getJson>' +
            '</soapenv:Body>' +
        '</soapenv:Envelope>';

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                alert(xmlhttp.responseText);
            }
        }
    }
    // Send the POST request
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
    //xmlhttp.setRequestHeader('SOAPAction', 'http://jhasim1.com/soap"');
    xmlhttp.send(sr);
    // send request
}
