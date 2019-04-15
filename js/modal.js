var isInit = true;
function createLinkObj(index) {
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

    var trHR = document.createElement('TR');
    var tdHR = document.createElement('TD');
    tdHR.setAttribute('colspan', '2');
    tdHR.appendChild(document.createElement('HR'));

    trHR.appendChild(tdHR);

    table.appendChild(tr);
    table.appendChild(trHREF);
    table.appendChild(trHR);
    // formContainer.appendChild(labelTitle);
    // formContainer.appendChild(textTitle);
    // formContainer.appendChild(document.createElement("BR"));
    // formContainer.appendChild(labelHref);
    // formContainer.appendChild(textHref);
    // formContainer.appendChild(document.createElement("BR"));

    document.getElementById('scrollContainer').appendChild(formContainer);
    //divModal.appendChild(formContainer);
    // //
}
var displayModal = false;
var modalClick = function () {

    //document.getElementById('divModal').innerHTML = '';
    console.log(db);
    displayModal = !displayModal;
    displayModal ? document.getElementById('divModalContainer').style.top = "10%"
        : document.getElementById('divModalContainer').style.top = "-150%";
    //var index = activeIndex;
    if (isInit) {
        isInit = false;

        btnType = "Edit";
        if (btnType === "Edit") {
            // var scrollContainer = document.createElement('DIV');
            // scrollContainer.id = 'scrollContainer';
            // scrollContainer.setAttribute('style', 'overflow-y:scroll; overflow-x:hidden; position:relative;height:100%;');
            // document.getElementById('divModal').appendChild(scrollContainer);
            // for (var i = 0; i < db['jhasim']['header']['headerlinks'].length; i++) {
            //     createLinkObj(i);
            //     document.getElementById("textTitle" + i).value = db['jhasim']['header']['headerlinks'][i]['text'];
            //     document.getElementById("textHref" + i).value = db['jhasim']['header']['headerlinks'][i]['uri'];
            // };


        }
        else if (btnType === "Save") {
            console.log("Save");
        }
        else if (btnType === "New") {

            // document.getElementById("textTitle").value = "";
            // document.getElementById("textHref").value = "";
            // document.getElementById("textDescription").value = "";
            // document.getElementById("textCredits").value = "";
            // document.getElementById("textFaculty").value = "";
            // document.getElementById("textExpiration").value = "";
            // document.getElementById("selectPosition").value = "";
            // document.getElementById("selectPosition").value = "1";
            // document.getElementById("active").checked = true;
        }
    }

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

    if(document.getElementById('scrollContainer') == null){
        var scrollContainer = document.createElement('DIV');
        scrollContainer.id = 'scrollContainer';
        scrollContainer.setAttribute('style', 'overflow-y:scroll; overflow-x:hidden; position:relative;height:100%;');
        document.getElementById('divModal').appendChild(scrollContainer);
    }
    
};

// function addFooter() {

// }

// function createModalContainer() { }