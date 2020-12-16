import React from 'react';
import Header from './components/header/index.js';
import Sidebar from './components/sidebar/index.js'
import Manage from './components/manage/index.js';
import axios from 'axios';

function App() {
  const [userData, setUserData] = React.useState([]);
  React.useEffect(async () => {
    await axios
    .get(`http://localhost:3000/database.json`)
    .then((response) => response)
    .then(({data}) => setUserData(data.users));
  }, []);
  
  return (
    <div className="App">
        <Header />
        <div className='row'>
        <Sidebar />
        <Manage data={userData} />
        </div>
    </div>
  );
}

export default App;
