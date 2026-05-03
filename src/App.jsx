import { useState, useEffect } from 'react';
import ProjectList from './components/ProjectList';
import ProjectForm from './components/ProjectForm';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProjects, setFilteredProjects] = useState([]);

  // Load projects from localStorage on mount
  useEffect(() => {
    const savedProjects = localStorage.getItem('portfolio-projects');
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects)); // eslint-disable-line react-hooks/set-state-in-effect
    } else {
      // Add some sample projects
      const sampleProjects = [
        {
          title: 'E-commerce Website',
          description: 'A modern e-commerce platform built with React and Node.js',
          tags: ['React', 'Node.js', 'MongoDB'],
          link: 'https://example.com/ecommerce',
        },
        {
          title: 'Weather App',
          description: 'A responsive weather application using OpenWeather API',
          tags: ['JavaScript', 'API', 'CSS'],
          link: 'https://example.com/weather',
        },
        {
          title: 'Task Manager',
          description: 'A productivity app for managing daily tasks and projects',
          tags: ['React', 'Firebase', 'Material-UI'],
          link: 'https://example.com/tasks',
        },
      ];
      setProjects(sampleProjects);
      localStorage.setItem('portfolio-projects', JSON.stringify(sampleProjects));
    }
  }, []);

  // Filter projects based on search term
  useEffect(() => {
    const filtered = projects.filter(project =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredProjects(filtered); // eslint-disable-line react-hooks/set-state-in-effect
  }, [projects, searchTerm]);

  const handleAddProject = (newProject) => {
    const updatedProjects = [...projects, newProject];
    setProjects(updatedProjects);
    localStorage.setItem('portfolio-projects', JSON.stringify(updatedProjects));
  };

  return (
    <div className="app">
      <header>
        <h1>My Portfolio</h1>
        <p>Showcasing my creative work and projects</p>
      </header>

      <main>
        <section className="search-section">
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        </section>

        <section className="projects-section">
          <h2>Projects</h2>
          <ProjectList projects={filteredProjects} />
        </section>

        <section className="add-project-section">
          <ProjectForm onAddProject={handleAddProject} />
        </section>
      </main>
    </div>
  );
}

export default App;
