function validateForm() {
  let studentId = document.studentForm.studentId.value;

  let poin = document.studentForm.poin.value;

  if (studentId== null || studentId == " ") {
    alert("Student ID can't be blank");

    return false;
  } else if (poin.length< 10) {
    alert("Poin must be at least 6 characters long.");
    return false;
  }
}
