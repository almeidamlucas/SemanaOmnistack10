import React from 'react';
import './styles.css'

function DevItem(props) {
    const { dev, removeClicked } = props

    return(
        <li className="dev-item">
            <header>
              <img src={dev.avatar_url} alt={dev.name}/>

              <div className="user-info">
                <strong>{dev.name}</strong> 
                <span>{dev.techs.join(', ')}</span>
              </div>

              <div className="remove-user">
                <i className="fa fa-trash fa-lg" onClick={() => removeClicked(dev._id)}></i>
              </div>
            </header>

            <p>{dev.bio}</p>
            <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no Github</a>
          </li>
    )
}

export default DevItem