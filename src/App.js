import {Nav} from './Navbar'
import { Galeria } from './Galeria';
import {useAuth0} from '@auth0/auth0-react'


function App() {
  return (
    <div className="App">
      <Nav/>
      <Galeria/>
    </div>
    
  );
}

export default App;
