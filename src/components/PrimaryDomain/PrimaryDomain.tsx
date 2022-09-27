import { InfoBlock } from '../InfoBlock/InfoBlock';
import { ReactComponent as ArrowHook } from '../../assets/ArrowHook.svg';
import { ReactComponent as Edit } from '../../assets/Edit.svg';
import { ReactComponent as Share } from '../../assets/Share.svg';
import { ReactComponent as Delete } from '../../assets/Delete.svg';

import './PrimaryDomain.scss';

function PrimaryDomain() {
  return (
    <div className="primaryDomain">
      <InfoBlock>
        <div className="heading">
          <p className="subtitle">Primary domain</p>
          <h2>Amended Taxretum</h2>
          <a href="https://amendedtaxreturn.com">amendedtaxreturn.com</a>
        </div>
        <div className="properties">
          <span className="statusTitle">Status</span>
          <p>Submitted</p>
        </div>
        <div className="icons">
          <div className="icon">
            <ArrowHook />
          </div>
          <div className="icon">
            <Edit />
          </div>
          <div className="icon">
            <Share />
          </div>
          <div className="icon">
            <Delete />
          </div>
        </div>
      </InfoBlock>
    </div>
  );
}

export { PrimaryDomain };
