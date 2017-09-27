import logo from './Bus2.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Reserve su asiento</h1>
        </div>
        
        <div className="secTabla">
        <center>
        <h3 className="App-intro">
        1. Elija el número de asiento:
        </h3>
        <table className="table" border="3" bordercolor="orange" cellspacing="12">
          <tr>
            <td>04</td>
            <td>08</td>
            <td>12</td>
            <td>16</td>
            <td>20</td>
            <td>24</td>
            <td>28</td>
            <td>32</td>
          </tr>
          <tr>
            <td>03</td>
            <td>07</td>
            <td>11</td>
            <td>15</td>
            <td>19</td>
            <td>23</td>
            <td>27</td>
            <td>31</td>
          </tr>
          <tr></tr>
          <tr>
            <td>02</td>
            <td>06</td>
            <td>10</td>
            <td>14</td>
            <td>18</td>
            <td>22</td>
            <td>26</td>
            <td>30</td>
          </tr>
          <tr>
            <td>01</td>
            <td>05</td>
            <td>09</td>
            <td>13</td>
            <td>17</td>
            <td>21</td>
            <td>25</td>
            <td>29</td>
          </tr>
        </table>
        <div id = "mostrar"></div>

        <h3>Buscar Reserva:</h3>
          <label for="buscardni">Ingrese DNI:</label>
          <input type="number" id="buscardni" placeholder="Ingrese su DNI"></input>
          <button type="submit" className="btns" onclick="buscar()">Buscar</button>
          <div id="muestraDNI"></div>
        <h3>2. Ingrese sus datos para realizar la reserva:</h3><br></br>
          <label for="inputName"></label><input type="text" id="inputName" placeholder="Ingrese su Nombre" required></input><br></br>
          <label for="inputSurname"></label><input type="text" id="inputSurname" placeholder="Ingrese sus Apellidos" required></input><br></br>
          <label for="inputDni"></label><input type="number" id="inputDni" placeholder="Ingrese su DNI" required></input><br></br>
          <div>
          <button type="submit" className="btns" onclick="mostrarReserva(); return false">Reservar</button>
          <button type="submit" className="btns" onclick="cancelar(); return false">Cancelar</button>
          <button type="submit" className="btns" onclick="muestraLista(); return false">Lista</button>
          </div>
          <div id= "muestra"></div>
          <div id="checklist"></div>
          <div id="listar"></div>

        </center>
        </div>
      </div>
    );
  }
}

export default App;
