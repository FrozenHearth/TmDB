import format from 'date-fns/format';

export const formatDate = (date) => {
  const currentDate = new Date(date);
  return format(currentDate, 'MMM d, y');
};
