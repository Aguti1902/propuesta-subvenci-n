import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Phone,
  Clock,
  Calendar,
  FileText,
  Star,
  AlertCircle,
  Users,
  MessageSquare,
  Bot,
  CheckCircle,
  Sparkles,
  Settings,
  Zap,
  TrendingUp,
  Shield,
  Target,
  Award,
  ArrowRight,
  ArrowLeft,
  Building2,
  Rocket,
  BarChart3,
  MessageCircle,
  Brain,
  Image,
  ClipboardList,
  Bell,
  Heart,
  Search,
  PieChart,
  Mic,
  Globe,
  Mail,
  Share2,
  Smile,
  Activity,
  FileCheck,
  Layers,
} from 'lucide-react';
import FAQAccordion from './FAQAccordion';
import ContactModal from './ContactModal';

interface ClinicaDentalPageProps {
  onBack: () => void;
}

export default function ClinicaDentalPage({ onBack }: ClinicaDentalPageProps) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const problems = [
    {
      icon: Phone,
      title: 'Saturación telefónica constante',
      description: 'El teléfono no para. El personal pasa horas atendiendo consultas repetitivas en lugar de centrarse en los pacientes.',
    },
    {
      icon: Calendar,
      title: 'Gestión de citas manual',
      description: 'Reservas, cancelaciones, cambios de horario... todo se gestiona a mano, generando errores y huecos en la agenda.',
    },
    {
      icon: Star,
      title: 'Pocas reseñas online',
      description: 'Pacientes satisfechos que nunca dejan reseña porque nadie se lo pide en el momento adecuado.',
    },
    {
      icon: FileText,
      title: 'Exceso de carga administrativa',
      description: 'Documentación, informes, presupuestos... todo requiere tiempo y atención humana constante.',
    },
    {
      icon: AlertCircle,
      title: 'Sin seguimiento post-tratamiento',
      description: 'No hay tiempo para seguir a cada paciente, perdiendo fidelización y detección temprana de complicaciones.',
    },
    {
      icon: Clock,
      title: 'Horarios de atención limitados',
      description: 'Fuera del horario laboral nadie atiende consultas. Se pierden pacientes potenciales cada noche y fin de semana.',
    },
  ];

  const faqs = [
    {
      question: '¿La IA sustituye al personal de la clínica?',
      answer: 'No. La IA complementa y potencia al equipo humano. Se encarga de las tareas repetitivas y administrativas para que el personal pueda dedicar más tiempo a los pacientes y a tareas de alto valor.',
    },
    {
      question: '¿Cuánto tiempo tarda en implementarse?',
      answer: 'Dependiendo del alcance, entre 2 y 6 semanas. Empezamos con las funcionalidades más impactantes (atención 24/7, gestión de citas) y vamos añadiendo capacidades progresivamente.',
    },
    {
      question: '¿Es seguro para los datos de los pacientes?',
      answer: 'Absolutamente. Cumplimos con RGPD, LOPD y todas las normativas sanitarias. Los datos se cifran, se alojan en servidores europeos y solo el personal autorizado tiene acceso.',
    },
    {
      question: '¿Funciona con mi software de gestión dental actual?',
      answer: 'Sí. Nos integramos con los principales sistemas de gestión dental del mercado (Dentidesk, Gesden, Clinic Cloud, etc.). Si usas otro software, analizamos la integración caso por caso.',
    },
    {
      question: '¿Qué pasa si la IA no sabe responder algo?',
      answer: 'El agente está diseñado para escalar automáticamente a un humano cuando detecta que no puede resolver la consulta por sí solo. Nunca da información incorrecta; si no sabe, transfiere.',
    },
    {
      question: '¿Los pacientes notan que hablan con una IA?',
      answer: 'La IA conversa de forma natural y empática. Muchos pacientes no distinguen que hablan con una IA, pero siempre somos transparentes si el paciente pregunta directamente.',
    },
    {
      question: '¿Puedo personalizar las respuestas y el tono del agente?',
      answer: 'Totalmente. Configuramos el agente con la personalidad de tu clínica: tono, estilo de comunicación, información específica sobre tratamientos, protocolos y precios.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-cyan-700 to-blue-900 text-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-800 to-transparent opacity-50"></div>
        
        {/* Botón Volver */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={onBack}
            className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors duration-300 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-semibold">Volver</span>
          </motion.button>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="flex items-center justify-center mb-8"
            >
              <div className="bg-white rounded-2xl p-4 shadow-2xl">
                <img 
                  src="/images/LOGO.png" 
                  alt="Nexgent Logo" 
                  className="h-14 w-auto object-contain"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/20"
            >
              <Building2 className="w-5 h-5" />
              <span className="text-sm font-semibold">Propuesta para Clínica Dental</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Inteligencia Artificial
              <span className="block text-cyan-300 mt-2">para tu Clínica Dental</span>
            </h1>

            <p className="text-xl lg:text-2xl text-blue-50 mb-12 leading-relaxed max-w-3xl mx-auto">
              Automatiza la atención al paciente, optimiza tu agenda, mejora tu reputación online y libera a tu equipo para lo que realmente importa: <strong>cuidar sonrisas</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsContactModalOpen(true)}
                className="px-8 py-4 bg-white text-blue-700 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-2 group"
              >
                Quiero más información
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.a
                href="https://calendly.com/nexgent-demo/subvencion-kted-2025"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-blue-500 text-white rounded-xl font-bold text-lg border-2 border-white/30 hover:bg-blue-400 transition-all duration-300 cursor-pointer inline-block"
              >
                Agendar demo
              </motion.a>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
              >
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-blue-100">atención al paciente</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
              >
                <div className="text-4xl font-bold mb-2">-60%</div>
                <div className="text-blue-100">carga administrativa</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
              >
                <div className="text-4xl font-bold mb-2">+300%</div>
                <div className="text-blue-100">reseñas en Google</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F9FAFB"/>
          </svg>
        </div>
      </section>

      {/* PROBLEMAS SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              Los problemas que ya conoces
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Retos diarios que frenan el crecimiento de tu clínica
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-md border-l-4 border-red-500 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{problem.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{problem.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* IA ATENCIÓN AL PACIENTE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6 font-semibold">
              <MessageSquare className="w-5 h-5" />
              Atención al Paciente
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              Tu recepcionista IA, siempre disponible
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un agente inteligente que atiende a tus pacientes 24/7 en todos los canales
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: MessageCircle,
                title: 'Chat 24/7 multicanal',
                description: 'WhatsApp, web, Instagram, Facebook... tu agente responde instantáneamente en todos los canales, incluso a las 3 de la mañana.',
                color: 'from-blue-500 to-cyan-600',
              },
              {
                icon: Calendar,
                title: 'Gestión de citas automática',
                description: 'Reserva, cancela y reprograma citas por chat. Envía recordatorios inteligentes y reduce los no-shows hasta un 40%.',
                color: 'from-green-500 to-emerald-600',
              },
              {
                icon: Bell,
                title: 'Recordatorios personalizados',
                description: 'Confirmaciones de cita, instrucciones pre-operatorias, recordatorios de revisión. Todo automático y personalizado para cada paciente.',
                color: 'from-orange-500 to-amber-600',
              },
              {
                icon: Globe,
                title: 'Multiidioma automático',
                description: 'Atiende pacientes internacionales en su idioma. Inglés, francés, alemán, árabe... sin necesidad de personal bilingüe.',
                color: 'from-purple-500 to-violet-600',
              },
              {
                icon: AlertCircle,
                title: 'Triaje de urgencias',
                description: 'Clasifica la urgencia de cada consulta y deriva automáticamente los casos críticos al personal de guardia.',
                color: 'from-red-500 to-rose-600',
              },
              {
                icon: Smile,
                title: 'Información de tratamientos',
                description: 'Explica tratamientos, precios orientativos, duración y preparación. Resuelve dudas frecuentes sin ocupar tiempo del equipo.',
                color: 'from-teal-500 to-cyan-600',
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* IA CLÍNICA Y DIAGNÓSTICA */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full mb-6 font-semibold">
              <Brain className="w-5 h-5" />
              IA Clínica
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              IA al servicio del diagnóstico y la clínica
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Herramientas inteligentes que apoyan al profesional en su trabajo clínico diario
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* IA Diagnóstica */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-3xl p-8 text-white shadow-2xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <Image className="w-9 h-9" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Análisis de imágenes</h3>
                  <p className="text-indigo-200">Soporte al diagnóstico radiológico</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <h4 className="font-bold text-lg mb-1">Radiografías panorámicas</h4>
                  <p className="text-indigo-100 text-sm">Detección asistida de caries, lesiones periapicales, enfermedad periodontal y patologías óseas</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <h4 className="font-bold text-lg mb-1">CBCT y modelos 3D</h4>
                  <p className="text-indigo-100 text-sm">Análisis volumétrico para planificación de implantes, endodoncia y cirugía oral</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <h4 className="font-bold text-lg mb-1">Fotografía intraoral</h4>
                  <p className="text-indigo-100 text-sm">Análisis de color, forma y posición dental para planificación estética</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-500/20 rounded-xl border border-yellow-400/30">
                <p className="text-sm font-semibold text-yellow-100">
                  La IA sugiere, el profesional decide. Siempre como herramienta de apoyo, nunca como sustituto del criterio clínico.
                </p>
              </div>
            </motion.div>

            {/* IA Documentación */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-600 to-pink-700 rounded-3xl p-8 text-white shadow-2xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <FileText className="w-9 h-9" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Documentación clínica</h3>
                  <p className="text-purple-200">Automatización administrativa clínica</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <h4 className="font-bold text-lg mb-1">Transcripción por voz</h4>
                  <p className="text-purple-100 text-sm">Dicta las notas clínicas y la IA las estructura automáticamente en el formato de tu software</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <h4 className="font-bold text-lg mb-1">Presupuestos automáticos</h4>
                  <p className="text-purple-100 text-sm">Genera presupuestos detallados a partir del plan de tratamiento con un clic</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <h4 className="font-bold text-lg mb-1">Consentimientos informados</h4>
                  <p className="text-purple-100 text-sm">Generación personalizada de documentos legales adaptados a cada tratamiento y paciente</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-500/30 rounded-full text-xs font-bold border border-green-400/30">-70% tiempo en documentación</span>
                <span className="px-3 py-1 bg-blue-500/30 rounded-full text-xs font-bold border border-blue-400/30">Menos errores</span>
              </div>
            </motion.div>
          </div>

          {/* Soporte clínico adicional */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[
              {
                icon: ClipboardList,
                title: 'Planes de tratamiento IA',
                description: 'Sugerencias de planes de tratamiento basadas en el diagnóstico, historial del paciente y evidencia científica actualizada.',
                color: 'bg-indigo-100 text-indigo-600',
              },
              {
                icon: Activity,
                title: 'Alertas clínicas',
                description: 'Detección de interacciones medicamentosas, alergias, contraindicaciones y factores de riesgo del paciente.',
                color: 'bg-red-100 text-red-600',
              },
              {
                icon: Search,
                title: 'Base de conocimiento IA',
                description: 'Acceso instantáneo a protocolos, guías clínicas y literatura científica actualizada para consultas rápidas.',
                color: 'bg-green-100 text-green-600',
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                >
                  <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* IA MARKETING Y REPUTACIÓN */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full mb-6 font-semibold">
              <Star className="w-5 h-5" />
              Marketing y Reputación
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              Crece y destaca en el mercado
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              IA que trabaja por la reputación y el crecimiento de tu clínica
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Reputación online */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 shadow-xl border-2 border-orange-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Star className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Reputación Online</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm">
                  <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Solicitud inteligente de reseñas</h4>
                    <p className="text-gray-600 text-sm">Pide reseñas en Google en el momento perfecto: tras tratamientos exitosos y cuando el paciente está satisfecho</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm">
                  <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Gestión de reseñas negativas</h4>
                    <p className="text-gray-600 text-sm">Detecta insatisfacciones antes de que lleguen a Google y las redirige al equipo para resolverlas</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm">
                  <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Monitorización continua</h4>
                    <p className="text-gray-600 text-sm">Seguimiento en tiempo real de tu reputación en Google, Doctoralia, redes sociales y más</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Marketing Automatizado */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8 shadow-xl border-2 border-pink-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center">
                  <Target className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Marketing Automatizado</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm">
                  <CheckCircle className="w-6 h-6 text-pink-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Campañas de remarketing</h4>
                    <p className="text-gray-600 text-sm">Contacto automático con pacientes inactivos, recordatorios de revisiones y ofertas personalizadas</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm">
                  <CheckCircle className="w-6 h-6 text-pink-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Contenido para redes sociales</h4>
                    <p className="text-gray-600 text-sm">Generación de posts, artículos y contenido educativo adaptado a tu clínica con IA</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm">
                  <CheckCircle className="w-6 h-6 text-pink-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Segmentación inteligente</h4>
                    <p className="text-gray-600 text-sm">Comunicaciones personalizadas según tipo de paciente, tratamiento y etapa del ciclo de vida</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Más funcionalidades de marketing */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { icon: Mail, text: 'Email marketing automatizado', desc: 'Newsletters, promociones y comunicaciones periódicas' },
              { icon: Share2, text: 'Gestión de redes sociales', desc: 'Programación y creación de contenido con IA' },
              { icon: Users, text: 'Programa de referidos', desc: 'Incentivos automáticos para pacientes que recomiendan' },
              { icon: PieChart, text: 'Analytics de marketing', desc: 'Dashboard con ROI de cada canal y campaña' },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-xl p-5 text-center hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">{item.text}</h4>
                  <p className="text-gray-500 text-xs">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* IA OPERACIONES Y GESTIÓN */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-6 font-semibold">
              <Settings className="w-5 h-5" />
              Operaciones y Gestión
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              Una clínica que funciona mejor
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Automatiza las operaciones para que tu equipo se enfoque en lo que importa
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: BarChart3,
                title: 'Dashboard de KPIs en tiempo real',
                description: 'Visualiza la ocupación de agenda, ingresos, nuevos pacientes, tasa de cancelación y más indicadores clave al instante.',
                color: 'from-blue-500 to-indigo-600',
              },
              {
                icon: Layers,
                title: 'Optimización de agenda',
                description: 'IA que rellena huecos, sugiere reagendamiento eficiente y maximiza la productividad de cada sillón dental.',
                color: 'from-green-500 to-emerald-600',
              },
              {
                icon: Heart,
                title: 'Seguimiento post-tratamiento',
                description: 'Mensajes automáticos de seguimiento tras intervenciones: instrucciones de cuidado, control de dolor, revisiones.',
                color: 'from-red-500 to-pink-600',
              },
              {
                icon: FileCheck,
                title: 'Automatización administrativa',
                description: 'Facturación, informes de gestión, recordatorios de cobro e integración con contabilidad. Todo automático.',
                color: 'from-purple-500 to-violet-600',
              },
              {
                icon: Mic,
                title: 'Asistente interno para el equipo',
                description: 'Consultas rápidas sobre protocolos, precios, disponibilidad. El equipo pregunta al agente y obtiene respuestas al instante.',
                color: 'from-orange-500 to-amber-600',
              },
              {
                icon: TrendingUp,
                title: 'Análisis predictivo',
                description: 'Predicción de demanda, identificación de pacientes en riesgo de abandono y detección de tendencias estacionales.',
                color: 'from-teal-500 to-cyan-600',
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* EXPERIENCIA DEL PACIENTE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-6 font-semibold">
              <Heart className="w-5 h-5" />
              Experiencia del Paciente
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              Pacientes más felices, más fieles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              La IA mejora cada punto de contacto del paciente con tu clínica
            </p>
          </motion.div>

          {/* Patient Journey */}
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 -translate-y-1/2"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { step: '1', title: 'Primer contacto', desc: 'El paciente consulta por WhatsApp a cualquier hora. La IA responde al instante.', icon: MessageCircle, color: 'from-blue-500 to-cyan-500' },
                { step: '2', title: 'Reserva de cita', desc: 'Agenda directamente por chat. Recibe confirmación y recordatorios automáticos.', icon: Calendar, color: 'from-green-500 to-emerald-500' },
                { step: '3', title: 'Pre-consulta', desc: 'Instrucciones previas, formularios digitales y preparación automatizada.', icon: ClipboardList, color: 'from-purple-500 to-violet-500' },
                { step: '4', title: 'Post-tratamiento', desc: 'Seguimiento personalizado, instrucciones de cuidado y control de evolución.', icon: Heart, color: 'from-pink-500 to-rose-500' },
                { step: '5', title: 'Fidelización', desc: 'Recordatorios de revisión, ofertas personalizadas y solicitud de reseña.', icon: Star, color: 'from-orange-500 to-amber-500' },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300">
                      <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">Paso {item.step}</div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* IMPACTO Y RESULTADOS */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 font-semibold border border-white/20">
              <TrendingUp className="w-5 h-5" />
              Impacto Real
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">
              Resultados que transforman tu clínica
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Métricas reales que nuestros clientes experimentan con la implementación de IA
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { value: '-60%', label: 'Carga administrativa', icon: Clock },
              { value: '+40%', label: 'Citas confirmadas', icon: Calendar },
              { value: '+300%', label: 'Reseñas en Google', icon: Star },
              { value: '24/7', label: 'Atención al paciente', icon: MessageSquare },
              { value: '-35%', label: 'No-shows', icon: AlertCircle },
              { value: '+50%', label: 'Pacientes recurrentes', icon: Heart },
              { value: '2min', label: 'Tiempo medio de respuesta', icon: Zap },
              { value: '+25%', label: 'Facturación media', icon: TrendingUp },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-300"
                >
                  <Icon className="w-8 h-8 mx-auto mb-3 text-blue-300" />
                  <div className="text-3xl lg:text-4xl font-extrabold mb-2">{stat.value}</div>
                  <p className="text-sm text-blue-200">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/20 text-center"
          >
            <Sparkles className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
            <h3 className="text-3xl lg:text-4xl font-extrabold mb-4">
              Tu clínica, pero más inteligente
            </h3>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              No se trata de sustituir a las personas, sino de potenciarlas. La IA se encarga de lo repetitivo para que tu equipo haga lo que mejor sabe hacer: <strong className="text-white">cuidar a los pacientes</strong>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* POR QUÉ NEXGENT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full mb-6 font-semibold">
              <Award className="w-5 h-5" />
              Por qué Nexgent
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              Tu partner en Inteligencia Artificial
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-6 shadow-md inline-block mb-6">
                <img 
                  src="/images/LOGO.png" 
                  alt="Nexgent Logo" 
                  className="h-20 w-auto object-contain"
                />
              </div>
              <h3 className="text-3xl font-extrabold text-gray-900 mb-4">Nexgent</h3>
              <p className="text-primary-600 font-semibold text-lg mb-6">Agencia de Inteligencia Artificial</p>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Somos especialistas en <strong>automatización de negocios con IA</strong>. 
                Diseñamos soluciones a medida que se integran perfectamente en tu flujo de trabajo y generan resultados desde el primer día.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Sparkles, title: 'Soluciones personalizadas', desc: 'Cada clínica es única. Diseñamos el agente adaptado a tus necesidades' },
                  { icon: Zap, title: 'Tecnología de vanguardia', desc: 'Utilizamos los modelos de IA más avanzados del mercado' },
                  { icon: Shield, title: 'Seguridad certificada', desc: 'Cumplimiento RGPD, cifrado extremo a extremo y servidores europeos' },
                  { icon: Rocket, title: 'Implementación rápida', desc: 'Resultados visibles en las primeras semanas' },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-600 to-blue-800 rounded-3xl p-8 text-white shadow-2xl"
            >
              <h3 className="text-2xl font-bold mb-6">Proceso de implementación</h3>
              <div className="space-y-6">
                {[
                  { step: '1', title: 'Análisis de necesidades', desc: 'Entendemos tu clínica, tus procesos y tus objetivos' },
                  { step: '2', title: 'Diseño personalizado', desc: 'Configuramos el agente con la personalidad y datos de tu clínica' },
                  { step: '3', title: 'Integración técnica', desc: 'Conectamos con WhatsApp, web, redes sociales y tu software dental' },
                  { step: '4', title: 'Pruebas y ajustes', desc: 'Periodo de prueba con ajustes continuos hasta la perfección' },
                  { step: '5', title: 'Lanzamiento y soporte', desc: 'Puesta en marcha con acompañamiento y soporte continuo' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-blue-200 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              Preguntas frecuentes
            </h2>
            <p className="text-xl text-gray-600">
              Resolvemos tus dudas sobre IA en odontología
            </p>
          </motion.div>

          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-cyan-700 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Bot className="w-16 h-16 mx-auto mb-6" />
            
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">
              ¿Listo para transformar tu clínica?
            </h2>
            
            <p className="text-2xl text-blue-50 mb-4">
              Agenda una demo personalizada y descubre lo que la IA puede hacer por ti
            </p>
            
            <p className="text-xl text-blue-200 mb-12 max-w-2xl mx-auto">
              Sin compromiso. Te mostramos en 30 minutos cómo funcionaría en tu clínica.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsContactModalOpen(true)}
                className="px-10 py-5 bg-white text-blue-700 rounded-xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-2 group"
              >
                Solicitar información
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.a
                href="https://calendly.com/nexgent-demo/subvencion-kted-2025"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-blue-500 text-white rounded-xl font-bold text-xl border-2 border-white/30 hover:bg-blue-400 transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-6 h-6" />
                Agendar demo
              </motion.a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <CheckCircle className="w-10 h-10 mx-auto mb-3" />
                <p className="font-semibold">Sin compromiso</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <Shield className="w-10 h-10 mx-auto mb-3" />
                <p className="font-semibold">100% seguro y RGPD</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <Zap className="w-10 h-10 mx-auto mb-3" />
                <p className="font-semibold">Resultados rápidos</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white rounded-xl p-3">
                <img 
                  src="/images/LOGO.png" 
                  alt="Nexgent Logo" 
                  className="h-12 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-lg mb-2">
              <span className="text-white font-bold">Nexgent</span>
            </p>
            <p className="text-sm mb-1">
              Inteligencia Artificial para Clínicas Dentales
            </p>
            <p className="text-xs text-gray-500 mt-3">
              info@nexgent.io
            </p>
          </div>
          
          <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between text-sm gap-4">
            <a href="https://www.nexgent.io" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors">
              www.nexgent.io
            </a>
            <button 
              onClick={onBack}
              className="text-gray-400 hover:text-primary-400 transition-colors"
            >
              ← Volver a selección de propuestas
            </button>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
}
