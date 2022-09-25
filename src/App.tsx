import './index.css';
import { Header } from './components/Header';
import { SideBar } from './components/SideBar';
import { Search } from './components/Search';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <SideBar />
      <Search />
    </div>
  );
}

export default App;
