import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  ArrowLeft,
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
  LineChart,
  Globe,
} from 'lucide-react';
import FAQAccordion from './FAQAccordion';
import ContactModal from './ContactModal';

interface BQDCAssociationPageProps {
  onBack: () => void;
}

export default function BQDCAssociationPage({ onBack }: BQDCAssociationPageProps) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const faqs = [
    { question: '¿Cada clínica tendría su propio agente de IA?', answer: 'Sí. Cada centro BQDC tendría un agente personalizado con sus datos, horarios y servicios. Pero además, todos los agentes están conectados al espacio de datos común de la red, lo que multiplica su inteligencia.' },
    { question: '¿Cómo funciona el espacio de datos compartido?', answer: 'Los datos clínicos se comparten de forma segura y cifrada entre las clínicas de la red. Un paciente que va a otra clínica BQDC puede tener su historial disponible, evitando pruebas duplicadas y mejorando la continuidad asistencial.' },
    { question: '¿Es seguro compartir datos entre clínicas?', answer: 'Absolutamente. Cumplimos con RGPD, LOPD y todas las normativas sanitarias. Los datos se cifran, se anonimizan para análisis agregados, y el paciente siempre tiene el control sobre qué se comparte.' },
    { question: '¿Cuánto tiempo tardaría en implementarse en toda la red?', answer: 'Proponemos un enfoque por fases: piloto en 2-3 clínicas (4-6 semanas), despliegue progresivo al resto de la red (2-3 meses), y activación del espacio de datos transversal.' },
    { question: '¿Qué pasa con las clínicas que ya tienen software propio?', answer: 'Nos integramos con los principales sistemas de gestión dental del mercado. El agente de IA se conecta al software existente de cada clínica sin necesidad de cambiar nada.' },
    { question: '¿Cómo se diferencia esto de tener IA en cada clínica por separado?', answer: 'La gran diferencia es la inteligencia de red. Los análisis agregados, el benchmarking entre clínicas, la continuidad asistencial y la investigación clínica solo son posibles con un espacio de datos unificado. Es una ventaja competitiva imposible de replicar individualmente.' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-white border-b border-gray-100">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <motion.button initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} onClick={onBack}
            className="flex items-center gap-2 text-gray-400 hover:text-black transition-colors duration-300 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-semibold">Volver</span>
          </motion.button>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="flex items-center justify-center mb-10">
              <img src="/images/LOGO.png" alt="Nexgent Logo" className="h-14 w-auto object-contain" />
            </motion.div>

            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full mb-8"
            >
              <Network className="w-4 h-4" />
              <span className="text-sm font-semibold">Propuesta para Asociación BQDC</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-black mb-6 leading-tight tracking-tight">
              BQDC + Inteligencia Artificial
              <span className="block text-blue-600 mt-2">La red dental más avanzada</span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-500 mb-16 leading-relaxed max-w-3xl mx-auto">
              IA en cada clínica, datos conectados en toda la red y una inteligencia colectiva que convierte a BQDC en <strong className="text-black">referente nacional</strong>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                { icon: Building2, value: 'IA en cada clínica', label: 'Agentes personalizados' },
                { icon: Database, value: 'Datos unificados', label: 'Historial portable' },
                { icon: Brain, value: 'Inteligencia de red', label: 'Ventaja competitiva' },
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + index * 0.1 }}
                    className="border border-gray-200 p-6 rounded-2xl"
                  >
                    <Icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <div className="text-lg font-bold text-black mb-1">{stat.value}</div>
                    <div className="text-gray-500 text-sm">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* IA PARA CADA CLÍNICA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-6 font-semibold">
              <Building2 className="w-5 h-5" />
              IA para cada Clínica BQDC
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-black mb-4">Un agente de IA en cada centro</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">Cada clínica de la red BQDC dispondrá de su propio agente inteligente personalizado</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              { icon: MessageCircle, title: 'Atención al paciente 24/7', items: ['WhatsApp, web, Instagram, Facebook', 'Respuestas instantáneas a consultas', 'Triaje inteligente de urgencias', 'Multiidioma para pacientes internacionales'] },
              { icon: Calendar, title: 'Gestión inteligente de citas', items: ['Reserva automática por chat/voz', 'Recordatorios inteligentes personalizados', 'Reducción de no-shows hasta 40%', 'Optimización de agenda y llenado de huecos'] },
              { icon: Star, title: 'Marketing y reputación', items: ['Solicitud automática de reseñas Google', 'Campañas de remarketing personalizadas', 'Contenido para redes sociales con IA', 'Segmentación inteligente de pacientes'] },
              { icon: Settings, title: 'Operaciones automatizadas', items: ['Dashboard de KPIs en tiempo real', 'Automatización administrativa', 'Seguimiento post-tratamiento', 'Análisis predictivo de demanda'] },
            ].map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 border border-gray-200"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-black">{category.title}</h3>
                  </div>
                  <div className="space-y-2">
                    {category.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* IA Clínica + Experiencia */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 border-2 border-gray-200"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black">IA Clínica</h3>
                  <p className="text-gray-500">Apoyo al diagnóstico</p>
                </div>
              </div>
              <div className="space-y-3">
                {['Análisis asistido de radiografías', 'Soporte a planificación de tratamientos', 'Alertas de interacciones y contraindicaciones', 'Documentación clínica automatizada', 'Transcripción por voz de notas clínicas'].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 border-2 border-gray-200"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black">Experiencia del Paciente</h3>
                  <p className="text-gray-500">Fidelización inteligente</p>
                </div>
              </div>
              <div className="space-y-3">
                {['Seguimiento post-tratamiento personalizado', 'Recordatorios de revisiones periódicas', 'Encuestas de satisfacción automatizadas', 'Detección de pacientes insatisfechos', 'Programa de fidelización inteligente'].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Impacto por clínica */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
            className="bg-blue-600 rounded-3xl p-10 text-white text-center"
          >
            <Zap className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-6">Impacto por clínica</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: '-60%', label: 'carga administrativa' },
                { value: '24/7', label: 'atención al paciente' },
                { value: '+300%', label: 'reseñas en Google' },
                { value: '-35%', label: 'no-shows' },
              ].map((stat, idx) => (
                <div key={idx}>
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <p className="text-blue-200 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ESPACIO DE DATOS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-6 font-semibold">
              <Database className="w-5 h-5" />
              Espacio de Datos Dental
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-black mb-4">Todas las clínicas BQDC, conectadas</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">Un espacio de datos dental unificado que multiplica el valor de la información clínica</p>
          </motion.div>

          {/* Diagrama */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
            className="bg-gray-50 rounded-3xl p-10 mb-12 border border-gray-200"
          >
            <div className="flex flex-col items-center">
              <div className="bg-blue-600 rounded-3xl p-8 mb-8 relative">
                <div className="absolute -top-3 -right-3 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <Database className="w-14 h-14 text-white mx-auto mb-3" />
                <h3 className="text-xl font-bold text-white text-center mb-1">Espacio de Datos BQDC</h3>
                <p className="text-blue-100 text-center text-sm">Datos clínicos unificados y seguros</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-3xl">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((clinic) => (
                  <motion.div key={clinic} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: clinic * 0.05 }} viewport={{ once: true }}
                    className="bg-white rounded-xl p-4 border border-gray-200 text-center"
                  >
                    <Building2 className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                    <p className="text-sm font-semibold text-gray-700">Clínica {clinic}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Qué datos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: FileText, title: 'Historial clínico portable', items: ['Historia dental completa del paciente', 'Radiografías y pruebas diagnósticas', 'Tratamientos realizados y planificados', 'Alergias, medicación y antecedentes'] },
              { icon: Activity, title: 'Datos clínicos agregados', items: ['Estadísticas anónimas de tratamientos', 'Resultados y efectividad comparada', 'Patrones epidemiológicos dentales', 'Datos para investigación clínica'] },
              { icon: BarChart3, title: 'Datos operativos de red', items: ['Métricas de rendimiento por centro', 'Tendencias de demanda y estacionalidad', 'Benchmarking entre clínicas', 'KPIs consolidados de la red'] },
            ].map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }}
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-black mb-4">{category.title}</h3>
                  <div className="space-y-2">
                    {category.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Beneficios + Seguridad */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border border-gray-200"
            >
              <h3 className="text-2xl font-bold text-black mb-6 flex items-center gap-3">
                <Users className="w-7 h-7 text-blue-600" />
                Para los pacientes
              </h3>
              <div className="space-y-4">
                {[
                  { bold: 'Historia portable:', text: 'Pueden ir a cualquier clínica BQDC con su historial completo' },
                  { bold: 'Sin repetir pruebas:', text: 'Radiografías y análisis disponibles en toda la red' },
                  { bold: 'Continuidad real:', text: 'Atención integrada sin importar el centro BQDC' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-600"><strong className="text-black">{item.bold}</strong> {item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border-2 border-gray-200"
            >
              <h3 className="text-2xl font-bold text-black mb-6 flex items-center gap-3">
                <Shield className="w-7 h-7 text-blue-600" />
                Seguridad y privacidad
              </h3>
              <div className="space-y-4">
                {[
                  { bold: 'Cifrado extremo a extremo', text: 'en todas las comunicaciones' },
                  { bold: 'Cumplimiento RGPD y LOPD', text: 'garantizado' },
                  { bold: 'Anonimización', text: 'para datos agregados y de investigación' },
                  { bold: 'Control total', text: 'del paciente sobre sus datos' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-600"><strong className="text-black">{item.bold}</strong> {item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* IA TRANSVERSAL */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-6 font-semibold">
              <Brain className="w-5 h-5" />
              Inteligencia Artificial Transversal
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-black mb-4">IA que aprende de toda la red</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">La verdadera ventaja: una IA que utiliza el conocimiento colectivo de todas las clínicas BQDC</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 border-2 border-gray-200"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black">IA Clínica de Red</h3>
                  <p className="text-gray-500">Inteligencia colectiva para el diagnóstico</p>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { title: 'Pre-diagnósticos mejorados', desc: 'Análisis basado en miles de casos de toda la red para alertas preventivas más precisas' },
                  { title: 'Soporte a decisiones clínicas', desc: 'Recomendaciones basadas en resultados reales de tratamientos similares en otras clínicas BQDC' },
                  { title: 'Protocolos optimizados con datos', desc: 'Identificación de mejores prácticas clínicas basada en evidencia real de toda la red' },
                  { title: 'Investigación clínica propia', desc: 'Datos anonimizados para estudios, publicaciones y avance del conocimiento odontológico' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <h4 className="font-bold text-black mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 border-2 border-gray-200"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black">IA Operativa de Red</h3>
                  <p className="text-gray-500">Gestión inteligente centralizada</p>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { title: 'Benchmarking entre clínicas', desc: 'Comparativa automática de KPIs entre centros para detectar oportunidades de mejora' },
                  { title: 'Marketing coordinado de red', desc: 'Campañas unificadas con personalización local. Gestión de reputación centralizada' },
                  { title: 'Formación continua con IA', desc: 'Asistente de formación para nuevos empleados y actualización de protocolos en toda la red' },
                  { title: 'Comunicación interna inteligente', desc: 'Asistente IA para comunicación entre clínicas, compartir conocimiento y resolver dudas' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <h4 className="font-bold text-black mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Diferencia clave */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
            className="bg-blue-600 rounded-3xl p-10 text-white text-center"
          >
            <Lightbulb className="w-14 h-14 mx-auto mb-4" />
            <h2 className="text-3xl font-extrabold mb-4">La diferencia clave</h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed text-blue-100">
              Una clínica individual solo aprende de sus propios datos. <strong className="text-white">BQDC aprende del conocimiento colectivo de toda su red</strong>.
              Eso es una ventaja competitiva imposible de replicar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* GESTIÓN CENTRALIZADA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-6 font-semibold">
              <PieChart className="w-5 h-5" />
              Gestión Centralizada
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-black mb-4">Control total de la red</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">Herramientas de gestión inteligente para la dirección de BQDC</p>
          </motion.div>

          {/* Dashboard */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
            className="bg-gray-50 rounded-3xl p-8 border border-gray-200 mb-12"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center">
                <LineChart className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black">Dashboard Central BQDC</h3>
                <p className="text-gray-500">Visión completa de toda la red en tiempo real</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Pacientes totales', icon: Users },
                { label: 'Ocupación de agendas', icon: Calendar },
                { label: 'Facturación consolidada', icon: TrendingUp },
                { label: 'Reputación online', icon: Star },
                { label: 'Nuevos pacientes', icon: Target },
                { label: 'Eficiencia operativa', icon: BarChart3 },
                { label: 'Satisfacción paciente', icon: Heart },
                { label: 'Alertas inteligentes', icon: AlertCircle },
              ].map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.05 }} viewport={{ once: true }}
                    className="bg-white rounded-xl p-4 text-center border border-gray-100"
                  >
                    <Icon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="font-semibold text-black text-sm">{metric.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Funcionalidades */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: GraduationCap, title: 'Formación y onboarding con IA', description: 'Asistente inteligente para formación de nuevos empleados, actualización de protocolos y consultas rápidas.', items: ['Onboarding automatizado', 'Manual de protocolos interactivo', 'Consultas en tiempo real', 'Formación continua personalizada'] },
              { icon: Globe, title: 'Comunicación de marca unificada', description: 'Gestión centralizada de la comunicación y marketing de toda la red BQDC.', items: ['Campañas de marketing coordinadas', 'Contenido de redes sociales unificado', 'Gestión de crisis comunicacional', 'Newsletter y comunicados'] },
              { icon: Shield, title: 'Compliance y calidad', description: 'Monitorización automática del cumplimiento normativo y estándares de calidad.', items: ['Auditorías automáticas', 'Alertas de desviaciones', 'Informes regulatorios', 'Gestión de incidencias'] },
              { icon: Search, title: 'Business Intelligence dental', description: 'Análisis avanzado de datos para decisiones estratégicas de la dirección.', items: ['Análisis de mercado', 'Predicción de tendencias', 'Optimización de portfolio', 'Rentabilidad por tratamiento'] },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }}
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">{feature.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-xs">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRÓXIMOS PASOS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-6 font-semibold">
              <Rocket className="w-5 h-5" />
              Próximos Pasos
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-black mb-4">Cómo empezar</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">El camino para convertir a BQDC en la red dental más avanzada de España</p>
          </motion.div>

          <div className="space-y-6 mb-12">
            {[
              { num: '1', title: 'Reunión estratégica', desc: 'Sesión con la dirección de BQDC para alinear la visión, definir objetivos y priorizar funcionalidades' },
              { num: '2', title: 'Piloto en clínicas seleccionadas', desc: 'Implementación inicial en 2-3 clínicas de la red para validar la solución y ajustar antes de escalar' },
              { num: '3', title: 'Despliegue progresivo', desc: 'Extensión gradual a todas las clínicas de la red con formación del equipo y soporte continuo' },
              { num: '4', title: 'Activación del espacio de datos', desc: 'Conexión de los datos de todas las clínicas para habilitar la inteligencia transversal de red' },
            ].map((step, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 border border-gray-200 flex items-start gap-6 hover:border-blue-300 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 text-white text-2xl font-bold">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">{step.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUÉ NEXGENT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-6 font-semibold">
              <Award className="w-5 h-5" />
              Por qué Nexgent
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-black mb-4">Tu partner en Inteligencia Artificial</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <div className="bg-gray-50 rounded-2xl p-5 inline-block mb-6 border border-gray-200">
                <img src="/images/LOGO.png" alt="Nexgent Logo" className="h-16 w-auto object-contain" />
              </div>
              <h3 className="text-3xl font-extrabold text-black mb-2">Nexgent</h3>
              <p className="text-blue-600 font-semibold text-lg mb-6">Agencia de Inteligencia Artificial</p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Somos especialistas en <strong className="text-black">automatización de negocios con IA</strong>.
                Diseñamos soluciones a medida para redes de clínicas y organizaciones sanitarias.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Sparkles, title: 'Soluciones personalizadas', desc: 'Diseñadas para las necesidades específicas de BQDC' },
                  { icon: Zap, title: 'Tecnología de vanguardia', desc: 'Los modelos de IA más avanzados del mercado' },
                  { icon: Shield, title: 'Seguridad certificada', desc: 'RGPD, cifrado extremo a extremo, servidores europeos' },
                  { icon: Rocket, title: 'Implementación por fases', desc: 'Piloto, despliegue, espacio de datos. Sin riesgo.' },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-black">{item.title}</h4>
                        <p className="text-gray-500 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
              className="bg-gray-50 rounded-3xl p-8 border border-gray-200"
            >
              <h3 className="text-2xl font-bold text-black mb-6">Proceso para BQDC</h3>
              <div className="space-y-6">
                {[
                  { step: '1', title: 'Análisis estratégico', desc: 'Entendemos BQDC, sus clínicas y sus objetivos' },
                  { step: '2', title: 'Diseño de arquitectura', desc: 'Agentes individuales + espacio de datos + IA transversal' },
                  { step: '3', title: 'Piloto controlado', desc: '2-3 clínicas de la red para validar resultados' },
                  { step: '4', title: 'Despliegue en red', desc: 'Extensión progresiva a todas las clínicas' },
                  { step: '5', title: 'Inteligencia de red', desc: 'Activación del espacio de datos y la IA transversal' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm text-white">{item.step}</div>
                    <div>
                      <h4 className="font-bold text-black text-lg">{item.title}</h4>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-black mb-4">Preguntas frecuentes</h2>
            <p className="text-xl text-gray-500">Resolvemos tus dudas sobre IA para redes de clínicas</p>
          </motion.div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-6">
              <img src="/images/LOGO.png" alt="Nexgent Logo" className="h-10 w-auto object-contain" />
            </div>
            <p className="text-lg mb-2"><span className="text-black font-bold">Nexgent</span></p>
            <p className="text-sm text-gray-400">Inteligencia Artificial para BQDC</p>
            <p className="text-xs text-gray-400 mt-3">info@nexgent.io</p>
          </div>
          <div className="border-t border-gray-100 pt-6 flex flex-col md:flex-row items-center justify-between text-sm gap-4">
            <a href="https://www.nexgent.io" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">www.nexgent.io</a>
            <button onClick={onBack} className="text-gray-400 hover:text-blue-600 transition-colors">← Volver a selección de propuestas</button>
          </div>
        </div>
      </footer>

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  );
}
