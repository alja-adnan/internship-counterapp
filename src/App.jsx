import { BrowserRouter, Routes, Route } from "react-router-dom";
import CounterApp from "./components/CounterApp";
import ValidationForm from "./components/ValidationForm.jsx";


function App() {
  return (
    <div className="bg-gradient-to-br from-blue-900 to-purple-900 min-h-screen p-4">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CounterApp />} />
          <Route path="/validation" element={<ValidationForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


