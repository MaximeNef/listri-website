export default (req, res) => {
  const main = JSON.parse(JSON.stringify(req.main));
  console.log(main);
  res.status(200).json({ status: "ok" });
};
