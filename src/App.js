import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(() => {
    generateMosaics();

    return () => {
      const pixels = document.querySelectorAll('.App-square');
      pixels.forEach((pixel) => clearInterval(pixel.intervalId));
    };
  }, []);

  function generateMosaics() {
    const animatedSquare = document.querySelector('#animatedSquare');
    createSquares(animatedSquare, animatedSquare);
  }

  function createSquares(elemntSize, elementFills) {
    const countSquaresWidth = Math.floor(elemntSize.offsetWidth / 29.5);
    const countSquaresHeight = Math.floor(elemntSize.offsetHeight / 29.5);
    elementFills.innerHTML = '';
    for (let i = 0; i < countSquaresWidth * countSquaresHeight; i++) {
      const square = document.createElement('div');
      square.classList.add("App-square");
      square.style.backgroundColor = 'var(--gray-color)'
      elementFills.appendChild(square);
    }
    const pixels = document.querySelectorAll('.App-square');
    pixels.forEach(animatePixel);
  }

  function animatePixel(pixel) {
    const playerCollorsArray = ["#000", "#ff0000", "#ffa500", "#ffff00", "#008000", "#00ff15", "#0000ff", "#00FFFF", "#800080", "#ffffff"];
    pixel.intervalId = setInterval(() => {
      pixel.style.backgroundColor = playerCollorsArray[Math.floor(Math.random() * playerCollorsArray.length)];
    }, (Math.random() * 10000) + 1500);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-animated-square" id="animatedSquare" style={{ }}></div>
        <p>
          Taras Kaminskyi
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
