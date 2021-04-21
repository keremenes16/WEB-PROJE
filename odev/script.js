var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["adsoyad"] = document.getElementById("adsoyad").value;
    formData["ogrno"] = document.getElementById("ogrno").value;
    formData["sinif"] = document.getElementById("sinif").value;
    formData["sehir"] = document.getElementById("sehir").value;
	 formData["hobi"] = document.getElementById("hobi").value;
	  formData["dogum"] = document.getElementById("dogum").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.adsoyad;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.ogrno;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.sinif;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.sehir;
    cell4 = newRow.insertCell(4);
	cell4.innerHTML = data.hobi;
    cell4 = newRow.insertCell(5);
	cell4.innerHTML = data.dogum;
    cell4 = newRow.insertCell(6);
    cell4.innerHTML = `<a onClick="onEdit(this)">DÜZENLE</a>
                       <a onClick="onDelete(this)">SİL</a>`;
}

function resetForm() {
    document.getElementById("adsoyad").value = "";
    document.getElementById("ogrno").value = "";
    document.getElementById("sinif").value = "";
    document.getElementById("sehir").value = "";
	document.getElementById("hobi").value = "";
	document.getElementById("dogum").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("adsoyad").value = selectedRow.cells[0].innerHTML;
    document.getElementById("ogrno").value = selectedRow.cells[1].innerHTML;
     document.getElementById("sinif").value = selectedRow.cells[2].innerHTML;
     document.getElementById("sehir").value = selectedRow.cells[3].innerHTML;
	 document.getElementById("hobi").value = selectedRow.cells[4].innerHTML;
	 document.getElementById("dogum").value = selectedRow.cells[5].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.adsoyad;
    selectedRow.cells[1].innerHTML = formData.ogrno;
    selectedRow.cells[2].innerHTML = formData.sinif;
     selectedRow.cells[3].innerHTML = formData.sehir;
	 selectedRow.cells[4].innerHTML = formData.hobi;
	  selectedRow.cells[5].innerHTML = formData.dogum;
}

function onDelete(td) {
    if (confirm('Bu Öğrencinin Kaydınız Silmek İstediğinizden Emin misiniz?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("adsoyad").value == "") {
        isValid = false;
        document.getElementById("adsoyadValidationError").classList.remove("hide");
		document.getElementById("ogrnoValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("adsoyadValidationError").classList.contains("hide"))
            document.getElementById("ogrnoValidationError").classList.add("hide");
    }
    return isValid;
}













