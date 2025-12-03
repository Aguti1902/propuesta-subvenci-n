import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Users,
  Building2,
  Database,
  Bot,
  Award,
  CheckCircle,
  Sparkles,
  Shield,
  Target,
  TrendingUp,
  BarChart3,
  Zap,
  AlertCircle,
  FileText,
  Clock,
  Rocket,
  Calendar,
  MessageCircle,
  Newspaper,
  Globe,
  Megaphone,
  Radio,
  Tv,
  Share2,
  Camera,
  Mic,
} from 'lucide-react';
import ContactModal from './ContactModal';

interface BQDCPitchPageProps {
  onBack: () => void;
}

export default function BQDCPitchPage({ onBack }: BQDCPitchPageProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const totalSteps = 7;

  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goToStep = (step: number) => {
    setCurrentStep(step);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const steps = [
    {
      title: 'Visión Estratégica',
      subtitle: 'El futuro de BQDC',
      icon: Rocket,
    },
    {
      title: 'Situación Actual',
      subtitle: 'Los retos de hoy',
      icon: AlertCircle,
    },
    {
      title: 'Espacio de Datos',
      subtitle: 'Infraestructura digital',
      icon: Database,
    },
    {
      title: 'Inteligencia Artificial',
      subtitle: 'IA clínica + administrativa',
      icon: Bot,
    },
    {
      title: 'Impacto Operativo',
      subtitle: 'Qué gana BQDC',
      icon: Award,
    },
    {
      title: 'Impacto Marketing',
      subtitle: 'Proyección nacional',
      icon: TrendingUp,
    },
    {
      title: 'Próximos Pasos',
      subtitle: 'Cómo empezar',
      icon: ArrowRight,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      {/* Header Fixed */}
      <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between mb-4">
            {/* Botón volver */}
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-300 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-semibold">Volver</span>
            </button>

            {/* Logos */}
            <div className="flex items-center gap-4">
              <img src="/images/LOGO.png" alt="Nexgent" className="h-10 w-auto" />
              <span className="text-gray-400">+</span>
              <img src="/images/logo_ACCURO-843x800.avif" alt="ACCURO" className="h-10 w-auto" />
            </div>

            {/* Badge BQDC */}
            <div className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full font-bold text-sm">
              <Building2 className="w-4 h-4" />
              BQDC
            </div>
          </div>

          {/* Progress Bar */}
          <div className="flex items-center gap-2">
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => goToStep(index)}
                className={`flex-1 h-2 rounded-full transition-all duration-300 ${
                  index === currentStep
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 scale-105'
                    : index < currentStep
                    ? 'bg-green-500 hover:bg-green-600'
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
                title={step.title}
              />
            ))}
          </div>

          {/* Step indicator */}
          <div className="mt-3 text-center">
            <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
              <span className="text-sm font-semibold text-gray-600">
                Paso {currentStep + 1} de {totalSteps}:
              </span>
              <span className="text-sm font-bold text-gray-900">{steps[currentStep].title}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Content Area */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatePresence mode="wait">
          {currentStep === 0 && <Step1Vision key="step1" />}
          {currentStep === 1 && <Step2Situation key="step2" />}
          {currentStep === 2 && <Step3DataSpace key="step3" />}
          {currentStep === 3 && <Step4AI key="step4" />}
          {currentStep === 4 && <Step5Impact key="step5" />}
          {currentStep === 5 && <Step6Marketing key="step6" />}
          {currentStep === 6 && <Step7NextSteps key="step7" onOpenContact={() => setIsContactModalOpen(true)} />}
        </AnimatePresence>
      </div>

      {/* Navigation Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                currentStep === 0
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <ArrowLeft className="w-5 h-5" />
              Anterior
            </button>

            <div className="text-center">
              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {currentStep + 1} / {totalSteps}
              </div>
            </div>

            {currentStep < totalSteps - 1 ? (
              <button
                onClick={nextStep}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 group"
              >
                Siguiente
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            ) : (
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 group"
              >
                <CheckCircle className="w-5 h-5" />
                Contactar
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  );
}

// ============= STEP 1: VISIÓN ESTRATÉGICA =============
function Step1Vision() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className="pb-24"
    >
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full mb-6 shadow-lg">
          <Rocket className="w-6 h-6" />
          <span className="font-bold">Visión Estratégica</span>
        </div>
        <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
          BQDC: Liderando el futuro
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mt-2">
            de la odontología digital
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Una oportunidad única para convertir a BQDC en la referencia nacional en digitalización e inteligencia artificial del sector dental privado
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-8 text-white shadow-xl"
        >
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
            <Award className="w-9 h-9" />
          </div>
          <h3 className="text-2xl font-bold mb-3">Primera red dental</h3>
          <p className="text-blue-100 leading-relaxed">
            Con un espacio de datos clínico común en toda España. Pioneros absolutos en el sector privado.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl p-8 text-white shadow-xl"
        >
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
            <Target className="w-9 h-9" />
          </div>
          <h3 className="text-2xl font-bold mb-3">Diferenciación total</h3>
          <p className="text-purple-100 leading-relaxed">
            Ventaja competitiva insuperable frente a otras cadenas dentales y clínicas independientes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-8 text-white shadow-xl"
        >
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
            <Sparkles className="w-9 h-9" />
          </div>
          <h3 className="text-2xl font-bold mb-3">100% financiado</h3>
          <p className="text-green-100 leading-relaxed">
            30.000€ por clínica cubiertos por subvención. Transformación digital sin inversión de BQDC.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white rounded-3xl p-10 shadow-xl border-2 border-gray-100"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">¿Qué significa esto para BQDC?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-7 h-7 text-blue-600" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Posicionamiento estratégico</h4>
              <p className="text-gray-600">BQDC se convierte en la cadena dental más avanzada tecnológicamente de España</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-7 h-7 text-purple-600" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Atracción de talento</h4>
              <p className="text-gray-600">Dentistas quieren trabajar en una red innovadora con herramientas de última generación</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-7 h-7 text-green-600" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Captación de pacientes</h4>
              <p className="text-gray-600">Argumento de venta único: "Tu historial te sigue en cualquier clínica BQDC"</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-7 h-7 text-orange-600" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Preparación futuro</h4>
              <p className="text-gray-600">Adelantarse al Espacio Europeo de Datos de Salud (EHDS) antes que nadie</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ============= STEP 2: SITUACIÓN ACTUAL =============
function Step2Situation() {
  const problems = [
    {
      icon: Building2,
      title: 'Clínicas desconectadas',
      description: 'Cada clínica BQDC funciona como una isla digital independiente',
      impact: 'Alto',
    },
    {
      icon: FileText,
      title: 'Duplicación de trabajo',
      description: 'Pruebas y formularios se repiten cuando un paciente cambia de clínica',
      impact: 'Alto',
    },
    {
      icon: Users,
      title: 'Sin historial unificado',
      description: 'No existe continuidad del historial clínico entre clínicas de la red',
      impact: 'Crítico',
    },
    {
      icon: Clock,
      title: 'Carga administrativa alta',
      description: 'Tareas manuales repetitivas en cada centro sin estandarización',
      impact: 'Alto',
    },
    {
      icon: BarChart3,
      title: 'Datos sin aprovechar',
      description: 'Información valiosa dispersa que no se utiliza para mejorar la red',
      impact: 'Medio',
    },
    {
      icon: Shield,
      title: 'Calidad desigual',
      description: 'Falta de protocolos comunes y estándares homogéneos entre centros',
      impact: 'Alto',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className="pb-24"
    >
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-6 py-3 rounded-full mb-6 font-bold border-2 border-red-200">
          <AlertCircle className="w-6 h-6" />
          Situación Actual
        </div>
        <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
          Los retos de BQDC hoy
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Desafíos operativos que están frenando el potencial completo de la red
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {problems.map((problem, index) => {
          const Icon = problem.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border-2 border-red-100 hover:shadow-xl transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center">
                  <Icon className="w-8 h-8 text-red-600" />
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  problem.impact === 'Crítico' ? 'bg-red-200 text-red-800' :
                  problem.impact === 'Alto' ? 'bg-orange-200 text-orange-800' :
                  'bg-yellow-200 text-yellow-800'
                }`}>
                  {problem.impact}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{problem.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{problem.description}</p>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 text-white shadow-2xl"
      >
        <div className="flex items-center gap-4 mb-6">
          <TrendingUp className="w-12 h-12 text-yellow-400" />
          <h2 className="text-3xl font-bold">El coste de la situación actual</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="text-4xl font-bold text-yellow-400 mb-2">~40%</div>
            <p className="text-gray-300">del tiempo del personal en tareas administrativas repetitivas</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-red-400 mb-2">15-20%</div>
            <p className="text-gray-300">de pruebas diagnósticas duplicadas entre clínicas</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-orange-400 mb-2">0%</div>
            <p className="text-gray-300">de aprovechamiento de datos para mejora de la red</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ============= STEP 3: ESPACIO DE DATOS =============
function Step3DataSpace() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className="pb-24"
    >
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-6 py-3 rounded-full mb-6 font-bold border-2 border-blue-200">
          <Database className="w-6 h-6" />
          Infraestructura Digital
        </div>
        <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
          Espacio de Datos Dental BQDC
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          La columna vertebral digital que conecta todas las clínicas de la red
        </p>
      </div>

      {/* Diagrama Visual */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-10 mb-12 border-2 border-blue-200"
      >
        <div className="flex flex-col items-center">
          {/* Centro: Espacio de Datos */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 shadow-2xl mb-8 relative">
            <div className="absolute -top-3 -right-3 w-20 h-20 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <Database className="w-16 h-16 text-white mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white text-center mb-2">Espacio de Datos BQDC</h3>
            <p className="text-blue-100 text-center">Datos clínicos unificados y seguros</p>
          </div>

          {/* Clínicas conectadas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((clinic) => (
              <motion.div
                key={clinic}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + clinic * 0.05 }}
                className="bg-white rounded-xl p-4 shadow-md border-2 border-gray-200 text-center"
              >
                <Building2 className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-700">Clínica {clinic}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Beneficios */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl p-8 shadow-xl"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Users className="w-8 h-8 text-green-600" />
            Para los pacientes
          </h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700"><strong>Historia portable:</strong> Pueden ir a cualquier clínica BQDC con su historial completo</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700"><strong>Sin repetir pruebas:</strong> Radiografías, análisis, etc. disponibles en toda la red</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700"><strong>Continuidad real:</strong> Atención integrada sin importar la clínica</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-2xl p-8 shadow-xl"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Building2 className="w-8 h-8 text-blue-600" />
            Para BQDC
          </h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700"><strong>Visión completa:</strong> Datos agregados de toda la red para decisiones estratégicas</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700"><strong>Protocolos homogéneos:</strong> Estandarización de calidad en todas las clínicas</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700"><strong>Base para investigación:</strong> Datos anónimos para estudios clínicos propios</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// ============= STEP 4: IA =============
function Step4AI() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className="pb-24"
    >
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-6 py-3 rounded-full mb-6 font-bold border-2 border-purple-200">
          <Bot className="w-6 h-6" />
          Inteligencia Artificial
        </div>
        <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
          IA sobre el Espacio de Datos
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          La inteligencia que multiplica el valor de los datos compartidos
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* IA Clínica */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-8 text-white shadow-2xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Sparkles className="w-9 h-9" />
            </div>
            <div>
              <h3 className="text-3xl font-bold">IA Clínica</h3>
              <p className="text-blue-200">Soporte a decisiones médicas</p>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <h4 className="font-bold text-lg mb-2">🎯 Pre-diagnósticos inteligentes</h4>
              <p className="text-blue-100 text-sm">Análisis de patrones en toda la red BQDC para alertas preventivas tempranas</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <h4 className="font-bold text-lg mb-2">🔍 Soporte a decisiones</h4>
              <p className="text-blue-100 text-sm">Recomendaciones basadas en casos similares de otras clínicas BQDC</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <h4 className="font-bold text-lg mb-2">📊 Análisis de patrones</h4>
              <p className="text-blue-100 text-sm">Insights sobre tratamientos, efectividad y resultados en toda la red</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <h4 className="font-bold text-lg mb-2">✅ Protocolos estandarizados</h4>
              <p className="text-blue-100 text-sm">Homogeneización de calidad asistencial en todas las clínicas</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-green-500/30 rounded-full text-xs font-bold border border-green-400/30">Mejor diagnóstico</span>
            <span className="px-3 py-1 bg-yellow-500/30 rounded-full text-xs font-bold border border-yellow-400/30">Prevención activa</span>
            <span className="px-3 py-1 bg-purple-500/30 rounded-full text-xs font-bold border border-purple-400/30">Calidad superior</span>
          </div>
        </motion.div>

        {/* IA Administrativa */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl p-8 text-white shadow-2xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Zap className="w-9 h-9" />
            </div>
            <div>
              <h3 className="text-3xl font-bold">IA Administrativa</h3>
              <p className="text-purple-200">Automatización operativa</p>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <h4 className="font-bold text-lg mb-2">💬 Atención 24/7</h4>
              <p className="text-purple-100 text-sm">WhatsApp, web, chat: respuesta instantánea a pacientes en cualquier momento</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <h4 className="font-bold text-lg mb-2">📅 Gestión de citas</h4>
              <p className="text-purple-100 text-sm">Reservas, cambios, recordatorios automáticos. Reducción drástica de no-shows</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <h4 className="font-bold text-lg mb-2">🔄 Seguimiento post-tratamiento</h4>
              <p className="text-purple-100 text-sm">Comunicaciones personalizadas automáticas para cada paciente</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <h4 className="font-bold text-lg mb-2">⭐ Reseñas automáticas</h4>
              <p className="text-purple-100 text-sm">Solicitud inteligente en el momento perfecto para maximizar reseñas positivas</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-orange-500/30 rounded-full text-xs font-bold border border-orange-400/30">-50% carga admin</span>
            <span className="px-3 py-1 bg-pink-500/30 rounded-full text-xs font-bold border border-pink-400/30">Mejor experiencia</span>
            <span className="px-3 py-1 bg-green-500/30 rounded-full text-xs font-bold border border-green-400/30">+Ingresos</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// ============= STEP 5: IMPACTO =============
function Step5Impact() {
  const impacts = [
    {
      icon: Award,
      title: 'Primera red dental de España',
      description: 'Con espacio de datos clínico propio. Referente nacional indiscutible.',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      icon: Target,
      title: 'Ventaja competitiva insuperable',
      description: 'Diferenciación total imposible de copiar por la competencia a corto plazo.',
      color: 'from-purple-500 to-pink-600',
    },
    {
      icon: Users,
      title: 'Calidad homogénea superior',
      description: 'Protocolos estandarizados y mejor experiencia del paciente en toda la red.',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: BarChart3,
      title: 'Investigación clínica propia',
      description: 'Datos anonimizados para estudios y mejora continua basada en evidencia real.',
      color: 'from-teal-500 to-cyan-600',
    },
    {
      icon: TrendingUp,
      title: 'Ahorro operativo del 50-70%',
      description: 'En carga administrativa. Optimización masiva de recursos en todas las clínicas.',
      color: 'from-orange-500 to-red-600',
    },
    {
      icon: Sparkles,
      title: 'Transformación sin inversión',
      description: '30.000€ por clínica totalmente cubiertos. Coste 0 para BQDC.',
      color: 'from-indigo-500 to-purple-600',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className="pb-24"
    >
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-full mb-6 font-bold shadow-lg">
          <Award className="w-6 h-6" />
          Impacto Operativo
        </div>
        <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
          Qué gana BQDC operativamente
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Transformación estratégica completa de la organización
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {impacts.map((impact, index) => {
          const Icon = impact.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${impact.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
              <div className={`w-16 h-16 bg-gradient-to-br ${impact.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
                <Icon className="w-9 h-9 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{impact.title}</h3>
              <p className="text-gray-600 leading-relaxed">{impact.description}</p>
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 rounded-3xl p-10 lg:p-16 text-white text-center shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl" />
        <div className="relative">
          <Rocket className="w-20 h-20 mx-auto mb-6" />
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">
            BQDC: referente nacional
            <span className="block text-blue-300 mt-2">en odontología digital</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Liderar este proyecto convierte a BQDC en <strong className="text-white">pionera absoluta</strong> en digitalización e IA del sector dental privado español
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ============= STEP 6: IMPACTO MARKETING =============
function Step6Marketing() {
  const marketingOpportunities = [
    {
      icon: Newspaper,
      title: 'Notas de prensa nacional',
      description: 'Primera red dental privada de España con Espacio de Datos clínico común',
      items: [
        'Medios especializados en salud',
        'Prensa económica (innovación empresarial)',
        'Revistas del sector dental',
        'Portales de tecnología sanitaria',
      ],
      color: 'from-blue-500 to-indigo-600',
    },
    {
      icon: Globe,
      title: 'Posicionamiento europeo',
      description: 'Pioneros en preparación para el Espacio Europeo de Datos de Salud (EHDS)',
      items: [
        'Referencia en eventos europeos de e-Health',
        'Casos de estudio para la Comisión Europea',
        'Visibilidad en organismos reguladores',
        'Partner preferente para proyectos piloto',
      ],
      color: 'from-purple-500 to-pink-600',
    },
    {
      icon: Megaphone,
      title: 'Contenido diferenciador',
      description: 'Argumentos de venta únicos imposibles de copiar a corto plazo',
      items: [
        '"Tu historial dental te sigue en cualquier BQDC"',
        '"Primera red con IA clínica dental"',
        '"Continuidad asistencial garantizada"',
        '"Tecnología europea de vanguardia"',
      ],
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: Share2,
      title: 'Redes sociales',
      description: 'Contenido viral y educativo basado en tecnología punta',
      items: [
        'Videos explicativos del Espacio de Datos',
        'Testimonios de pacientes con continuidad',
        'Behind the scenes: "Así funciona la IA"',
        'Infografías comparativas vs competencia',
      ],
      color: 'from-orange-500 to-red-600',
    },
    {
      icon: Mic,
      title: 'Autoridad y liderazgo',
      description: 'BQDC como líder de pensamiento en odontología digital',
      items: [
        'Ponencias en congresos dentales',
        'Webinars y masterclasses sobre IA dental',
        'Artículos de opinión en medios',
        'Colaboraciones con universidades',
      ],
      color: 'from-teal-500 to-cyan-600',
    },
    {
      icon: Target,
      title: 'Atracción pacientes premium',
      description: 'Captación de perfiles de alto valor que buscan innovación',
      items: [
        'Pacientes tech-savvy y early adopters',
        'Familias que valoran continuidad',
        'Empresas para seguros dentales corporativos',
        'Expatriados que necesitan movilidad',
      ],
      color: 'from-indigo-500 to-purple-600',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className="pb-24"
    >
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-rose-600 text-white px-6 py-3 rounded-full mb-6 font-bold shadow-lg">
          <TrendingUp className="w-6 h-6" />
          Impacto Marketing
        </div>
        <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
          Proyección nacional e internacional
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          El impulso de visibilidad y reputación que BQDC obtendrá como pionera
        </p>
      </div>

      {/* Banner destacado */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-3xl p-10 text-white mb-12 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl" />
        <div className="relative flex items-center justify-center gap-6 flex-col lg:flex-row">
          <div className="flex items-center gap-4">
            <Tv className="w-16 h-16" />
            <Radio className="w-16 h-16" />
            <Camera className="w-16 h-16" />
          </div>
          <div className="text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-3">
              BQDC será noticia
            </h2>
            <p className="text-xl text-yellow-100">
              La primera red dental privada de España con Espacio de Datos + IA clínica
            </p>
          </div>
        </div>
      </motion.div>

      {/* Grid de oportunidades */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {marketingOpportunities.map((opportunity, index) => {
          const Icon = opportunity.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border-2 border-gray-100"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${opportunity.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
                <Icon className="w-9 h-9 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{opportunity.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{opportunity.description}</p>
              <div className="space-y-2">
                {opportunity.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Ejemplos de titulares */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 rounded-3xl p-10 text-white shadow-2xl"
      >
        <div className="flex items-center gap-4 mb-8">
          <Newspaper className="w-12 h-12 text-yellow-400" />
          <h2 className="text-3xl font-bold">Ejemplos de titulares</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-xs font-bold text-yellow-400 mb-2">PRENSA ESPECIALIZADA</div>
            <p className="text-lg font-bold leading-tight">
              "BQDC revoluciona la odontología española con el primer Espacio de Datos Dental integrado"
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-xs font-bold text-blue-400 mb-2">MEDIOS ECONÓMICOS</div>
            <p className="text-lg font-bold leading-tight">
              "La red dental que se adelanta al futuro europeo de los datos de salud"
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-xs font-bold text-green-400 mb-2">TECNOLOGÍA</div>
            <p className="text-lg font-bold leading-tight">
              "Inteligencia artificial y continuidad asistencial: así funciona BQDC"
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-xs font-bold text-purple-400 mb-2">SECTOR DENTAL</div>
            <p className="text-lg font-bold leading-tight">
              "BQDC marca el camino: primera cadena con IA clínica transversal"
            </p>
          </div>
        </div>
      </motion.div>

      {/* ROI Marketing */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="mt-12 bg-white rounded-3xl p-10 shadow-xl border-2 border-green-200"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center gap-3">
          <TrendingUp className="w-10 h-10 text-green-600" />
          ROI de visibilidad
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-5xl font-extrabold text-green-600 mb-2">∞</div>
            <p className="text-gray-600 font-semibold">Valor de la publicity imposible de comprar</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-extrabold text-blue-600 mb-2">+300%</div>
            <p className="text-gray-600 font-semibold">Aumento estimado en menciones de marca</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-extrabold text-purple-600 mb-2">#1</div>
            <p className="text-gray-600 font-semibold">Posicionamiento top of mind en innovación</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-extrabold text-orange-600 mb-2">+150%</div>
            <p className="text-gray-600 font-semibold">Tráfico web estimado por cobertura mediática</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ============= STEP 7: PRÓXIMOS PASOS =============
function Step7NextSteps({ onOpenContact }: { onOpenContact: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className="pb-24"
    >
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full mb-6 font-bold shadow-lg">
          <Rocket className="w-6 h-6" />
          Próximos Pasos
        </div>
        <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
          Cómo empezar
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          El camino para convertir a BQDC en la red dental más avanzada de España
        </p>
      </div>

      <div className="space-y-6 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 text-white shadow-xl flex items-start gap-6"
        >
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
            <span className="text-3xl font-bold">1</span>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-3">Reunión de alineación</h3>
            <p className="text-blue-100 leading-relaxed text-lg">
              Sesión con presidente y gerente BQDC para validar la visión estratégica y resolver dudas
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-8 text-white shadow-xl flex items-start gap-6"
        >
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
            <span className="text-3xl font-bold">2</span>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-3">Confirmación de clínicas</h3>
            <p className="text-purple-100 leading-relaxed text-lg">
              BQDC indica qué clínicas de la red participarán en el proyecto inicial
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white shadow-xl flex items-start gap-6"
        >
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
            <span className="text-3xl font-bold">3</span>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-3">ACCURO gestiona la subvención</h3>
            <p className="text-green-100 leading-relaxed text-lg">
              Todo el papeleo, documentación y trámites de KTED corre de cuenta de ACCURO
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-8 text-white shadow-xl flex items-start gap-6"
        >
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
            <span className="text-3xl font-bold">4</span>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-3">Nexgent desarrolla la IA</h3>
            <p className="text-orange-100 leading-relaxed text-lg">
              Diseño, configuración e implementación del Espacio de Datos + IA en todas las clínicas BQDC
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white rounded-3xl p-10 shadow-2xl border-2 border-gray-100 text-center"
      >
        <Sparkles className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
        <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Listo para dar el salto?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Agendemos una reunión para discutir los detalles y dar el primer paso hacia la transformación digital de BQDC
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={onOpenContact}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 group"
          >
            <MessageCircle className="w-6 h-6" />
            Solicitar información
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="https://calendly.com/nexgent-demo/subvencion-kted-2025"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-green-600 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
          >
            <Calendar className="w-6 h-6" />
            Agendar reunión BQDC
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
