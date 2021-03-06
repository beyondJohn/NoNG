var createModule = function (index) {

    var deleteClick = function (src) {
        var area = localStorage.getItem('selected');
        // strip text from button id to get index value
        var id = src.target.id.replace("deleteBtn", "");
        tempEventArray = [];
        if(area == 'live'){
            for (var i = 0; i < db['jhasim']['body']['livecmeevents'].length; i++) {
                if (i != id) {
                    tempEventArray.push(db['jhasim']['body']['livecmeevents'][i]);
                }
            }
            db['jhasim']['body']['livecmeevents'] = tempEventArray;
            localStorage.setItem('tempDb', JSON.stringify(db));
            db = JSON.parse(localStorage.getItem('tempDb'));
            maskClick();
            openLiveItems();
        }
        if(area == 'enduring'){
            for (var i = 0; i < db['jhasim']['body']['cmeenduringmaterials'].length; i++) {
                if (i != id) {
                    tempEventArray.push(db['jhasim']['body']['cmeenduringmaterials'][i]);
                }
            }
            db['jhasim']['body']['cmeenduringmaterials'] = tempEventArray;
            localStorage.setItem('tempDb', JSON.stringify(db));
            db = JSON.parse(localStorage.getItem('tempDb'));
            maskClick();
            openEnduringItems();
        }
        
    }
    var table = document.createElement('TABLE');
    table.id = 'table' + index;
    table.style = 'margin:auto; width:100%;'
    var tr = document.createElement('TR');
    var tdText = document.createElement('TD');
    tdText.style = 'text-align:right; width:30%'
    // Title Label
    var labelTitle = document.createElement('label');
    labelTitle.id = 'labelTitle' + index;
    labelTitle.innerHTML = 'Module Title:';
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

    ////href
    ////
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
    ////
    ////

    ////image
    ////
    var trImage = document.createElement('TR');
    var tdSrcLabel = document.createElement('TD');
    tdSrcLabel.style = 'text-align:right;'
    // Href Label
    var labelSRC = document.createElement('label');
    labelSRC.id = 'labelSrc' + index;
    labelSRC.innerHTML = 'Image Source:';
    labelSRC.style.marginLeft = '15px';
    labelSRC.style.marginTop = '15px';
    tdSrcLabel.appendChild(labelSRC);

    // Href TextArea
    var tdSrcURI = document.createElement('TD');
    var textSrc = document.createElement("INPUT");
    textSrc.id = "textSrc" + index;
    textSrc.className = "text-src";
    tdSrcURI.appendChild(textSrc);

    trImage.appendChild(tdSrcLabel);
    trImage.appendChild(tdSrcURI);


    ////
    ////

    ////secondary html
    ////
    var trSecondary = document.createElement('TR');
    var tdSecondaryLabel = document.createElement('TD');
    tdSecondaryLabel.style = 'text-align:right;'
    // Href Label
    var labelSecondary = document.createElement('label');
    labelSecondary.id = 'labelSrc' + index;
    labelSecondary.innerHTML = 'Secondary Title HTML:';
    labelSecondary.style.marginLeft = '15px';
    labelSecondary.style.marginTop = '15px';
    tdSecondaryLabel.appendChild(labelSecondary);

    // Href TextArea
    var tdSecondaryURI = document.createElement('TD');
    var textSecondary = document.createElement("TEXTAREA");
    textSecondary.id = "textSecondary" + index;
    textSecondary.className = "text-secondary";
    textSecondary.style.height = "100px";
    tdSecondaryURI.appendChild(textSecondary);

    trSecondary.appendChild(tdSecondaryLabel);
    trSecondary.appendChild(tdSecondaryURI);

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

    ////
    ////

    var trHR = document.createElement('TR');
    var tdHR = document.createElement('TD');
    tdHR.setAttribute('colspan', '2');
    tdHR.appendChild(document.createElement('HR'));

    trHR.appendChild(tdHR);

    table.appendChild(trImage);
    table.appendChild(tr);
    table.appendChild(trSecondary);
    table.appendChild(trHREF);
    table.appendChild(trDelete);
    table.appendChild(trHR);

    document.getElementById('scrollContainer').appendChild(table);

}
