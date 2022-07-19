

export const getGifs = async (categoria,cantidad) => {
  const API_KEY = "Q3S92BHhuNF4O3H4PYXZhSKfX6NdEVOk";

  const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${categoria}&limit=${cantidad}&offset=0&rating=g&lang=en`;

  const res = await fetch(url);

  const { data } = await res.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.original.url,
  }));

  return gifs;
};
