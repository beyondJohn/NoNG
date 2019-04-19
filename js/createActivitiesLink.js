
function createActivitylink(index) {
    var deleteClick = function (src) {
        var area = localStorage.getItem('selected');

        // strip text from button id to get index value
        var id = src.target.id.replace("deleteBtn", "");
        tempActivitiesArray = [];
        if (area == 'activities') {
            for (var i = 0; i < db['jhasim']['body']['cmeactivities'].length; i++) {
                if (i != id) {
                    tempActivitiesArray.push(db['jhasim']['body']['cmeactivities'][i]);
                }
            }
            db['jhasim']['body']['cmeactivities'] = tempActivitiesArray;
            localStorage.setItem('tempDb', JSON.stringify(db));
            db = JSON.parse(localStorage.getItem('tempDb'));
            maskClick();
            openActivitiesItems();
        }
        else if (area == 'menuItems') {
            for (var i = 0; i < db['jhasim']['header']['headerlinks'].length; i++) {
                if (i != id) {
                    tempActivitiesArray.push(db['jhasim']['header']['headerlinks'][i]);
                }
            }
            db['jhasim']['header']['headerlinks'] = tempActivitiesArray;
            localStorage.setItem('tempDb', JSON.stringify(db));
            db = JSON.parse(localStorage.getItem('tempDb'));
            maskClick();
            openMenuItems();
        }
        else if (area == 'about') {
            for (var i = 0; i < db['jhasim']['footer']['aboutlinks'].length; i++) {
                if (i != id) {
                    tempActivitiesArray.push(db['jhasim']['footer']['aboutlinks'][i]);
                }
            }
            db['jhasim']['footer']['aboutlinks'] = tempActivitiesArray;
            localStorage.setItem('tempDb', JSON.stringify(db));
            db = JSON.parse(localStorage.getItem('tempDb'));
            maskClick();
            openAboutItems();
        }
        else if (area == 'subscription') {
            for (var i = 0; i < db['jhasim']['footer']['subscriptionlinks'].length; i++) {
                if (i != id) {
                    tempActivitiesArray.push(db['jhasim']['footer']['subscriptionlinks'][i]);
                }
            }
            db['jhasim']['footer']['subscriptionlinks'] = tempActivitiesArray;
            localStorage.setItem('tempDb', JSON.stringify(db));
            db = JSON.parse(localStorage.getItem('tempDb'));
            maskClick();
            openSubscriptionItems();
        }



    }
    var table = document.createElement('TABLE');
    table.id = 'table' + index;
    table.style = 'margin:auto; width:100%;'
    var tr = document.createElement('TR');
    var tdText = document.createElement('TD');
    tdText.style = 'text-align:right;'
    // Title Label
    var labelTitle = document.createElement('label');
    labelTitle.id = 'labelTitle' + index;
    labelTitle.innerHTML = 'Link Text:';
    labelTitle.style.marginLeft = '15px';
    labelTitle.style.marginTop = '15px';

    tdText.appendChild(labelTitle);

    var tdURI = document.createElement('TD');
    // Title TextArea
    var textTitle = document.createElement("INPUT");
    textTitle.id = "textTitle" + index;
    textTitle.className = "text-title";
    tdURI.appendChild(textTitle);

    tr.appendChild(tdText);
    tr.appendChild(tdURI);

    var trHREF = document.createElement('TR');
    var tdHREFText = document.createElement('TD');
    tdHREFText.style = 'text-align:right;'
    // Href Label
    var labelHref = document.createElement('label');
    labelHref.id = 'labelHref' + index;
    labelHref.innerHTML = 'Href:';
    labelHref.style.marginLeft = '15px';
    labelHref.style.marginTop = '15px';
    tdHREFText.appendChild(labelHref);

    // Href TextArea
    var tdHREFURI = document.createElement('TD');
    var textHref = document.createElement("INPUT");
    textHref.id = "textHref" + index;
    textHref.className = "text-href";
    tdHREFURI.appendChild(textHref);

    trHREF.appendChild(tdHREFText);
    trHREF.appendChild(tdHREFURI);

    // Delete button
    var tdDelete = document.createElement('TD');
    var deleteBtn = document.createElement('BUTTON');
    deleteBtn.setAttribute('type', 'button');
    deleteBtn.innerHTML = 'remove';
    deleteBtn.id = "deleteBtn" + index;
    tdDelete.setAttribute('colspan', '2');
    tdDelete.style.textAlign = 'right';
    tdDelete.addEventListener('click', deleteClick);
    tdDelete.appendChild(deleteBtn);
    var trDelete = document.createElement('TR');
    trDelete.appendChild(tdDelete);

    //
    var trHR = document.createElement('TR');
    var tdHR = document.createElement('TD');
    tdHR.setAttribute('colspan', '2');
    tdHR.appendChild(document.createElement('HR'));

    trHR.appendChild(tdHR);

    table.appendChild(tr);
    table.appendChild(trHREF);
    table.appendChild(trDelete);
    table.appendChild(trHR);

    document.getElementById('scrollContainer').appendChild(table);
}