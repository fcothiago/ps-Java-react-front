import axios from "axios";

export async function getTransferencia(operador,Inicio,Fim)
{
    let data = [];

    if(!operador)
    {
        return data;
    }

    const url = `http://localhost:8080/api/transferencias/operador/${operador}`;
    let params = {};

    if( (Inicio && !isNaN(Inicio.getTime())) && (Fim && !isNaN(Fim.getTime())))
    {
        params["from"] = Inicio.toISOString();
        params["to"] = Fim.toISOString(); 
    }

    await axios.get(url,{params:params}).then(Response =>{data = Response.data;}).catch(err => {data = []});
    return data
}

export async function getSaldo(operador,Inicio,Fim)
{
    let data = [];

    console.log(operador)

    if(!operador)
    {
        return 0;
    }

    const url = `http://localhost:8080/api/transferencias/operador/${operador}/saldo`;

    console.log(url);
    await axios.get(url).then(Response =>{data = Response.data;}).catch(err => {data = 0});

    return !isNaN(data) ? data : 0; 
}
