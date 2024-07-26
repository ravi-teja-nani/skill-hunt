import AppHeader from "../../components/AppHeader/AppHeader";
import ProjectsCard from "../../components/ProjectsCard";
import { Header } from "../../components/Header";
import { useEffect } from "react";
import { fetchProjects } from "../../store/slices/projectsSlice";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const Projects = () => {
  const dispatch = useDispatch();
  const { isLoading, data } = useSelector(state => state.projects)
  useEffect(() => {
    dispatch(fetchProjects())
  }, [])



  return (
    <AppHeader>
      <section className="projects-section">
        <Header name="Top pics for you" />
        {isLoading && (
          <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh"
          }}>
            <CircularProgress />
          </Box>
        )}
        {
          [1, 2, 4]?.map((post, i) => {
            return <>
              <div className="project-cards" key={i}>
                <ProjectsCard />
              </div>
            </>
          })
        }
        <div className="project-cards">
          <ProjectsCard />
        </div>
      </section>
    </AppHeader>
  );
};
