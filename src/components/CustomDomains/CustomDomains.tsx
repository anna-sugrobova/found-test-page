import { InfoBlock } from '../InfoBlock/InfoBlock';
import { DomainsTable } from '../DomainsTable/DomainsTable';
import { ReactComponent as AddCircle } from '../../assets/AddCircle.svg';
import './CustomDomains.scss';

function CustomDomains() {
  return (
    <InfoBlock>
      <div className="domainsBlockHeader">
        <h3 className="title">All custom domains</h3>
        <button className="createDomainBtn">
          <AddCircle className="addCircleIcon" />
          Create custom domain
        </button>
      </div>
      <DomainsTable />
      <div>
        <p className="viewDomains">View all custom domains</p>
      </div>
    </InfoBlock>
  );
}

export { CustomDomains };
