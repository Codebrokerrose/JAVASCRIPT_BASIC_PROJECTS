function answer(){
    var amount_input = parseInt(document.getElementById("amount").value);
    var rate_input = parseInt(document.getElementById("rate").value);
    var time_input = parseInt(document.getElementById("time").value);

    var interest = amount_input * rate_input * time_input/100 ;
    var total = interest + amount_input;

    document.getElementById("output_1").innerHTML = amount_input;
    document.getElementById("output_2").innerHTML = interest;
    document.getElementById("output_3").innerHTML = total;
}