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
}

var tempObj = {
    footer: '',
    image: '',
    imageuri: '',
    title: '',
    titlesecondary: ''
}