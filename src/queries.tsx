interface fetchArguments {
  queryKey: (string | number | undefined | string[])[];
}

export const fetchBooksList = async ({ queryKey }: fetchArguments) => {
  let queryText = "https://gnikdroy.pythonanywhere.com/api/book/";
  if (queryKey[1]) queryText += `?page=${queryKey[1]}`;
  if (queryKey[2]) queryText += `&search=${queryKey[2]}`;
  if (queryKey[3]) queryText += `&has_bookshelf=${queryKey[3]}`;
  const response = await fetch(queryText);
  return response.json();
};

export const fetchBook = async ({ queryKey }: fetchArguments) => {
  let queryText = `https://gnikdroy.pythonanywhere.com/api/book/${queryKey[1]}`;
  const response = await fetch(queryText);
  return response.json();
};
