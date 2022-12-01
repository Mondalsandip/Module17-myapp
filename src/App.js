import { useState } from 'react';
import Login from './Components/login'

import Todo from './todocomponent/todo'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from './Components/Home'
import NotFound from './Components/NotFound';

function App() {
  const [showcomponent, setShowComponent] = useState(true)


  const updateValue = () => {
    setShowComponent(false)

  }


  return (
    <>

      {/* { showcomponent && <Login   onChangeValue={updateValue} />  }
      {!showcomponent && <Todo />  }   */}
    
      <Routes >
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </>

  );
}

export default App;
