
function signup() {
    // signup
   let userName=uname.value;
   let password=pass.value;
   let confirmPass=cpass.value;
   let savings=0;
   let income=0;
   let expense=0;
if (uname.value ='' || pass.value =='' || cpass == '') {
    alert("Please fill all the fields");   
}
else if (userName in localStorage) {
    alert("You Already have an  account")
    window.location='./index.html'
    
}
else if(password != confirmPass){
alert("Confirm Password not matching");

}
else{
    let userDetails={
        userName,
        password,
        savings,
        income,
        expense
    };
    console.log(userDetails);
    localStorage.setItem(userName,JSON.stringify(userDetails));
    alert("SignUp Successfull");
    window.location='./index.html'
   

}
uname.value='';
pass.value='';
cpass.value='';


}
// login
function login() {
    // Fetching user input
    let username=uname.value;
    let password=pass.value;
    console.log(username,password);
    // Checking user
    if (uname.value =='' || pass.value == '') {
        alert("Please fill all fiels");
        
    }
    else if(username in localStorage) {
        let userDetails=JSON.parse(localStorage.getItem(username))

            if (password == userDetails.password) {
                localStorage.setItem("username",username);
                alert("Login Successful ");
                window.location='./home.html';
            }
            else{
                alert("Incorrect Password");
            }
            
        }
        else{
            alert("Invalied Username");
        }
    

    
}
// page load
function pageLoad() {
    let uname=localStorage.getItem('username');
    document.getElementById('username').innerHTML=`Welcome ${uname}`;
    let userDetails=JSON.parse(localStorage.getItem(uname));
    document.getElementById('balance').innerHTML=`&#8377; ${userDetails.savings}`;
    document.getElementById('spend').innerHTML=`&#8377; ${userDetails.expense}`;
    document.getElementById('earned').innerHTML=`&#8377; ${userDetails.income}`;
    
}

function addIncome() {
    // fetching user input
let description= desc.value;
let amount=amt.value;
// retrive data
if (desc.value == ''|| amt.value == ''){
    alert("Please fill all fields");
}
else{
let uname=localStorage.getItem('username');;
let userDetails=JSON.parse(localStorage.getItem(uname));
console.log(userDetails);
let credict=Number(amount);
console.log(credict);
userDetails.income += credict;
userDetails.savings +=credict;
console.log(userDetails);
localStorage.setItem(uname,JSON.stringify(userDetails))
document.getElementById('earned').innerHTML= `&#8377; ${userDetails.income}`;
document.getElementById('balance').innerHTML= `&#8377; ${userDetails.savings}`;

// income History
let incomeContainer = document.getElementById('income_container');
console.log(incomeContainer);
let div = document.createElement('div');
incomeContainer.appendChild(div)
div.classList.add("item_income");
    console.log(div);
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let span=document.createElement('span');
    p1.innerHTML = description;
    div.appendChild(p1);
    p2.innerHTML =  ` &#8377; ${amount}`;
    div.appendChild(p2);
    span.innerHTML= "\u00d7";
    div.appendChild(span)
    incomeContainer.addEventListener("click",function (e) {
        if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
            
        }
        
    })
document.querySelector('.warning').style.display='none';

}

desc.value='';
amt.value='';


}
function addExpence() {
let uname=localStorage.getItem('username');;
let userDetails=JSON.parse(localStorage.getItem(uname));
let description= document.getElementById('desc').value;
let amount=document.getElementById('amt').value;
if(desc.value == ''|| amt.value == ''){
    alert("Please fill all fields");

}
// else if(userDetails.savings < amt.value){
//         document.getElementById('lessSavings').innerHTML=`Your Savings is insufficient `;

// }
else if(userDetails.savings > amt.value){
console.log(userDetails);
let debit=Number(amount);
console.log(debit);
userDetails.expense += debit;
userDetails.savings -=debit;
console.log(userDetails);
localStorage.setItem(uname,JSON.stringify(userDetails))
document.getElementById('spend').innerHTML= `&#8377; ${userDetails.expense}`;
document.getElementById('balance').innerHTML= `&#8377; ${userDetails.savings}`;
    
// Expence History
let expenceContainer = document.getElementById('expense_container');
console.log(expenceContainer);
let div = document.createElement('div');
expenceContainer.appendChild(div)
div.classList.add("item_expense");
    console.log(div);
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let span=document.createElement('span');
    p1.innerHTML = description;
    div.appendChild(p1);
    p2.innerHTML =  `&#8377; ${amount}`;
    div.appendChild(p2);
    span.innerHTML= "\u00d7";
    div.appendChild(span)
    expenceContainer.addEventListener("click",function (e) {
        if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
            
        }
        
    })
    
   
document.querySelector('.warning').style.display='none';


}
else{
    const warning =document.getElementById('toast');
    var toast = new bootstrap.Toast(warning);
    // alert("less balence")
    toast.show()

}
desc.value='';
amt.value='';

}
// logout
function logoutUser() {
    window.location= './index.html';
    localStorage.clear();
    
    
}
function resetEarned(){
    let uname=localStorage.getItem('username');;
    let userDetails=JSON.parse(localStorage.getItem(uname));
    userDetails.income=0;
    userDetails.savings=0;
    console.log(userDetails);
    document.getElementById('earned').innerHTML= `&#8377; ${userDetails.income}`;
    document.getElementById('balance').innerHTML= `&#8377; ${userDetails.savings}`;

    localStorage.setItem(uname,JSON.stringify(userDetails));

}

function resetExpence(){
    let uname=localStorage.getItem('username');;
    let userDetails=JSON.parse(localStorage.getItem(uname));
    userDetails.expense=0;
    console.log(userDetails);
    document.getElementById('spend').innerHTML= `&#8377; ${userDetails.expense}`;
    document.getElementById('balance').innerHTML= `&#8377; ${userDetails.income}`;

    localStorage.setItem(uname,JSON.stringify(userDetails));

}   







