import { useState } from "react";
import AppHeader from "../components/AppHeader/AppHeader";
import { Header } from "../components/Header";
import { TextField, Box, Button } from "@mui/material";
import AddSkills from '../components/AddSkills';
import { SkillRating } from '../components/SkillRating';


const staticSkills = [{ name: 'React.js', id: 1 },
{ name: 'Angular', id: 2},
{ name: 'Vue.js', id: 3 },
{ name: 'Node.js', id: 4},
{ name: 'Express.js', id: 5 },]

export const Profile = () => {
  const [summary, setSummary] = useState('');
  const [experience, setExperinece] = useState('');
  const [userSkills, setUserSkills] = useState([]);
  
  const handleAddSkill = (skillsdata) => {
     let updatedUserSkills = structuredClone(skillsdata)
     updatedUserSkills = updatedUserSkills.map(skill => ({
      ...skill,
      exp: skill.exp ?? 0,
      strength: skill.strength ?? 0,
     }))
     setUserSkills(updatedUserSkills)
  }

  const handleSkilllRateChange = (updatedSkills) => {
    setUserSkills(updatedSkills)
  }

  const handleSkillExperinece = (updatedSkills) => {
    setUserSkills(updatedSkills)
  }

  return (
    <AppHeader>
      <section className="view-profile-root">
        <Header name="Welcome name" />
        <div className="profile-root">
          <div className="profile-form">
            <TextField
              margin="normal"
              id="firstName"
              label="First Name"
              name="firstName"
              autoComplete="given-name"
              autoFocus
              value={"Ravi"}
              disabled
            />
            <TextField
              margin="normal"
              id="lastName"
              label="Last Name"
              name="lastName"
              value={"Teja"}
              disabled
            />
            <TextField
              margin="normal"
              id="email"
              label="Email Address"
              name="email"
              value={"ravi@gmail.com"}
              disabled
            />
            <TextField
              margin="normal"
              id="userId"
              label="User ID"
              name="userId"
              value={"132323423"}
              disabled
            />
            <TextField
              margin="normal"
              id="summary"
              label="Summary"
              name="summary"
              value={summary}
              onChange={(event) => {
                setSummary(event.target.value)
              }}
              rows={8}
              multiline
            />
            <TextField
              margin="normal"
              id="experience"
              label="Overal experience"
              name="experience"
              value={experience}
              onChange={(event) => {
                setExperinece(event.target.value)
              }}
              type="number"
            />

            <Button
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => { }}
            >
              Save
            </Button>
          </div>
          <div className="skills-form">
            <AddSkills data={staticSkills} onAddSkills={handleAddSkill}/>
            <SkillRating skillData={userSkills} onSkillRatehage={handleSkilllRateChange} onExperinceChange={handleSkillExperinece}/>

          </div>
        </div>
      </section>
    </AppHeader>
  );
};
