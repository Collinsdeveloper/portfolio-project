import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  test('renders search input', () => {
    const mockOnSearchChange = jest.fn();
    render(<SearchBar searchTerm="" onSearchChange={mockOnSearchChange} />);

    const input = screen.getByPlaceholderText('Search projects...');
    expect(input).toBeInTheDocument();
  });

  test('calls onSearchChange when input changes', () => {
    const mockOnSearchChange = jest.fn();
    render(<SearchBar searchTerm="" onSearchChange={mockOnSearchChange} />);

    const input = screen.getByPlaceholderText('Search projects...');
    fireEvent.change(input, { target: { value: 'test search' } });

    expect(mockOnSearchChange).toHaveBeenCalledWith('test search');
  });

  test('displays current search term', () => {
    const mockOnSearchChange = jest.fn();
    render(<SearchBar searchTerm="current search" onSearchChange={mockOnSearchChange} />);

    const input = screen.getByDisplayValue('current search');
    expect(input).toBeInTheDocument();
  });
});