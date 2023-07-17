import ApiData from './Components/ApiData';
import ButtonPanel from './Components/ButtonPanel';
import UserInput from './Components/UserInput';
import './Styles/App.css'

const App = () => {
    return (
        <main>
            <div id="content">
                <h3>Consulta de Transferências</h3>
                <UserInput/>
                <ButtonPanel/>
                <ApiData/>
            </div>
        </main>
    );
};

export default App;