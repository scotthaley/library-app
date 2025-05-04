export const getFeaturedBooks: () => Promise<
  { name: string; author: string }[]
> = async () => {
  const response = await fetch("http://localhost:3000/api/featured");
  return await response.json();
};
