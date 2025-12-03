import { useState } from 'react'
import LoginSelector from './components/LoginSelector'
import KTEDPitchPage from './components/KTEDPitchPage'
import BQDCPitchPage from './components/BQDCPitchPage'

type ViewType = 'selector' | 'generic' | 'bqdc'

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('selector')

  const handleSelectGeneric = () => {
    setCurrentView('generic')
  }

  const handleSelectBQDC = () => {
    setCurrentView('bqdc')
  }

  const handleBack = () => {
    setCurrentView('selector')
  }

  if (currentView === 'generic') {
    return <KTEDPitchPage onBack={handleBack} />
  }

  if (currentView === 'bqdc') {
    return <BQDCPitchPage onBack={handleBack} />
  }

  return (
    <LoginSelector 
      onSelectGeneric={handleSelectGeneric}
      onSelectBQDC={handleSelectBQDC}
    />
  )
}

export default App

