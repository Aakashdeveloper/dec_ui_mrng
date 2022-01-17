function getId(){
    let id = Math.floor(Math.random() * 10000);
    document.getElementById('eid').value = id
}

const validateFname = () => {
    let name = document.getElementById('fname').value;
    let fblock = document.getElementById('firstBlock')
    if(name.trim().length==0){
        document.getElementById('fout').innerHTML="Please Enter First Name";
        fblock.classList.add('has-error')
    }else{
        document.getElementById('fout').innerHTML=""
        fblock.classList.remove('has-error')
        fblock.classList.add('has-success')
    }
}

function validateEmail(){
    let email = document.getElementById('email').value;
    if(email.trim().length==0){
        document.getElementById('eout').innerHTML="Please Enter Email";
    }else{
        if(email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$") == null){
            document.getElementById('eout').innerHTML="Please Enter Valid Email";
        }else{
            document.getElementById('eout').innerHTML="";
        }
    }
}


const validatePassword = () => {
    let pwd = document.getElementById('pwd').value;
    if(pwd.trim().length<15){
       if(pwd.trim().length<8){
        document.getElementById('pout').innerHTML="Min Length of password is 8";
        document.getElementById('ppout').style.display="block";
        document.getElementById('ppout').style.backgroundColor="red";
       }else if(pwd.trim().length<11){
        document.getElementById('pout').innerHTML="";
        document.getElementById('ppout').style.backgroundColor="orange";
       }
    }else{
        document.getElementById('ppout').style.backgroundColor="green";
    }
}


const showPassword = () => {
    let pwd = document.getElementById('pwd');
    if(pwd.type == 'password'){
        pwd.type = 'text'
    }else{
        pwd.type = 'password'
    }
}

function validateCPassword(){
    let pwd = document.getElementById('pwd').value;
    let cpwd = document.getElementById('cpwd').value;
    if(pwd.trim() !== cpwd.trim()){
        document.getElementById('cpout').innerHTML="Password does not match";
    }else{
        document.getElementById('cpout').innerHTML=""
    }
}

const getCity = () => {
    let city = document.getElementById('city').value;
    document.getElementById('cityOut').innerHTML=`Your city is ${city}`
}