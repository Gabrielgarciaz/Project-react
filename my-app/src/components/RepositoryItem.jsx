
function RepositoryItem(props){
    return(
        <>
            <li>
                <strong>{props.repository.name ?? 'Default'}</strong> {/*Faz a validação se tem nome ou da Default --- repository.name vem da API*/}
                <p>{props.repository.description}</p>
                <a href={props.repository.html_url}> 
                    Acessar Repositório
                </a>
            </li>
        </>
    );
}

export default RepositoryItem;