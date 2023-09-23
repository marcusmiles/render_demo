import logo from './logo.svg';
import './App.css';

const APIComponent = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    const makeApiCall = async () => {
      const response = await fetch('https://https://render-react-app-o7x5.onrender.com/api/test');
      const data = await response.json();
      setData(data);
    };

    makeApiCall();
  }, []);

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
    </div>
  );
};



function App() {
  return (
    <div className="App">
      <h1> Changed something</h1>
      <APIComponent />
    </div>
  );
}

export default App;
