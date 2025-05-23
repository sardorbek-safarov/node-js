import { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('http://localhost:3030')
      .then((task) => {
        return task.text();
      })
      .then((task) => {
        console.log(task);
      });
  }, []);
  return <div className='bg-white h-svh'>Hello world</div>;
}

export default App;
