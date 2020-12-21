import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Sidebar from './components/sidebar'
import Manage from './pages/manage';
import Products from './pages/products';
import {Route} from 'react-router-dom';


function App() {
 
  return (
    <div className="App">
        <Header />
        <div className='row'>
          <div className='col-2'>
          <Sidebar />
          </div>
          <div className='column col-10'>
            <div className='pages'>
            <Route exact path='/users' component={Manage}/>
            <Route exact path='/products' component={Products}/>
            </div>
            <Footer />
        </div>
        </div>

      

    </div>
  );
}

export default App;
