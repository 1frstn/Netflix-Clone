import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Header from "./components/Header";
import MovieDetail from "./pages/MovieDetail";


function App() {
  return (
  <BrowserRouter>
  <Header/>
   <Routes>
     <Route path="/" element={<MainPage/>}/>
     <Route path="/movie/:movieId" element={<MovieDetail/>}/>
   </Routes> 
  </BrowserRouter>
    
  );
}

export default App;

/* 6d727677e3ccb5e54accaa5ea8a0e585 */