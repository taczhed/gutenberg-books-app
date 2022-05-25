interface fetchBooksListArguments {
  queryKey: (string | number)[];
}

export const fetchBooksList = async ({ queryKey }: fetchBooksListArguments) => {
  const response = await fetch(
    `https://gnikdroy.pythonanywhere.com/api/book/?page=${queryKey[1]}`,
  );
  return response.json();
};
