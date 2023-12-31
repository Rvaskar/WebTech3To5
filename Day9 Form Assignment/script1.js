// console.log("script is running")


let submitbtn = document.getElementById('submitbtn')

submitbtn.addEventListener('click', function(){
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let Course = document.getElementById("Course").value;
    let phone = document.getElementById("phone").value;
    let addr = document.getElementById("addr").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let Gender =  document.querySelector('input[name = "gender"]:checked').value;
    const hobbies = [];
    document.querySelectorAll('input[name="Hobbies"]:checked').forEach(item => { hobbies.push(item.value); }); 

    

    // console.log(firstname,lastname,Course,phone,addr,email,password)
    alert("name :" + firstname + " "+lastname + " \n course : " + Course + " \n phone no : " + phone + " \n  Gender : " + Gender + " \n Hobbies " + hobbies   + " \n addr :" + addr  + " \n email : " + email + " \n password : " + password)
})