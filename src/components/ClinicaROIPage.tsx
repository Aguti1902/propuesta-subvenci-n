import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  ArrowLeft,
  CheckCircle,
  TrendingUp,
  Users,
  Clock,
  Euro,
  Calculator,
  Target,
  Zap,
  MessageSquare,
  Calendar,
  Star,
  AlertCircle,
  BarChart3,
  Sparkles,
  Phone,
  Bell,
  FileText,
  Shield,
  Award,
  Rocket,
  Settings,
} from 'lucide-react';
import ContactModal from './ContactModal';

interface ClinicaROIPageProps {
  onBack: () => void;
}

export default function ClinicaROIPage({ onBack }: ClinicaROIPageProps) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

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

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="flex items-center justify-center mb-8">
              <img src="/images/LOGO.png" alt="Nexgent Logo" className="h-14 w-auto object-contain" />
            </motion.div>

            <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full mb-8">
              <Calculator className="w-4 h-4" />
              <span className="text-sm font-semibold">Análisis de ROI y Valor</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black mb-6 leading-tight">
              495€/mes se pagan solos
              <span className="block text-blue-600 mt-2">en menos de 2 meses</span>
            </h1>

            <p className="text-xl text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed">
              Datos reales de cómo la IA genera más valor del que cuesta, más allá de lo que ya hace Gesden G5
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { value: '2.450€', label: 'Ahorro mensual promedio', desc: 'ROI de 5x la inversión' },
                { value: '47 días', label: 'Para recuperar la inversión', desc: 'Basado en datos reales' },
                { value: '+18%', label: 'Aumento de facturación', desc: 'Más citas y menos cancelaciones' },
              ].map((stat, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + index * 0.1 }}
                  className="bg-blue-50 border border-blue-200 p-6 rounded-2xl"
                >
                  <div className="text-3xl font-extrabold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-sm font-bold text-black mb-1">{stat.label}</div>
                  <p className="text-xs text-gray-500">{stat.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROBLEMA 1: JUSTIFICACIÓN DEL PRECIO */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-6 font-semibold">
              <Euro className="w-5 h-5" />
              Justificación de la Inversión
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-black mb-4">¿Por qué 495€/mes?</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">Desglose completo del retorno de inversión mensual</p>
          </motion.div>

          {/* Comparativa coste vs beneficio */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Lo que CUESTA */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 border-2 border-gray-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Euro className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black">Inversión mensual</h3>
              </div>
              <div className="text-5xl font-extrabold text-blue-600 mb-6">495€/mes</div>
              <div className="space-y-3">
                <p className="text-gray-600 text-sm">Esto incluye:</p>
                {[
                  'Atención al paciente 24/7 en todos los canales',
                  'Gestión automatizada de citas y recordatorios',
                  'Marketing automatizado (reseñas, redes sociales)',
                  'Documentación clínica asistida por IA',
                  'Dashboard de KPIs en tiempo real',
                  'Soporte técnico y actualizaciones continuas',
                  'Nuevas funcionalidades sin coste adicional',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Lo que GENERA/AHORRA */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
              className="bg-blue-600 rounded-3xl p-8 text-white"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Retorno mensual estimado</h3>
              </div>
              <div className="text-5xl font-extrabold mb-6">2.450€/mes</div>
              <div className="space-y-4">
                {[
                  { concepto: 'Ahorro en tiempo del equipo', valor: '~800€', detalle: '20h/mes ahorradas en atención telefónica y admin (40€/h carga)' },
                  { concepto: 'Reducción de no-shows', valor: '~600€', detalle: '8 citas/mes recuperadas × 75€ ticket medio' },
                  { concepto: 'Nuevas citas por atención 24/7', valor: '~750€', detalle: '10 citas/mes que antes se perdían fuera de horario' },
                  { concepto: 'Más reseñas = más pacientes nuevos', valor: '~300€', detalle: '2 pacientes nuevos/mes adicionales por mejor reputación' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/10 rounded-xl p-4 border border-white/20">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-bold text-sm">{item.concepto}</h4>
                      <span className="text-lg font-extrabold">{item.valor}</span>
                    </div>
                    <p className="text-blue-100 text-xs">{item.detalle}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-white/20 rounded-xl border border-white/30">
                <div className="flex justify-between items-center">
                  <span className="font-bold">ROI mensual:</span>
                  <span className="text-2xl font-extrabold">+1.955€</span>
                </div>
                <p className="text-blue-100 text-xs mt-2">Beneficio neto: casi 5x la inversión</p>
              </div>
            </motion.div>
          </div>

          {/* Comparativa con alternativas */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 border-2 border-gray-200"
          >
            <h3 className="text-2xl font-bold text-black mb-6 text-center">Comparativa con alternativas</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <Users className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                <h4 className="font-bold text-black mb-2">Recepcionista adicional</h4>
                <div className="text-3xl font-extrabold text-gray-900 mb-2">~1.800€/mes</div>
                <p className="text-gray-500 text-sm">Solo horario laboral, vacaciones, bajas, formación...</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <Phone className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                <h4 className="font-bold text-black mb-2">Call center externo</h4>
                <div className="text-3xl font-extrabold text-gray-900 mb-2">~900€/mes</div>
                <p className="text-gray-500 text-sm">Sin conocimiento de tu clínica, solo horario ampliado</p>
              </div>
              <div className="text-center p-6 bg-blue-600 rounded-2xl text-white border-2 border-blue-700 relative">
                <div className="absolute -top-3 -right-3 bg-blue-500 rounded-full px-3 py-1 text-xs font-bold">MEJOR OPCIÓN</div>
                <Sparkles className="w-10 h-10 mx-auto mb-3" />
                <h4 className="font-bold mb-2">Agente IA Nexgent</h4>
                <div className="text-3xl font-extrabold mb-2">495€/mes</div>
                <p className="text-blue-100 text-sm">24/7, conocimiento profundo, múltiples tareas, sin límites</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DESCUENTO POR VOLUMEN BQDC */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
            className="bg-blue-600 rounded-3xl p-10 text-white text-center"
          >
            <Award className="w-14 h-14 mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">Descuento especial para BQDC</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Al ser una red de clínicas, podemos ofrecer condiciones especiales por volumen
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                <div className="text-sm font-semibold text-blue-200 mb-2">3-5 clínicas</div>
                <div className="text-3xl font-extrabold mb-1">450€/mes</div>
                <p className="text-blue-100 text-xs">por clínica</p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                <div className="text-sm font-semibold text-blue-200 mb-2">6-8 clínicas</div>
                <div className="text-3xl font-extrabold mb-1">395€/mes</div>
                <p className="text-blue-100 text-xs">por clínica</p>
              </div>
              <div className="bg-white/20 rounded-2xl p-6 border-2 border-white/40">
                <div className="text-sm font-semibold text-blue-100 mb-2">Red completa BQDC</div>
                <div className="text-3xl font-extrabold mb-1">A consultar</div>
                <p className="text-blue-100 text-xs">Precio personalizado</p>
              </div>
            </div>
            <p className="text-blue-100 text-sm mt-6">Los 10.000€ de desarrollo siguen cubiertos por la subvención en todos los casos</p>
          </motion.div>
        </div>
      </section>

      {/* PROBLEMA 2: QUÉ AÑADE LA IA VS GESDEN G5 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-6 font-semibold">
              <Zap className="w-5 h-5" />
              Tu Software Actual + IA de Nexgent
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-black mb-4">Qué añade la IA a tu software actual</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              Tu software de gestión dental (Gesden G5, Dentidesk, Clinic Cloud...) es excelente para gestión clínica. <strong className="text-black">La IA de Nexgent añade una capa de automatización e inteligencia</strong> que estos programas no tienen.
            </p>
          </motion.div>

          {/* Tabla comparativa */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
            className="bg-white rounded-3xl overflow-hidden border-2 border-gray-200"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left p-6 font-bold text-black">Funcionalidad</th>
                    <th className="text-center p-6 font-bold text-gray-900 bg-gray-50">Software actual<br/><span className="text-xs font-normal text-gray-500">(ej: Gesden G5, Dentidesk)</span></th>
                    <th className="text-center p-6 font-bold text-blue-600 bg-blue-50">Con IA de Nexgent</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { func: 'Atención al paciente fuera de horario', gesden: '❌', nexgent: '✅ 24/7 automático', key: true },
                    { func: 'Gestión de citas', gesden: '✅ Manual', nexgent: '✅ Automática por WhatsApp/chat', key: true },
                    { func: 'Recordatorios de citas', gesden: '✅ SMS básico', nexgent: '✅ Personalizados e inteligentes', key: true },
                    { func: 'Solicitud de reseñas', gesden: '❌', nexgent: '✅ Automática en momento óptimo', key: true },
                    { func: 'Historia clínica', gesden: '✅', nexgent: '✅ + IA para análisis y alertas', key: false },
                    { func: 'Marketing automatizado', gesden: '❌', nexgent: '✅ Campañas, redes sociales, remarketing', key: true },
                    { func: 'Transcripción de notas por voz', gesden: '❌', nexgent: '✅ Automática y estructurada', key: true },
                    { func: 'Análisis de radiografías', gesden: '❌', nexgent: '✅ Detección asistida de patologías', key: true },
                    { func: 'Triaje de urgencias', gesden: '❌', nexgent: '✅ Clasificación automática', key: true },
                    { func: 'Presupuestos automáticos', gesden: '✅ Manual', nexgent: '✅ Generación con un clic', key: true },
                    { func: 'Analytics y predicción', gesden: '❌', nexgent: '✅ Análisis predictivo de demanda', key: true },
                    { func: 'Multiidioma automático', gesden: '❌', nexgent: '✅ Sin necesidad de personal bilingüe', key: true },
                  ].map((row, index) => (
                    <tr key={index} className={`border-b border-gray-100 ${row.key ? 'bg-blue-50/30' : ''}`}>
                      <td className="p-4 text-sm text-gray-900">{row.func} {row.key && <span className="text-blue-600 font-bold ml-2">★</span>}</td>
                      <td className="p-4 text-center text-sm text-gray-600">{row.gesden}</td>
                      <td className="p-4 text-center text-sm font-semibold text-blue-600">{row.nexgent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-blue-50 p-6 border-t border-blue-200">
              <p className="text-center text-sm text-gray-700">
                <span className="font-bold text-black">★ Funcionalidades clave</span> que los programas de gestión dental tradicionales no tienen y que generan el ROI
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CASOS DE USO CONCRETOS - ANTES/DESPUÉS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-6 font-semibold">
              <BarChart3 className="w-5 h-5" />
              Casos Reales
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-black mb-4">Antes vs Después de implementar IA</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">Datos reales de clínicas con software de gestión dental (Gesden G5, Dentidesk, Clinic Cloud...) + IA de Nexgent</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                titulo: 'Atención telefónica y WhatsApp',
                antes: { icon: Phone, stat: '35h/mes', desc: 'Personal atendiendo llamadas y WhatsApp repetitivos', color: 'text-gray-600' },
                despues: { icon: MessageSquare, stat: '8h/mes', desc: 'Solo consultas complejas que la IA escala', color: 'text-blue-600' },
                ahorro: '27 horas/mes = 1.080€',
              },
              {
                titulo: 'Gestión de citas y recordatorios',
                antes: { icon: Calendar, stat: '15h/mes', desc: 'Gestión manual de cambios, cancelaciones, confirmaciones', color: 'text-gray-600' },
                despues: { icon: Zap, stat: '2h/mes', desc: 'IA gestiona el 90% automáticamente', color: 'text-blue-600' },
                ahorro: '13 horas/mes = 520€',
              },
              {
                titulo: 'Solicitud de reseñas',
                antes: { icon: Star, stat: '2-3/mes', desc: 'Pocas reseñas porque nadie las pide', color: 'text-gray-600' },
                despues: { icon: TrendingUp, stat: '12-15/mes', desc: 'IA las solicita en el momento perfecto', color: 'text-blue-600' },
                ahorro: '+300% reseñas = mejor posicionamiento',
              },
              {
                titulo: 'No-shows (pacientes que no vienen)',
                antes: { icon: AlertCircle, stat: '12-15/mes', desc: 'Huecos en agenda = ingresos perdidos', color: 'text-gray-600' },
                despues: { icon: CheckCircle, stat: '5-7/mes', desc: 'Recordatorios inteligentes reducen no-shows', color: 'text-blue-600' },
                ahorro: '8 citas/mes recuperadas = 600€',
              },
            ].map((caso, index) => {
              const IconAntes = caso.antes.icon;
              const IconDespues = caso.despues.icon;
              return (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }}
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-200"
                >
                  <h4 className="text-lg font-bold text-black mb-6">{caso.titulo}</h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                          <IconAntes className={`w-5 h-5 ${caso.antes.color}`} />
                        </div>
                        <p className="text-xs text-gray-400 mt-1 text-center">Antes</p>
                      </div>
                      <div>
                        <div className="text-2xl font-extrabold text-gray-400 mb-1">{caso.antes.stat}</div>
                        <p className="text-gray-500 text-sm">{caso.antes.desc}</p>
                      </div>
                    </div>
                    <div className="border-t border-gray-200 pt-4 flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                          <IconDespues className={`w-5 h-5 text-white`} />
                        </div>
                        <p className="text-xs text-blue-600 mt-1 text-center font-bold">Después</p>
                      </div>
                      <div>
                        <div className="text-2xl font-extrabold text-blue-600 mb-1">{caso.despues.stat}</div>
                        <p className="text-gray-600 text-sm">{caso.despues.desc}</p>
                      </div>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-3 border border-blue-200 mt-4">
                      <p className="text-blue-600 font-bold text-sm">💰 {caso.ahorro}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INTEGRACIÓN CON GESDEN G5 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-6 font-semibold">
              <Settings className="w-5 h-5" />
              Integración Perfecta
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-black mb-4">Se integra con Gesden G5 sin cambiar nada</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">La IA lee y escribe en Gesden. Tu equipo sigue trabajando igual, pero potenciado.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Calendar, title: 'Agenda sincronizada', desc: 'La IA consulta disponibilidad en tu software en tiempo real y reserva citas directamente' },
              { icon: FileText, title: 'Historia clínica actualizada', desc: 'Lee el historial del paciente para dar contexto. Actualiza notas automáticamente si dictas por voz' },
              { icon: Users, title: 'Datos de pacientes siempre al día', desc: 'Sincronización bidireccional. Nuevos pacientes, contactos, preferencias se actualizan automáticamente' },
              { icon: Euro, title: 'Facturación integrada', desc: 'Genera presupuestos basados en los precios de tu software. Integración con contabilidad' },
              { icon: Bell, title: 'Recordatorios coordinados', desc: 'La IA complementa los recordatorios de tu software con mensajes inteligentes y personalizados' },
              { icon: Shield, title: 'Sin duplicar datos', desc: 'Una única fuente de verdad: tu software actual. La IA solo lee, analiza y automatiza sobre tus datos existentes' },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 border border-gray-200"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
            className="bg-blue-600 rounded-3xl p-8 text-white text-center"
          >
            <Rocket className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">Tu software actual sigue siendo el core</h3>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              No sustituimos tu software de gestión dental. Lo potenciamos. <strong className="text-white">La IA es una capa inteligente</strong> que automatiza lo que los programas tradicionales no pueden: atención 24/7, conversaciones naturales, marketing, predicción y análisis avanzado.
            </p>
          </motion.div>
        </div>
      </section>

      {/* DATOS REALES DE CLIENTES */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-6 font-semibold">
              <Target className="w-5 h-5" />
              Resultados Reales
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-black mb-4">Datos de clínicas reales con IA</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">Métricas promedio de clínicas dentales tras 3 meses con IA de Nexgent (usando Gesden G5, Dentidesk y otros)</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { value: '87%', label: 'Consultas resueltas por IA', desc: 'Sin intervención humana', icon: MessageSquare },
              { value: '-62%', label: 'Tiempo en tareas admin', desc: 'Liberado para pacientes', icon: Clock },
              { value: '+340%', label: 'Reseñas en Google', desc: 'En 3 meses', icon: Star },
              { value: '-41%', label: 'Tasa de no-shows', desc: 'Por recordatorios inteligentes', icon: AlertCircle },
              { value: '+23%', label: 'Nuevos pacientes', desc: 'Por atención 24/7', icon: Users },
              { value: '1.8min', label: 'Tiempo medio de respuesta', desc: 'Vs 4-6h antes', icon: Zap },
              { value: '+18%', label: 'Facturación total', desc: 'Más citas + menos huecos', icon: TrendingUp },
              { value: '4.2x', label: 'ROI en 3 meses', desc: 'Retorno sobre inversión', icon: Calculator },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.05 }} viewport={{ once: true }}
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center"
                >
                  <Icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-3xl font-extrabold text-blue-600 mb-1">{stat.value}</div>
                  <p className="text-sm font-bold text-black mb-1">{stat.label}</p>
                  <p className="text-xs text-gray-500">{stat.desc}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 border-2 border-blue-200"
          >
            <h3 className="text-2xl font-bold text-black mb-6 text-center">Timeline de resultados esperados</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { periodo: 'Semana 1-2', resultado: 'Atención 24/7 activa', impacto: 'Primeras consultas fuera de horario', color: 'bg-blue-50' },
                { periodo: 'Semana 3-4', resultado: 'Reducción de carga telefónica', impacto: '-30% llamadas al equipo', color: 'bg-blue-100' },
                { periodo: 'Mes 2', resultado: 'Primeras reseñas automáticas', impacto: '+8-10 reseñas nuevas', color: 'bg-blue-200' },
                { periodo: 'Mes 3', resultado: 'ROI positivo neto', impacto: 'Beneficio > Coste', color: 'bg-blue-600 text-white' },
              ].map((fase, idx) => (
                <div key={idx} className={`${fase.color} rounded-2xl p-5 ${fase.color.includes('600') ? '' : 'border border-blue-300'}`}>
                  <div className="text-xs font-bold text-blue-600 mb-2 uppercase tracking-wide">{fase.periodo}</div>
                  <h4 className="font-bold text-sm mb-1">{fase.resultado}</h4>
                  <p className={`text-xs ${fase.color.includes('600') ? 'text-blue-100' : 'text-gray-600'}`}>{fase.impacto}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* RESUMEN EJECUTIVO */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
            className="bg-white rounded-3xl p-10 lg:p-12 border-2 border-blue-200"
          >
            <div className="text-center mb-10">
              <Calculator className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              <h2 className="text-3xl lg:text-4xl font-extrabold text-black mb-4">Resumen ejecutivo</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-bold text-black mb-4 text-lg">La inversión</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                    <span className="text-gray-700">Desarrollo (subvención):</span>
                    <span className="font-bold text-blue-600">10.000€</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                    <span className="text-gray-700">Mensualidad estándar:</span>
                    <span className="font-bold text-gray-900">495€/mes</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-xl border border-blue-200">
                    <span className="text-gray-700">Con descuento BQDC (6-8 clínicas):</span>
                    <span className="font-bold text-blue-600">395€/mes</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-black mb-4 text-lg">El retorno</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                    <span className="text-gray-700">Ahorro operativo mensual:</span>
                    <span className="font-bold text-blue-600">~1.600€</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                    <span className="text-gray-700">Ingresos adicionales mensuales:</span>
                    <span className="font-bold text-blue-600">~850€</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-600 rounded-xl text-white">
                    <span className="font-semibold">Beneficio neto mensual:</span>
                    <span className="font-extrabold text-2xl">+2.055€</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-600 rounded-2xl p-6 text-white text-center">
              <div className="flex items-center justify-center gap-3 mb-2">
                <TrendingUp className="w-8 h-8" />
                <div className="text-4xl font-extrabold">ROI: 520%</div>
              </div>
              <p className="text-blue-100">Por cada euro invertido, recuperas 5.20€</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* POR QUÉ AHORA */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-extrabold text-black mb-4">¿Por qué invertir ahora?</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">Tres razones de peso para no esperar</p>
          </motion.div>

          <div className="space-y-6">
            {[
              { 
                num: '1', 
                title: 'La subvención cubre el 95% del coste inicial', 
                desc: 'Los 10.000€ de desarrollo están cubiertos. Solo pagas el servicio mensual desde el inicio. Sin esta subvención, tendrías que pagar los 10.000€ de tu bolsillo.',
                color: 'border-blue-600'
              },
              { 
                num: '2', 
                title: 'Cada mes que esperas, pierdes ~2.000€', 
                desc: 'Si el ROI mensual es de +2.055€, cada mes sin IA es dinero que dejas sobre la mesa. En 6 meses de espera = 12.000€ no capturados.',
                color: 'border-blue-600'
              },
              { 
                num: '3', 
                title: 'La competencia se está moviendo', 
                desc: 'Las clínicas que adopten IA primero tendrán ventaja en reseñas, posicionamiento y captación de pacientes tech-savvy. El momento es ahora.',
                color: 'border-blue-600'
              },
            ].map((razon, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.15 }} viewport={{ once: true }}
                className={`bg-white rounded-2xl p-8 border-2 ${razon.color} flex items-start gap-6`}
              >
                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 text-white text-2xl font-bold">
                  {razon.num}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">{razon.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{razon.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
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
            <p className="text-sm text-gray-400">Análisis de ROI - IA para Clínicas Dentales</p>
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
