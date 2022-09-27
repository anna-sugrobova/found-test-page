import { ReactComponent as Filter } from '../../assets/Filter.svg';
import { ReactComponent as CheckboxChecked } from '../../assets/CheckboxChecked.svg';
import { ReactComponent as Checkbox } from '../../assets/Checkbox.svg';
import { ReactComponent as Chevron } from '../../assets/Chevron.svg';
import './DomainsTable.scss';

function DomainsTable() {
  return (
    <table className="domainsTable">
      <thead className="tableHeaderStyles">
        <tr>
          <th>Name</th>
          <th>Domain</th>
          <th>Status</th>
          <th>
            <span className="primaryHeaderName">Primary</span>
            <Filter />
          </th>
          <th>Created on</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody className="mainTableContent">
        <tr>
          <td className="firstColumn">Amended Taxretum</td>
          <td className="secondColumn">www.amendedtaxreturn.com</td>
          <td>Submitted</td>
          <td>
            <CheckboxChecked className="checkboxChecked" />
          </td>
          <td>12/06/2019</td>
          <td className="actionsColumn">
            Actions
            <Chevron className="chevronIcon" />
          </td>
        </tr>

        <tr>
          <td className="firstColumn">Changee</td>
          <td className="secondColumn">www.thischange.com</td>
          <td>Failed confirmation</td>
          <td>
            <Checkbox className="checkbox" />
          </td>
          <td>12/06/2019</td>
          <td className="actionsColumn">
            Actions
            <Chevron className="chevronIcon" />
          </td>
        </tr>
        <tr>
          <td className="firstColumn">Found root</td>
          <td className="secondColumn">lnk.notarealdomain.com</td>
          <td>Failed confirmation</td>
          <td>
            <Checkbox className="checkbox" />
          </td>
          <td>12/06/2019</td>
          <td className="actionsColumn">
            Actions
            <Chevron className="chevronIcon" />
          </td>
        </tr>

        <tr>
          <td>Amended Taxretum</td>
          <td>link.ft2.sod</td>
          <td>Failed confirmation</td>
          <td>
            <Checkbox className="checkbox" />
          </td>
          <td>12/06/2019</td>
          <td className="actionsColumn">
            Actions
            <Chevron className="chevronIcon" />
          </td>
        </tr>

        <tr>
          <td>Changee</td>
          <td>www.amendedtaxreturn.com</td>
          <td>Failed confirmation</td>
          <td>
            <Checkbox className="checkbox" />
          </td>
          <td>12/06/2019</td>
          <td className="actionsColumn">
            Actions
            <Chevron className="chevronIcon" />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export { DomainsTable };
