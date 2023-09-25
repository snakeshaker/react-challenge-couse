import Header from "./components/Layout/header";
import Meals from "./components/Meals";
import Cart from "./components/Cart";
import {DUMMY_MEALS} from "./utils/constants";
import {useState} from "react";

function App() {
    const [cartIsOpen, setCartIsOpen] = useState(false);

  return (
    <div>
        <Cart items={DUMMY_MEALS}/>
      <Header/>
        <Meals/>
    </div>
  );
}

export default App;
