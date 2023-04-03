export default async function handler(req, res) {
  let { id } = req.query;
  if (!id.endsWith(".csv")) {
    id = id + ".csv";
  }
  const response = await fetch(`http://webserver:8080/dataset/${id}`);
  const data = await response.text();
  res.status(200).setHeader("Content-Type", "text/csv").send(data);
}
