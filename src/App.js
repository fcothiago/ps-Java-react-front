import ApiData from './Components/ApiData';
import ButtonPanel from './Components/ButtonPanel';
import UserInput from './Components/UserInput';
import './Styles/App.css'

import { useState } from 'react';
import {getTransferencia,getSaldo} from './API/TransferenciasAPI'

const App = () => {

    let [data,setData] = useState([]);
    let [saldoTotal,setSaldoTotal] = useState(0.0);
    
    let [nome,setNome] = useState("");
    let [inicio,setInicio] = useState();
    let [fim,setFim] = useState();


    const searchCallBack = async () => {
        let data = await getTransferencia(nome,inicio,fim);
        setData(data);
        data = await getSaldo(nome);
        setSaldoTotal(data);

    }  

    return (
        <main>
            <div id="content">
                <h3>Consulta de Transferências</h3>
                <UserInput setNome={setNome} setInicio={setInicio} setFim={setFim}/>
                <ButtonPanel searchCallBack={searchCallBack}/>
                <ApiData data={data} saldoTotal={saldoTotal} />
            </div>
        </main>
    );
};

export default App;