import { InfoBlock } from '../InfoBlock/InfoBlock';
import { DomainsTable } from '../DomainsTable/DomainsTable';
import './CustomDomains.scss';

function CustomDomains() {
  return (
    <InfoBlock>
      <DomainsTable />
      <div>
        <p className="viewDomains">View all custom domains</p>
      </div>
    </InfoBlock>
  );
}

export { CustomDomains };
