import http from 'http';
import { createReadStream, stat } from 'fs';
import { promisify } from 'util';
import dotenv from 'dotenv';

dotenv.config();
const server = http.createServer(async (req, res) => {
  res.setHeader('Set-Cookie', [
    `accessToken=ahsjdhfhuwqehfuiaqq879934r19234rf78qowyfefqui; HttpOnly; Path=/; Max-Age=${60 * 60}; Secure`,
    `refreshToken=8934y0r098wehrffw8erhfowf783hfoqhwerof; HttpOnly; Path=/; Max-Age=${60 * 60 * 24 * 7 * 2}; Secure`,
  ]);

  res.end('Hello World!');
});
const port = process.env.PORT || 3030;

server.listen(port, () => {
  console.log(`Server is running on PORT=${port}`);
});

// console.log('Start');
// let total = 0;
// for (let index = 0; index < 100e9; index++) {
//   total += index;
// }

// console.log(total);

// console.log('End');
