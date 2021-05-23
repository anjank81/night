import React from 'react';
export const items = [
  {
    id: 1,
    title: 'something 1',
    color: 'light',
    status: 'done',
  },
  {
    id: 2,
    title: 'something 2',
    color: 'light',
    status: 'not-done',
  },
  {
    id: 3,
    title: 'something 3',
    color: 'dark',
    status: 'done',
  },
];
export const itemsDetails = [
  {
    id: 1,
    title: 'something 1',
    color: 'light',
    status: 'done',
    creator: 'Vishrut',
    imgURL: 'img.url/sccv.jpg',
  },
  {
    id: 2,
    title: 'something 2',
    color: 'light',
    status: 'not-done',
    creator: 'Vishrut',
    imgURL: 'img.url/sccv.jpg',
  },
  {
    id: 3,
    title: 'something 3',
    color: 'dark',
    status: 'done',
    creator: 'Vishrut',
    imgURL: 'img.url/sccv.jpg',
  },
];

export const ThemeContext = React.createContext(
  items,
  itemsDetails // default value
);
