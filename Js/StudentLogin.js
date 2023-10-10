// function validateForm() {
//   let studentId = document.studentForm.studentId.value;

//   let pin = document.studentForm.pin.value;

//   if (studentId<10 || studentId == " ") {
//     alert("Student ID can't be blank");

//     return false;
//   } else if (pin.length< 6) {
//     alert("Pin must be at least 6 characters long.");
//     return false;
//   }else{

//   }
// }
function validateForm(){
    // event.preventDefault();


    let studentId=document.studentForm.studentId.value;
    let pin=document.studentForm.pin.value

if (studentId==null||studentId=="") {
    alert("StudentId can't be blank.");
    window.location.replace("Admission.html")
    return false
}else if (pin.lenght<6) {
    alert("Pin must be at least 6 characters long.");
    return false;
}
}