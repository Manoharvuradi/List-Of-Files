export default function handler(req, res) {
  const randomNumber = Math.floor(Math.random() * 100);
  res.status(200).json({ createdAt: new Date(), number: randomNumber });
}
