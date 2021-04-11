var receipts = {};

function getData() {	
    var receipt = $("#receipt_input").val();
    var subtotal = $("#subtotal_input").val();
    var description = $("#desc_input").val();
    var taxable = $("#taxable_checkbox").prop('checked');
    receipts[receipt] = {subtotal, description, taxable};
    return {
        receipt,
        subtotal,
        description,
        taxable
    };
}

function addEntry() {
    data = getData();

	if(data.receipt == "") {
		window.alert("Receipt# is required.");
		return;
	}
	
	taxable = ""
	if(data.taxable == true) {
		taxable = "\u2716";
	} else if (data.taxable == false) {
		taxable = "\u2714";
	}
    $("#rtab").append(
        "<tr>" +
        "<td id=\"receipt\" type=\"text\">" + data.receipt + "</td>" +
        "<td id=\"subtotal\" type=\"text\">" + data.subtotal + "</td>" +
        "<td id=\"description\" type=\"text\">" + data.description + "</td>" +
        "<td id=\"taxable\" type=\"text\">" + taxable + "</td>" +
        "<td id=\"buttons\">" +
        "<button type=\"button\" id=\"edit_btn\" onclick=\"openForm()\">Edit</button><button type=\"button\" id=\"del\" onclick=\"deleteEntry(this)\">Delete</button>" +
        "</td>" +
        "</tr>"
    );
    clearEntry();
}

function clearEntry() {
    $("#receipt_input").val('');
    $("#subtotal_input").val('');
    $("#desc_input").val('');
    $("#receipt_input").focus();
}

function deleteEntry(ctl) {
    receipt = $(ctl).parents("td").siblings("#receipt").text()
    delete receipts[receipt];
    $(ctl).parents("tr")[0].remove();
}

function openForm(elm) {
	$("#form_receipt_input").val($(elm.parents("td").siblings("#receipt").text();)
	$("#form_subtotal_input").val($(elm.parents("td").siblings("#subtotal").text();)
	$("#form_description_input").val($(elm.parents("td").siblings("#description").text();)
	$("#form_taxable_checkmark").checked($("#taxable_checkbox").prop('checked'));
	
	$("#popupForm")[0].style.display = "block";
}

function closeForm() {
	$("#popupForm")[0].style.display = "none";
}

function submitEdit() {
	var receipt = $("#form_receipt_input").val();
    var subtotal = $("#form_subtotal_input").val();
    var description = $("#form_desc_input").val();
    var taxable = $("#form_taxable_checkbox").prop('checked');
	receipts[receipt] = {subtotal, description, taxable};
	
	$(elm.parents("td").siblings("#receipt").text(receipt);
	$(elm.parents("td").siblings("#subtotal").text(subtotal);
	$(elm.parents("td").siblings("#description").text(description);
	$("#taxable_checkbox").checked(taxable);
}

window.onclick = function (event) {
	let modal = $("#loginPopup")[0];
	if (event.target == modal) {
		$("#receipt_input").focus();
	}
}