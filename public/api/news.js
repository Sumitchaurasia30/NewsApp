export default async function handler(req, res) {
  const response = await fetch(`https://newsapi.org/v2/everything?q=${q}&pageSize=24&page=1&sortBy=publishedAt&language=${searchParams.get("language") ?? "hi"}&apiKey=0919f10e7ab541d4873bf3b6cd6b5bbb`)
  const data = await response.json();
  res.status(200).json(data);
}
