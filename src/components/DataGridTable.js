import { DataGrid } from "@mui/x-data-grid";
import React from "react";

export default function DataGridSubastaOfertas({rows}){
    const columns = [
        { field: 'user', headerName: 'Usuario', width: '272' },
        { field: 'oferta', headerName: '$ Oferta', width: '272' },
    ];

    return (
        <div style={{ height: 400, width: '100%', paddingTop: '40px', paddingBottom: '40px' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            getRowId={(row) => row.oferta}
          />
        </div>
    );
}
