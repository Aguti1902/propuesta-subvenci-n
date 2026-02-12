import { useState } from 'react'
import LoginSelector from './components/LoginSelector'
import ClinicaDentalPage from './components/ClinicaDentalPage'
import BQDCAssociationPage from './components/BQDCAssociationPage'

type ViewType = 'selector' | 'clinica' | 'bqdc'

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('selector')

  const handleSelectClinica = () => {
    setCurrentView('clinica')
  }

  const handleSelectBQDC = () => {
    setCurrentView('bqdc')
  }

  const handleBack = () => {
    setCurrentView('selector')
  }

  if (currentView === 'clinica') {
    return <ClinicaDentalPage onBack={handleBack} />
  }

  if (currentView === 'bqdc') {
    return <BQDCAssociationPage onBack={handleBack} />
  }

  return (
    <LoginSelector 
      onSelectClinica={handleSelectClinica}
      onSelectBQDC={handleSelectBQDC}
    />
  )
}

export default App

