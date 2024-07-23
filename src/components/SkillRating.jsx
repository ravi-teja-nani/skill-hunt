import {useState} from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

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

export const SkillRating = ()  => {

   const [skillsRating, setSkillsRating] = useState(skills)

   const handleRateChange = (event, value) => {
      const { name } = event.target
    console.log({
      event: event.target.name,
      value
    })
    const updatedSkills = structuredClone(skillsRating);
    const updatedSkill = updatedSkills.find((skill) => skill.name === name)
    updatedSkill.strength = value
    setSkillsRating(updatedSkills)
   }


  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      {skillsRating.map((skill) => {
        return <Box key={skill.name}>
          <Typography component="legend">{skill.name}</Typography>
          <Rating
            name={skill.name}
            value={skill.strength}
            onChange={handleRateChange}
          />
        </Box>;
      })}
    </Box>
  );
}
