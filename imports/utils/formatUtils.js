export const currencyFormat = (query = 0) =>
  query.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

export const weightFormat = (query = 0) =>
  query.toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 3,
  });

export const integerFormat = (query = 0) =>
  query.toLocaleString(undefined, { maximumFractionDigits: 0 });
