import '../Styles/ApiData.css'
let fake = [1,2,3,4,5,6,7,8];

const ApiData = () => {
    return( 
        <div id="ApiData">
            <div id="header">
                <p>Saldo Total: R$ 50.00</p>
                <p>Saldo no Periodo: R$ 50.00</p>
            </div>
            <table id="ApiContent">
                <tr>
                    <th>Dados</th><th>Valência</th><th>Tipo</th><th>Nome do Operador Transacionado</th>
                </tr>
                    {
                        fake.map((intem) => {
                            return <tr><td>1</td><td>2</td><td>3</td><td>4</td></tr>

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