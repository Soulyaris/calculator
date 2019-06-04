const firstOperand = document.getElementById("numericInput");
const operatorView = document.getElementById("operator");
const secOperand = document.getElementById("result");
const result = document.querySelector('#bres');
const operators = document.querySelectorAll('input.operator');
const numeric = document.querySelectorAll('.numeric');
const clrCalc = document.querySelector('#bclr');
const bkspc = document.querySelector('#bdel');
const dot = document.querySelector('#bdot');
const body = document.body;
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
  (operandum.innerText == "0" || operandum.innerText == "ERROR") ? val : (operandum.innerText.length < 20) ? operandum.innerText + val : operandum.innerText;

numeric.forEach((num) => {
  num.addEventListener('click', (e) => {
    (operand === 1) ? firstOperand.innerText = evaluate(firstOperand, e.srcElement.value) :
      secOperand.innerText = evaluate(secOperand, e.srcElement.value);
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

body.addEventListener('keydown', (e) => {
  console.log(e.key);
  switch (e.key){
    case "0": document.getElementById("b0").click(); break;
    case "1": document.getElementById("b1").click(); break;
    case "2": document.getElementById("b2").click(); break;
    case "3": document.getElementById("b3").click(); break;
    case "4": document.getElementById("b4").click(); break;
    case "5": document.getElementById("b5").click(); break;
    case "6": document.getElementById("b6").click(); break;
    case "7": document.getElementById("b7").click(); break;
    case "8": document.getElementById("b8").click(); break;
    case "9": document.getElementById("b9").click(); break;
    case "+": document.getElementById("badd").click(); break;
    case "-": document.getElementById("bsub").click(); break;
    case "/": document.getElementById("bdiv").click(); break;
    case "*": document.getElementById("bmul").click(); break;
    case "Backspace": document.getElementById("bdel").click(); break;
    case "Enter":
    case "=": document.getElementById("bres").click(); break;
    case ".": document.getElementById("bdot").click(); break;
    case "Delete":
    case "c":
    case "C": document.getElementById("bclr").click(); break;
  };
})