import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import the jest-dom library
import RocketCard from '../../components/RocketCard';
describe('RocketCard', () => {
  const mockProps = {
    name: 'Falcon 9',
    description: 'A two-stage rocket designed and manufactured by SpaceX.',
    imageUrl: 'https://example.com/falcon9.jpg',
  };
  test('renders rocket card with correct props', () => {
    render(<RocketCard {...mockProps} />);
    expect(screen.getByText(mockProps.name)).toBeInTheDocument();
    expect(screen.getByText(mockProps.description)).toBeInTheDocument();
    expect(screen.getByAltText(mockProps.name)).toHaveAttribute('src', mockProps.imageUrl);
    expect(screen.getByRole('button', { name: /reserve rocket/i })).toBeInTheDocument();
  });
  test('renders rocket card without crashing', () => {
    render(<RocketCard {...mockProps} />);
    // Additional test to check if the component renders without throwing an error
  });
});