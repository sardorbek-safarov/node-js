import { parentPort } from 'worker_threads';

let sum = 0;
for (let i = 0; i <= 1e6; i++) {
  sum += i;
}

parentPort?.postMessage(sum);
