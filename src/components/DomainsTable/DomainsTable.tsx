import { ReactComponent as Shape } from '../../assets/Shape.svg';
import { ReactComponent as CheckboxChecked } from '../../assets/CheckboxChecked.svg';
import { ReactComponent as Checkbox } from '../../assets/Checkbox.svg';
import { ReactComponent as Chevron } from '../../assets/Chevron.svg';
import './DomainsTable.scss';

function DomainsTable() {
  return (
    <table className="tableStyles">
      <caption className="title">All custom domains</caption>
      <thead className="tableHeaderStyles">
        <tr>
          <th>Name</th>
          <th>Domain</th>
          <th>Status</th>
          <th>
            <span className="primaryHeaderName">Primary</span>
            <Shape />
          </th>
          <th>Created on</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody className="mainTableContent">
        <tr>
          <td>Amended Taxretum</td>
          <td>www.amendedtaxreturn.com</td>
          <td>Submitted</td>
          <td>
            <CheckboxChecked />
          </td>
          <td>12/06/2019</td>
          <td>
            Actions
            <Chevron />
          </td>
        </tr>
        <tr>
          <td>Changee</td>
          <td>www.thischange.com</td>
          <td>Failed confirmation</td>
          <td>
            <Checkbox />
          </td>
          <td>12/06/2019</td>
          <td>
            Actions
            <Chevron />
          </td>
        </tr>
        <tr>
          <td>Found root</td>
          <td>lnk.notarealdomain.com</td>
          <td>Failed confirmation</td>
          <td>
            <Checkbox />
          </td>
          <td>12/06/2019</td>
          <td>
            Actions
            <Chevron />
          </td>
        </tr>
        <tr>
          <td>Amended Taxretum</td>
          <td>link.ft2.sod</td>
          <td>Failed confirmation</td>
          <td>
            <Checkbox />
          </td>
          <td>12/06/2019</td>
          <td>
            Actions
            <Chevron />
          </td>
        </tr>
        <tr>
          <td>Changee</td>
          <td>www.amendedtaxreturn.com</td>
          <td>Failed confirmation</td>
          <td>
            <Checkbox />
          </td>
          <td>12/06/2019</td>
          <td>
            Actions
            <Chevron />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export { DomainsTable };
