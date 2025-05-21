import fs from 'fs';

// INPUT: Fayldan ma’lumot o‘qish (asinxron I/O)
fs.readFile('public/input.txt', 'utf8', (err, data) => {
  if (err) {
    console.log(err);
  }
  fs.writeFile('public/bew.txt', data, 'utf8', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('Success');
  });
});
