var displayMask = false;

var maskClick = function (event) {
    console.log('enabled3');
    displayMask = !displayMask;
    if (displayMask) {
        console.log('enabled1');
        document.getElementById('divMask').style.display = "block";
        document.getElementById('divMask').style.opacity = ".9";
    }
    else {
        console.log('enabled2');
        document.getElementById('divMask').style.opacity = "0";
        document.getElementById('divMask').style.display = "none";
    }
    var selected = localStorage.getItem('selected');
    console.log('before enable: ', selected);
    var checkScrollContainer = document.getElementById('scrollContainer');
    console.log(checkScrollContainer);
    enableModal();
    if (selected == 'menuItems') {
        
        if (checkScrollContainer !== null) {
            checkScrollContainer.innerHTML = '';
        }
        for (var i = 0; i < db['jhasim']['header']['headerlinks'].length; i++) {
            createLinkObj(i);
            document.getElementById("textTitle" + i).value = db['jhasim']['header']['headerlinks'][i]['text'];
            document.getElementById("textHref" + i).value = db['jhasim']['header']['headerlinks'][i]['uri'];
        };
        
    }
    else if (selected == 'activities') {
        if (checkScrollContainer !== null) {
            checkScrollContainer.innerHTML = '';
        }
        for (var i = 0; i < db['jhasim']['body']['cmeactivities'].length; i++) {
            createActivitylink(i);
            document.getElementById("textTitle" + i).value = db['jhasim']['body']['cmeactivities'][i]['text'];
            document.getElementById("textHref" + i).value = db['jhasim']['body']['cmeactivities'][i]['uri'];
        };
    }
    else if (selected == 'about') {
        if (checkScrollContainer !== null) {
            checkScrollContainer.innerHTML = '';
        }
        for (var i = 0; i < db['jhasim']['footer']['aboutlinks'].length; i++) {
            createActivitylink(i);
            document.getElementById("textTitle" + i).value = db['jhasim']['footer']['aboutlinks'][i]['name'];
            document.getElementById("textHref" + i).value = db['jhasim']['footer']['aboutlinks'][i]['uri'];
        };
    }
    else if (selected == 'subscription') {
        if (checkScrollContainer !== null) {
            checkScrollContainer.innerHTML = '';
        }
        for (var i = 0; i < db['jhasim']['footer']['subscriptionlinks'].length; i++) {
            createActivitylink(i);
            document.getElementById("textTitle" + i).value = db['jhasim']['footer']['subscriptionlinks'][i]['name'];
            document.getElementById("textHref" + i).value = db['jhasim']['footer']['subscriptionlinks'][i]['uri'];
        };
    }
    else if (selected == 'live') {
        if (checkScrollContainer !== null) {
            checkScrollContainer.innerHTML = '';
        }
        for (var i = 0; i < db['jhasim']['body']['livecmeevents'].length; i++) {
            console.log('hello');
            createModule(i);
             document.getElementById("textTitle" + i).value = db['jhasim']['body']['livecmeevents'][i]['title'];
             document.getElementById("textSecondary" + i).value = db['jhasim']['body']['livecmeevents'][i]['titlesecondary'];
             document.getElementById("textHref" + i).value = db['jhasim']['body']['livecmeevents'][i]['image'];
             document.getElementById("textSrc" + i).value = db['jhasim']['body']['livecmeevents'][i]['imageuri'];
            //  document.getElementById("textTitle" + i).value = db['jhasim']['body']['livecmeevents'][i]['footer'];
            // document.getElementById("textHref" + i).value = db['jhasim']['body']['livecmeevents'][i]['uri'];
        };
    }
    else if (selected == 'enduring') {
        if (checkScrollContainer !== null) {
            checkScrollContainer.innerHTML = '';
        }
        for (var i = 0; i < db['jhasim']['body']['cmeenduringmaterials'].length; i++) {
            console.log('hello');
            createModule(i);
             document.getElementById("textTitle" + i).value = db['jhasim']['body']['cmeenduringmaterials'][i]['title'];
             document.getElementById("textSecondary" + i).value = db['jhasim']['body']['cmeenduringmaterials'][i]['titlesecondary'];
             document.getElementById("textHref" + i).value = db['jhasim']['body']['cmeenduringmaterials'][i]['image'];
             document.getElementById("textSrc" + i).value = db['jhasim']['body']['cmeenduringmaterials'][i]['imageuri'];
            //  document.getElementById("textTitle" + i).value = db['jhasim']['body']['livecmeevents'][i]['footer'];
            // document.getElementById("textHref" + i).value = db['jhasim']['body']['livecmeevents'][i]['uri'];
        };
    }
    else{
        if (checkScrollContainer !== null) {
            checkScrollContainer.innerHTML = '';
        }
    }
    modalClick();
}
var enableMask = function (src) {
    console.log('enabled: ', src);
    var divMask = document.createElement("DIV");
    divMask.id = "divMask";
    divMask.classList = "div-mask";
    divMask.addEventListener('click', function () { maskClick(); });
    document.body.appendChild(divMask);
    maskClick(src);
};
// var createScrollContainer = function () {
//     // var checkScrollContainer = document.getElementById('scrollContainer');
//     // console.log(checkScrollContainer);
//     // if (checkScrollContainer !== null) {
//     //     document.removeChild(checkScrollContainer);

//     // }
//     var scrollContainer = document.createElement('DIV');
//     scrollContainer.id = 'scrollContainer';
//     scrollContainer.setAttribute('style', 'overflow-y:scroll; overflow-x:hidden; position:relative;height:100%;');
//     document.getElementById('divModal').appendChild(scrollContainer);
//     for (var i = 0; i < db['jhasim']['header']['headerlinks'].length; i++) {
//         createLinkObj(i);
//         document.getElementById("textTitle" + i).value = db['jhasim']['header']['headerlinks'][i]['text'];
//         document.getElementById("textHref" + i).value = db['jhasim']['header']['headerlinks'][i]['uri'];
//     };
// }