import {useEffect, useState} from "react";


function App() {

  const [count, setCount] = useState("")

  useEffect(() => {
   console.log('Effect runs');
  
  }, []);
  const handleOnclick = ()=> {

  };
  

  return (
    <div>
      <form>
        <input type="text" />
        <button>Search</button>
      </form>
      {count}
      <button onclick={handleOnclick}>Click</button>
    </div>
  );
}

export default App;
