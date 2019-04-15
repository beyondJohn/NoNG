var saveClick = function(from){
    console.log(from);
    
    var selected = localStorage.getItem('selected');
    console.log(selected);
    if(selected === "menuItems"){
        menuItemsProcess();
    }
    else if(selected === "activities"){
        activitiesItemsProcess();
    }
    else if(selected === "about"){
        aboutItemsProcess();
    }
    else if(selected === "subscription"){
        subscriptionItemsProcess();
    }
    else if(selected === "live"){
        liveProcess();
    }
    else if(selected === "enduring"){
        enduringProcess();
    }
    maskClick();
}

var menuItemsProcess = function(){
    var linkTitleInputs = document.getElementsByClassName('text-title');
    for(i = 0; i < linkTitleInputs.length; i++){
        console.log(linkTitleInputs[i].value);
    }
    var linkHREFInputs = document.getElementsByClassName('text-href');
    for(i = 0; i < linkHREFInputs.length; i++){
        console.log(linkHREFInputs[i].value);
    }
    
    for(i = 0; i < db['jhasim']['header']['headerlinks'].length; i++){
        db['jhasim']['header']['headerlinks'][i].text = linkTitleInputs[i].value;
        console.log(db['jhasim']['header']['headerlinks'][i].text);
    }
    localStorage.setItem('tempDb',JSON.stringify(db));
    menuItems();
}

var activitiesItemsProcess = function(){
    var linkTitleInputs = document.getElementsByClassName('text-title');
    for(i = 0; i < linkTitleInputs.length; i++){
        console.log(linkTitleInputs[i].value);
    }
    var linkHREFInputs = document.getElementsByClassName('text-href');
    for(i = 0; i < linkHREFInputs.length; i++){
        console.log(linkHREFInputs[i].value);
    }
    
    for(i = 0; i < db['jhasim']['body']['cmeactivities'].length; i++){
        db['jhasim']['body']['cmeactivities'][i].text = linkTitleInputs[i].value;
        console.log(db['jhasim']['body']['cmeactivities'][i].text);
    }
    localStorage.setItem('tempDb',JSON.stringify(db));
    activitiesItems();
}
var aboutItemsProcess = function(){
    var linkTitleInputs = document.getElementsByClassName('text-title');
    for(i = 0; i < linkTitleInputs.length; i++){
        console.log(linkTitleInputs[i].value);
    }
    var linkHREFInputs = document.getElementsByClassName('text-href');
    for(i = 0; i < linkHREFInputs.length; i++){
        console.log(linkHREFInputs[i].value);
    }
    
    for(i = 0; i < db['jhasim']['footer']['aboutlinks'].length; i++){
        db['jhasim']['footer']['aboutlinks'][i].name = linkTitleInputs[i].value;
        console.log(db['jhasim']['footer']['aboutlinks'][i].name);
    }
    localStorage.setItem('tempDb',JSON.stringify(db));
    aboutItems();
}
var subscriptionItemsProcess = function(){
    var linkTitleInputs = document.getElementsByClassName('text-title');
    for(i = 0; i < linkTitleInputs.length; i++){
        console.log(linkTitleInputs[i].value);
    }
    var linkHREFInputs = document.getElementsByClassName('text-href');
    for(i = 0; i < linkHREFInputs.length; i++){
        console.log(linkHREFInputs[i].value);
    }
    
    for(i = 0; i < db['jhasim']['footer']['subscriptionlinks'].length; i++){
        db['jhasim']['footer']['subscriptionlinks'][i].name = linkTitleInputs[i].value;
        console.log(db['jhasim']['footer']['subscriptionlinks'][i].name);
    }
    localStorage.setItem('tempDb',JSON.stringify(db));
    subscriptionItems();
}
var liveProcess = function(){
    var linkTitleInputs = document.getElementsByClassName('text-title');

    var linkHREFInputs = document.getElementsByClassName('text-href');

    var secondaryInputs = document.getElementsByClassName('text-secondary');

    var srcInputs = document.getElementsByClassName('text-src');

    for(i = 0; i < db['jhasim']['body']['livecmeevents'].length; i++){
        db['jhasim']['body']['livecmeevents'][i].image = linkHREFInputs[i].value;
        db['jhasim']['body']['livecmeevents'][i].imageuri = srcInputs[i].value;
        db['jhasim']['body']['livecmeevents'][i].title = linkTitleInputs[i].value;
        db['jhasim']['body']['livecmeevents'][i].titlesecondary = secondaryInputs[i].value;
        console.log(db['jhasim']['body']['livecmeevents'][i].imageuri);
    }
    localStorage.setItem('tempDb',JSON.stringify(db));
    liveItems();
}
var enduringProcess = function(){
    var linkTitleInputs = document.getElementsByClassName('text-title');

    var linkHREFInputs = document.getElementsByClassName('text-href');

    var secondaryInputs = document.getElementsByClassName('text-secondary');

    var srcInputs = document.getElementsByClassName('text-src');
    
    for(i = 0; i < db['jhasim']['body']['cmeenduringmaterials'].length; i++){
        db['jhasim']['body']['cmeenduringmaterials'][i].image = linkHREFInputs[i].value;
        db['jhasim']['body']['cmeenduringmaterials'][i].imageuri = srcInputs[i].value;
        db['jhasim']['body']['cmeenduringmaterials'][i].title = linkTitleInputs[i].value;
        db['jhasim']['body']['cmeenduringmaterials'][i].titlesecondary = secondaryInputs[i].value;
    }
    localStorage.setItem('tempDb',JSON.stringify(db));
    enduringItems();
}