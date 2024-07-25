import AppHeader from "../../components/AppHeader/AppHeader";
import ProjectsCard from "../../components/ProjectsCard";
import { Header } from "../../components/Header";
export const Projects = () => {
  return (
    <AppHeader>
      <section className="projects-section">
        <Header name="Top pics for you" />
        <div className="project-cards">
          <ProjectsCard />
        </div>
      </section>
    </AppHeader>
  );
};
