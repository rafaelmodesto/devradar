import React from 'react';

import './global.css';
import './App.css';

// Conceitos React
// Componente - uma função que retorna algum HMTL/CSS/JS. Ex.: função 'App'
// Propriedade - informações que um componente pai passa para o componente filho. Ex.: title(atributo) do algum componente.
// Estado - informações mantidas pelo componente(Imutabilidade)

function App() {

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div class="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>

            <div class="input-block">  
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>

          <button type="submit">Salvar</button>          
        </form>
      </aside>
      <main>

      </main>
    </div>
  );
}

export default App;