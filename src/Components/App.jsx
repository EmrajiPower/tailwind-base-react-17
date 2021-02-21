import logo from "../logo.svg";

function App() {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div className="flex-shrink-0">
        <img className="h-12 w-12" src={logo} alt="ChitChat Logo" />
      </div>
      <div>
        <div className="text-xl font-medium text-black">Hola Mundo!</div>
      </div>
    </div>
  );
}

export default App;
