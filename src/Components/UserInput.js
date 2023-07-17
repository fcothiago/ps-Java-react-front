import '../Styles/UserInput.css'

const UserInput = () => {
    return(
        <div id="UserInput">
            <div id="name-item">
                <p>Nome</p>
                <input placeholder='Nome'/>
            </div>
            <div id="init-date-item">
                <p>Data de Inicio</p>
                <input placeholder='Data Inicio' type='Date'/>
            </div>
            <div id="end-date-item">
                <p>Data de Fim</p>
                <input placeholder='Data Fim' type='Date'/>
            </div>
        </div>
    )
}

export default UserInput;