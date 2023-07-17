import '../Styles/ApiData.css'

const ParseDate = (date) =>{
    const d = new Date(date);
    return `${d.getDay()}/${d.getMonth()}/${d.getFullYear()}`
}

const ApiData = (props) => {
    return( 
        <div id="ApiData">
            <div id="header">
                <p>Saldo Total: R$ {props.saldoTotal}</p>
                <p>Saldo no Periodo: R$ {props.saldoPeriodo}</p>
            </div>
            <table id="ApiContent">
                <tr>
                    <th>Dados</th><th>Valência</th><th>Tipo</th><th>Nome do Operador Transacionado</th>
                </tr>
                    {
                        props.tableContent.map((item) => {
                            return <tr>
                                        <td>{ParseDate(item.data_transferencia)}</td>
                                        <td>{item.valor}</td>
                                        <td>{item.tipo}</td>
                                        <td>{item.nome_operador_transacao != null ? item.nome_operador_transacao : ""}</td>
                                    </tr>
                        })
                    }
            </table>
            <div id="footer">
                <button>1</button>
                <button>2</button>
                <button>3</button>
            </div>
        </div>
    );
};

export default ApiData;