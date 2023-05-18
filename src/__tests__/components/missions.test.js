import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { render } from '@testing-library/react';
import Missions from '../../components/Missions';
import { fetchData, toggleMissionReserved } from '../../redux/missions/missionsSlice';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

jest.mock('../../redux/missions/missionsSlice', () => ({
  fetchData: jest.fn(),
  toggleMissionReserved: jest.fn(),
}));

describe('Missions component', () => {
  let mockMissionsSelector;
  let mockDispatch;

  beforeEach(() => {
    mockMissionsSelector = jest.fn();
    mockDispatch = jest.fn();
    useSelector.mockImplementation((selectorFn) => selectorFn({ missions: mockMissionsSelector() }));
    useDispatch.mockReturnValue(mockDispatch);
  });

  afterEach(() => {
    useSelector.mockClear();
    useDispatch.mockClear();
    fetchData.mockClear();
    toggleMissionReserved.mockClear();
  });

  it('renders correctly', () => {
    mockMissionsSelector.mockReturnValue({
      status: 'idle',
      data: [
        {
          mission_id: 1,
          mission_name: 'Mission 1',
          description: 'Mission 1 Description',
          reserved: true,
        },
        {
          mission_id: 2,
          mission_name: 'Mission 2',
          description: 'Mission 2 Description',
          reserved: false,
        },
      ],
    });

    const { container } = render(<Missions />);

    expect(container).toMatchSnapshot();
  });
});
