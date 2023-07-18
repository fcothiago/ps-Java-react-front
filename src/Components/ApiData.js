import '../Styles/ApiData.css'
import { useEffect , useState} from 'react';

const ParseDate = (date) =>{
    const d = new Date(date);
    //return `${d.getDay()}/${d.getMonth()}/${d.getFullYear()}`
    return d.toLocaleDateString("pt-Br");
}

const ApiData = (props) => {
    
    let [saldoPeriodo,setSaldoPeriodo] = useState(0);

    useEffect(() => {
        let sum = props.data.reduce((ac,item) => {return ac+item.valor},0);
        setSaldoPeriodo(sum);
    },[props.data])

    return( 
        <div id="ApiData">
            <div id="header">
                <p>Saldo Total: R$ {props.saldoTotal}</p>
                <p>Saldo no Periodo: R$ {saldoPeriodo}</p>
            </div>
            <div id="ApiContent">
                <table>
                    <thead>
                        <tr>
                            <th>Dados</th><th>Valência</th><th>Tipo</th><th>Nome do Operador Transacionado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.data.map((item) => {
                                return <tr key={item.id}>
                                            <td>{ParseDate(item.data_transferencia)}</td>
                                            <td>{item.valor}</td>
                                            <td>{item.tipo}</td>
                                            <td>{item.nome_operador_transacao != null ? item.nome_operador_transacao : ""}</td>
                                        </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ApiData;