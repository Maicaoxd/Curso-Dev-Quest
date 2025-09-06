import ThemeTogglerButton from "./components/ThemeTogglerButton"
import { ThemeProvider } from "./contexts/theme-context"

function App() {

  return (
    <ThemeProvider>
      <ThemeTogglerButton />
    </ThemeProvider>
  )
}

export default App
