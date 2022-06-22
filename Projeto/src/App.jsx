import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState,useEffect } from 'react'
import './App.css'
import Main from "./pages/Main/Main";
import Loader from "./componentes/Loader/Loader";
import Form from "./componentes/Form/Form";
import Password from "./componentes/Password/Password";
import Cadastro from "./componentes/Cadastro/Cadastro";
import Pagina404 from "./componentes/Pagina404/Pagina404";
import EnvEmail from "./componentes/EnvEmail/EnvEmail";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() =>{
   setTimeout(() =>{
     setIsLoading(false);
   }, 3500);
  
  });

  return (
    <div className="App">
      {isLoading == true ? (
       <Loader />
      ) : (
       <BrowserRouter>
       <Routes>
        <Route path='/'   element={<Main />}/>
        <Route path='/login' element={<Form />} />
        <Route path='/password' element={<Password />} />
        <Route path='/envEmail' element={<EnvEmail />} />
        <Route path='/cadastro' element={<Cadastro />} /> 
        <Route path='/pagina404' element={<Pagina404/>} />  
       </Routes>
     </BrowserRouter>
    
    
    
      )}
      </div>
  );
}


export default App;
