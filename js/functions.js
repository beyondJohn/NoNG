
var db;
function click() {
    console.log('clicked');
    alert("clicked");
}
var makeMenuItems = function (data) { // data:JSON dependency injecti
    var myData = JSON.parse(data);
    db = myData;
    //var countModules = 0;
    for (var i = 0; i < db['jhasim']['header']['headerlinks'].length; i++) {
        console.log(db['jhasim']['header']['headerlinks'][i]);
    }
    menuItems();
}
function getData() {
    // var jsonModulesList = JSON.parse("{\"modulesList\":" + JSON.stringify(modulesList) + "}");
    httpRequest("Get", config['apiUrl'] + "jhasim", "application/json", '', makeMenuItems);
    // httpRequest("Get","http://awesomesite.com/api/MyModules","application/json", '', makeModules);
}
getData();

