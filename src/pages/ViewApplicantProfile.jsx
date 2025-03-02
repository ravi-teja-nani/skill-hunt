import AppHeader from "../components/AppHeader/AppHeader";
import { Header } from "../components/Header";
import { TextField, Stack, Chip, Button } from "@mui/material";
import PercentagePieChart from "../components/charts/PercentagePieChart"
import CompareSkill from "../components/charts/CompareSkill"

const skills = [
    { name: "React.js", id: 1, strength: 4 },
    { name: "Angular", id: 2, strength: 3 },
    { name: "Vue.js", id: 3, strength: 4 },
    { name: "Node.js", id: 4, strength: 5 },
    { name: "Express.js", id: 5, strength: 4 },
    { name: "JavaScript", id: 6, strength: 5 },
    { name: "TypeScript", id: 7, strength: 4 },
];

export const ViewApplicantProfile = () => {

    return (
        <AppHeader>
            <section className="view-project-root">
                <Header name="React js requirement" />
                <div className="view-section">
                    <div className="left-section">
                        <TextField
                            margin="normal"
                            label="Name"
                            value="Ravi teja"
                            disabled
                        />
                        <TextField
                            margin="normal"
                            disabled
                            label="summary"
                            value={"oogle Chat: An intelligent messaging app, built for teams. Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA"}
                            rows={5}
                            multiline
                        />
                        <TextField
                            margin="normal"
                            label="Total Experience"
                            value="6"
                            disabled
                        />
                        <Stack className="view-project-cards-skills" direction="row" spacing={0.5}>
                            {skills.map((skill) => {
                                return (
                                    <Chip
                                        className="project-card-chip"
                                        key={skill.id}
                                        label={skill.name}
                                        variant="outlined"
                                    />
                                );
                            })}
                        </Stack>

                    </div>
                    <div className="right-section">
                        <div className="mathing-label">
                            Requirement matching
                        </div>
                        <PercentagePieChart />
                    </div>
                </div>
                <div className="view-compare-analytics">
                    <CompareSkill />
                </div>
                <Button
                    variant="contained"
                    sx={{ mt: 3, mb: 2, marginLeft: "82px" }}
                    onClick={() => { }}
                >
                    Accept
                </Button>
            </section>
        </AppHeader>
    );
};
