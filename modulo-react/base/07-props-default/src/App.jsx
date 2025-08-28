import Button from "./components/button/button";

function App() {
  return (
    <><Button label="Baixar CV" /> {/* usa a prop recebida */}
      <Button />                   {/* usa a defaultProp */}
    </>
  );
}

export default App;