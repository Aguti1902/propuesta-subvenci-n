import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Users,
  Building2,
  Database,
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
  Rocket,
  Calendar,
  MessageCircle,
  Newspaper,
  Globe,
  Camera,
  Radio,
  Tv,
  Brain,
  Network,
  PieChart,
  Settings,
  Heart,
  Star,
  Search,
  Activity,
  Lightbulb,
  GraduationCap,
  BookOpen,
  LineChart,
} from 'lucide-react';
import ContactModal from './ContactModal';

interface BQDCAssociationPageProps {
  onBack: () => void;
}

export default function BQDCAssociationPage({ onBack }: BQDCAssociationPageProps) {
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
    { title: 'Visión Estratégica', subtitle: 'El futuro de BQDC', icon: Rocket },
    { title: 'IA para cada Clínica', subtitle: 'Soluciones individuales', icon: Building2 },
    { title: 'Espacio de Datos', subtitle: 'Red conectada', icon: Database },
    { title: 'IA Transversal', subtitle: 'Inteligencia de red', icon: Brain },
    { title: 'Gestión Centralizada', subtitle: 'Control total', icon: PieChart },
    { title: 'Impacto y Diferenciación', subtitle: 'Ventaja competitiva', icon: Award },
    { title: 'Próximos Pasos', subtitle: 'Cómo empezar', icon: ArrowRight },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      {/* Header Fixed */}
      <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-300 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-semibold">Volver</span>
            </button>

            <div className="flex items-center gap-3">
              <img src="/images/LOGO.png" alt="Nexgent" className="h-10 w-auto" />
            </div>

            <div className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full font-bold text-sm">
              <Network className="w-4 h-4" />
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
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 scale-105'
                    : index < currentStep
                    ? 'bg-green-500 hover:bg-green-600'
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
                title={step.title}
              />
            ))}
          </div>

          <div className="mt-3 text-center">
            <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
              <span className="text-sm font-semibold text-gray-600">
                {currentStep + 1} de {totalSteps}:
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
          {currentStep === 1 && <Step2ClinicAI key="step2" />}
          {currentStep === 2 && <Step3DataSpace key="step3" />}
          {currentStep === 3 && <Step4TransversalAI key="step4" />}
          {currentStep === 4 && <Step5CentralManagement key="step5" />}
          {currentStep === 5 && <Step6Impact key="step6" />}
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
              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                {currentStep + 1} / {totalSteps}
              </div>
            </div>

            {currentStep < totalSteps - 1 ? (
              <button
                onClick={nextStep}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 group"
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
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full mb-6 shadow-lg">
          <Rocket className="w-6 h-6" />
          <span className="font-bold">Visión Estratégica</span>
        </div>
        <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
          BQDC + Inteligencia Artificial
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mt-2">
            La red dental más avanzada de España
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Una visión completa de cómo la IA puede transformar cada clínica de la red y crear una ventaja competitiva insuperable para toda la asociación BQDC
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
            <Building2 className="w-9 h-9" />
          </div>
          <h3 className="text-2xl font-bold mb-3">IA en cada clínica</h3>
          <p className="text-blue-100 leading-relaxed">
            Cada centro BQDC con un agente de IA propio: atención 24/7, gestión de citas, marketing y operaciones automatizadas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl p-8 text-white shadow-xl"
        >
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
            <Database className="w-9 h-9" />
          </div>
          <h3 className="text-2xl font-bold mb-3">Espacio de datos unificado</h3>
          <p className="text-purple-100 leading-relaxed">
            Historial clínico compartido entre todas las clínicas. Continuidad asistencial real para los pacientes BQDC.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-8 text-white shadow-xl"
        >
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
            <Brain className="w-9 h-9" />
          </div>
          <h3 className="text-2xl font-bold mb-3">Inteligencia de red</h3>
          <p className="text-green-100 leading-relaxed">
            IA transversal que aprende de toda la red para mejorar diagnósticos, protocolos y gestión centralizada.
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
          {[
            { title: 'Diferenciación total', desc: 'La primera red dental de España con IA integrada en toda su operativa', color: 'blue' },
            { title: 'Atracción de talento', desc: 'Los mejores profesionales quieren trabajar en una red innovadora y tecnológica', color: 'purple' },
            { title: 'Captación de pacientes', desc: '"Tu historial te sigue en cualquier clínica BQDC" - un argumento de venta único', color: 'green' },
            { title: 'Eficiencia operativa', desc: 'Reducción masiva de carga administrativa en todos los centros de la red', color: 'orange' },
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className={`w-12 h-12 bg-${item.color}-100 rounded-xl flex items-center justify-center flex-shrink-0`}>
                <CheckCircle className={`w-7 h-7 text-${item.color}-600`} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

// ============= STEP 2: IA PARA CADA CLÍNICA =============
function Step2ClinicAI() {
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
          <Building2 className="w-6 h-6" />
          IA para cada Clínica BQDC
        </div>
        <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
          Un agente de IA en cada centro
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Cada clínica de la red BQDC dispondrá de su propio agente inteligente personalizado
        </p>
      </div>

      {/* Grid de capacidades por clínica */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {[
          {
            icon: MessageCircle,
            title: 'Atención al paciente 24/7',
            items: ['WhatsApp, web, Instagram, Facebook', 'Respuestas instantáneas a consultas', 'Triaje inteligente de urgencias', 'Multiidioma para pacientes internacionales'],
            color: 'from-blue-500 to-cyan-600',
            bgColor: 'bg-blue-50 border-blue-200',
          },
          {
            icon: Calendar,
            title: 'Gestión inteligente de citas',
            items: ['Reserva automática por chat/voz', 'Recordatorios inteligentes personalizados', 'Reducción de no-shows hasta 40%', 'Optimización de agenda y llenado de huecos'],
            color: 'from-green-500 to-emerald-600',
            bgColor: 'bg-green-50 border-green-200',
          },
          {
            icon: Star,
            title: 'Marketing y reputación',
            items: ['Solicitud automática de reseñas Google', 'Campañas de remarketing personalizadas', 'Contenido para redes sociales con IA', 'Segmentación inteligente de pacientes'],
            color: 'from-orange-500 to-amber-600',
            bgColor: 'bg-orange-50 border-orange-200',
          },
          {
            icon: Settings,
            title: 'Operaciones automatizadas',
            items: ['Dashboard de KPIs en tiempo real', 'Automatización administrativa', 'Seguimiento post-tratamiento', 'Análisis predictivo de demanda'],
            color: 'from-purple-500 to-violet-600',
            bgColor: 'bg-purple-50 border-purple-200',
          },
        ].map((category, index) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-2xl p-6 shadow-lg border-2 ${category.bgColor}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              <div className="space-y-2">
                {category.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* IA Clínica */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-3xl p-8 text-white shadow-2xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
              <Brain className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">IA Clínica</h3>
              <p className="text-indigo-200">Apoyo al diagnóstico</p>
            </div>
          </div>
          <div className="space-y-3">
            {['Análisis asistido de radiografías', 'Soporte a planificación de tratamientos', 'Alertas de interacciones y contraindicaciones', 'Documentación clínica automatizada', 'Transcripción por voz de notas clínicas'].map((item, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-indigo-100 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-br from-purple-600 to-pink-700 rounded-3xl p-8 text-white shadow-2xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
              <Heart className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Experiencia del Paciente</h3>
              <p className="text-purple-200">Fidelización inteligente</p>
            </div>
          </div>
          <div className="space-y-3">
            {['Seguimiento post-tratamiento personalizado', 'Recordatorios de revisiones periódicas', 'Encuestas de satisfacción automatizadas', 'Detección de pacientes insatisfechos', 'Programa de fidelización inteligente'].map((item, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-purple-100 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 text-white shadow-2xl text-center"
      >
        <Zap className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
        <h2 className="text-3xl font-bold mb-4">Impacto por clínica</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <div className="text-4xl font-bold text-cyan-400 mb-2">-60%</div>
            <p className="text-gray-300 text-sm">carga administrativa</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
            <p className="text-gray-300 text-sm">atención al paciente</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-orange-400 mb-2">+300%</div>
            <p className="text-gray-300 text-sm">reseñas en Google</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-pink-400 mb-2">-35%</div>
            <p className="text-gray-300 text-sm">no-shows</p>
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
        <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-6 py-3 rounded-full mb-6 font-bold border-2 border-indigo-200">
          <Database className="w-6 h-6" />
          Espacio de Datos Dental
        </div>
        <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
          Todas las clínicas BQDC, conectadas
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Un espacio de datos dental unificado que multiplica el valor de la información clínica
        </p>
      </div>

      {/* Diagrama Visual */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-10 mb-12 border-2 border-indigo-200"
      >
        <div className="flex flex-col items-center">
          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-8 shadow-2xl mb-8 relative">
            <div className="absolute -top-3 -right-3 w-20 h-20 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <Database className="w-16 h-16 text-white mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white text-center mb-2">Espacio de Datos BQDC</h3>
            <p className="text-indigo-100 text-center">Datos clínicos unificados, seguros y accesibles</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((clinic) => (
              <motion.div
                key={clinic}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + clinic * 0.05 }}
                className="bg-white rounded-xl p-4 shadow-md border-2 border-gray-200 text-center"
              >
                <Building2 className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-700">Clínica {clinic}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Qué datos se comparten */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[
          {
            icon: FileText,
            title: 'Historial clínico portable',
            items: ['Historia dental completa del paciente', 'Radiografías y pruebas diagnósticas', 'Tratamientos realizados y planificados', 'Alergias, medicación y antecedentes'],
            color: 'bg-blue-100 text-blue-600',
          },
          {
            icon: Activity,
            title: 'Datos clínicos agregados',
            items: ['Estadísticas anónimas de tratamientos', 'Resultados y efectividad comparada', 'Patrones epidemiológicos dentales', 'Datos para investigación clínica'],
            color: 'bg-purple-100 text-purple-600',
          },
          {
            icon: BarChart3,
            title: 'Datos operativos de red',
            items: ['Métricas de rendimiento por centro', 'Tendencias de demanda y estacionalidad', 'Benchmarking entre clínicas', 'KPIs consolidados de la red'],
            color: 'bg-green-100 text-green-600',
          },
        ].map((category, index) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className={`w-14 h-14 ${category.color} rounded-xl flex items-center justify-center mb-4`}>
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
              <div className="space-y-2">
                {category.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Beneficios y seguridad */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
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
              <p className="text-gray-700"><strong>Sin repetir pruebas:</strong> Radiografías y análisis disponibles en toda la red</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700"><strong>Continuidad real:</strong> Atención integrada sin importar el centro BQDC</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-8 text-white shadow-xl"
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Shield className="w-8 h-8" />
            Seguridad y privacidad
          </h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
              <p className="text-indigo-100"><strong className="text-white">Cifrado extremo a extremo</strong> en todas las comunicaciones</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
              <p className="text-indigo-100"><strong className="text-white">Cumplimiento RGPD y LOPD</strong> garantizado</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
              <p className="text-indigo-100"><strong className="text-white">Anonimización</strong> para datos agregados y de investigación</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
              <p className="text-indigo-100"><strong className="text-white">Control total</strong> del paciente sobre sus datos</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// ============= STEP 4: IA TRANSVERSAL =============
function Step4TransversalAI() {
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
          <Brain className="w-6 h-6" />
          Inteligencia Artificial Transversal
        </div>
        <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
          IA que aprende de toda la red
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          La verdadera ventaja: una IA que utiliza el conocimiento colectivo de todas las clínicas BQDC
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* IA Clínica Transversal */}
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
              <h3 className="text-2xl font-bold">IA Clínica de Red</h3>
              <p className="text-blue-200">Inteligencia colectiva para el diagnóstico</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <h4 className="font-bold text-lg mb-2">Pre-diagnósticos mejorados</h4>
              <p className="text-blue-100 text-sm">Análisis basado en miles de casos de toda la red BQDC para alertas preventivas más precisas</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <h4 className="font-bold text-lg mb-2">Soporte a decisiones clínicas</h4>
              <p className="text-blue-100 text-sm">Recomendaciones basadas en resultados reales de tratamientos similares en otras clínicas BQDC</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <h4 className="font-bold text-lg mb-2">Protocolos optimizados con datos</h4>
              <p className="text-blue-100 text-sm">Identificación de las mejores prácticas clínicas basada en evidencia real de toda la red</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <h4 className="font-bold text-lg mb-2">Investigación clínica propia</h4>
              <p className="text-blue-100 text-sm">Datos anonimizados para estudios, publicaciones y avance del conocimiento odontológico</p>
            </div>
          </div>
        </motion.div>

        {/* IA Operativa Transversal */}
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
              <h3 className="text-2xl font-bold">IA Operativa de Red</h3>
              <p className="text-purple-200">Gestión inteligente centralizada</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <h4 className="font-bold text-lg mb-2">Benchmarking entre clínicas</h4>
              <p className="text-purple-100 text-sm">Comparativa automática de KPIs entre centros para detectar oportunidades de mejora</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <h4 className="font-bold text-lg mb-2">Marketing coordinado de red</h4>
              <p className="text-purple-100 text-sm">Campañas unificadas con personalización local. Gestión de reputación centralizada</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <h4 className="font-bold text-lg mb-2">Formación continua con IA</h4>
              <p className="text-purple-100 text-sm">Asistente de formación para nuevos empleados y actualización de protocolos en toda la red</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <h4 className="font-bold text-lg mb-2">Comunicación interna inteligente</h4>
              <p className="text-purple-100 text-sm">Asistente IA para comunicación entre clínicas, compartir conocimiento y resolver dudas</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Diferencia clave */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-3xl p-10 text-white shadow-2xl text-center relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl" />
        <div className="relative">
          <Lightbulb className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-3xl font-extrabold mb-4">La diferencia clave</h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Una clínica individual solo aprende de sus propios datos. <strong>BQDC aprende del conocimiento colectivo de toda su red</strong>. 
            Eso es una ventaja competitiva imposible de replicar.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ============= STEP 5: GESTIÓN CENTRALIZADA =============
function Step5CentralManagement() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className="pb-24"
    >
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-6 py-3 rounded-full mb-6 font-bold border-2 border-green-200">
          <PieChart className="w-6 h-6" />
          Gestión Centralizada
        </div>
        <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
          Control total de la red
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Herramientas de gestión inteligente para la dirección de BQDC
        </p>
      </div>

      {/* Dashboard central */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100 mb-12"
      >
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
            <LineChart className="w-9 h-9 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Dashboard Central BQDC</h3>
            <p className="text-gray-600">Visión completa de toda la red en tiempo real</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Pacientes totales', value: 'Vista global', icon: Users, color: 'bg-blue-50 text-blue-600' },
            { label: 'Ocupación de agendas', value: 'Por centro', icon: Calendar, color: 'bg-green-50 text-green-600' },
            { label: 'Facturación consolidada', value: 'En tiempo real', icon: TrendingUp, color: 'bg-purple-50 text-purple-600' },
            { label: 'Reputación online', value: 'Todas las clínicas', icon: Star, color: 'bg-orange-50 text-orange-600' },
            { label: 'Nuevos pacientes', value: 'Tendencias', icon: Target, color: 'bg-pink-50 text-pink-600' },
            { label: 'Eficiencia operativa', value: 'Comparativa', icon: BarChart3, color: 'bg-cyan-50 text-cyan-600' },
            { label: 'Satisfacción paciente', value: 'NPS por centro', icon: Heart, color: 'bg-red-50 text-red-600' },
            { label: 'Alertas inteligentes', value: 'Proactivas', icon: AlertCircle, color: 'bg-yellow-50 text-yellow-600' },
          ].map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                className={`${metric.color} rounded-xl p-4 text-center`}
              >
                <Icon className="w-8 h-8 mx-auto mb-2" />
                <p className="font-bold text-gray-900 text-sm">{metric.label}</p>
                <p className="text-xs text-gray-500">{metric.value}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Funcionalidades de gestión */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {[
          {
            icon: GraduationCap,
            title: 'Formación y onboarding con IA',
            description: 'Asistente inteligente para formación de nuevos empleados, actualización de protocolos y consultas rápidas del equipo.',
            items: ['Onboarding automatizado para nuevos empleados', 'Manual de protocolos interactivo con IA', 'Consultas de procedimientos en tiempo real', 'Formación continua personalizada'],
          },
          {
            icon: Globe,
            title: 'Comunicación de marca unificada',
            description: 'Gestión centralizada de la comunicación y marketing de toda la red BQDC.',
            items: ['Campañas de marketing coordinadas', 'Contenido de redes sociales unificado', 'Gestión de crisis comunicacional', 'Newsletter y comunicados de la red'],
          },
          {
            icon: Shield,
            title: 'Compliance y calidad',
            description: 'Monitorización automática del cumplimiento normativo y estándares de calidad en toda la red.',
            items: ['Auditorías automáticas de cumplimiento', 'Alertas de desviaciones de protocolo', 'Informes regulatorios automatizados', 'Gestión de incidencias centralizada'],
          },
          {
            icon: Search,
            title: 'Business Intelligence dental',
            description: 'Análisis avanzado de datos para decisiones estratégicas de la dirección de BQDC.',
            items: ['Análisis de mercado y competencia', 'Predicción de tendencias del sector', 'Optimización de portfolio de servicios', 'Análisis de rentabilidad por tratamiento'],
          },
        ].map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <Icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{feature.description}</p>
              <div className="space-y-2">
                {feature.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-xs">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

// ============= STEP 6: IMPACTO Y DIFERENCIACIÓN =============
function Step6Impact() {
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
          <Award className="w-6 h-6" />
          Impacto y Diferenciación
        </div>
        <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
          BQDC como referente nacional
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Una ventaja competitiva insuperable en el sector dental privado
        </p>
      </div>

      {/* Impactos estratégicos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {[
          { icon: Award, title: 'Primera red dental con IA', description: 'Referente nacional indiscutible en innovación tecnológica dental.', color: 'from-blue-500 to-indigo-600' },
          { icon: Target, title: 'Ventaja competitiva', description: 'Diferenciación total imposible de copiar a corto plazo por la competencia.', color: 'from-purple-500 to-pink-600' },
          { icon: Users, title: 'Atracción de talento', description: 'Los mejores profesionales quieren trabajar en la red dental más avanzada.', color: 'from-green-500 to-emerald-600' },
          { icon: Heart, title: 'Captación pacientes premium', description: 'Pacientes tech-savvy que valoran innovación y continuidad asistencial.', color: 'from-red-500 to-rose-600' },
          { icon: TrendingUp, title: 'Ahorro operativo masivo', description: 'Reducción del 50-70% en carga administrativa en toda la red.', color: 'from-orange-500 to-amber-600' },
          { icon: BookOpen, title: 'Investigación y publicaciones', description: 'Datos para estudios propios, ponencias y liderazgo de opinión.', color: 'from-teal-500 to-cyan-600' },
        ].map((impact, index) => {
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
            </motion.div>
          );
        })}
      </div>

      {/* Oportunidades de marketing */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-3xl p-10 text-white mb-12 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl" />
        <div className="relative flex items-center justify-center gap-6 flex-col lg:flex-row">
          <div className="flex items-center gap-4">
            <Tv className="w-14 h-14" />
            <Radio className="w-14 h-14" />
            <Camera className="w-14 h-14" />
          </div>
          <div className="text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-3">
              BQDC será noticia
            </h2>
            <p className="text-xl text-yellow-100">
              La primera red dental privada de España con IA clínica integrada en toda su operativa
            </p>
          </div>
        </div>
      </motion.div>

      {/* Titulares de prensa */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 rounded-3xl p-10 text-white shadow-2xl mb-12"
      >
        <div className="flex items-center gap-4 mb-8">
          <Newspaper className="w-12 h-12 text-yellow-400" />
          <h2 className="text-3xl font-bold">Posibles titulares</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {[
            { media: 'PRENSA DENTAL', color: 'text-yellow-400', text: '"BQDC implanta IA en toda su red de clínicas: primera cadena dental en dar el paso"' },
            { media: 'MEDIOS ECONÓMICOS', color: 'text-blue-400', text: '"La revolución digital llega al sector dental privado de la mano de BQDC"' },
            { media: 'TECNOLOGÍA', color: 'text-green-400', text: '"Cómo una red de clínicas dentales está usando IA para transformar la atención al paciente"' },
            { media: 'INNOVACIÓN', color: 'text-purple-400', text: '"BQDC: el historial dental que viaja contigo entre clínicas gracias a la IA"' },
          ].map((headline, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className={`text-xs font-bold ${headline.color} mb-2`}>{headline.media}</div>
              <p className="text-lg font-bold leading-tight">{headline.text}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ROI */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
        className="bg-white rounded-3xl p-10 shadow-xl border-2 border-green-200"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center gap-3">
          <TrendingUp className="w-10 h-10 text-green-600" />
          Impacto estimado
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-5xl font-extrabold text-blue-600 mb-2">-60%</div>
            <p className="text-gray-600 font-semibold">Carga administrativa en toda la red</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-extrabold text-green-600 mb-2">+300%</div>
            <p className="text-gray-600 font-semibold">Reseñas positivas en Google</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-extrabold text-purple-600 mb-2">#1</div>
            <p className="text-gray-600 font-semibold">Posicionamiento en innovación dental</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-extrabold text-orange-600 mb-2">24/7</div>
            <p className="text-gray-600 font-semibold">Atención al paciente en toda la red</p>
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
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full mb-6 font-bold shadow-lg">
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
        {[
          { num: '1', title: 'Reunión estratégica', desc: 'Sesión con la dirección de BQDC para alinear la visión, definir objetivos y priorizar funcionalidades', color: 'from-blue-500 to-indigo-600', textColor: 'text-blue-100' },
          { num: '2', title: 'Piloto en clínicas seleccionadas', desc: 'Implementación inicial en 2-3 clínicas de la red para validar la solución y ajustar antes de escalar', color: 'from-purple-500 to-pink-600', textColor: 'text-purple-100' },
          { num: '3', title: 'Despliegue progresivo', desc: 'Extensión gradual a todas las clínicas de la red con formación del equipo y soporte continuo', color: 'from-green-500 to-emerald-600', textColor: 'text-green-100' },
          { num: '4', title: 'Activación del espacio de datos', desc: 'Conexión de los datos de todas las clínicas para habilitar la inteligencia transversal de red', color: 'from-orange-500 to-red-600', textColor: 'text-orange-100' },
        ].map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className={`bg-gradient-to-r ${step.color} rounded-2xl p-8 text-white shadow-xl flex items-start gap-6`}
          >
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
              <span className="text-3xl font-bold">{step.num}</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
              <p className={`${step.textColor} leading-relaxed text-lg`}>{step.desc}</p>
            </div>
          </motion.div>
        ))}
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
          Agendemos una reunión para discutir cómo la IA puede transformar toda la red BQDC
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={onOpenContact}
            className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 group"
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

        <div className="mt-8 flex items-center justify-center">
          <div className="bg-white rounded-xl p-3 shadow-md">
            <img src="/images/LOGO.png" alt="Nexgent" className="h-10 w-auto" />
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-3">
          Propuesta de <span className="font-bold text-gray-700">Nexgent</span> · Agencia de Inteligencia Artificial
        </p>
      </motion.div>
    </motion.div>
  );
}
