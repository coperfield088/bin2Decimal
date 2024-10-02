import { CalculatorPage } from "./pages/CalculatorPage";
import './styles.css'

export const App = () => {
  return (
    <div className="contenedor">
      <div className="fondo">
        <CalculatorPage />
      </div>
    </div>
  );
};

export default App;
