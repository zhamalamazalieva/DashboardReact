import React from 'react';
import Header from './components/header';
import Sidebar from './components/sidebar'
import Manage from './pages/manage';
import {Route} from 'react-router-dom';


function App() {
 
  return (
    <div className="App">
        <Header />
        <div className='row'>
        <Sidebar />
        <Route exact path='/users' component={Manage}/>
        </div>
    </div>
  );
}

export default App;
