function frontValidation(){
    var alertBar=document.getElementById("alert")
    var passwordInput =document.getElementById("password-input").value;
    var emailInput= document.getElementById("email-input").value;
    if(passwordInput==""||emailInput==""){
        alertBar.style.display="block";
        alertBar.innerHTML="please enter values in the fields";
    }
   else if(passwordInput.length<8){
        alertBar.style.display="block";
        alertBar.innerHTML="The password should be of 8 characters";
    }
    for(let x=0;x<passwordInput.length;x++){
        let string=passwordInput[x];
        if(string.toLowerCase()===string){
        alertBar.style.display="block";
        alertBar.innerHTML="The password should have numbers,one upp";
        console.log(string);
        }
        else if(string>=0 && string<=9){

        }
    }
}
//**************************************************************************************
var off = false;
function show(){
    if(off===false){
        document.getElementById("eye").innerHTML='<i class="fa-solid fa-eye" style="color: #330044;"></i>';
        document.getElementById("password-input").type="text";
        off=true;
    }
    else if(off===true){
         document.getElementById("eye").innerHTML='<i class="fa-solid fa-eye-slash" style="color: #330044;"></i>';
         document.getElementById("password-input").type="password";
         off=false;
    }
}
//***************************************************************************************