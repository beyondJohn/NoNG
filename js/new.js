function newObj() {
    var selected = localStorage.getItem('selected');
    console.log("new: ", selected);
    if (selected === "live") {
        db['jhasim']['body']['livecmeevents'].push(tempObj);
        localStorage.setItem('tempDb', JSON.stringify(db));
        db = JSON.parse(localStorage.getItem('tempDb'));
        maskClick();
        openLiveItems('live');
    }
    else if (selected === "enduring") {
        db['jhasim']['body']['cmeenduringmaterials'].push(tempObj);
        localStorage.setItem('tempDb', JSON.stringify(db));
        db = JSON.parse(localStorage.getItem('tempDb'));
        maskClick();
        openEnduringItems('enduring');
    }
    else if (selected === "menuItems") {
        db['jhasim']['header']['headerlinks'].push(tempLinkObj);
        localStorage.setItem('tempDb', JSON.stringify(db));
        db = JSON.parse(localStorage.getItem('tempDb'));
        maskClick();
        openMenuItems();
    }
    else if (selected === "activities") {
        db['jhasim']['body']['cmeactivities'].push(tempLinkObj);
        localStorage.setItem('tempDb', JSON.stringify(db));
        db = JSON.parse(localStorage.getItem('tempDb'));
        maskClick();
        openActivitiesItems();
    }
    else if (selected === "about") {
        db['jhasim']['footer']['aboutlinks'].push(tempLinkObj);
        localStorage.setItem('tempDb', JSON.stringify(db));
        db = JSON.parse(localStorage.getItem('tempDb'));
        maskClick();
        openAboutItems();
    }
    else if (selected === "subscription") {
        db['jhasim']['footer']['subscriptionlinks'].push(tempLinkObj);
        localStorage.setItem('tempDb', JSON.stringify(db));
        db = JSON.parse(localStorage.getItem('tempDb'));
        maskClick();
        openSubscriptionItems();
    }
}

var tempObj = {
    footer: '',
    image: '',
    imageuri: '',
    title: '',
    titlesecondary: ''
}
var tempLinkObj = {
    text:'',
    uri:''
}