const url = "https://dictinary-api.vercel.app";
async function getLimit(page, limit) {
  const data = await fetch(
    `https://api.leksika.uz/articles?page=${page}&limit=${limit}`
  );
  return await data.json();
}
async function getTag(page, limit, tag) {
  const data = await fetch(
    `https://api.leksika.uz/articles?page=${page}&limit=${limit}`
  );
  return await data.json();
}

export { getLimit, getTag };
