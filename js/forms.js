$(document).ready(function() {
var loader = "<div class='d-flex justify-content-center'><div class='spinner-border' style='height:16px; width:16px; margin-top:4px;'  role='status'><span class='sr-only'></span></div>&nbsp;Loading</div>";

$("#app_frm").on("submit", function(){
$("#sub_btn").blur();
var current_effect = 'bounce';
run_waitMe(current_effect);
function run_waitMe(effect){
$('#app_frm').waitMe({

effect: '',
text: '',

bg: 'rgba(255,255,255,0)',

color: '',

maxSize: '',

waitTime: -1,
source: '',

textPos: 'vertical',

fontSize: '',
onClose: function() {}

});
}
document.getElementById('sub_btn').innerHTML = loader
})

$("#app_frm2").on("submit", function(){
$("#sub_btn2").blur();
var current_effect = 'bounce';
run_waitMe(current_effect);
function run_waitMe(effect){
$('#app_frm2').waitMe({

effect: '',
text: '',

bg: 'rgba(255,255,255,0)',

color: '',

maxSize: '',

waitTime: -1,
source: '',

textPos: 'vertical',

fontSize: '',
onClose: function() {}

});
}
document.getElementById('sub_btn2').innerHTML = loader
})

$("#app_frm3").on("submit", function(){
$("#sub_btn3").blur();
var current_effect = 'bounce';
run_waitMe(current_effect);
function run_waitMe(effect){
$('#app_frm3').waitMe({

effect: '',
text: '',

bg: 'rgba(255,255,255,0)',

color: '',

maxSize: '',

waitTime: -1,
source: '',

textPos: 'vertical',

fontSize: '',
onClose: function() {}

});
}
document.getElementById('sub_btn3').innerHTML = loader
})

$("#app_frm4").on("submit", function(){
$("#sub_btn4").blur();
var current_effect = 'bounce';
run_waitMe(current_effect);
function run_waitMe(effect){
$('#app_frm4').waitMe({

effect: '',
text: '',

bg: 'rgba(255,255,255,0)',

color: '',

maxSize: '',

waitTime: -1,
source: '',

textPos: 'vertical',

fontSize: '',
onClose: function() {}

});
}
document.getElementById('sub_btn4').innerHTML = loader
})

$("#app_frm5").on("submit", function(){
$("#sub_btn5").blur();
var current_effect = 'bounce';
run_waitMe(current_effect);
function run_waitMe(effect){
$('#app_frm5').waitMe({

effect: '',
text: '',

bg: 'rgba(255,255,255,0)',

color: '',

maxSize: '',

waitTime: -1,
source: '',

textPos: 'vertical',

fontSize: '',
onClose: function() {}

});
}
document.getElementById('sub_btn5').innerHTML = loader
})

$("#app_frm6").on("submit", function(){
$("#sub_btn6").blur();
var current_effect = 'bounce';
run_waitMe(current_effect);
function run_waitMe(effect){
$('#app_frm6').waitMe({

effect: '',
text: '',

bg: 'rgba(255,255,255,0)',

color: '',

maxSize: '',

waitTime: -1,
source: '',

textPos: 'vertical',

fontSize: '',
onClose: function() {}

});
}
document.getElementById('sub_btn6').innerHTML = loader
})


$("#new_member").on("click", function(){
var new_pw = document.getElementById('login').value;

if (new_pw == "") {
alert("Error: Please enter login password.");
return false;
}

if((new_pw).length < 8)
{
alert("Error: Password should be minimum 8 characters.");
return false;
}


$("#new_member").blur();
var current_effect = 'bounce';
run_waitMe(current_effect);
function run_waitMe(effect){
$('#load').waitMe({

effect: '',
text: '',

bg: 'rgba(255,255,255,0)',

color: '',

maxSize: '',

waitTime: -1,
source: '',

textPos: 'vertical',

fontSize: '',
onClose: function() {}

});
}
document.getElementById('new_member').innerHTML = loader

});


$("#sub_btnp").on("click", function(){
$("#sub_btnp").blur();
var current_pw = document.getElementById('cpass').value;
var new_pw = document.getElementById('npass').value;
var confirm_pw = document.getElementById('cnpass').value;

if (current_pw == "") {
alert("Error: Please enter your current password.");
return false;
}

if((current_pw).length < 8)
{
alert("Error: Current password should be minimum 8 characters.");
return false;
}

if (new_pw == "") {
alert("Error: Please enter your new password.");
return false;
}

if((new_pw).length < 8)
{
alert("Error: New password should be minimum 8 characters.");
return false;
}

if (confirm_pw == "") {
alert("Error: Please enter confirmation password.");
return false;
}

if((confirm_pw).length < 8)
{
alert("Error: Confirmation password should be minimum 8 characters.");
return false;
}


if(confirm_pw != new_pw)
{
alert("Error: Password confirmation does not match.");
return false;
}


var current_effect = 'bounce';
run_waitMe(current_effect);
function run_waitMe(effect){
$('#load100').waitMe({

effect: '',
text: '',

bg: 'rgba(255,255,255,0.2)',

color: '',

maxSize: '',

waitTime: -1,
source: '',

textPos: 'vertical',

fontSize: '',
onClose: function() {}

});
}

document.getElementById('sub_btnp').innerHTML = loader;

return true;

})

});
