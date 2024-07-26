import PieChartIcon from "@mui/icons-material/PieChart";

import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Chip,
  Button,
  Stack,
} from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import { useNavigate } from "react-router-dom";

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
];
export default function ProjectsCard() {
  const navigate = useNavigate();
  return (
    <>
      <Card className="project-card">
        <CardContent>
          <div className="project-card-header">
            <Typography variant="h5" component="div">
              React js rquirement
            </Typography>

            <Chip
              variant="outlined"
              color="info"
              size="small"
              icon={<PieChartIcon />}
              label="88%"
            />
          </div>
          <Typography variant="body2" className="project-desc">
            {truncateText(
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ineuismod velit. In hac habitasse platea dictumst. Donec fringillacondimentum erat consequat efficitur. Ut vitae erat et exporttito",
              200
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

        <CardActions
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            onClick={() => {
              navigate("/view-project");
            }}
            size="small"
          >
            View Project
          </Button>
          <Chip
            variant="outlined"
            color="primary"
            size="small"
            icon={<PersonOutlineOutlinedIcon />}
            label="Rajeswar acha"
          />
        </CardActions>
      </Card>
    </>
  );
}
