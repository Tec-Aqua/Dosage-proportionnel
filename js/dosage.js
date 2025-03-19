
function calculerDosage(){
    let debit_maxi = parseFloat(document.getElementById('debit_maxi').value);
    let debit_pompe = parseFloat(document.getElementById('debit_pompe').value);
    let pourcentage = parseFloat(document.getElementById('pourcentage').value)/100;
    let rate_max = (debit_pompe/pourcentage)/1000;
    document.getElementById('resultat').innerHTML = "RATE MIN : 0 m³/h<br>RATE MAX : " + rate_max.toFixed(2) + " m³/h";
}
