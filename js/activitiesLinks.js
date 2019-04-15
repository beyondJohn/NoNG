function openActivitiesItems(src){
    console.log(src);
    localStorage.setItem('selected','activities');
    enableMask('activities');
    
}
function activitiesClick(ev){
    console.log(ev.target.innerText);
}
function activitiesItems() {
    var activitiesItemsContainer = document.getElementById('listActivities');
        activitiesItemsContainer.innerHTML = '';
    for (var i = 0; i < db['jhasim']['body']['cmeactivities'].length; i++) {
        console.log(db['jhasim']['body']['cmeactivities'][i]);
        var item = document.createElement('LI');
        var itemLink = document.createElement('A');
        itemLink.setAttribute('href',db['jhasim']['body']['cmeactivities'][i]['uri'])
        itemLink.innerHTML = db['jhasim']['body']['cmeactivities'][i]['text']; 
        item.appendChild(itemLink);
        item.addEventListener('click', activitiesClick);
        activitiesItemsContainer.appendChild(item);
    }
}