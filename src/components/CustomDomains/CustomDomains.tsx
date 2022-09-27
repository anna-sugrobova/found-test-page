import { InfoBlock } from '../InfoBlock/InfoBlock';
import { DomainsTable } from '../DomainsTable/DomainsTable';
import { ReactComponent as AddCircle } from '../../assets/AddCircle.svg';
import { ReactComponent as TwoChevrons } from '../../assets/TwoChevrons.svg';
import { ReactComponent as ChevronInContainer } from '../../assets/ChevronInContainer.svg';
import './CustomDomains.scss';

function CustomDomains() {
  return (
    <InfoBlock>
      <div className="domainsMainBlock">
        <div className="domainsBlockHeader">
          <h3 className="allDomainsTitle">All custom domains</h3>
          <button className="createDomainBtn">
            <AddCircle className="addCircleIcon" />
            Create custom domain
          </button>
        </div>
        <DomainsTable />
        <div className="domainsBottomBlockContainer">
          <p className="viewDomains">View all custom domains</p>
          <div className="domainNumbersList">
            <TwoChevrons />
            <ChevronInContainer className="leftChevronSvg" />
            <ul className="domainNumbers">
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
            </ul>
            <ChevronInContainer className="rightChevronSvg" />
            <TwoChevrons className="twoChevronsSvg" />
          </div>
        </div>
      </div>
    </InfoBlock>
  );
}

export { CustomDomains };
