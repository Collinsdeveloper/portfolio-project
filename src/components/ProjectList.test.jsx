import { render, screen } from '@testing-library/react';
import ProjectList from './ProjectList';

const mockProjects = [
  {
    title: 'Project 1',
    description: 'Description 1',
    tags: ['Tag1'],
    link: 'https://example1.com',
  },
  {
    title: 'Project 2',
    description: 'Description 2',
    tags: ['Tag2'],
    link: 'https://example2.com',
  },
];

describe('ProjectList', () => {
  test('renders list of projects', () => {
    render(<ProjectList projects={mockProjects} />);

    expect(screen.getByText('Project 1')).toBeInTheDocument();
    expect(screen.getByText('Project 2')).toBeInTheDocument();
  });

  test('renders no projects message when empty', () => {
    render(<ProjectList projects={[]} />);

    expect(screen.getByText('No projects found.')).toBeInTheDocument();
  });
});