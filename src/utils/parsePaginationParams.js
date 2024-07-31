const parseUserInput = (userInput, defaultValue) => {
  const isString = typeof userInput === 'string';
  if (!isString) return defaultValue;

  const parsedUserInput = parseInt(userInput);
  if (Number.isNaN(parsedUserInput)) {
    return defaultValue;
  }

  return parsedUserInput;
};

export const parsePaginationParams = (query) => {
  const { page, perPage } = query;

  const parsedPage = parseUserInput(page, 1);
  const parsedPerPage = parseUserInput(perPage, 10);

  return {
    page: parsedPage,
    perPage: parsedPerPage,
  };
};