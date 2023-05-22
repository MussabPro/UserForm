gender = () => {
  let gender = document.getElementById("Gender").value;
  if (gender == "Other") {
    document.getElementsByClassName("Other")[0].innerHTML =
      '<input type="text" id="Other"/>';
  } else {
    document.getElementsByClassName("Other")[0].innerHTML =
      '<input type="text" id="Other" disabled/>';
  }
};
Add = (Name, FName, Gender) => {
  let tableRow = document.getElementsByTagName("tbody")[1];
  let row = tableRow.insertRow(0);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  cell1.innerHTML = Name;
  cell2.innerHTML = FName;
  cell3.innerHTML = Gender;
};
Submit = () => {
  let Name = document.getElementById("name").value;
  let FName = document.getElementById("Fname").value;
  let Gender = document.getElementById("Gender").value;
  if (Gender == "Other") {
    var Gender1 = document.getElementById("Other").value;
  } else {
    var Gender1 = document.getElementById("Gender").value;
  }

  if (Name == "" || FName == "" || Gender1 == "Select") {
    alert("Name,Father Name Or Gender is Not added");
  } else {
    Add(Name, FName, Gender1);
    document.getElementById("name").value = "";
    document.getElementById("Fname").value = "";
    document.getElementById("Gender").value = "Select";
    document.getElementById("Other").value = "";
    gender();
  }
};
