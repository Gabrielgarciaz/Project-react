import {useState, useEffect} from 'react';

import RepositoryItem from './RepositoryItem'
import '../styles/repositories.scss'

function RepositoryList(){

    const [repositories, setRepositories] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/Gabrielgarciaz/repos')
        .then(response => response.json()) // Quando tiver uma resposta vai converter a resposta para json
        .then(data => setRepositories(data)) //data = dados ------  salavando os dados dentro de repositories

    }, [repositories]); // toda vez que a váriavel repositores mudar vai chamar a function

   return(
    <section className='repository-list'>
        <h1>Lista de repositórios</h1>
        <ul>
        {repositories.map(repository => {            //map percorre cada um dos repositorios e para cada retorna o RepositoryItem
            return <RepositoryItem key={repository.name} repository={repository}/>
        })}    
        
       
        </ul>
        
    </section>
   )
}

export default RepositoryList;