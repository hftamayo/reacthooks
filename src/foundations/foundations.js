import Menu from './Paginas/Menu';
import Submenu from './Paginas/Submenu';
<<<<<<< HEAD:src/App.js
import Cliente from './Paginas/Jsx/Cliente';
=======
import Cliente from './01Jsx/Cliente';
import Homework01 from './01Jsx/Homework01';
import Lists from './02Lists';
import Homework02 from './02Lists/Homework02';
import Styling from './03Styling/Styling';
>>>>>>> bca0f70bb71abb196e1fcb77724eadaeb7e12219:src/foundations/foundations.js
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Menu />
        </p>
      </header>
      <main>
      <div>
          <Submenu />
<<<<<<< HEAD:src/App.js
      </div>
      <div>
        <Cliente />
      </div>
=======
        </div>
        <div>
          {/*<Cliente />*/}
          {/*<Homework01 /> */}
          {/*<Lists /> */}
          <Homework02 />
        </div>
        <div>
          <Styling />
        </div>
>>>>>>> bca0f70bb71abb196e1fcb77724eadaeb7e12219:src/foundations/foundations.js
        <p>@hftamayo</p>
      </main>
    </div>
  );
}

export default App;
