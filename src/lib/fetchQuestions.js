const url = "https://dictinary-api.vercel.app";

// GET

async function questions() {
  const data = await fetch(`${url}/question/get/`);
  return data;
}
async function questionById(id) {
  const data = await (
    await fetch(`https://api.leksika.uz/question/${id}`)
  ).json();
  return await data;
}

export { questions, questionById };
