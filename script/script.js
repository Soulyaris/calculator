const firstOperand = document.getElementById("numericInput");
const operatorView = document.getElementById("operator");
const secOperand = document.getElementById("result");
const result = document.querySelector('#bres');
const operators = document.querySelectorAll('input.operator');
const numeric = document.querySelectorAll('.numeric');
const clrCalc = document.querySelector('#bclr');
const bkspc = document.querySelector('#bdel');
const dot = document.querySelector('#bdot');

let operand = 1;

firstOperand.innerText = 0;

clrCalc.addEventListener('click', (e) => {
  operand = 1;
  firstOperand.innerText = "0";
  secOperand.innerText = "";
  operatorView.innerText = "";
})

operators.forEach((oper) => {
  oper.addEventListener('click', (e) => {
      operatorView.innerText = e.srcElement.value;
      operand = 2;
      secOperand.innerText = "0";
  })
})

let evaluate = (operandum, val) => 
  (operandum.innerHTML == "0") ? val : (operandum.innerText.length < 20) ? operandum.innerHTML + val : operandum.innerHTML;

numeric.forEach((num) => {
  num.addEventListener('click', (e) => {
    (operand === 1) ? firstOperand.innerHTML = evaluate(firstOperand, e.srcElement.value) :
      secOperand.innerHTML = evaluate(secOperand, e.srcElement.value);
  })
})

let bkspace = (operandum) => {
  operandum.innerText = operandum.innerText.substr(0, operandum.innerText.length - 1);
  (operandum.innerText.length === 0) ? 
    operandum.innerText = "0" : 
    (operandum.innerText.substr(operandum.innerText.length -1, 1) === ".") ?
      operandum.innerText = operandum.innerText.substr(0, operandum.innerText.length - 1) : {};
  return operandum.innerText;
}

bkspc.addEventListener('click', (e) => {
  (operand === 1) ? 
    firstOperand.innerText = bkspace(firstOperand) : secOperand.innerText = bkspace(secOperand);
})

let dotCheck = (operandum) => (operandum.innerText.indexOf('.') > 0) ? "" : ".";

dot.addEventListener('click', (e) => {
  (operand === 1) ? firstOperand.innerText += dotCheck(firstOperand) : secOperand.innerText += dotCheck(secOperand);
})

result.addEventListener('click', (e) => {
  if (operatorView.innerText === "") return;
  if (operatorView.innerText === "/" && secOperand.innerText === "0") {secOperand.innerText = "ERROR"; return};
  let statement = firstOperand.innerText + operatorView.innerText + secOperand.innerText;
  firstOperand.innerText = eval(statement);
  secOperand.innerText = "";
  operatorView.innerText = "";
  operand = 1;
})