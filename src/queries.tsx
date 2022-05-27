interface fetchArguments {
  queryKey: (string | number | undefined | string[])[];
}

export const fetchBooksList = async ({ queryKey }: fetchArguments) => {
  let API_URL = "https://gnikdroy.pythonanywhere.com/api/book/";
  if (queryKey[1]) API_URL += `?page=${queryKey[1]}`;
  if (queryKey[2]) API_URL += `&search=${queryKey[2]}`;
  if (queryKey[3]) API_URL += `&has_bookshelf=${queryKey[3]}`;
  const response = await fetch(API_URL);
  return response.json();
};

export const fetchBook = async ({ queryKey }: fetchArguments) => {
  let API_URL = `https://gnikdroy.pythonanywhere.com/api/book/${queryKey[1]}`;
  const response = await fetch(API_URL);
  return response.json();
};
