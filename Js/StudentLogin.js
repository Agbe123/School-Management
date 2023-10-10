function validateForm() {
  let studentId = document.studentForm.studentId.value;

  let pin = document.studentForm.pin.value;

  if (studentId== null || studentId == " ") {
    alert("Student ID can't be blank");

    return false;
  } else if (pin.length< 10) {
    alert("Pin must be at least 6 characters long.");
    return false;
  }
}
