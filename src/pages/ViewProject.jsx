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

export const ViewProject = () => {

    return (
        <AppHeader>
            <section className="view-project-root">
                <Header name="React js requirement" />
                <div className="view-section">
                    <div className="left-section">
                        <TextField
                            margin="normal"
                            label="Project Name"
                            value="Full stack requiremet"
                            disabled
                        />
                        <TextField
                            margin="normal"
                            disabled
                            label="Proejct Description "
                            value={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae nulla urna. Donec vel nisl et urna egestas ultrices ac id ex. Nulla facilisi. Cras diam quam, lacinia vitae velit nec, iaculis cursus augue. Nam at nisi porta, volutpat purus sed, sodales dui. Donec pretium justo ipsum, non pharetra lacus pharetra ut"}
                            rows={8}
                            multiline
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
                    Apply
                </Button>
            </section>
        </AppHeader>
    );
};
