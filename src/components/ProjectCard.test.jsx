import { render, screen } from '@testing-library/react';
import ProjectCard from './ProjectCard';

const mockProject = {
  title: 'Test Project',
  description: 'This is a test project description',
  tags: ['React', 'JavaScript'],
  link: 'https://example.com',
};

describe('ProjectCard', () => {
  test('renders project information correctly', () => {
    render(<ProjectCard project={mockProject} />);

    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('This is a test project description')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /view project/i })).toHaveAttribute('href', 'https://example.com');
  });

  test('renders multiple tags', () => {
    render(<ProjectCard project={mockProject} />);

    const tags = screen.getAllByText(/React|JavaScript/);
    expect(tags).toHaveLength(2);
  });
});