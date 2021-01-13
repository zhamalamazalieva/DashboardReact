import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Sidebar from './components/sidebar';
import Dashboard from './pages/dashboard';
import Manage from './pages/manage';
import Products from './pages/products';
import Profile from './pages/profile';
import {Route} from 'react-router-dom';


function App() {
 
  return (
    <div className="App">
        <Header />
        <div className='row'>
          <div className='col-2'>
          <Sidebar />
          </div>
          <div className='col-10'>
            <div className='pages'>
            <Route exact path='/dashboard' component={Dashboard}/>
            <Route exact path='/users' component={Manage}/>
            <Route exact path='/products' component={Products}/>
            <Route exact path='/profile' component={Profile}/>
            </div>
          </div>
        </div>
        <Footer />
    </div>
  );
}

export default App;
