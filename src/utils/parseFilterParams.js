const parseType = (contactType) => {
  const isType = (contactType) => ['work', 'home', 'personal'].includes(contactType);
  if (isType(contactType)) return contactType;
};

const parseIsFavourite = (isFavourite) => {
  const isBoolean = ["true", "false", "yes", "no", "1", "0"].includes(isFavourite);;
  if (!isBoolean) return;

  return isFavourite;
};

export const parseFilterParams = ({ contactType, isFavourite }) => {

  const parsedType = parseType(contactType);
  const parsedIsFavourite = parseIsFavourite(isFavourite);

  return {
    contactType: parsedType,
    isFavourite: parsedIsFavourite,
  };
};