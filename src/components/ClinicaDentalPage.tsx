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
  CheckCircle,
  Sparkles,
  Settings,
  Zap,
  TrendingUp,
  Shield,
  Target,
  Award,
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
    { icon: Phone, title: 'Saturación telefónica constante', description: 'El teléfono no para. El personal pasa horas atendiendo consultas repetitivas en lugar de centrarse en los pacientes.' },
    { icon: Calendar, title: 'Gestión de citas manual', description: 'Reservas, cancelaciones, cambios de horario... todo se gestiona a mano, generando errores y huecos en la agenda.' },
    { icon: Star, title: 'Pocas reseñas online', description: 'Pacientes satisfechos que nunca dejan reseña porque nadie se lo pide en el momento adecuado.' },
    { icon: FileText, title: 'Exceso de carga administrativa', description: 'Documentación, informes, presupuestos... todo requiere tiempo y atención humana constante.' },
    { icon: AlertCircle, title: 'Sin seguimiento post-tratamiento', description: 'No hay tiempo para seguir a cada paciente, perdiendo fidelización y detección temprana de complicaciones.' },
    { icon: Clock, title: 'Horarios de atención limitados', description: 'Fuera del horario laboral nadie atiende consultas. Se pierden pacientes potenciales cada noche y fin de semana.' },
  ];

  const faqs = [
    { question: '¿La IA sustituye al personal de la clínica?', answer: 'No. La IA complementa y potencia al equipo humano. Se encarga de las tareas repetitivas y administrativas para que el personal pueda dedicar más tiempo a los pacientes y a tareas de alto valor.' },
    { question: '¿Cuánto tiempo tarda en implementarse?', answer: 'Dependiendo del alcance, entre 2 y 6 semanas. Empezamos con las funcionalidades más impactantes (atención 24/7, gestión de citas) y vamos añadiendo capacidades progresivamente.' },
    { question: '¿Es seguro para los datos de los pacientes?', answer: 'Absolutamente. Cumplimos con RGPD, LOPD y todas las normativas sanitarias. Los datos se cifran, se alojan en servidores europeos y solo el personal autorizado tiene acceso.' },
    { question: '¿Funciona con mi software de gestión dental actual?', answer: 'Sí. Nos integramos con los principales sistemas de gestión dental del mercado (Dentidesk, Gesden, Clinic Cloud, etc.). Si usas otro software, analizamos la integración caso por caso.' },
    { question: '¿Qué pasa si la IA no sabe responder algo?', answer: 'El agente está diseñado para escalar automáticamente a un humano cuando detecta que no puede resolver la consulta por sí solo. Nunca da información incorrecta; si no sabe, transfiere.' },
    { question: '¿Los pacientes notan que hablan con una IA?', answer: 'La IA conversa de forma natural y empática. Muchos pacientes no distinguen que hablan con una IA, pero siempre somos transparentes si el paciente pregunta directamente.' },
    { question: '¿Puedo personalizar las respuestas y el tono del agente?', answer: 'Totalmente. Configuramos el agente con la personalidad de tu clínica: tono, estilo de comunicación, información específica sobre tratamientos, protocolos y precios.' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-white border-b border-gray-100">
        {/* Botón Volver */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={onBack}
            className="flex items-center gap-2 text-gray-400 hover:text-black transition-colors duration-300 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-semibold">Volver</span>
          </motion.button>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
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
              className="flex items-center justify-center mb-10"
            >
              <img src="/images/LOGO.png" alt="Nexgent Logo" className="h-14 w-auto object-contain" />
            </motion.div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full mb-8"
            >
              <Building2 className="w-4 h-4" />
              <span className="text-sm font-semibold">Propuesta para Clínica Dental</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-black mb-6 leading-tight tracking-tight">
              Inteligencia Artificial
              <span className="block text-blue-600 mt-2">para tu Clínica Dental</span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-500 mb-16 leading-relaxed max-w-3xl mx-auto">
              Automatiza la atención al paciente, optimiza tu agenda, mejora tu reputación online y libera a tu equipo para lo que realmente importa: <strong className="text-black">cuidar sonrisas</strong>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                { value: '24/7', label: 'atención al paciente' },
                { value: '-60%', label: 'carga administrativa' },
                { value: '+300%', label: 'reseñas en Google' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="border border-gray-200 p-6 rounded-2xl"
                >
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROBLEMAS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-black mb-4">Los problemas que ya conoces</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">Retos diarios que frenan el crecimiento de tu clínica</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1, duration: 0.5 }} viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-black mb-2">{problem.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{problem.description}</p>
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
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-6 font-semibold">
              <MessageSquare className="w-5 h-5" />
              Atención al Paciente
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-black mb-4">Tu recepcionista IA, siempre disponible</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">Un agente inteligente que atiende a tus pacientes 24/7 en todos los canales</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: MessageCircle, title: 'Chat 24/7 multicanal', description: 'WhatsApp, web, Instagram, Facebook... tu agente responde instantáneamente en todos los canales, incluso a las 3 de la mañana.' },
              { icon: Calendar, title: 'Gestión de citas automática', description: 'Reserva, cancela y reprograma citas por chat. Envía recordatorios inteligentes y reduce los no-shows hasta un 40%.' },
              { icon: Bell, title: 'Recordatorios personalizados', description: 'Confirmaciones de cita, instrucciones pre-operatorias, recordatorios de revisión. Todo automático y personalizado.' },
              { icon: Globe, title: 'Multiidioma automático', description: 'Atiende pacientes internacionales en su idioma. Inglés, francés, alemán, árabe... sin necesidad de personal bilingüe.' },
              { icon: AlertCircle, title: 'Triaje de urgencias', description: 'Clasifica la urgencia de cada consulta y deriva automáticamente los casos críticos al personal de guardia.' },
              { icon: Smile, title: 'Información de tratamientos', description: 'Explica tratamientos, precios orientativos, duración y preparación. Resuelve dudas frecuentes sin ocupar tiempo del equipo.' },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1, duration: 0.5 }} viewport={{ once: true }}
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">{feature.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* IA CLÍNICA Y DIAGNÓSTICA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-6 font-semibold">
              <Brain className="w-5 h-5" />
              IA Clínica
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-black mb-4">IA al servicio del diagnóstico y la clínica</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">Herramientas inteligentes que apoyan al profesional en su trabajo clínico diario</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Análisis de imágenes */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 border-2 border-gray-200"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center">
                  <Image className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black">Análisis de imágenes</h3>
                  <p className="text-gray-500">Soporte al diagnóstico radiológico</p>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { title: 'Radiografías panorámicas', desc: 'Detección asistida de caries, lesiones periapicales, enfermedad periodontal y patologías óseas' },
                  { title: 'CBCT y modelos 3D', desc: 'Análisis volumétrico para planificación de implantes, endodoncia y cirugía oral' },
                  { title: 'Fotografía intraoral', desc: 'Análisis de color, forma y posición dental para planificación estética' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <h4 className="font-bold text-black mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                ))}
                <div className="mt-4 p-3 bg-blue-50 rounded-xl border border-blue-200">
                  <p className="text-sm text-blue-600">La IA sugiere, el profesional decide. Siempre como herramienta de apoyo.</p>
                </div>
              </div>
            </motion.div>

            {/* Documentación clínica */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 border-2 border-gray-200"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black">Documentación clínica</h3>
                  <p className="text-gray-500">Automatización administrativa clínica</p>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { title: 'Transcripción por voz', desc: 'Dicta las notas clínicas y la IA las estructura automáticamente en el formato de tu software' },
                  { title: 'Presupuestos automáticos', desc: 'Genera presupuestos detallados a partir del plan de tratamiento con un clic' },
                  { title: 'Consentimientos informados', desc: 'Generación personalizada de documentos legales adaptados a cada tratamiento y paciente' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <h4 className="font-bold text-black mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                ))}
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-50 rounded-full text-xs font-bold text-blue-600 border border-blue-200">-70% tiempo en documentación</span>
                  <span className="px-3 py-1 bg-blue-50 rounded-full text-xs font-bold text-blue-600 border border-blue-200">Menos errores</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Soporte clínico adicional */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[
              { icon: ClipboardList, title: 'Planes de tratamiento IA', description: 'Sugerencias basadas en diagnóstico, historial del paciente y evidencia científica actualizada.' },
              { icon: Activity, title: 'Alertas clínicas', description: 'Detección de interacciones medicamentosas, alergias, contraindicaciones y factores de riesgo.' },
              { icon: Search, title: 'Base de conocimiento IA', description: 'Acceso instantáneo a protocolos, guías clínicas y literatura científica actualizada.' },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1, duration: 0.5 }} viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 border border-gray-200"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* IA MARKETING Y REPUTACIÓN */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-6 font-semibold">
              <Star className="w-5 h-5" />
              Marketing y Reputación
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-black mb-4">Crece y destaca en el mercado</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">IA que trabaja por la reputación y el crecimiento de tu clínica</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Reputación online */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
              className="bg-gray-50 rounded-3xl p-8 border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black">Reputación Online</h3>
              </div>
              <div className="space-y-4">
                {[
                  { title: 'Solicitud inteligente de reseñas', desc: 'Pide reseñas en Google en el momento perfecto: tras tratamientos exitosos y cuando el paciente está satisfecho' },
                  { title: 'Gestión de reseñas negativas', desc: 'Detecta insatisfacciones antes de que lleguen a Google y las redirige al equipo para resolverlas' },
                  { title: 'Monitorización continua', desc: 'Seguimiento en tiempo real de tu reputación en Google, Doctoralia, redes sociales y más' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-black text-sm mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Marketing Automatizado */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
              className="bg-gray-50 rounded-3xl p-8 border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black">Marketing Automatizado</h3>
              </div>
              <div className="space-y-4">
                {[
                  { title: 'Campañas de remarketing', desc: 'Contacto automático con pacientes inactivos, recordatorios de revisiones y ofertas personalizadas' },
                  { title: 'Contenido para redes sociales', desc: 'Generación de posts, artículos y contenido educativo adaptado a tu clínica con IA' },
                  { title: 'Segmentación inteligente', desc: 'Comunicaciones personalizadas según tipo de paciente, tratamiento y etapa del ciclo de vida' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-black text-sm mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { icon: Mail, text: 'Email marketing automatizado', desc: 'Newsletters y comunicaciones periódicas' },
              { icon: Share2, text: 'Gestión de redes sociales', desc: 'Programación y creación de contenido' },
              { icon: Users, text: 'Programa de referidos', desc: 'Incentivos automáticos para pacientes' },
              { icon: PieChart, text: 'Analytics de marketing', desc: 'Dashboard con ROI de cada canal' },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1, duration: 0.4 }} viewport={{ once: true }}
                  className="bg-gray-50 rounded-xl p-5 text-center border border-gray-100 hover:border-blue-200 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-bold text-black text-sm mb-1">{item.text}</h4>
                  <p className="text-gray-400 text-xs">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* IA OPERACIONES Y GESTIÓN */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-6 font-semibold">
              <Settings className="w-5 h-5" />
              Operaciones y Gestión
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-black mb-4">Una clínica que funciona mejor</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">Automatiza las operaciones para que tu equipo se enfoque en lo que importa</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: BarChart3, title: 'Dashboard de KPIs en tiempo real', description: 'Visualiza la ocupación de agenda, ingresos, nuevos pacientes, tasa de cancelación y más indicadores clave.' },
              { icon: Layers, title: 'Optimización de agenda', description: 'IA que rellena huecos, sugiere reagendamiento eficiente y maximiza la productividad de cada sillón dental.' },
              { icon: Heart, title: 'Seguimiento post-tratamiento', description: 'Mensajes automáticos de seguimiento tras intervenciones: instrucciones de cuidado, control de dolor, revisiones.' },
              { icon: FileCheck, title: 'Automatización administrativa', description: 'Facturación, informes de gestión, recordatorios de cobro e integración con contabilidad. Todo automático.' },
              { icon: Mic, title: 'Asistente interno para el equipo', description: 'Consultas rápidas sobre protocolos, precios, disponibilidad. El equipo pregunta al agente y obtiene respuestas al instante.' },
              { icon: TrendingUp, title: 'Análisis predictivo', description: 'Predicción de demanda, identificación de pacientes en riesgo de abandono y detección de tendencias estacionales.' },
              { icon: PieChart, title: 'Gestión de financiación y planes de pago', description: 'Propuestas automáticas de financiación para tratamientos. Gestión de cuotas, recordatorios de pago y seguimiento.' },
              { icon: Building2, title: 'Coordinación con laboratorios dentales', description: 'Comunicación automatizada con laboratorios para prótesis, ortodoncias y trabajos protésicos. Seguimiento de plazos.' },
              { icon: Layers, title: 'Gestión de inventario inteligente', description: 'Predicción de necesidades de materiales y stock. Alertas automáticas de reposición basadas en tu consumo histórico.' },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1, duration: 0.5 }} viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">{feature.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* EXPERIENCIA DEL PACIENTE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-6 font-semibold">
              <Heart className="w-5 h-5" />
              Experiencia del Paciente
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-black mb-4">Pacientes más felices, más fieles</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">La IA mejora cada punto de contacto del paciente con tu clínica</p>
          </motion.div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-blue-200 -translate-y-1/2"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { step: '1', title: 'Primer contacto', desc: 'El paciente consulta por WhatsApp a cualquier hora. La IA responde al instante.', icon: MessageCircle },
                { step: '2', title: 'Reserva de cita', desc: 'Agenda directamente por chat. Recibe confirmación y recordatorios automáticos.', icon: Calendar },
                { step: '3', title: 'Pre-consulta', desc: 'Instrucciones previas, formularios digitales y preparación automatizada.', icon: ClipboardList },
                { step: '4', title: 'Post-tratamiento', desc: 'Seguimiento personalizado, instrucciones de cuidado y control de evolución.', icon: Heart },
                { step: '5', title: 'Fidelización', desc: 'Recordatorios de revisión, ofertas personalizadas y solicitud de reseña.', icon: Star },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.15, duration: 0.5 }} viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="bg-white rounded-2xl p-6 border border-gray-200 text-center hover:border-blue-300 hover:shadow-md transition-all duration-300">
                      <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-2">Paso {item.step}</div>
                      <h3 className="text-base font-bold text-black mb-2">{item.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* IMPACTO Y RESULTADOS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-6 font-semibold">
              <TrendingUp className="w-5 h-5" />
              Impacto Real
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-black mb-4">Resultados que transforman tu clínica</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">Métricas reales que nuestros clientes experimentan con la implementación de IA</p>
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
                <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.05, duration: 0.4 }} viewport={{ once: true }}
                  className="border border-gray-200 rounded-2xl p-6 text-center hover:border-blue-300 transition-all duration-300"
                >
                  <Icon className="w-7 h-7 mx-auto mb-3 text-blue-600" />
                  <div className="text-3xl lg:text-4xl font-extrabold text-blue-600 mb-2">{stat.value}</div>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}
            className="border border-gray-200 rounded-3xl p-8 lg:p-12 text-center bg-gray-50"
          >
            <Sparkles className="w-14 h-14 mx-auto mb-6 text-blue-600" />
            <h3 className="text-3xl lg:text-4xl font-extrabold text-black mb-4">Tu clínica, pero más inteligente</h3>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
              No se trata de sustituir a las personas, sino de potenciarlas. La IA se encarga de lo repetitivo para que tu equipo haga lo que mejor sabe hacer: <strong className="text-black">cuidar a los pacientes</strong>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* INVERSIÓN Y SUBVENCIÓN */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-6 font-semibold">
              <Sparkles className="w-5 h-5" />
              Inversión
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-black mb-4">Subvención de 15.000€ por clínica</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">Gracias a la subvención, el desarrollo de tu agente de IA queda cubierto</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Desarrollo */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 border-2 border-blue-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black">Desarrollo del Agente IA</h3>
                  <p className="text-sm text-gray-500">Cubierto por la subvención</p>
                </div>
              </div>
              <div className="text-5xl font-extrabold text-blue-600 mb-4">10.000€</div>
              <p className="text-gray-500 mb-6">De los 15.000€ de subvención, 10.000€ se destinan al desarrollo completo de tu agente de IA personalizado.</p>
              <div className="space-y-3">
                {['Diseño y configuración personalizada', 'Integración con todos los canales', 'Conexión con tu software dental', 'Puesta en marcha y formación', 'Pruebas y ajustes iniciales'].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                <p className="text-center font-bold text-blue-600">100% cubierto por la subvención</p>
              </div>
            </motion.div>

            {/* Mensualidad */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 border-2 border-gray-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black">Servicio mensual</h3>
                  <p className="text-sm text-gray-500">Mantenimiento y soporte continuo</p>
                </div>
              </div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-5xl font-extrabold text-black">495€</span>
                <span className="text-2xl text-gray-400 font-medium">/mes</span>
              </div>
              <p className="text-gray-500 mb-6">Por cada clínica. Incluye todo lo necesario para mantener tu agente de IA funcionando y mejorando.</p>
              <div className="space-y-3">
                {['Soporte técnico continuo', 'Actualizaciones y mejoras', 'Ajustes y optimizaciones', 'Monitorización y mantenimiento', 'Nuevas funcionalidades'].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
            className="bg-blue-600 rounded-3xl p-8 text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-3">Resumen de la inversión</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div>
                <div className="text-3xl font-bold mb-1">15.000€</div>
                <p className="text-blue-200 text-sm">Subvención total por clínica</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">10.000€</div>
                <p className="text-blue-200 text-sm">Para desarrollo de tu IA</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">495€/mes</div>
                <p className="text-blue-200 text-sm">Servicio mensual por clínica</p>
              </div>
            </div>
          </motion.div>
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
              <h3 className="text-2xl font-bold text-black mb-6">Proceso de implementación</h3>
              <div className="space-y-6">
                {[
                  { step: '1', title: 'Análisis de necesidades', desc: 'Entendemos tu clínica, tus procesos y tus objetivos' },
                  { step: '2', title: 'Diseño personalizado', desc: 'Configuramos el agente con la personalidad y datos de tu clínica' },
                  { step: '3', title: 'Integración técnica', desc: 'Conectamos con WhatsApp, web, redes sociales y tu software dental' },
                  { step: '4', title: 'Pruebas y ajustes', desc: 'Periodo de prueba con ajustes continuos hasta la perfección' },
                  { step: '5', title: 'Lanzamiento y soporte', desc: 'Puesta en marcha con acompañamiento y soporte continuo' },
                ].map((item, index) => (
                  <motion.div key={index} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1, duration: 0.4 }} viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm text-white">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-black text-lg">{item.title}</h4>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
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
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-black mb-4">Preguntas frecuentes</h2>
            <p className="text-xl text-gray-500">Resolvemos tus dudas sobre IA en odontología</p>
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
            <p className="text-sm text-gray-400">Inteligencia Artificial para Clínicas Dentales</p>
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
