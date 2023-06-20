function notNullCheck(string, selector, err) {
  if (string.trim().length < 1) {
    document.querySelector(selector).innerHTML = err;
    document.querySelector(selector).style.display = "inline-block";
    return false;
  } else {
    document.querySelector(selector).style.display = "none";
    return true;
  }
}

function checkStringLength(string, selector, maxLength, minLength, err) {
  let stringValue = string.trim().length;

  if (stringValue < minLength || stringValue > maxLength) {
    document.querySelector(selector).innerHTML = err;
    document.querySelector(selector).style.display = "inline-block";
      return false;
  } else {
    document.querySelector(selector).style.display = "none";
    return true;
  }
}
