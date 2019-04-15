
function openMenuItems(){
    console.log('menuItems');
    localStorage.setItem('selected','menuItems');
    enableMask('menuItems');
    
}
function myClick(ev){
    console.log(ev.target.innerText);
}
function menuItems() {
    var menuItemsContainer = document.getElementById('menu-items');
        menuItemsContainer.innerHTML = '';
    for (var i = 0; i < db['jhasim']['header']['headerlinks'].length; i++) {
        console.log(db['jhasim']['header']['headerlinks'][i]);
        var item = document.createElement('LI');
        item.setAttribute("class", "nav-item");
        item.innerHTML = db['jhasim']['header']['headerlinks'][i]['text'];
        item.addEventListener('click', myClick);
        menuItemsContainer.appendChild(item);
    }
}
