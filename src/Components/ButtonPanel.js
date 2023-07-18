import '../Styles/ButtonPanel.css'

const ButtonPanel = (props) =>{
    return(
        <div id="button-panel">
            <button onClick={() => props.searchCallBack()}>Pesquisar</button>
        </div>
    )
}

export default ButtonPanel;