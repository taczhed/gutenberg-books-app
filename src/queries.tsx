interface fetchBooksListArguments {
  queryKey: (string | number | undefined)[];
}

export const fetchBooksList = async ({ queryKey }: fetchBooksListArguments) => {
  let queryText = "https://gnikdroy.pythonanywhere.com/api/book/";
  if (queryKey[1]) queryText += `?page=${queryKey[1]}`;
  if (queryKey[2]) queryText += `&search=${queryKey[2]}`;
  const response = await fetch(queryText);
  return response.json();
};
