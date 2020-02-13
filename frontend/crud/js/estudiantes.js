
let students = [
    { id:"1001", name:"Bryan", lastName:"Torres", age:"18", mail:"bryk@gmail.com", career:"001"  }
];

let tempStudent1 = null;

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
    let existStudent = students.find(s => student.id === s.id)
    if(existStudent){
         console.log("El estudiante ya existe");
         return;
}

    
    students.push(student);
    studentsInList();
}

function studentsInList() {
    let list = document.getElementById("listStudents");
    let data = "";
    for (let i = 0; i < students.length; i++) {
        let myStudent = students[i];
        data += "<tr>"
        data += `<td>${myStudent.id}</td>`
        data += `<td>${myStudent.name} ${myStudent.lastName}</td>`
        data += `<td>${myStudent.mail}</td>`
        data += `<td>${myStudent.career}</td>`
        data += `<td><button type="button" onclick="loadInfo(${i})" class="btn btn-primary btn-sm">Editar</button></td>`
        data += '<td><button type="button" onclick="delStudent('+i+')" class="btn btn-primary btn-sm">Eliminar</button></td>'
        data += "</tr>"
    }
    list.innerHTML = data;
}

function loadInfo(index){
    let student = students[index];
    tempStudent1 = index;
    document.getElementById("id").value = student.id;
    document.getElementById("name").value = student.name;
    document.getElementById("lastName").value = student.lastName;
    document.getElementById("age").value = student.age;
    document.getElementById("mail").value = student.mail;
    document.getElementById("careers").value = student.career;

    document.getElementById("btnCreateStudent").style.display = "none";
    document.getElementById("btnUpStudent").style.display = "inline";
}

function delStudent(index) {
    students.splice(index,1);
    studentsInList();
}

function upStudent() {
    let updatedStudent = getValues();
    students.splice(tempStudent1,1,updatedStudent);
    studentsInList();
    clearInfo();
    document.getElementById("btnCreateStudent").style.display = "inline";
    document.getElementById("btnUpStudent").style.display = "none";
}

function clearInfo() {
   document.getElementById("id").value  = "";  
    document.getElementById("name").value  = "";
    document.getElementById("lastName").value  = "";
    document.getElementById("age").value  = "";
    document.getElementById("mail").value  = "";
    document.getElementById("careers").value  = "";
    
   
}  
