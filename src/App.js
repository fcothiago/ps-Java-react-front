import ApiData from './Components/ApiData';
import ButtonPanel from './Components/ButtonPanel';
import UserInput from './Components/UserInput';
import './Styles/App.css'

import { useState } from 'react';

const fakeData = [{"id":1,"data_transferencia":"2019-01-01T06:00:00","valor":30895.46,"tipo":"DEPOSITO","nome_operador_transacao":null,"conta_id":1},{"id":3,"data_transferencia":"2019-05-04T02:12:45","valor":-500.5,"tipo":"SAQUE","nome_operador_transacao":null,"conta_id":1},{"id":5,"data_transferencia":"2020-06-08T04:15:01","valor":3241.23,"tipo":"TRANSFERENCIA","nome_operador_transacao":"Beltrano","conta_id":1}];

const App = () => {

    let [data,setData] = useState([]);
    let [tableContent,settableContent] = useState(fakeData);
    let [saldoTotal,setSaldoTotal] = useState(0.0);
    let [saldoPeriodo,setSaldoPeriodo] = useState(0.0);

    return (
        <main>
            <div id="content">
                <h3>Consulta de Transferências</h3>
                <UserInput/>
                <ButtonPanel/>
                <ApiData tableContent={tableContent} saldoPeriodo={saldoPeriodo} saldoTotal={saldoTotal}/>
            </div>
        </main>
    );
};

export default App;