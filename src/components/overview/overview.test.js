import React from 'react';
import Overview from './Overview';
import StaticInfoDisplay from './controlPanel/StaticInfoDisplay';
import renderer from 'react-test-renderer';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import App from '../App';

const camoOnesie = {
  "id": 37311,
  "campus": "hr-rfe",
  "name": "Camo Onesie",
  "slogan": "Blend in to your crowd",
  "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
  "category": "Jackets",
  "default_price": "140.00",
  "created_at": "2021-08-13T14:37:33.145Z",
  "updated_at": "2021-08-13T14:37:33.145Z",
  "features": [
      {
          "feature": "Fabric",
          "value": "Canvas"
      },
      {
          "feature": "Buttons",
          "value": "Brass"
      }
  ]
}


test('On mount StaticInfoDisplay should display info for Camo Onesie', () => {
  render (
    <StaticInfoDisplay product={camoOnesie} />
    )

    expect(screen.getByRole('heading', {level: 3})).toHaveTextContent('Jackets');
    expect(screen.getByRole('heading', {level: 2})).toHaveTextContent('Camo Onesie');
    expect(screen.getByText('$140.00')).toBeInTheDocument();
})