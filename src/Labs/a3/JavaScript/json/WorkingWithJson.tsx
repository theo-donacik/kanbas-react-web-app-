import Destructing from "./Destructing";
import FunctionDestructing from "./FunctionDestructing";
import House from "./House";
import JsonStringify from "./JsonStringify";
import Spreading from "./Spreading";

export default function WorkingWithJson() {
  return (
    <div>
      <h2>JSON</h2>
      <JsonStringify/>
      <House/>
      <Spreading/>
      <Destructing/>
      <FunctionDestructing/>
    </div>
  )
}