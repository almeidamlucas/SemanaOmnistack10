import React, {useState ,useEffect} from 'react';
import api from './services/api'

import './global.css';
import './App.css'
import './Sidebar.css'
import './Main.css'

import DevItem from './components/devItem'
import DevForm from './components/devForm'


function App() {
  const [devs, setDevs] = useState([])

  useEffect(() => {
    loadDevs()
  }, [])

  async function loadDevs() {
    const response = await api.get('/devs')

    setDevs(response.data)
  }

  async function handleAddDev(data) {
    const response = await api.post('/devs', data)

    console.log(response)

    setDevs([...devs, response.data])
  }

  async function deleteDev(id) {
    const response = await api.delete('/devs/' + id )
    console.log('CLICOU VIADO', response)

    loadDevs()
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
          <DevForm onSubmit={handleAddDev} ></DevForm>
      </aside>

      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} removeClicked={deleteDev}></DevItem>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
