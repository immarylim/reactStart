import logo from './logo.svg';
import './App.css';

const user = {
  name: 'My Pig ..',
  imageUrl: 'https://i.namu.wiki/i/-YK8L4RsjhgIhps7bNF89BpHg4TP48JSc6W98osE5o_bdxfZ0ZD0rXAXJz-_MmGMiLPJLwRHqz1tb-wROcSONw.webp',
  imageSize: 90,
};

function App() {
  return (
    <div className="App">
      <div className="App-box">
        <h1>{user.name}</h1>
        <img
          className="avatar"
          src={user.imageUrl}
          alt={'Photo of ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize
          }}
        />
      </div>
    </div>
  );
}

export default App;
