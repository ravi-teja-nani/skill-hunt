import { useState } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
// import { TextField } from "@mui/material";
import {
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";


export const SkillRating = ({ skillData, onSkillRatehage, onExperinceChange }) => {

  const handleRateChange = (event, value) => {
    const { name } = event.target;
    const updatedSkills = structuredClone(skillData);
    const updatedSkill = updatedSkills.find((skill) => skill.id == name);
    updatedSkill.strength = value;
    onSkillRatehage(updatedSkills)
  };

  const handleExpChange = (event) => {
    const { name, value } = event.target;
    const updatedSkills = structuredClone(skillData);
    const updatedSkill = updatedSkills.find((skill) => skill.id == name);
    updatedSkill.experience = value ? Number(value) : 0;
    onExperinceChange(updatedSkills)
  }

  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Skill</TableCell>
              <TableCell>Rating</TableCell>
              <TableCell>Experience</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {skillData.map((skill, index) => (
              <TableRow key={index}>
                <TableCell>{skill.name}</TableCell>
                <TableCell>
                  {" "}
                  <Rating
                    name={String(skill.id)}
                    value={skill.strength}
                    onChange={handleRateChange}
                  />
                </TableCell>
                <TableCell>
                  {" "}
                  <TextField
                    required
                    name={String(skill.id)}
                    label="Years of experience"
                    onChange={handleExpChange}
                    type="number"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
