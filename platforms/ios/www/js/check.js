$("#print-check").click(function () {
    console.log("Click Print");

    $("#fail-check-receiver-alert").hide();
    $("#fail-check-amount-alert").hide();

    if (isEmpty($("#check-receiver").val())) {
        console.log("empty check-receiver");
        $("#fail-check-receiver-alert").show();
    } else if (isEmpty($("#check-amount").val())) {
        console.log("empty check-amount");
        $("#fail-check-amount-alert").show();
    } else {
        const fund = funds[paramUserId];

        $("#cp-name").text(fund.name);
        $("#cp-address1").text(fund.address1);
        $("#cp-address2").text(fund.address2);
        $("#cp-date").text(currentDate());
        $("#cp-digit-amount").text(numberWithCommas($("#check-amount").val()));
        $("#cp-amount").text(convertNumberToWords($("#check-amount").val()));
        $("#cp-order").text($("#check-receiver").val());

        window.print();

        printCheckClear();
    }

});

function printCheckClear() {
    $("#fail-check-receiver-alert").hide();
    $("#fail-check-amount-alert").hide();
    $("#check-receiver").val("");
    $("#check-amount").val("");

    $("#cp-name").text("");
    $("#cp-address1").text("");
    $("#cp-address2").text("");
    $("#cp-date").text("");
    $("#cp-digit-amount").text("");
    $("#cp-amount").text("");
    $("#cp-order").text("");
}
