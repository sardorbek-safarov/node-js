import { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('http://localhost:3030/api/v1/task-1')
      .then((task) => {
        return task.text();
      })
      .then((task) => {
        console.log(task);
      });
    fetch('http://localhost:3030/api/v1/task-2')
      .then((task) => {
        return task.text();
      })
      .then((task) => {
        console.log(task);
      });
  }, []);
  return (
    <div className='bg-white h-svh'>
      <video controls>
        <source src='http://localhost:3030/api/v1/video' />
      </video>
    </div>
  );
}

export default App;
