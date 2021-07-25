function calculate(){
    var amount = $('#amount').val();
    var percentage = $("#percentage").val();
    var tip = amount * (percentage/100);
    var total = Number(amount)+tip;
    console.log(tip);
    console.log(total);
    $('#tip').val(tip.toFixed(2));
    $('#total').val(total.toFixed(2));
    return false;

}

$('#calculator').submit( calculate );