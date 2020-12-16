var PersonObj = [
    {
        username: "Mumtaz",
        password:"mumtaz1000"
    },
    {
        username: "customer",
        password:"password123"
    }
]

function checkFunction () {
    var username = document.querySelector("#username").value;
    var password = document.querySelector("#password").value;
for(i=0; i<PersonObj.length; i++){
    if(username == PersonObj[i].username && password == PersonObj[i].password){
alert(username + " is logged in!!!");
updateCards();
return
    }}
     alert("Incorrect user name or password!");
}

function updateCards(){
    var btn = document.getElementById('creating-card');
    btn.style.display="block";
}
//Card update system

