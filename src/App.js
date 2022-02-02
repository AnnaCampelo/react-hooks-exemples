import './App.css'
import UseStateComponent from './components/useState'
import UseReducerComponent from './components/useReducer'
import UseCallbackComponent from './components/useCallback'
import UseRefComponent from './components/useRef'
import { ThemeContext, Toolbar, themes } from './components/useContext'

function App() {
  return (
    <div className="App">      
      {/* useState + useEffect */}
      <UseStateComponent />

      {/* useContext */}
      <ThemeContext.Provider value={themes.dark}>
        <Toolbar />
      </ThemeContext.Provider>

      {/* useReducer */}
      <UseReducerComponent />

      {/* useCallback */}
      <UseCallbackComponent />

      {/* useRef */}
      <UseRefComponent />
    </div>
  );
}

export default App
