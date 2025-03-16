import { DataGrid, GridColDef } from '@mui/x-data-grid';

interface ITableProps {
  columns: GridColDef[];
  rows: { [key: string]: string | number }[];
}

const Table = ({ rows, columns }: ITableProps) => {
  return <DataGrid rows={rows} columns={columns} />;
};

export default Table;
