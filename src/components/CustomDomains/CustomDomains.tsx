import { InfoBlock } from '../InfoBlock/InfoBlock';
import { DomainsTable } from '../DomainsTable/DomainsTable';
import { ReactComponent as AddCircle } from '../../assets/AddCircle.svg';
import { ReactComponent as TwoChevrons } from '../../assets/TwoChevrons.svg';
import { ReactComponent as ChevronInContainer } from '../../assets/ChevronInContainer.svg';
import './CustomDomains.scss';

function CustomDomains() {
  return (
    <InfoBlock>
      <div className="customDomains">
        <div className="customDomainsHeader">
          <h3 className="headerTitle">All custom domains</h3>
          <button className="customDomainsButton">
            <AddCircle className="addCircleIcon" />
            Create custom domain
          </button>
        </div>
        <DomainsTable />
        <div className="bottom">
          <p className="viewDomains">View all custom domains</p>
          <div className="pages">
            <TwoChevrons />
            <ChevronInContainer className="leftChevron" />
            <ul className="pagesList">
              <li className="listItem first">1</li>
              <li className="listItem second">2</li>
              <li className="listItem third">3</li>
              <li className="listItem fourth">4</li>
              <li className="listItem fifth">5</li>
            </ul>
            <ChevronInContainer className="rightChevron" />
            <TwoChevrons className="rightChevrons" />
          </div>
        </div>
      </div>
    </InfoBlock>
  );
}

export { CustomDomains };
