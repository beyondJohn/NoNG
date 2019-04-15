function openLiveItems(src){
    console.log(src);
    localStorage.setItem('selected','live');
    enableMask('live');
    
}
function liveClick(ev){
    console.log(ev.target.innerText);
}
function liveItems() {
    var liveContainer = document.getElementById('cmeLiveEventsContent');
    liveContainer.innerHTML = '';
    for (var i = 0; i < db['jhasim']['body']['livecmeevents'].length; i++) {
        console.log(db['jhasim']['body']['livecmeevents'][i]);
        var liveContainerDiv = document.createElement('DIV');
        liveContainerDiv.id = "liveContainerDiv" + i;
        liveContainerDiv.className = 'row module-container';
        var imageDiv = document.createElement('DIV');
        imageDiv.id = 'imageDiv' + i;
        imageDiv.className = 'col-sm-3';
        imageDiv.style = 'text-align: center; padding-right: 0px !important; padding-bottom: 15px; padding-top: 3%;';
        var image = document.createElement('IMG');
        image.id = 'image' + i;
        image.className = 'module-img';
        image.src = db['jhasim']['body']['livecmeevents'][i].imageuri;
        imageDiv.appendChild(image);
        var contentDiv = document.createElement('DIV');
        contentDiv.id = 'contentDiv' + i;
        contentDiv.className = "col-sm-9 div-module-text";
        contentDiv.style.textAlign = 'left';
        var titleContainerDiv = document.createElement('DIV');
        titleContainerDiv.id = 'titleContainerDiv' + i;
        titleContainerDiv.appendChild(document.createElement('BR'));
        var titleDiv = document.createElement('DIV');
        titleDiv.id = 'titleDiv' + i;
        titleDiv.className = 'module';
        titleDiv.innerHTML = db['jhasim']['body']['livecmeevents'][i].title;
        titleContainerDiv.appendChild(titleDiv);
        contentDiv.appendChild(titleContainerDiv);
        var secondaryDiv = document.createElement('DIV');
        secondaryDiv.id = 'secondaryDiv' + i;
        secondaryDiv.className = 'module-secondary-upcoming';
        var secondaryText = document.createElement('DIV');
        secondaryText.id = 'secondaryText' + i;
        secondaryText.innerHTML = db['jhasim']['body']['livecmeevents'][i].titlesecondary;
        // var creditsDiv = document.createElement('DIV');
        // creditsDiv.id = 'creditsDiv' + i;
        // creditsDiv.className = 'credits';
        // creditsDiv.innerHTML = db['jhasim']['body']['livecmeevents'][i].titlesecondary;
        secondaryDiv.appendChild(secondaryText);
        // secondaryDiv.appendChild(creditsDiv);

        contentDiv.appendChild(secondaryDiv);

        var hrDiv = document.createElement('DIV');
        hrDiv.id = 'hrDiv' + i;
        hrDiv.className = 'divHR';

        var hr = document.createElement('HR');
        hr.id = 'hrLive', + i;
        hr.className= '_hr';

        hrDiv.appendChild(hr);

        liveContainerDiv.appendChild(imageDiv);
        liveContainerDiv.appendChild(contentDiv);
        liveContainerDiv.appendChild(hrDiv);

        liveContainer.appendChild(liveContainerDiv);


        // var item = document.createElement('LI');
        // var itemLink = document.createElement('A');
        // itemLink.setAttribute('href',db['jhasim']['footer']['subscriptionlinks'][i]['uri'])
        // itemLink.innerHTML = db['jhasim']['footer']['subscriptionlinks'][i]['name']; 
        // item.appendChild(itemLink);
        // item.addEventListener('click', aboutClick);
        // enduringContainer.appendChild(item);
    }
}