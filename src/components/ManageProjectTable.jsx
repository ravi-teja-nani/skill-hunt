import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'Project Id', width: 150 },
  { field: 'title', headerName: 'Project Title', width: 400 },
];

const rows = [
  { id: 12323, title: 'React js requirement' },
  { id: 434342, title: 'Node js requirement' },
];

export default function ManageProjectTable() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid

        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
    </Box>
  );
}
