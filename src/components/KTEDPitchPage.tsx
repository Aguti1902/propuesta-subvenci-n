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
  FileCheck,
  Settings,
  Zap,
  TrendingUp,
  Shield,
  Target,
  Award,
  ArrowRight,
  Database,
  Lightbulb,
  Building2,
  Rocket,
  BarChart3,
  MessageCircle,
} from 'lucide-react';
import FeatureCard from './FeatureCard';
import ProblemCard from './ProblemCard';
import Timeline from './Timeline';
import FAQAccordion from './FAQAccordion';
import ContactModal from './ContactModal';

export default function KTEDPitchPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const problems = [
    {
      icon: Phone,
      title: 'Saturación telefónica constante',
      description: 'El teléfono y WhatsApp no paran. El personal pasa horas atendiendo consultas repetitivas en lugar de centrarse en su trabajo.',
    },
    {
      icon: Calendar,
      title: 'Gestión de citas manual y caótica',
      description: 'Reservas, cancelaciones, cambios de horario... todo se gestiona manualmente, generando errores y confusión.',
    },
    {
      icon: Star,
      title: 'Pocas reseñas online',
      description: 'Los clientes satisfechos no dejan reseñas porque nadie se las pide en el momento adecuado, perdiendo oportunidades de reputación.',
    },
    {
      icon: FileText,
      title: 'Exceso de carga administrativa',
      description: 'Documentación, información sobre servicios, horarios... todo requiere tiempo y atención humana constante.',
    },
    {
      icon: AlertCircle,
      title: 'Falta de seguimiento post-venta',
      description: 'No hay tiempo para hacer un seguimiento adecuado de clientes, perdiendo oportunidades de fidelización y mejora.',
    },
    {
      icon: Clock,
      title: 'Horarios de atención limitados',
      description: 'Fuera del horario laboral no hay nadie disponible para atender consultas, perdiendo clientes potenciales y oportunidades de negocio.',
    },
  ];

  const aiFeatures = [
    {
      icon: MessageSquare,
      title: 'Atención al cliente 24/7',
      description: 'Responde consultas de forma instantánea en cualquier momento del día, incluso fuera de horario laboral.',
      details: 'El agente entiende contexto, puede conversar de forma natural y escala a un humano cuando es necesario. Funciona en WhatsApp, web, redes sociales y más.',
      color: 'blue',
    },
    {
      icon: Calendar,
      title: 'Gestión automatizada de citas',
      description: 'Reserva, cancela, reprograma citas automáticamente. Envía recordatorios y reduce el no-show.',
      details: 'Integración con sistemas de agenda existentes. Confirmaciones automáticas, recordatorios personalizados y gestión inteligente de disponibilidad.',
      color: 'green',
    },
    {
      icon: Star,
      title: 'Recolección de reseñas',
      description: 'Pide reseñas en Google en el momento perfecto, aumentando tu reputación online de forma orgánica.',
      details: 'Detecta automáticamente clientes satisfechos, envía solicitudes personalizadas y hace seguimiento. Aumenta significativamente las reseñas positivas.',
      color: 'orange',
    },
    {
      icon: Bot,
      title: 'Automatización de tareas internas',
      description: 'Genera documentos, responde preguntas frecuentes del equipo, busca información y optimiza procesos.',
      details: 'Reduce tiempo en tareas repetitivas, centraliza conocimiento y permite al equipo centrarse en lo que realmente importa.',
      color: 'purple',
    },
  ];

  const timelineSteps = [
    {
      number: 1,
      title: 'Confirmación de centros',
      description: 'La asociación nos indica qué centros quieren participar en el proyecto.',
      icon: Building2,
      details: [
        'Reunión inicial para entender necesidades',
        'Confirmación de centros participantes',
        'Recopilación de información básica',
        'Firma de acuerdo de colaboración',
      ],
    },
    {
      number: 2,
      title: 'Gestión de subvención',
      description: 'ACCURO gestiona toda la solicitud KTED como proveedor de datos. Hasta 30.000€ por centro, sin papeleo para vosotros.',
      icon: FileCheck,
      details: [
        'ACCURO solicita la subvención como proveedor de datos',
        'Gestión completa de documentación y evidencias',
        'Conexión técnica al espacio de datos',
        'Toda la burocracia la asumimos nosotros',
      ],
    },
    {
      number: 3,
      title: 'Distribución de fondos',
      description: '15.000€ para gestión ACCURO + 15.000€ para tu Agente IA (desarrollo completo + 2 meses de servicio).',
      icon: Database,
      details: [
        '15.000€ gestión técnica y administrativa (ACCURO)',
        '13.000€ desarrollo del Agente IA completo',
        '1.398€ para 2 meses de servicio (699€/mes)',
        'Sin costes ocultos ni sorpresas',
      ],
    },
    {
      number: 4,
      title: 'Implementación y acompañamiento',
      description: 'Nexgent pone en marcha el Agente IA en todos los centros con formación y soporte durante 2 meses.',
      icon: Rocket,
      details: [
        'Diseño personalizado del Agente IA por Nexgent',
        'Integración con WhatsApp, web y sistemas',
        'Formación completa al equipo',
        '2 meses de acompañamiento y ajustes',
      ],
    },
  ];

  const includesAI = [
    { icon: Sparkles, text: 'Diseño del Agente IA adaptado a tu asociación' },
    { icon: MessageCircle, text: 'Flujos de atención al cliente personalizados' },
    { icon: Settings, text: 'Integración con WhatsApp, web y redes sociales' },
    { icon: Zap, text: 'Conexión con herramientas internas (CRM, agenda, etc.)' },
    { icon: Rocket, text: 'Puesta en marcha, pruebas y ajustes' },
    { icon: Shield, text: '2 meses de servicio y soporte técnico incluidos' },
  ];

  const benefitsCenter = [
    { icon: Clock, text: 'Menos tiempo al teléfono y WhatsApp' },
    { icon: CheckCircle, text: 'Más citas confirmadas y menos no-shows' },
    { icon: Star, text: 'Más reseñas positivas en Google' },
    { icon: Zap, text: 'Automatización de tareas repetitivas' },
    { icon: Users, text: 'Mejor experiencia para el cliente' },
    { icon: TrendingUp, text: 'Más tiempo para actividades de valor' },
  ];

  const benefitsAssociation = [
    { icon: Award, text: 'Imagen innovadora y tecnológica' },
    { icon: Target, text: 'Centros más organizados y eficientes' },
    { icon: BarChart3, text: 'Datos y procesos homogéneos' },
    { icon: Lightbulb, text: 'Diferenciación en el sector' },
    { icon: Shield, text: 'Más valor para los asociados' },
    { icon: Sparkles, text: 'Proyecto transformador sin inversión' },
  ];

  const implementationSteps = [
    {
      number: '1',
      title: 'Confirmáis los centros',
      description: 'Nos indicáis qué centros están interesados en participar.',
      color: 'bg-blue-500',
    },
    {
      number: '2',
      title: 'ACCURO gestiona la subvención',
      description: 'ACCURO solicita y gestiona toda la subvención KTED como proveedor de datos. Todo el papeleo corre de su cuenta.',
      color: 'bg-green-500',
    },
    {
      number: '3',
      title: 'Nexgent desarrolla tu IA',
      description: 'Nexgent diseña, configura e implementa el Agente IA en todos los centros + 2 meses de acompañamiento completo.',
      color: 'bg-purple-500',
    },
  ];

  const faqs = [
    {
      question: '¿Tenemos que hacer nosotros el papeleo de la subvención?',
      answer: 'No. ACCURO se encarga de toda la gestión administrativa y técnica de la subvención como proveedor de datos. Vosotros solo tenéis que confirmar los centros participantes y nosotros hacemos el resto.',
    },
    {
      question: '¿Qué pasa si no nos conceden la subvención?',
      answer: 'El proyecto solo avanza si se aprueba la subvención. No hay ningún compromiso económico para la asociación ni para los centros hasta que la subvención esté confirmada.',
    },
    {
      question: '¿Hay algún coste para la asociación o los centros?',
      answer: 'No. Todo está cubierto por la subvención: los 15.000€ para ACCURO por la gestión técnica y administrativa, y los 15.000€ para el Agente IA (13.000€ de desarrollo + 1.398€ de 2 meses de servicio a 699€/mes). Después de los 2 meses, si queréis continuar con el servicio, la mensualidad estándar es de 699€/mes por centro.',
    },
    {
      question: '¿Cuánto tiempo tarda en estar funcionando el Agente IA?',
      answer: 'Una vez aprobada la subvención, el proceso de diseño, desarrollo e implementación suele llevar entre 4 y 8 semanas dependiendo de la complejidad y el número de centros. Durante ese tiempo trabajamos de forma cercana con vosotros.',
    },
    {
      question: '¿Se puede adaptar el Agente IA a las particularidades de cada centro?',
      answer: 'Sí, totalmente. Aunque creamos una base común para toda la asociación, el Agente se puede personalizar para cada centro: horarios, servicios, canales de comunicación, integraciones, etc.',
    },
    {
      question: '¿Qué pasa después de los 2 meses incluidos?',
      answer: 'Después de los 2 meses, si queréis continuar con el servicio (mantenimiento, actualizaciones, soporte), la mensualidad estándar es de 699€/mes por centro. Durante esos 2 meses podéis evaluar el impacto real sin compromiso.',
    },
    {
      question: '¿En qué consiste exactamente la función de "proveedor de datos"?',
      answer: 'Como proveedor de datos, ACCURO se encarga de la conexión técnica de los centros al espacio de datos KTED, la generación de datasets, el cumplimiento de requisitos técnicos y la gestión de evidencias. Es la modalidad que permite acceder a Hasta 30.000€ por centro.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-800 to-transparent opacity-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Logos */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="flex items-center justify-center gap-8 mb-8"
            >
              <div className="bg-white rounded-2xl p-4 shadow-2xl">
                <img 
                  src="/images/LOGO.png" 
                  alt="Nexgent Logo" 
                  className="h-16 w-auto object-contain"
                />
              </div>
              <div className="text-3xl font-bold text-white/60">+</div>
              <div className="bg-white rounded-2xl p-4 shadow-2xl">
                <img 
                  src="/images/logo_ACCURO-843x800.avif" 
                  alt="ACCURO Logo" 
                  className="h-16 w-auto object-contain"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/20"
            >
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-semibold">Subvención KTED 2025</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Hasta 30.000€ por centro
              <span className="block text-primary-200 mt-2">+ Agente de IA completo</span>
              <span className="block text-3xl lg:text-4xl mt-2 text-primary-100">Sin papeleo. Sin coste.</span>
            </h1>

            <p className="text-xl lg:text-2xl text-primary-50 mb-12 leading-relaxed max-w-3xl mx-auto">
              <strong>ACCURO</strong> gestiona toda la subvención como <strong>proveedor de datos</strong>.
              <span className="block mt-3">
                <strong>Nexgent</strong> desarrolla tu <strong>Agente de IA</strong> y lo pone en marcha en todos tus centros + <strong>2 meses de servicio</strong> totalmente cubiertos.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsContactModalOpen(true)}
                className="px-8 py-4 bg-white text-primary-700 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-2 group"
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
                className="px-8 py-4 bg-primary-500 text-white rounded-xl font-bold text-lg border-2 border-white/30 hover:bg-primary-400 transition-all duration-300 cursor-pointer inline-block"
              >
                Agendar llamada
              </motion.a>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
              >
                <div className="text-4xl font-bold mb-2">30.000€</div>
                <div className="text-primary-100">por cada centro</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
              >
                <div className="text-4xl font-bold mb-2">0€</div>
                <div className="text-primary-100">de papeleo para ti</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
              >
                <div className="text-4xl font-bold mb-2">2 meses</div>
                <div className="text-primary-100">de servicio IA incluidos</div>
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

      {/* PROBLEMA SECTION */}
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
              Los problemas que ya conocéis
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Todos los centros se enfrentan a los mismos retos día tras día
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {problems.map((problem, index) => (
              <ProblemCard
                key={index}
                icon={problem.icon}
                title={problem.title}
                description={problem.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SOLUCIÓN IA SECTION */}
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
              <Bot className="w-5 h-5" />
              La Solución
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              Agente de IA para todos tus centros
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un asistente inteligente que trabaja 24/7 para automatizar y optimizar la gestión de cada centro
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                details={feature.details}
                color={feature.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA LA SUBVENCIÓN SECTION */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-full mb-6 font-semibold">
              <FileCheck className="w-5 h-5" />
              Proceso simple
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              Cómo funciona la subvención KTED
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              4 pasos claros desde la confirmación hasta tener el Agente IA funcionando
            </p>
          </motion.div>

          <Timeline steps={timelineSteps} />

          {/* Destacados importantes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-green-200">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Hasta 30.000€ por centro</h3>
              <p className="text-gray-600">Modalidad proveedor de datos. Máxima cuantía disponible.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-blue-200">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Sin papeleo</h3>
              <p className="text-gray-600">ACCURO gestiona toda la documentación y trámites de principio a fin.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-purple-200">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Sparkles className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">15.000€ para IA</h3>
              <p className="text-gray-600">Desarrollo completo + 2 meses de servicio totalmente cubiertos.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* QUÉ INCLUYEN LOS 15.000€ SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              Qué cubren los 15.000€ del proyecto IA
            </h2>
            <p className="text-xl text-gray-600">
              Todo lo necesario para tener el Agente IA funcionando en tus centros
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-50 to-purple-50 rounded-3xl p-8 lg:p-12 shadow-xl border border-primary-100"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {includesAI.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md"
                  >
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <p className="text-gray-800 font-semibold leading-relaxed">{item.text}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 p-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl text-white text-center"
            >
              <p className="text-2xl font-bold mb-2">+ 2 meses de servicio incluidos</p>
              <p className="text-green-50">Soporte técnico, actualizaciones y acompañamiento sin coste adicional</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* COSTES Y VALOR SECTION */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-6 font-semibold">
              <BarChart3 className="w-5 h-5" />
              Valor Real del Proyecto
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              Costes de desarrollo y servicio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Así se distribuye la inversión y qué costaría sin subvención
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Coste de Desarrollo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-primary-200 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100 rounded-bl-full opacity-50"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center">
                    <Rocket className="w-8 h-8 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Desarrollo completo</h3>
                    <p className="text-sm text-gray-500">Implementación del Agente IA</p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl font-extrabold text-gray-900">13.000€</span>
                  </div>
                  <p className="text-gray-600 font-medium">Precio sin subvención</p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Diseño y configuración personalizada</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Integración con todos los canales</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Puesta en marcha y formación</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Pruebas y ajustes iniciales</span>
                  </div>
                </div>

                <div className="p-4 bg-green-50 rounded-xl border-2 border-green-200">
                  <p className="text-center font-bold text-green-700 text-lg">
                    ✓ 100% cubierto por la subvención
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Coste Mensual */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-purple-200 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-bl-full opacity-50"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Servicio mensual</h3>
                    <p className="text-sm text-gray-500">Mantenimiento y soporte</p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl font-extrabold text-gray-900">699€</span>
                    <span className="text-2xl text-gray-500 font-medium">/mes</span>
                  </div>
                  <p className="text-gray-600 font-medium">Precio estándar por centro</p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Soporte técnico continuo</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Actualizaciones y mejoras</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Ajustes y optimizaciones</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Monitorización y mantenimiento</span>
                  </div>
                </div>

                <div className="p-4 bg-green-50 rounded-xl border-2 border-green-200">
                  <p className="text-center font-bold text-green-700 text-lg">
                    ✓ 2 primeros meses incluidos (1.398€)
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Resumen de valor total */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-8 lg:p-12 text-white shadow-2xl"
          >
            <div className="text-center mb-8">
              <Sparkles className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-3xl lg:text-4xl font-extrabold mb-3">
                Valor total del proyecto
              </h3>
              <p className="text-primary-100 text-lg">Lo que recibes con la subvención KTED</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold mb-2">13.000€</div>
                <div className="text-primary-100">Desarrollo completo del Agente IA</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold mb-2">1.398€</div>
                <div className="text-primary-100">2 meses de servicio incluidos</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold mb-2">15.000€</div>
                <div className="text-primary-100">Gestión técnica ACCURO</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="text-5xl lg:text-6xl font-extrabold text-primary-600">Hasta 30.000€</div>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-2">Valor total por centro</p>
              <p className="text-gray-600 text-lg mb-6">La subvención KTED cubre el 100% del proyecto: 15.000€ para ACCURO + 15.000€ para tu Agente IA</p>
              
              <div className="inline-flex items-center gap-2 bg-green-100 px-6 py-3 rounded-full">
                <Shield className="w-6 h-6 text-green-600" />
                <span className="font-bold text-green-700 text-lg">Coste para ti: 0€</span>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <h4 className="font-bold text-xl mb-3 flex items-center gap-2">
                <TrendingUp className="w-6 h-6" />
                Después de los 2 meses incluidos
              </h4>
              <p className="text-primary-50 leading-relaxed">
                Si decides continuar con el servicio, la mensualidad estándar es de <strong>699€/mes por centro</strong>. 
                Durante los 2 primeros meses podrás evaluar el impacto real sin ningún compromiso.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BENEFICIOS SECTION */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              Beneficios para todos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Impacto real tanto para cada centro como para la asociación en su conjunto
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Beneficios para centros */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Para cada centro</h3>
              </div>
              <div className="space-y-4">
                {benefitsCenter.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl"
                    >
                      <Icon className="w-6 h-6 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">{benefit.text}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Beneficios para asociación */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Para la asociación</h3>
              </div>
              <div className="space-y-4">
                {benefitsAssociation.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4 p-4 bg-purple-50 rounded-xl"
                    >
                      <Icon className="w-6 h-6 text-purple-600 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">{benefit.text}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* IMPLEMENTACIÓN SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              Sólo 3 pasos para la asociación
            </h2>
            <p className="text-xl text-gray-600">
              Así de sencillo. Nosotros nos encargamos de todo lo demás.
            </p>
          </motion.div>

          <div className="space-y-6">
            {implementationSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-start gap-6 bg-gradient-to-r from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center flex-shrink-0 text-white text-3xl font-bold shadow-lg`}>
                  {step.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 p-8 bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl text-white text-center shadow-2xl"
          >
            <Rocket className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-4">Y eso es todo</h3>
            <p className="text-xl text-primary-50 max-w-2xl mx-auto">
              En menos de lo que imaginas, todos tus centros tendrán un Agente de IA trabajando 24/7 para mejorar su gestión y atención al cliente.
            </p>
          </motion.div>
        </div>
      </section>

      {/* QUIÉNES SOMOS SECTION */}
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
              <Users className="w-5 h-5" />
              Quiénes somos
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              Nexgent + ACCURO
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              La alianza perfecta entre automatización con IA y gestión de subvenciones
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Nexgent Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-3xl p-8 lg:p-10 shadow-xl border-2 border-primary-200"
            >
              <div className="mb-6">
                <div className="bg-white rounded-2xl p-4 shadow-md inline-block mb-4">
                  <img 
                    src="/images/LOGO.png" 
                    alt="Nexgent Logo" 
                    className="h-20 w-auto object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-extrabold text-gray-900">Nexgent</h3>
                  <p className="text-primary-600 font-semibold">Agencia de Inteligencia Artificial</p>
                </div>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Somos una <strong>agencia especializada en automatización de negocios mediante IA</strong>. 
                Ayudamos a empresas y organizaciones a transformar sus procesos con tecnología inteligente.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Expertos en automatización</h4>
                    <p className="text-gray-600 text-sm">Diseñamos Agentes de IA personalizados para cada negocio</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Tecnología de vanguardia</h4>
                    <p className="text-gray-600 text-sm">Utilizamos las últimas herramientas de IA del mercado</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Resultados medibles</h4>
                    <p className="text-gray-600 text-sm">Mejoramos la eficiencia y liberamos tiempo de tu equipo</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-5 bg-white rounded-2xl shadow-md border border-primary-100">
                <p className="text-center font-bold text-primary-700 text-lg">
                  🤖 Desarrollamos tu Agente de IA
                </p>
              </div>
            </motion.div>

            {/* ACCURO Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 lg:p-10 shadow-xl border-2 border-green-200"
            >
              <div className="mb-6">
                <div className="bg-white rounded-2xl p-4 shadow-md inline-block mb-4">
                  <img 
                    src="/images/logo_ACCURO-843x800.avif" 
                    alt="ACCURO Logo" 
                    className="h-20 w-auto object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-extrabold text-gray-900">ACCURO</h3>
                  <p className="text-green-600 font-semibold">Partner en gestión de subvenciones</p>
                </div>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                <strong>Expertos en la gestión de subvenciones KTED</strong> como proveedor de datos. 
                Su experiencia permite que toda la tramitación sea fluida y sin complicaciones para las asociaciones.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Gestión completa</h4>
                    <p className="text-gray-600 text-sm">Se encargan de todo el papeleo y documentación</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Database className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Proveedor de datos certificado</h4>
                    <p className="text-gray-600 text-sm">Conexión técnica al espacio de datos KTED</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Sin riesgo para ti</h4>
                    <p className="text-gray-600 text-sm">Tú no asumes ningún compromiso económico</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-5 bg-white rounded-2xl shadow-md border border-green-100">
                <p className="text-center font-bold text-green-700 text-lg">
                  📋 Gestionan toda la subvención
                </p>
              </div>
            </motion.div>
          </div>

          {/* La Colaboración */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 rounded-3xl p-8 lg:p-12 text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full -ml-48 -mb-48"></div>
            
            <div className="relative">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <Bot className="w-12 h-12" />
                  <div className="text-4xl font-bold">+</div>
                  <FileCheck className="w-12 h-12" />
                </div>
                <h3 className="text-3xl lg:text-4xl font-extrabold mb-4">
                  La colaboración que hace posible tu transformación digital
                </h3>
                <p className="text-xl text-primary-100 max-w-3xl mx-auto">
                  Juntando nuestra experiencia en IA con la gestión experta de subvenciones de ACCURO
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">Nexgent diseña</h4>
                  <p className="text-primary-50 text-sm">Creamos el Agente de IA personalizado para tu asociación</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                    <FileCheck className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">ACCURO gestiona</h4>
                  <p className="text-primary-50 text-sm">Tramitan la subvención y aseguran los fondos</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                    <Award className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">Tú te beneficias</h4>
                  <p className="text-primary-50 text-sm">Sin coste, sin papeleo, con toda la tecnología</p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full">
                  <Sparkles className="w-5 h-5 text-primary-600" />
                  <span className="font-bold text-primary-700">Hasta 30.000€ de valor, 0€ de coste para ti</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQs SECTION */}
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
              Resolvemos las dudas más comunes
            </p>
          </motion.div>

          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA FINAL SECTION */}
      <section id="contact" className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-16 h-16 mx-auto mb-6" />
            
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">
              ¿Listo para transformar tus centros?
            </h2>
            
            <p className="text-2xl text-primary-50 mb-4">
              Hasta 30.000€ de subvención · 0 papeleo · IA funcionando
            </p>
            
            <p className="text-xl text-primary-100 mb-12 max-w-2xl mx-auto">
              Agenda una reunión con Nexgent y ACCURO y te explicamos todo el proceso en detalle. Sin compromiso.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsContactModalOpen(true)}
                className="px-10 py-5 bg-white text-primary-700 rounded-xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-2 group"
              >
                Solicitar más información
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.a
                href="https://calendly.com/nexgent-demo/subvencion-kted-2025"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-primary-500 text-white rounded-xl font-bold text-xl border-2 border-white/30 hover:bg-primary-400 transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-6 h-6" />
                Agendar reunión
              </motion.a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <CheckCircle className="w-10 h-10 mx-auto mb-3" />
                <p className="font-semibold">Sin compromiso</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <Shield className="w-10 h-10 mx-auto mb-3" />
                <p className="font-semibold">Sin coste oculto</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <Zap className="w-10 h-10 mx-auto mb-3" />
                <p className="font-semibold">Respuesta rápida</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-8 mb-6">
              <div className="bg-white rounded-xl p-3">
                <img 
                  src="/images/LOGO.png" 
                  alt="Nexgent Logo" 
                  className="h-12 w-auto object-contain"
                />
              </div>
              <div className="text-2xl font-bold text-gray-600">+</div>
              <div className="bg-white rounded-xl p-3">
                <img 
                  src="/images/logo_ACCURO-843x800.avif" 
                  alt="ACCURO Logo" 
                  className="h-12 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-lg mb-2">
              <span className="text-white font-bold">Nexgent</span> <span className="text-gray-500">+</span> <span className="text-white font-bold">ACCURO</span>
            </p>
            <p className="text-sm mb-1">
              Subvención KTED 2025 · Transformando asociaciones con Inteligencia Artificial
            </p>
            <p className="text-xs text-gray-500 mt-3">
              Nexgent desarrolla la IA · ACCURO gestiona la subvención
            </p>
          </div>
          
          <div className="border-t border-gray-800 pt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-center md:text-left text-sm">
            <div>
              <a href="https://www.nexgent.io" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors">
                www.nexgent.io
              </a>
            </div>
            <div className="md:text-right">
              <a href="https://www.accuro.es" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
                www.accuro.es
              </a>
            </div>
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

