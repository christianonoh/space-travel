import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import '@testing-library/jest-dom/extend-expect'; // Import the jest-dom library

describe('Navbar component', () => {
  it('renders the navbar links correctly', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );

    const links = [
      { path: '/', text: 'Rockets' },
      { path: '/missions', text: 'Missions' },
      { path: '/profile', text: 'My Profile' },
    ];

    // Check if the logo is rendered
    const logoElement = screen.getByAltText('Logo');
    expect(logoElement).toBeInTheDocument();

    // Check if all the links are rendered correctly
    links.forEach((link) => {
      const linkElement = screen.getByText(link.text);
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute('href', link.path);
    });
  });
});
