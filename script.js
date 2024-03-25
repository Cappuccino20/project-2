
/*validation*/
 function ValidateForm(CardName,CardNumber,ExpirationMonth,ExpirationYear,cvv) {
     //regular expression for characters and spaces only
     var letters = /^[A-Za-z\s]+$/;
     if (CardName.value.match(letters)) {
         alert('Your name accepted');
         //regular expression for numbers only length 16
         var cardno = /^([0-9]{16})$/;
         if (CardNumber.value.match(cardno)) {
             alert('Your credit card accepted');
             //regular expression for numbers only length 2
             var expiremonth = /^([0-9]{2})$/;
             if(ExpirationMonth.value.match(expiremonth)){
                 alert('expire month is accepted');
                 //regular expression for numbers only length 4
                 var expireyear = /^([0-9]{4})$/;
                 if(ExpirationYear.value.match(expireyear)){
                     alert('expire year is accepted');
                     //regular expression for numbers only length 3
                     var cvvno = /^([0-9]{3})$/;
                     if(cvv.value.match(cvvno)){
                         alert('expire cvv is accepted');
                         alert("form submitting");
                         return true;
                     }else{
                         alert("Not a valid cvv ! 3 Numeric required")
                         return false;
                     }
                 }else{
                     alert("Not a valid expire year ! 4 Numeric required")
                     return false;
                 }
             }else{
                 alert("Not a valid expire month ! 2 Numeric required")
                 return false;
             }
         }
         else {
             alert("Not a valid credit card number! 16 Numeric required");
             return false;
         }
     }
     else {
         alert('Please enter card Name ! alphabet characters and spaces only accepted');
         return false;
     }
 }

// Fade in Fade out Slider
function height() {
	var h = window.innerHeight;
	var a = document.getElementById('container');
	a.style.height = h+"px";
	}

window.addEventListener('load',height);
window.addEventListener('resize',height);
// End of Fade in Fade out Slider


// women h1 jQuery
$(document).ready(function(){
  $("h1").hover(function(){
    $(this).css("background-color", "#FFC300");
    }, function(){
    $(this).css("background-color", "pink");
  });
});
