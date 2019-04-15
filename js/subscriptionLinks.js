function openSubscriptionItems(src){
    console.log(src);
    localStorage.setItem('selected','subscription');
    enableMask('subscription');
    
}
function subscriptionClick(ev){
    console.log(ev.target.innerText);
}
function subscriptionItems() {
    var subscriptionContainer = document.getElementById('subscriptionLinks');
        subscriptionContainer.innerHTML = '';
    for (var i = 0; i < db['jhasim']['footer']['subscriptionlinks'].length; i++) {
        console.log(db['jhasim']['footer']['subscriptionlinks'][i]);
        var item = document.createElement('LI');
        var itemLink = document.createElement('A');
        itemLink.setAttribute('href',db['jhasim']['footer']['subscriptionlinks'][i]['uri'])
        itemLink.innerHTML = db['jhasim']['footer']['subscriptionlinks'][i]['name']; 
        item.appendChild(itemLink);
        item.addEventListener('click', aboutClick);
        subscriptionContainer.appendChild(item);
    }
}