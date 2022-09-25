// import Table from '@mui/material/Table';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import './Table.scss';

const columns = [
  { field: 'name', headerName: 'Name', width: 125 },
  { field: 'domain', headerName: 'Domain', width: 184 },
  {
    field: 'status',
    headerName: 'Status',
    width: 120,
  },
  {
    field: 'primary',
    headerName: 'Primary',
    width: 60,
    // valueGetter: getFullName,
  },
  {
    field: 'created on',
    headerName: 'Created on',
    width: 76,
  },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 70,
  },
];

const rows: GridRowsProp = [
  {
    id: 1,
    col1: 'Amended Taxretum',
    col2: 'www.amendedtaxreturn.com',
    col3: 'Submitted',
    col4: '',
    col5: '12/06/2019',
    col6: 'Actions',
  },
  {
    id: 2,
    col1: 'Changee',
    col2: 'www.thischange.com',
    col3: 'Failed confirmation',
    col4: '',
    col5: '12/06/2019',
    col6: 'Actions',
  },
  {
    id: 3,
    col1: 'Found root',
    col2: 'lnk.notarealdomain.com',
    col3: 'Failed confirmation',
    col4: '',
    col5: '12/06/2019',
    col6: 'Actions',
  },
  {
    id: 4,
    col1: 'Amended Taxretum',
    col2: 'link.ft2.sod',
    col3: 'Failed confirmation',
    col4: '',
    col5: '12/06/2019',
    col6: 'Actions',
  },
  {
    id: 5,
    col1: 'Changee',
    col2: 'www.amendedtaxreturn.com',
    col3: 'Failed confirmation',
    col4: '',
    col5: '12/06/2019',
    col6: 'Actions',
  },
];

function TableComponent() {
  return (
    <div className="tableContainer">
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}

export { TableComponent };
