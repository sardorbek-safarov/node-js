// // ESM style __dirname

import { getBasePaths } from './utils/base-path.ts';

const { __dirname, __filename } = getBasePaths(import.meta.url);
// const worker = new Worker(__dirname + '/worker.ts');
// console.log('Start');

// worker.on('message', (msg) => {
//   console.log('✅ Worker javobi:', msg);
// });

// console.log('End');
