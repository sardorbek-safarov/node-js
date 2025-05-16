const fs = require('fs');
// INPUT: Fayldan ma’lumot o‘qish (asinxron I/O)
fs.readFile('roles.json', 'utf8', (err, data) => {
  if (err) throw err;

  console.log('Fayldan o‘qildi:', data); // OUTPUT: terminalga chiqarish
  console.log('Fayldan o‘qildi:', JSON.parse(data).User); // OUTPUT: terminalga chiqarish

  // OUTPUT: Boshqa faylga yozish
  fs.writeFile('roles-copy.json', data, (err) => {
    if (err) throw err;
    console.log('Yozildi: roles-copy.json');
  });
});
