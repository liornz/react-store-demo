import './App.css'
import DisplayValue from './components/DisplayValue'
import IncrementValue from './components/IncrementValue'

function App() {

  return (
    <>
      <IncrementValue item="value1" />
      <DisplayValue item="value1" />
      <IncrementValue item="value2" />
      <DisplayValue item="value2" />
    </>
  )
}

export default App
