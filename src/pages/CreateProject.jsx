import AppHeader from "../components/AppHeader/AppHeader";
import { Header } from "../components/Header";
import { TextField, Box, Button } from "@mui/material";
import AddSkills from '../components/AddSkills';
import { SkillRating } from '../components/SkillRating';
import { useState } from "react";
import api from "../lib/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const staticSkills = [{ name: 'React.js', id: 1 },
{ name: 'Angular', id: 2 },
{ name: 'Vue.js', id: 3 },
{ name: 'Node.js', id: 4 },
{ name: 'Express.js', id: 5 },]

export const CreateProject = () => {
  const [projectSkills, setProjectSkills] = useState([])
  const [title, setTitle] = useState('');
  const [desc, setExp] = useState('');
  const [projectExp, setProjectExp] = useState(0);
  const navigate = useNavigate()


  const handleAddSkill = (skillsdata) => {
    let updatedProjetctSkills = structuredClone(skillsdata)
    updatedProjetctSkills = updatedProjetctSkills.map(skill => ({
      ...skill,
      experience: skill.experience ?? 0,
      strength: skill.strength ?? 0,
    }))
    setProjectSkills(updatedProjetctSkills)
  }

  const handleSkilllRateChange = (updatedSkills) => {
    setProjectSkills(updatedSkills)
  }

  const handleSkillExperinece = (updatedSkills) => {
    setProjectSkills(updatedSkills)
  }

  const handleCreatePost = () => {
    toast.success('Project created', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
      navigate("/projects")
    // api.post(import.meta.env.VITE_BASE_URL + "/api/jobPost/createJobPost", {
    //  id: null,
    //  title,
    //  descr: desc,
    //  postedBy: "name",
    //  skillDetails: projectSkills,
    //  totalExperience: projectExp,
    // })
    // .then((response) => {
    //   sessionStorage.setItem("token", response.data)
    //   navigate("/projects")
    //   toast.success('Project created', {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //     });
    // }).catch(() => {
    //   toast.error('Something went wrong', {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //     });
    // })
  }

  return (
    <AppHeader>
      <section className="create-projects-root">
        <Header name="Create new project" />
        <div className="create-requirement">
          <div className="create-project-form">
            <TextField
              margin="normal"
              id="title"
              label="Project name"
              name="title"
              value={title}
              onChange={(event) => {
                setTitle(event.target.value)
              }}
            />
            <TextField
              margin="normal"
              id="desc"
              label="Proejct Description "
              name="desc"
              rows={8}
              multiline
              value={desc}
              onChange={(event) => {
                setExp(event.target.value)
              }}
            />
            <TextField
              margin="normal"
              id="experience"
              label="Experience"
              name="experience"
              value={projectExp}
              onChange={(event) => {
                setProjectExp(event.target.value)
              }}
              type="number"
            />

            <Button
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleCreatePost}
            >
              Create
            </Button>
          </div>
          <div className="skills-form">

            <AddSkills data={staticSkills} onAddSkills={handleAddSkill} />
            <SkillRating skillData={projectSkills} onSkillRatehage={handleSkilllRateChange} onExperinceChange={handleSkillExperinece} />

          </div>
        </div>

      </section>
    </AppHeader>
  );
};
