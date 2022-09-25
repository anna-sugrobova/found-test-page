import './index.css';
import { Header } from './components/Header/Header';
import { SideBar } from './components/SideBar/SideBar';
import { Search } from './components/Search/Search';
import { InfoBlock } from './components/InfoBlock/InfoBlock';
import './App.scss';
import { PrimaryDomain } from './components/PrimaryDomain/PrimaryDomain';
import { TableComponent } from './components/Table/Table';

function App() {
  return (
    <div className="App">
      <div>
        <SideBar />
      </div>
      <div className="mainBlock">
        <header>
          <Header />
        </header>
        <Search />
        <p className="domains-subtitle">Custom domains management</p>
        <div className="cards">
          <PrimaryDomain />
          <InfoBlock>
            <h2>Custom Domain Settings</h2>
            <p>
              In your DNS settings, please point your CNAME entry of your domain
              with www. (example, www.mydomain.com) to the following host:{' '}
              <a href="found.ee">found.ee</a>
            </p>
            <p>
              If you prefer a subdomain, you can create a link.mydomain.com
              instead and not use www.
            </p>
            <p>
              Sounds complicated? We have prepared{' '}
              <a href="google.com">instructions for you here</a>. Or take a look
              at some of the most popular domain registrars:{' '}
              <a href="godaddy.com">GoDaddy</a>,{' '}
              <a href="domain.com">Domain.com</a>,{' '}
              <a href="namecheap.com">Namecheap</a>.
            </p>
            <p>
              It may take up to 48 hours for the changes to take effect based on
              your DNS provider.
            </p>
            <p>
              DO NOT use your active website's root domain here, as that will
              cause your domain to stop serving, and route traffic to here
              instead. If you own netflix.com don't point the root here, you
              would want to create a subdomain instead like, link.netflix.com.
            </p>
          </InfoBlock>
        </div>
        <InfoBlock>
          <h3>All custom domains</h3>
          <TableComponent />
          <div>
            <h3>View all custom domains</h3>
          </div>
        </InfoBlock>
      </div>
    </div>
  );
}

export default App;
