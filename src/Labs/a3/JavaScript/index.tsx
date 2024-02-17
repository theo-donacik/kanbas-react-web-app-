import VariablesAndConstants
  from "./variables/VariablesAndConstants";
import VariableTypes 
  from "./variables/VariableTypes"
import IfElse from "./conditionals/IfElse"
import TernaryOperator from "./conditionals/TernaryOperator"
import WorkingWithFunctions
  from "./functions/WorkingWithFunctions"
import WorkingWithArrays from "./arrays/WorkingWithArrays";
import WorkingWithJson from "./json/WorkingWithJson";
import TemplateLiterals from "./string/TemplateLiterals";

function JavaScript() {
  console.log("Hello World!")
  var functionScoped = 2;
  let blockScoped = 5;
  const constant1 = functionScoped - blockScoped;
  let numberArray1 = [1, 2, 3, 4, 5];
  let stringArray1 = ['string1', 'string2'];

  let variableArray1 = [
    functionScoped,   blockScoped,
    constant1,        numberArray1,   stringArray1
  ];
  console.log("Working with arrays")
  console.log(functionScoped)
  console.log(blockScoped)
  console.log(constant1)
  console.log(numberArray1)
  console.log(stringArray1)
  console.log(variableArray1)
   return(
      <div>
         <h1>JavaScript</h1>
         <VariablesAndConstants/>
         <VariableTypes/>
         <IfElse/>
         <TernaryOperator/>
         <WorkingWithFunctions/>
         <WorkingWithArrays/>
         <WorkingWithJson/>
         <TemplateLiterals/>
      </div>
   );
}
export default JavaScript
