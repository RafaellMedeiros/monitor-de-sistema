import './App.css'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'

export default function App() {
  
  // const [systemInfo, setSystemInfo] = useState(null)
  // useEffect(() => {
  //   window.electronAPI.getSystemInfo().then(setSystemInfo)
  // }, [])

  return (
    <div className="App">
      <Dashboard />
      <Footer />
    </div>
  )
}
