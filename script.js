function clear1() {
  document.getElementById("result").innerText = 0;
}
function signchange() {
  let value = document.getElementById("result").innerText;
  let result = value;
  parseInt(result);
  result = -result;
  if (value == "0") document.getElementById("result").innerText = 0;
  else document.getElementById("result").innerText = result;
}
function btn(btnvalue) {
  let value = document.getElementById("result").innerText;
  if (value == "0") {
    if (btnvalue == "=") document.getElementById("result").innerText = "0";
    else document.getElementById("result").innerText = "" + String(btnvalue);
  } else if (btnvalue == "x")
    document.getElementById("result").innerText = String(value) + "*";
  else if (btnvalue == "=") {
    let result = value;
    try {
      document.getElementById("result").innerText = eval(result);
    } catch {
      document.getElementById("result").innerText = "ERROR";
    }
  } else
    document.getElementById("result").innerText =
      String(value) + String(btnvalue);
}
