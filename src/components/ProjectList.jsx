import PropTypes from 'prop-types';
import ProjectCard from './ProjectCard';

const ProjectList = ({ projects }) => {
  if (projects.length === 0) {
    return <p>No projects found.</p>;
  }

  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProjectList;