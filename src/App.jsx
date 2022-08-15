import './App.css';
import animals from './data';
import AnimalCard from './animal';

function App() {
  return (
    <div className="wrapper">
      {animals.map(animal =>
        <AnimalCard
          diet={animal.diet}
          key={animal.name}
          name={animal.name}
          size={animal.size}
        />
      )}
    </div>
  );
}

export default App;