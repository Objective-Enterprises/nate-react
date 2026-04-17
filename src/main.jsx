import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const rootDiv = document.getElementById('root')
const reactRoot = createRoot(rootDiv)
reactRoot.render(<App />)
// v1:
// <App />
// v2:
// App()
