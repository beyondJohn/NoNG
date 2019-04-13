
function openMenuItems(){
    console.log('menuItems');
}
function myClick(ev){
    console.log(ev.target.innerText);
}
function menuItems() {
    for (var i = 0; i < db['jhasim']['header']['headerlinks'].length; i++) {
        console.log(db['jhasim']['header']['headerlinks'][i]);
        var menuItemsContainer = document.getElementById('menu-items');
        var item = document.createElement('LI');
        item.setAttribute("class", "nav-item");
        item.innerHTML = db['jhasim']['header']['headerlinks'][i]['text'];
        item.addEventListener('click', myClick);
        menuItemsContainer.appendChild(item);
    }
}
