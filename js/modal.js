var isInit = true;
function createLinkObj(index) {

    var deleteClick = function (src) {
        var area = localStorage.getItem('selected');

        // strip text from button id to get index value
        var id = src.target.id.replace("deleteBtn", "");
        tempActivitiesArray = [];
        
        if (area == 'menuItems') {
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
    }
    // Form Container
    var formContainer = document.createElement('DIV');
    formContainer.id = "formContainer" + index;
    //formContainer.className = 'form-container';

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

    formContainer.appendChild(table);

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

    var trHR = document.createElement('TR');
    var tdHR = document.createElement('TD');
    tdHR.setAttribute('colspan', '2');
    tdHR.appendChild(document.createElement('HR'));

    trHR.appendChild(tdHR);

    table.appendChild(tr);
    table.appendChild(trHREF);
    table.appendChild(trDelete);
    table.appendChild(trHR);

    document.getElementById('scrollContainer').appendChild(formContainer);
}
var displayModal = false;
var modalClick = function () {
    console.log(db);
    displayModal = !displayModal;
    displayModal ? document.getElementById('divModalContainer').style.top = "10%"
        : document.getElementById('divModalContainer').style.top = "-150%";

}
var enableModal = function () {

    var divModalContainer = document.createElement("DIV");
    divModalContainer.id = "divModalContainer";
    divModalContainer.style.position = "absolute";
    divModalContainer.className = 'div-modal-container';


    var divModal = document.createElement("DIV");
    divModal.id = "divModal";
    divModal.classList = "div-modal";

    // Add Module
    // //
    // AddModule Button
    var btnAddModule = document.createElement('button');
    btnAddModule.id = "btnAddModule";
    btnAddModule.className = 'btn-info';
    btnAddModule.setAttribute('type', 'button');
    btnAddModule.innerHTML = "New";
    btnAddModule.style.borderRadius = "5px";
    btnAddModule.style.padding = "10px";
    btnAddModule.style.minWidth = "68px";
    btnAddModule.style.position = "relative";
    btnAddModule.style.top = "0";
    btnAddModule.style.marginLeft = "7px";
    btnAddModule.style.marginTop = "7px";
    btnAddModule.addEventListener('click', function () { btnType = "New"; newObj(btnType); });

    // document.body.appendChild(btnAddModule);
    // //

    // Edit Form
    // //



    // //
    // Footer Div
    var divFooter = document.createElement("DIV");
    divFooter.id = "divFooter";
    divFooter.className = 'div-footer';
    divFooter.style.bottom = "-50px";
    divFooter.style.textAlign = "center";
    divFooter.style.zIndex = '4';
    divFooter.style.width = '100%';

    // Submit Edit Button
    var btnSubmitEdit = document.createElement('button');
    btnSubmitEdit.id = "btnSubmitEdit";
    btnSubmitEdit.className = 'btn-success';
    btnSubmitEdit.setAttribute('type', 'button');
    btnSubmitEdit.innerHTML = "Save";
    btnSubmitEdit.style.borderRadius = "5px";
    btnSubmitEdit.style.padding = "10px";
    btnSubmitEdit.style.minWidth = "68px";
    btnSubmitEdit.addEventListener('click', function () { saveClick(this); });

    // Cancel Button
    var btnCancel = document.createElement('button');
    btnCancel.id = "btnCancel";
    btnCancel.className = 'btn-warning';
    btnCancel.setAttribute('type', 'button');
    btnCancel.innerHTML = "Cancel";
    btnCancel.style.borderRadius = "5px";
    btnCancel.style.padding = "10px";
    btnCancel.style.minWidth = "68px";
    btnCancel.addEventListener('click', function () { maskClick(); });
    // //

    divFooter.appendChild(btnAddModule);
    divFooter.appendChild(btnSubmitEdit);
    divFooter.appendChild(btnCancel);

    divModalContainer.appendChild(divFooter);

    divModalContainer.appendChild(divModal);

    document.body.appendChild(divModalContainer);

    if (document.getElementById('scrollContainer') == null) {
        var scrollContainer = document.createElement('DIV');
        scrollContainer.id = 'scrollContainer';
        scrollContainer.setAttribute('style', 'overflow-y:scroll; overflow-x:hidden; position:relative;height:100%;padding: 50px 50px 25px 25px;');
        document.getElementById('divModal').appendChild(scrollContainer);
    }

};
