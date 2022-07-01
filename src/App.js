
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Todo from './Todo/Todo';
import Complete from './Complete/Complete';
import Update from './Todo/Update';
import Calander from './Calander';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className='body'>
      <Header></Header>
        <Routes>
          <Route path='*' element={<Todo/>}></Route>
          <Route path='todo/:_id' element={<Update/>}></Route>
          <Route path='complete' element={<Complete></Complete>}></Route>
          <Route path='calander' element={<Calander/>}></Route>
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
