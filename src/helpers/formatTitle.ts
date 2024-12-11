const getKeys = (string: string) => {
  const keys = string.match(/{[^\}]*}/g) || [''];

  return keys.map((item) => item.replace(/[{}]/g, ''));
};

export const formatTitle = (string: string, values: Record<string, string>) => {
  const keys = getKeys(string);
  let formattedString = string;

  keys.forEach((key) => {
    if (!!values[key]) {
      formattedString = formattedString.replace(`{${key}}`, values[key]);
    }
  });

  return formattedString.replace(/{[^\}]*}/g, '');
};
