
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layouts'
function App() {
  return (
    <div className="App">
   <>
   <Routes>
    <Route path='/'element={<Layout/>}/>
   </Routes>
   </>
    </div>
  );
}

export default App;
