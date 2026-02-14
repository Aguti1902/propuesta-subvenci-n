import { useState } from 'react'
import LoginSelector from './components/LoginSelector'
import ClinicaDentalPage from './components/ClinicaDentalPage'
import BQDCAssociationPage from './components/BQDCAssociationPage'
import ClinicaROIPage from './components/ClinicaROIPage'

type ViewType = 'selector' | 'clinica' | 'bqdc' | 'roi'

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('selector')

  const handleSelectClinica = () => {
    setCurrentView('clinica')
  }

  const handleSelectBQDC = () => {
    setCurrentView('bqdc')
  }

  const handleSelectROI = () => {
    setCurrentView('roi')
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

  if (currentView === 'roi') {
    return <ClinicaROIPage onBack={handleBack} />
  }

  return (
    <LoginSelector 
      onSelectClinica={handleSelectClinica}
      onSelectBQDC={handleSelectBQDC}
      onSelectROI={handleSelectROI}
    />
  )
}

export default App

