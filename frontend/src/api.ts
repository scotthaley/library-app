interface IBook {
  id: number;
  name: string;
  author: string;
  publisher: string;
  isbn: string;
  genre: string[];
  pages: number;
  count: number;
}

export const getFeaturedBooks: () => Promise<IBook[]> = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_API_HOSTNAME}/api/featured`,
  );
  return await response.json();
};

export const getBookById: (id: number) => Promise<IBook> = async (
  id: number,
) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_HOSTNAME}/api/books/${id}`,
  );
  return await response.json();
};

export const checkoutBook: (
  id: number,
  card: string,
  pin: string,
) => Promise<Response> = async (id, card, pin) => {
  return fetch(`${import.meta.env.VITE_API_HOSTNAME}/api/checkout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
      card,
      pin,
    }),
  });
};
