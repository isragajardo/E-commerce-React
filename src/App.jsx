import NavBar from "./components/NavBar";
import ItemListContainer from "./components/Item/ItemListContainer";
import ItemDetailContainer from "./components//Item/ItemDetailContainer";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div>

      <BrowserRouter>

      <NavBar/>

      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route path="/productos/:categoria" element={<ItemListContainer/>}/>

       

      </Routes>




     
      
      </BrowserRouter>


      
      
     
    </div>
  );
}

export default App;
