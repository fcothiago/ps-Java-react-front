import '../Styles/UserInput.css'

const UserInput = (props) => {
    return(
        <div id="UserInput">
            <div id="name-item">
                <p>Nome</p>
                <input placeholder='Nome' type='text' onInput={ (e) => {props.setNome(e.target.value)}} />
            </div>
            <div id="init-date-item">
                <p>Data de Inicio</p>
                <input placeholder='Data Inicio' type='Date' onChange={ (e) => {props.setInicio(new Date(e.target.value))}}/>
            </div>
            <div id="end-date-item">
                <p>Data de Fim</p>
                <input placeholder='Data Fim' type='Date' onChange={ (e) => {props.setFim(new Date(e.target.value))}}/>
            </div>
        </div>
    )
}

export default UserInput;