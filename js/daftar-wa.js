//<![CDATA[
$(document).on('click','.send_form', function(){
var input_blanter = document.getElementById('wa_name');

/* Whatsapp Settings */
var walink = 'https://web.whatsapp.com/send',
    phone = '6285249622709',
    walink2 = 'Halo, saya ingin Mendaftar',
    text_yes = 'Pesan anda telah terkirim.',
    text_no = 'Isi semua sebelum dikirim';

/* Smartphone Support */
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
var walink = 'whatsapp://send';
}

if("" != input_blanter.value){

 /* Call Input Form */
var input_select1 = $("#wa_select :selected").text(),
    input_name1 = $("#wa_name").val(),
    input_number1 = $("#wa_number").val(),
    input_address1 = $("#wa_address").val(),
    input_textarea1 = $("#wa_textarea").val();

/* Final Whatsapp URL */
var blanter_whatsapp = walink + '?phone=' + phone + '&text=' + walink2 + '%0A%0A' +
    '*Nama*             : ' + input_name1 + '%0A' +
    '*Jenis Barang*  : ' + input_select1 + '%0A' +
    '*Jumlah*           : ' + input_number1 + '%0A' +
    '*Alamat*           : ' + input_address1 + '%0A' +
    '*Catatan*          : ' + input_textarea1 + '%0A';

/* Whatsapp Window Open */
window.open(blanter_whatsapp,'_blank');
document.getElementById("text-info").innerHTML = '<span class="yes">'+text_yes+'</span>';
} else {
document.getElementById("text-info").innerHTML = '<span class="no">'+text_no+'</span>';
}
});
//]]>