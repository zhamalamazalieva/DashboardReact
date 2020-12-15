import Header from './components/header/index.js';
import Sidebar from './components/sidebar/index.js'
import Manage from './components/manage/index.js';
function App() {
  return (
    <div className="App">
        <Header />
        <div className='row'>
        <Sidebar />
        <Manage />
        </div>
    </div>
  );
}

export default App;
