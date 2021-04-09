var receipts = {};

function getData() {
    var receipt = $("#receipt_input").val();
    var subtotal = $("#subtotal_input").val();
    var description = $("#desc_input").val();
    var taxable = $("#taxable_checkbox").val();
    receipts[receipt] = {subtotal, description, taxable};
    console.log(receipts);
    return {
        receipt,
        subtotal,
        description,
        taxable
    };
}

function addEntry() {
    data = getData();
    $("#rtab").append(
        "<tr>" +
        "<td id=\"receipt\" type=\"text\">" + data.receipt + "</td>" +
        "<td id=\"subtotal\" type=\"text\">" + data.subtotal + "</td>" +
        "<td id=\"description\" type=\"text\">" + data.description + "</td>" +
        "<td id=\"taxable\" type=\"text\">" + data.taxable + "</td>" +
        "<td id=\"buttons\">" +
        "<button type=\"button\" id=\"del\" onclick=\"deleteEntry(this)\">Delete</button>" +
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
    console.log(receipts);
    $(ctl).parents("tr")[0].remove();
}