function openAboutItems(src){
    console.log(src);
    localStorage.setItem('selected','about');
    enableMask('about');
    
}
function aboutClick(ev){
    console.log(ev.target.innerText);
}
function aboutItems() {
    var aboutContainer = document.getElementById('aboutLinks');
        aboutContainer.innerHTML = '';
    for (var i = 0; i < db['jhasim']['footer']['aboutlinks'].length; i++) {
        console.log(db['jhasim']['footer']['aboutlinks'][i]);
        var item = document.createElement('LI');
        var itemLink = document.createElement('A');
        itemLink.setAttribute('href',db['jhasim']['footer']['aboutlinks'][i]['uri'])
        itemLink.innerHTML = db['jhasim']['footer']['aboutlinks'][i]['name']; 
        item.appendChild(itemLink);
        item.addEventListener('click', aboutClick);
        aboutContainer.appendChild(item);
    }
}