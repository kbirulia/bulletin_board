import { createSelector } from 'reselect';

const announcements = state => state;

const groupByRow = (items, countInRow) => {
  let currentRow = 0;
  return items.reduce((acc, item) => {
    if (acc[currentRow] && acc[currentRow].length === countInRow) {
      currentRow += currentRow;
    }

    if (!acc[currentRow]) {
      acc[currentRow] = [];
    }

    acc[currentRow].push(item);

    return acc;
  }, []);
};

export const rowsAnnouncements = createSelector(announcements, items => groupByRow(items, 3));
