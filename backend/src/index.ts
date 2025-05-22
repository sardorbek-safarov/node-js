import http from 'http';
import { createReadStream, stat } from 'fs';
import { promisify } from 'util';
import dotenv from 'dotenv';

dotenv.config();
const server = http.createServer(async (req, res) => {});
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
