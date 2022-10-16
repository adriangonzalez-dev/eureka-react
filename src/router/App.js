import { Route, Routes } from "react-router-dom";
import { Header, Footer} from '../components'
import { Home, Products, Contact, PageNotFound } from '../pages'


function App() {
  return (
    <>
    <Header />
            <Routes>
                <Route path='/' element={ <Home />}/>
                <Route path='/productos' element={ <Products/> }/>
                <Route path='/contacto' element={ <Contact /> } />
                <Route path='*' element={<PageNotFound/>}/>
            </Routes>
      <Footer />
    </>
  );
}

export default App;
