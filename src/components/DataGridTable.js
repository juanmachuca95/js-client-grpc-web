import { DataGrid } from "@mui/x-data-grid";
import React from "react";

export default function DataGridSubastaOfertas({rows}){
    const columns = [
        { field: 'user', headerName: 'Usuario' },
        { field: 'oferta', headerName: '$ Oferta'},
    ];

    const [sortModel] = React.useState([
      {
        field: 'oferta',
        sort: 'desc',
      },
    ]);


    return (
        <div style={{ height: '400px', width: '100%', paddingTop: '40px', paddingBottom: '40px' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            sortModel={sortModel}
            getRowId={(row) => row.oferta}
          />
        </div>
    );
}
