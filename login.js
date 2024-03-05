document.querySelector("#submit").addEventListener("click",()=>{

    //email validation

    var mailid=document.querySelector('#mail').value;
    var expression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)(?:\.[a-zA-Z0-9]+)*$/

    // password matching
    var pass= document.querySelector("#pass").value
    var pass_upper = /[A-Z]/g
    var pass_number= /[0-9]/g
    var pass_char = /@/g

    if(expression.test(mailid) && pass_upper.test(pass) && pass_number.test(pass) && pass_char.test(pass)){
        if(pass==="ZenTradesTest@123"){
            alert("Signed Successfully");
            document.location.href = "dashboard.html"
        }
        else{
            alert("wrong password")
        }
    }
    else{
        alert("invalid email or invalid password")
    }

    console.log(pass)
    
})

