import { Header } from './components/Header/Header';
import { SideBar } from './components/SideBar/SideBar';
import { Search } from './components/Search/Search';
import { PrimaryDomain } from './components/PrimaryDomain/PrimaryDomain';
import { CustomDomains } from './components/CustomDomains/CustomDomains';
import { UserManual } from './components/UserManual/UserManual';
import './App.scss';
import './index.css';

function App() {
  return (
    <div className="App">
      <nav>
        <SideBar />
      </nav>
      <div className="mainBlock">
        <header>
          <Header />
        </header>
        <Search />
        <main>
          <h2 className="domains-subtitle">Custom domains management</h2>
          <div className="cards">
            <PrimaryDomain />
            <UserManual />
          </div>
          <CustomDomains />
        </main>
      </div>
    </div>
  );
}

export default App;
