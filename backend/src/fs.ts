import fs from 'fs';

// INPUT: Fayldan ma’lumot o‘qish (asinxron I/O)
fs.readFile('public/KIA.mp4', (err, data) => {
  if (err) {
    console.log(err);
  }

  console.log(data);
});

fs.stat('public/KIA.mp4', (err, stats) => {
  if (err) {
    console.log(err);
  }

  console.log(stats);
});
