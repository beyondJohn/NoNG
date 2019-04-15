function openEnduringItems(src){
    console.log(src);
    localStorage.setItem('selected','enduring');
    enableMask('enduring');
    
}
function enduringClick(ev){
    console.log(ev.target.innerText);
}
function enduringItems() {
    var enduringContainer = document.getElementById('cmeEnduringContent');
        enduringContainer.innerHTML = '';
    for (var i = 0; i < db['jhasim']['body']['cmeenduringmaterials'].length; i++) {
        var cmeenduringmaterialsDiv = document.createElement('DIV');
        cmeenduringmaterialsDiv.id = "cmeenduringmaterialsDiv" + i;
        cmeenduringmaterialsDiv.className = 'row module-container';
        var imageDiv = document.createElement('DIV');
        imageDiv.id = 'imageDiv' + i;
        imageDiv.className = 'col-sm-3';
        imageDiv.style = 'text-align: center; padding-right: 0px !important; padding-bottom: 15px; padding-top: 3%;';
        var image = document.createElement('IMG');
        image.id = 'image' + i;
        image.className = 'module-img';
        image.src = db['jhasim']['body']['cmeenduringmaterials'][i].imageuri;
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
        titleDiv.innerHTML = db['jhasim']['body']['cmeenduringmaterials'][i].title;
        titleContainerDiv.appendChild(titleDiv);
        contentDiv.appendChild(titleContainerDiv);
        var secondaryDiv = document.createElement('DIV');
        secondaryDiv.id = 'secondaryDiv' + i;
        secondaryDiv.className = 'module-secondary-upcoming';
        var secondaryText = document.createElement('DIV');
        secondaryText.id = 'secondaryText' + i;
        secondaryText.innerHTML = db['jhasim']['body']['cmeenduringmaterials'][i].titlesecondary;
        // var creditsDiv = document.createElement('DIV');
        // creditsDiv.id = 'creditsDiv' + i;
        // creditsDiv.className = 'credits';
        // creditsDiv.innerHTML = db['jhasim']['body']['cmeenduringmaterials'][i].titlesecondary;
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

        cmeenduringmaterialsDiv.appendChild(imageDiv);
        cmeenduringmaterialsDiv.appendChild(contentDiv);
        cmeenduringmaterialsDiv.appendChild(hrDiv);

        enduringContainer.appendChild(cmeenduringmaterialsDiv);


        // var item = document.createElement('LI');
        // var itemLink = document.createElement('A');
        // itemLink.setAttribute('href',db['jhasim']['footer']['subscriptionlinks'][i]['uri'])
        // itemLink.innerHTML = db['jhasim']['footer']['subscriptionlinks'][i]['name']; 
        // item.appendChild(itemLink);
        // item.addEventListener('click', aboutClick);
        // enduringContainer.appendChild(item);
    }
}