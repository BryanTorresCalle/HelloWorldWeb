
let estudiantes = [];

function getValues() {
    let id = document.getElementById("id").value;    
    let name = document.getElementById("name").value; 
    let lastName = document.getElementById("lastName").value; 
    let age = document.getElementById("age").value; 
    let mail = document.getElementById("mail").value; 
    let career = document.getElementById("careers").value; 
    
    let myStudent = {id,name,lastName,lastName,age,mail,career}
    return myStudent
   
    
}

function createStudent() {

    let student = getValues();
    estudiantes.push(estudiantes);
    console.log(estudiantes);
    
}