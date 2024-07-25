import AppHeader from "../components/AppHeader/AppHeader";
import { Header } from "../components/Header";
import { TextField, Box, Button, Tabs, Tab } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ManageProjectTable from "../components/ManageProjectTable";
import ApplicantsTable from "../components/ApplicantsTable";

export const ManageProjects = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <AppHeader>
            <section className="manage-projects-root">
                <Header name="Manage Projects" />
                <div className="add-project-header">
                    <Button sx={{
                        marginLeft: "60px",
                    }} variant="outlined" onClick={() => {
                        navigate("/create-project")
                    }}>Create Project</Button>
                </div>

                <div className="projects-applicants-tab">
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange}>
                                <Tab label="Projects" />
                                <Tab label="Applicants" />
                            </Tabs>
                        </Box>
                        {
                            value === 0 && <div>
                                <ManageProjectTable/>
                            </div>

                        }
                        {
                            value === 1 && <div>
                                <ApplicantsTable/>
                            </div>

                        }
                    </Box>

                </div>

            </section>
        </AppHeader>
    );
};
