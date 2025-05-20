import fs from 'fs';

// INPUT: Fayldan ma’lumot o‘qish (asinxron I/O)
const readFile = fs.readFile('public/KIA.mp4', 'binary', (err, data) => {
  if (err) {
    console.log(err);
  }

  console.log(data);
});
