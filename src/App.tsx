import { useState } from 'react'
import LoginSelector from './components/LoginSelector'
import ClinicaDentalPage from './components/ClinicaDentalPage'
import BQDCAssociationPage from './components/BQDCAssociationPage'
import ClinicaROIPage from './components/ClinicaROIPage'
import ProcesoProyectoPage from './components/ProcesoProyectoPage'

type ViewType = 'selector' | 'clinica' | 'bqdc' | 'roi' | 'proceso'

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

  const handleSelectProceso = () => {
    setCurrentView('proceso')
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

  if (currentView === 'proceso') {
    return <ProcesoProyectoPage onBack={handleBack} />
  }

  return (
    <LoginSelector 
      onSelectClinica={handleSelectClinica}
      onSelectBQDC={handleSelectBQDC}
      onSelectROI={handleSelectROI}
      onSelectProceso={handleSelectProceso}
    />
  )
}

export default App

