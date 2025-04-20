import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = 3001;

// Middleware برای استفاده از JSON
app.use(cors());
app.use(bodyParser.json());

// داده‌های فرضی برای شبیه‌سازی کاربران
const users = [
  { username: 'harry', password: '1234', token: 'abc123' },
  { username: 'ron', password: '1234', token: 'def456' },
  { username: 'kimia', password: '1234', token: 'daf456' },
  { username: 'maryam', password: '1234', token: 'dbf456' },
  { username: 'hassan', password: '1234', token: 'dcf456' },
  { username: 'arian', password: '1234', token: 'ddf456' },
];


// شبیه‌سازی لاگین
app.post('/auth', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    res.status(200).json({ token: user.token });
  } else {
    res.status(401).json({ message: 'Login Failed : Username or Password is incorrect' });
  }
});

// شروع سرور
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
