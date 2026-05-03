import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProjectForm from './ProjectForm';

describe('ProjectForm', () => {
  test('renders form fields', () => {
    const mockOnAddProject = jest.fn();
    render(<ProjectForm onAddProject={mockOnAddProject} />);

    expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/description/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/tags/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/link/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /add project/i })).toBeInTheDocument();
  });

  test('submits form with valid data', async () => {
    const mockOnAddProject = jest.fn();
    const user = userEvent.setup();

    render(<ProjectForm onAddProject={mockOnAddProject} />);

    await user.type(screen.getByLabelText(/title/i), 'New Project');
    await user.type(screen.getByLabelText(/description/i), 'Project description');
    await user.type(screen.getByLabelText(/tags/i), 'React, JavaScript');
    await user.type(screen.getByLabelText(/link/i), 'https://example.com');

    await user.click(screen.getByRole('button', { name: /add project/i }));

    await waitFor(() => {
      expect(mockOnAddProject).toHaveBeenCalledWith({
        title: 'New Project',
        description: 'Project description',
        tags: ['React', 'JavaScript'],
        link: 'https://example.com',
      });
    });
  });

  test('shows alert for missing required fields', async () => {
    const mockOnAddProject = jest.fn();
    const user = userEvent.setup();

    render(<ProjectForm onAddProject={mockOnAddProject} />);

    await user.click(screen.getByRole('button', { name: /add project/i }));

    expect(mockOnAddProject).not.toHaveBeenCalled();
  });

  test('clears form after successful submission', async () => {
    const mockOnAddProject = jest.fn();
    const user = userEvent.setup();

    render(<ProjectForm onAddProject={mockOnAddProject} />);

    const titleInput = screen.getByLabelText(/title/i);
    const descriptionInput = screen.getByLabelText(/description/i);
    const tagsInput = screen.getByLabelText(/tags/i);
    const linkInput = screen.getByLabelText(/link/i);

    await user.type(titleInput, 'New Project');
    await user.type(descriptionInput, 'Project description');
    await user.type(tagsInput, 'React, JavaScript');
    await user.type(linkInput, 'https://example.com');

    await user.click(screen.getByRole('button', { name: /add project/i }));

    await waitFor(() => {
      expect(titleInput.value).toBe('');
      expect(descriptionInput.value).toBe('');
      expect(tagsInput.value).toBe('');
      expect(linkInput.value).toBe('');
    });
  });
});