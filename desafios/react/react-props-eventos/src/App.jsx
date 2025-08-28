import Paragraph from "./components/paragraph/paragraph";
import Button from "./components/button/button";

function App() {
  return (
    <>
      <Paragraph text="primeiro paragrafo" color="red" />
      <Paragraph text="segundo paragrafo" color="blue" />
      <Paragraph text="terceiro paragrafo" color="#ff00ff" />

      <Button label="Baixar CV" />
    </>
  );
}

export default App;
