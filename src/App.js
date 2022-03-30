import './App.css';
import enum1 from './assets/enum1.svg'
import Card from './Card';

function App() {
  const object = {
    title: 'Project Name',
    image: enum1,
    description: 'Hello, this is my first project, it is made with react js and node js and designed inside figmaa',
    visit: 'www.google.com',
    code: 'github.com'
  }
  return (
    <div className="App">
      <div className='header'> <h2>My Library</h2> </div>
      <div className='container'>
       <Card  object={object} index={1}/>
       <Card  object={object} index={1}/>
       <Card  object={object} index={1}/>
       <Card  object={object} index={1}/>
       <Card  object={object} index={1}/>
       <Card  object={object} index={1}/>
      </div>
    </div>
  );
}

export default App;
