
var db;
function click() {
    console.log('clicked');
    alert("clicked");
}
var makeMenuItems = function (data) { // data:JSON dependency injecti
    localStorage.setItem('db', data);
    localStorage.setItem('tempDb', data);
    var tempData = JSON.parse(localStorage.getItem('tempDb'));
    db = tempData;

    // build page items
    menuItems();
    activitiesItems();
    liveItems();
    enduringItems();
}
function getData() {
    httpRequest("Get", config['apiUrl'] + "jhasim", "application/json", '', makeMenuItems);
}
getData();

