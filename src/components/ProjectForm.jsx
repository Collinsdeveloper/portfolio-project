import { useState } from 'react';
import PropTypes from 'prop-types';

const ProjectForm = ({ onAddProject }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    tags: '',
    link: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description || !formData.link) {
      alert('Please fill in all required fields.');
      return;
    }

    const newProject = {
      ...formData,
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
    };

    onAddProject(newProject);
    setFormData({
      title: '',
      description: '',
      tags: '',
      link: '',
    });
  };

  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <h2>Add New Project</h2>
      <div className="form-group">
        <label htmlFor="title">Title *</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description *</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="tags">Tags (comma-separated)</label>
        <input
          type="text"
          id="tags"
          name="tags"
          value={formData.tags}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="link">Link *</label>
        <input
          type="url"
          id="link"
          name="link"
          value={formData.link}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Add Project</button>
    </form>
  );
};

ProjectForm.propTypes = {
  onAddProject: PropTypes.func.isRequired,
};

export default ProjectForm;