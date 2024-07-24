import * as React from "react";
import AddSkills from "./AddSkills";
import { SkillRating } from "./SkillRating";
import LoadingButton from "@mui/lab/LoadingButton";
import CompareSkill from "./charts/CompareSkill";
import PercentagePieChart from "./charts/PercentagePieChart";

import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Chip,
  Button,
  Stack,
} from "@mui/material";

const truncateText = (text, length) => {
  return text.length > length ? text.substring(0, length) + "..." : text;
};

const skills = [
  { name: "React.js", id: 1, strength: 4 },
  { name: "Angular", id: 2, strength: 3 },
  { name: "Vue.js", id: 3, strength: 4 },
  { name: "Node.js", id: 4, strength: 5 },
  { name: "Express.js", id: 5, strength: 4 },
  { name: "JavaScript", id: 6, strength: 5 },
  { name: "TypeScript", id: 7, strength: 4 },
  { name: "HTML5", id: 8, strength: 5 },
  { name: "CSS3", id: 9, strength: 5 },
  { name: "Sass", id: 10, strength: 4 },
  { name: "Less", id: 11, strength: 3 },
  { name: "Bootstrap", id: 12, strength: 4 },
  { name: "Tailwind CSS", id: 13, strength: 4 },
  { name: "jQuery", id: 14, strength: 3 },
  { name: "Redux", id: 15, strength: 4 },
  { name: "MobX", id: 16, strength: 3 },
  { name: "GraphQL", id: 17, strength: 4 },
  { name: "REST APIs", id: 18, strength: 5 },
  { name: "Webpack", id: 19, strength: 4 },
  { name: "Gulp", id: 20, strength: 3 },
  { name: "Parcel", id: 21, strength: 3 },
  { name: "Python", id: 22, strength: 5 },
  { name: "Django", id: 23, strength: 4 },
  { name: "Flask", id: 24, strength: 4 },
  { name: "Java", id: 25, strength: 5 },
  { name: "Spring Boot", id: 26, strength: 4 },
  { name: "Kotlin", id: 27, strength: 3 },
];
export default function ProjectsCard() {
  return (
    <>
      <Card className="project-card">
        <CardContent>
          <div className="project-card-header">
            <Typography variant="h5" component="div">
              React js rquirement
            </Typography>
          </div>
          <Typography variant="body2">
            {truncateText(
              "truncateTextLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ineuismod velit. In hac habitasse platea dictumst. Donec fringillacondimentum erat consequat efficitur. Ut vitae erat et exporttito",
              100
            )}
          </Typography>
          <Stack className="project-cards-skills" direction="row" spacing={0.5}>
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
        </CardContent>

        <CardActions>
          <Button size="small">View Project</Button>
        </CardActions>
      </Card>
      <SkillRating />
      <AddSkills />
      <LoadingButton loading variant="outlined">
        Submit
      </LoadingButton>

      <Card className="project-card">
        <CompareSkill />
      </Card>

      <PercentagePieChart />
    </>
  );
}
