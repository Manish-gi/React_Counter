import { useState } from "react";
import './App.css';


  function App() {

    const[count, setCount ] = useState(0);

      function decHandler(){
        setCount(count-1);
      }

      function incHandler(){
        setCount(count+1);
      }

      function resetHandler(){
        setCount(0);
      }

  return (
    <div className=" App  wapper w-[100vh] h-[100vh] flex justify-center item-center bg-[#3441151] flex-col gap-10">
      <div className="heading">Increment & Decrement</div>
      <div className="increaseBtn">
        <button onClick={decHandler} className="decBt bt" >-</button>
      <div className="text">
      {count}
      </div>
        <button className="incBt bt" onClick={incHandler}>+</button>
      </div>

      <button onClick={resetHandler}>Reset</button>
    </div>
  );
}

export default App;
