import '../Styles/UserInput.css'

const UserInput = () => {
    return(
        <div id="UserInput">
            <div id="name-item">
                <p>Nome</p>
                <input placeholder='Nome'/>
            </div>
            <div id="init-date-item">
                <p>From</p>
                <input placeholder='Data Inicio'/>
            </div>
            <div id="end-date-item">
                <p>To</p>
                <input placeholder='Data Fim'/>
            </div>
        </div>
    )
}

export default UserInput;