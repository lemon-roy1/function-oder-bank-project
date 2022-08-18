function getInputFieldValueById(InputId){
    const inputField = document.getElementById(InputId);
    const inputFieldValue = inputField.value
     const inputFieldString = parseFloat(inputFieldValue);
     inputField.value='';
     return inputFieldString;
}
function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValue = element.innerText;
    const elementString = parseFloat(elementValue);
    return elementString
}

function setElementValuebyId (elementId ,newValue){
  const textElement = document.getElementById(elementId );
  textElement.innerText = newValue
}