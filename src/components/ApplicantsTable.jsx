import * as React from 'react';
import { Box, Button, Chip } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";



const rows = [
    { id: 12323, title: 'React js requirement', applicantName: 'john doe', match: "23%", appicantId: 232424 },
    { id: 434342, title: 'Node js requirement', applicantName: 'john doe', match: "23%", appicantId: 454545 },
];

export default function ApplicantsTable() {
    const navigate = useNavigate();
    const columns = [
        { field: 'id', headerName: 'Project Id', width: 100 },
        { field: 'title', headerName: 'Project Title', width: 300 },
        {
            field: 'applicantName', headerName: 'Applicant Name', width: 200, renderCell: (params) => {
                return <Chip size="small" label={params.row.applicantName} icon={<PersonOutlineOutlinedIcon />} />

            },
        },
        {
            field: 'match', headerName: 'Matching', width: 100, renderCell: (params) => {
                return <Chip
                    variant="outlined"
                    color="info"
                    size="small"
                    label={params.row.match + "%"}
                />
            }
        },
        {
            field: 'view',
            headerName: 'View Profile',
            renderCell: (params) => (
                <Button
                    variant="contained"
                    size="small"
                    style={{ marginLeft: 16 }}
                    onClick={() => {
                        navigate(`/view-applicant-profile/${params.row.appicantId}`)
                    }}
                >
                    View
                </Button>
            ),
        },
    ];
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
