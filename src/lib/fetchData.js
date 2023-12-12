// const url = "https://api.liksika.uz";
// const url = "https://loclahost:4000"

//Read
async function readEngUzb(word) {
  const data = await fetch(`https://api.leksika.uz/words/en-uz/autocomplete`);
  return data;
}
async function readUzbEng(word) {
  const data = await fetch(`https://api.leksika.uz/words/uz-en/autocomplete`);
  return data;
}

//Find
async function findEngUzb(word) {
  const data = await fetch(`https://api.leksika.uz/words/en-uz?s=${word}`);
  return await data;
}
async function findUzbEng(word) {
  const data = await fetch(`https://api.leksika.uz/words/uz-en?s=${word}`);
  return await data;
}
async function findFile(id) {
  const data = await (
    await fetch(`https://api.leksika.uz/grammars/${id}`)
  ).json();
  return await data;
}
export { readEngUzb, readUzbEng, findEngUzb, findUzbEng, findFile };
