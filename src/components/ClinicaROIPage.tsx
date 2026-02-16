import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  ArrowLeft,
  CheckCircle,
  TrendingUp,
  Users,
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
  Rocket,
  Brain,
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
              299€/mes generan
              <span className="block text-blue-600 mt-2">+4.196€ de beneficio mensual</span>
            </h1>

            <p className="text-xl text-gray-500 mb-8 max-w-3xl mx-auto leading-relaxed">
              Análisis detallado de cómo la IA genera 14 veces más valor del que cuesta
            </p>

            <div className="inline-flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-full mb-12 border-2 border-blue-700">
              <Sparkles className="w-6 h-6" />
              <span className="font-bold text-lg">REGALO: 2 primeros meses gratis para testear</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { value: '4.495€', label: 'Beneficio mensual estimado', desc: 'Ingresos + ahorros' },
                { value: '2 días', label: 'Para recuperar el coste mensual', desc: 'Beneficio neto vs 299€' },
                { value: '+12%', label: 'Aumento de facturación estimado', desc: 'Más citas y mejor ocupación' },
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
            <h2 className="text-4xl lg:text-5xl font-extrabold text-black mb-4">¿Por qué 299€/mes?</h2>
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
              <div className="mb-3">
                <span className="text-3xl font-extrabold text-gray-400 line-through">495€/mes</span>
              </div>
              <div className="text-5xl font-extrabold text-blue-600 mb-6">299€/mes</div>
              <p className="text-blue-600 font-semibold text-sm mb-6">Con descuento BQDC (40% off para red completa)</p>
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
              <div className="text-5xl font-extrabold mb-6">4.495€/mes</div>
              <div className="space-y-4">
                {[
                  { concepto: 'Ahorro en documentación clínica', valor: '~320€', detalle: '8h/mes ahorradas en notas, presupuestos y consentimientos (40€/h)' },
                  { concepto: 'Ahorro en atención telefónica/chat', valor: '~400€', detalle: '10h/mes ahorradas en consultas repetitivas (40€/h)' },
                  { concepto: 'Reducción de no-shows', valor: '~375€', detalle: '5 citas/mes recuperadas × 75€ ticket medio' },
                  { concepto: 'Nuevas citas por atención 24/7', valor: '~250€', detalle: '3-4 citas/mes que antes se perdían fuera de horario' },
                  { concepto: 'Optimización de agenda con IA', valor: '~150€', detalle: 'Mejor llenado de huecos y reagendamiento eficiente' },
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
                  <span className="font-bold">ROI mensual estimado:</span>
                  <span className="text-2xl font-extrabold">+1.175€</span>
                </div>
                <p className="text-blue-100 text-xs mt-2">Beneficio neto: 3.5x la inversión (atención + clínica + operaciones)</p>
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
                <div className="text-3xl font-extrabold mb-2">299€/mes</div>
                <p className="text-blue-100 text-sm">24/7, conocimiento profundo, múltiples tareas, sin límites</p>
              </div>
            </div>
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
                    { func: 'Clasificación de consultas', gesden: '❌', nexgent: '✅ Clasificación automática por tipo', key: true },
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
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">Escenarios estimados basados en implementaciones similares en otros sectores</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                titulo: 'Documentación clínica (notas, presupuestos)',
                antes: { icon: FileText, stat: '18h/mes', desc: 'Escribir notas clínicas, generar presupuestos manualmente', color: 'text-gray-600' },
                despues: { icon: Zap, stat: '5h/mes', desc: 'Transcripción por voz + presupuestos automáticos', color: 'text-blue-600' },
                ahorro: '13 horas/mes = 650€',
              },
              {
                titulo: 'Atención telefónica y consultas',
                antes: { icon: Phone, stat: '25h/mes', desc: 'Personal atendiendo consultas repetitivas', color: 'text-gray-600' },
                despues: { icon: MessageSquare, stat: '8h/mes', desc: 'IA resuelve 85% de consultas automáticamente', color: 'text-blue-600' },
                ahorro: '17 horas/mes = 680€',
              },
              {
                titulo: 'Gestión de citas y agenda',
                antes: { icon: Calendar, stat: '12h/mes', desc: 'Reservas, cambios, confirmaciones manuales', color: 'text-gray-600' },
                despues: { icon: CheckCircle, stat: '3h/mes', desc: 'IA gestiona 90% + optimiza huecos', color: 'text-blue-600' },
                ahorro: '9 horas/mes + mejor ocupación',
              },
              {
                titulo: 'Análisis de radiografías y soporte diagnóstico',
                antes: { icon: AlertCircle, stat: 'Manual', desc: 'Análisis 100% manual, sin segunda opinión', color: 'text-gray-600' },
                despues: { icon: Brain, stat: 'Asistido', desc: 'IA sugiere hallazgos, reduce errores diagnósticos', color: 'text-blue-600' },
                ahorro: 'Mayor precisión + confianza',
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
              <Zap className="w-5 h-5" />
              Integración Perfecta
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-black mb-4">Se integra con tu software actual sin cambiar nada</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">La IA se conecta a tu software de gestión (Gesden G5, Dentidesk, Clinic Cloud...). Tu equipo sigue trabajando igual, pero potenciado.</p>
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
            <h2 className="text-4xl lg:text-5xl font-extrabold text-black mb-4">Resultados esperados con IA</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">Métricas promedio de empresas similares tras 3 meses con IA de Nexgent</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { value: '~80%', label: 'Consultas automáticas', desc: 'Sin intervención humana', icon: MessageSquare },
              { value: '-50%', label: 'Tiempo en documentación', desc: 'Transcripción por voz, presupuestos auto', icon: FileText },
              { value: '~35%', label: 'Reducción de no-shows', desc: 'Recordatorios inteligentes', icon: AlertCircle },
              { value: '+200%', label: 'Mejora en reseñas', desc: 'Solicitud automática', icon: Star },
              { value: '+15%', label: 'Más ocupación agenda', desc: 'Optimización IA + atención 24/7', icon: Calendar },
              { value: '<2min', label: 'Tiempo de respuesta', desc: 'Vs varias horas antes', icon: Zap },
              { value: '~40%', label: 'Reducción errores admin', desc: 'Automatización de procesos', icon: Shield },
              { value: '13x', label: 'ROI estimado', desc: 'Retorno sobre inversión mensual', icon: Calculator },
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
                  <span className="text-gray-700">Mensualidad (precio estándar):</span>
                  <span className="font-bold text-gray-400 line-through">495€/mes</span>
                </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-xl border border-blue-200">
                    <span className="text-gray-700">Con descuento BQDC (red completa):</span>
                    <span className="font-bold text-blue-600">299€/mes</span>
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
                  <span className="font-extrabold text-2xl">+4.196€</span>
                </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-blue-600 rounded-2xl p-6 text-white text-center">
              <div className="flex items-center justify-center gap-3 mb-2">
                <TrendingUp className="w-8 h-8" />
                <div className="text-4xl font-extrabold">ROI: 1.400%</div>
              </div>
              <p className="text-blue-100">Por cada euro invertido, recuperas 14€</p>
              </div>
              
              <div className="bg-blue-50 rounded-2xl p-6 border-2 border-blue-300 text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <Sparkles className="w-8 h-8 text-blue-600" />
                  <div className="text-2xl font-extrabold text-black">2 MESES GRATIS</div>
                </div>
                <p className="text-gray-700">Regalamos los primeros 2 meses de servicio para que puedas testearlo sin coste, hacer ajustes y validar resultados antes de empezar a pagar.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* RECUPERACIÓN DE PACIENTES INACTIVOS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-6 font-semibold">
              <Users className="w-5 h-5" />
              Recuperación de Pacientes
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-black mb-4">El ingreso invisible que estás perdiendo</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              Pacientes que deberían volver cada 6-12 meses pero no lo hacen porque nadie les contacta
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* El problema */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
              className="bg-gray-50 rounded-3xl p-8 border-2 border-gray-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gray-400 rounded-xl flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black">Sin seguimiento automático</h3>
              </div>
              <div className="space-y-4 mb-6">
                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <div className="text-3xl font-extrabold text-gray-900 mb-2">~35%</div>
                  <p className="text-gray-600 text-sm">de pacientes NO vuelven a revisión si nadie les contacta</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <div className="text-3xl font-extrabold text-gray-900 mb-2">~40-50</div>
                  <p className="text-gray-600 text-sm">pacientes inactivos por clínica cada mes</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <div className="text-3xl font-extrabold text-gray-900 mb-2">150-300€</div>
                  <p className="text-gray-600 text-sm">ticket medio por paciente que vuelve</p>
                </div>
              </div>
              <div className="bg-red-50 rounded-xl p-4 border border-red-200">
                <p className="text-red-700 font-bold text-lg text-center">
                  Pérdida estimada: ~1.500-2.000€/mes
                </p>
              </div>
            </motion.div>

            {/* La solución con IA */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
              className="bg-blue-600 rounded-3xl p-8 text-white"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Con IA de Nexgent</h3>
              </div>
              <div className="space-y-4 mb-6">
                <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                  <h4 className="font-bold mb-2">Recordatorios automáticos inteligentes</h4>
                  <p className="text-blue-100 text-sm">A los 5 meses: "Hola María, ya es momento de tu revisión. ¿Te va bien el martes a las 11h?"</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                  <h4 className="font-bold mb-2">Segmentación por tipo de paciente</h4>
                  <p className="text-blue-100 text-sm">Ortodoncia: contacto cada 4-6 semanas. Implantes: seguimiento cada 6 meses. Personalizado por tratamiento.</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                  <h4 className="font-bold mb-2">Detección de pacientes en riesgo</h4>
                  <p className="text-blue-100 text-sm">IA identifica automáticamente quién no ha vuelto en 6+ meses y les contacta proactivamente.</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                  <h4 className="font-bold mb-2">Ofertas personalizadas</h4>
                  <p className="text-blue-100 text-sm">Si detecta resistencia, ofrece descuento en limpieza o promoción de blanqueamiento para traerles de vuelta.</p>
                </div>
              </div>
              <div className="bg-white/20 rounded-xl p-4 border border-white/30">
                <div className="text-3xl font-extrabold mb-2">~40%</div>
<p className="text-blue-100">de pacientes inactivos recuperados con seguimiento automático</p>
              </div>
            </motion.div>
          </div>

          {/* Cálculo del impacto */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 border-2 border-blue-200"
          >
            <h3 className="text-2xl font-bold text-black mb-6 text-center">Impacto económico de recuperar pacientes inactivos</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-sm text-gray-500 mb-2">Pacientes inactivos/mes</div>
                <div className="text-3xl font-extrabold text-gray-900">~45</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-2">Tasa de recuperación con IA</div>
                <div className="text-3xl font-extrabold text-blue-600">~40%</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-2">Pacientes recuperados/mes</div>
                <div className="text-3xl font-extrabold text-blue-600">~18</div>
              </div>
              <div className="bg-blue-600 text-white rounded-2xl p-4">
                <div className="text-sm text-blue-100 mb-2">Ingresos recuperados</div>
                <div className="text-3xl font-extrabold">~2.700€</div>
                <p className="text-xs text-blue-200 mt-1">18 × 150€ ticket medio</p>
              </div>
            </div>
            <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-200 text-center">
              <p className="text-gray-700 text-lg">
                <strong className="text-blue-600">Solo con recuperación de pacientes inactivos</strong>, la IA genera casi <strong className="text-black">9x su coste mensual</strong> (2.700€ vs 299€)
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ANÁLISIS DE COSTE DE OPORTUNIDAD */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-6 font-semibold">
              <AlertCircle className="w-5 h-5" />
              Coste de NO tener IA
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-black mb-4">Lo que estás perdiendo cada mes sin IA</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">Estos son ingresos y eficiencias que se pierden ahora mismo</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { titulo: 'Consultas fuera de horario', valor: '~15-20/mes', perdida: '~450€/mes', desc: 'Pacientes potenciales que llaman por la tarde/noche y no obtienen respuesta. Se van a la competencia.' },
              { titulo: 'Tiempo en tareas repetitivas', valor: '~30h/mes', perdida: '~1.200€/mes', desc: 'Tu equipo gasta tiempo en consultas básicas, presupuestos manuales, confirmaciones que la IA haría.' },
              { titulo: 'No-shows no recuperados', valor: '~12/mes', perdida: '~900€/mes', desc: 'Huecos en agenda que se podrían llenar si tuvieras recordatorios inteligentes y reagendamiento automático.' },
              { titulo: 'Pacientes que NO dejan reseña', valor: '~20/mes', perdida: 'Posicionamiento', desc: 'Pacientes satisfechos que nunca dejan reseña porque nadie se lo pide. Pierdes visibilidad en Google.' },
              { titulo: 'Errores en documentación', valor: '~5-8/mes', perdida: 'Riesgo legal', desc: 'Presupuestos con errores, consentimientos incompletos, notas mal estructuradas. La IA lo estandariza.' },
              { titulo: 'Pacientes inactivos sin contactar', valor: '~25/mes', perdida: '~600€/mes', desc: 'Pacientes que necesitan revisión pero nadie les hace seguimiento. Ingresos recurrentes perdidos.' },
            ].map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-200"
              >
                <h4 className="text-lg font-bold text-black mb-3">{item.titulo}</h4>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-2xl font-extrabold text-blue-600">{item.valor}</span>
                  <span className="text-sm text-gray-500">→ {item.perdida}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} viewport={{ once: true }}
            className="mt-12 bg-blue-600 rounded-3xl p-8 text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-3">Coste de oportunidad total</h3>
            <div className="text-5xl font-extrabold mb-2">~3.150€/mes</div>
            <p className="text-blue-100 text-lg">Esto es lo que pierdes cada mes sin IA. La inversión de 299€/mes (con descuento BQDC) recupera gran parte de esto.</p>
          </motion.div>
        </div>
      </section>

      {/* DESGLOSE DETALLADO POR ÁREA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-black mb-4">Desglose detallado del valor por área</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">Cómo la IA genera valor específico en cada departamento de tu clínica</p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                area: 'Recepción y Atención al Paciente',
                icon: MessageSquare,
                ahorroTiempo: '17h/mes',
                ahorroEuros: '680€',
                tareas: [
                  'Responder consultas básicas por WhatsApp/teléfono (horarios, precios, ubicación)',
                  'Gestionar reservas, cambios y cancelaciones de citas',
                  'Enviar confirmaciones y recordatorios personalizados',
                  'Atender consultas fuera de horario (tardes, fines de semana)',
                  'Triaje inicial de urgencias y derivación apropiada',
                ],
              },
              {
                area: 'Clínica y Diagnóstico',
                icon: Brain,
                ahorroTiempo: '8h/mes',
                ahorroEuros: '~400€',
                tareas: [
                  'Pre-análisis de radiografías para detección de hallazgos',
                  'Sugerencias de planes de tratamiento basados en evidencia',
                  'Alertas de interacciones medicamentosas y contraindicaciones',
                  'Acceso rápido a protocolos y guías clínicas actualizadas',
                  'Segunda opinión automática en casos complejos',
                ],
              },
              {
                area: 'Documentación y Administración',
                icon: FileText,
                ahorroTiempo: '13h/mes',
                ahorroEuros: '650€',
                tareas: [
                  'Transcripción automática de notas clínicas por voz',
                  'Generación de presupuestos detallados en segundos',
                  'Creación de consentimientos informados personalizados',
                  'Automatización de facturación y recordatorios de cobro',
                  'Informes de gestión y KPIs actualizados en tiempo real',
                ],
              },
              {
                area: 'Marketing y Crecimiento',
                icon: TrendingUp,
                ahorroTiempo: '10h/mes',
                ahorroEuros: '~720€',
                tareas: [
                  'Solicitud automática de reseñas en el momento perfecto',
                  'Generación de contenido para redes sociales',
                  'Campañas de remarketing a pacientes inactivos',
                  'Segmentación inteligente para ofertas personalizadas',
                  'Análisis de competencia y tendencias del mercado',
                ],
              },
            ].map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.15 }} viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 border-2 border-gray-200"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-black">{area.area}</h3>
                        <p className="text-sm text-gray-500">Ahorro estimado: {area.ahorroTiempo} → {area.ahorroEuros}/mes</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {area.tareas.map((tarea, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{tarea}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} viewport={{ once: true }}
            className="mt-12 bg-blue-600 rounded-3xl p-8 text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-3">Total estimado</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div>
                <div className="text-4xl font-extrabold mb-1">~48h/mes</div>
                <p className="text-blue-100">Tiempo ahorrado al equipo</p>
              </div>
              <div>
                <div className="text-4xl font-extrabold mb-1">~4.495€/mes</div>
                <p className="text-blue-100">Valor generado estimado</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CASOS DE USO ESPECÍFICOS DEL DÍA A DÍA */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-6 font-semibold">
              <Sparkles className="w-5 h-5" />
              Ejemplos Concretos
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-black mb-4">Un día típico con IA</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">Escenarios reales de cómo funciona la IA en el día a día de tu clínica</p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                hora: '20:30 (Fuera de horario)',
                escenario: 'Paciente quiere información sobre blanqueamiento dental',
                sinIA: 'Envía WhatsApp, nadie responde hasta mañana. Mientras tanto busca en Google, encuentra otra clínica que responde. Cliente perdido.',
                conIA: 'La IA responde al instante, explica opciones (LED, férulas...), precios orientativos, duración. Agenda cita de valoración.',
                valor: 'Cliente captado + tratamiento ~300-400€',
              },
              {
                hora: '10:15 (Durante consulta)',
                escenario: 'Dentista necesita presupuesto para implante',
                sinIA: 'Para la consulta 5min, busca en Gesden los precios, calcula manualmente, genera documento. Paciente espera.',
                conIA: 'Dicta por voz "presupuesto implante molar zona 46". IA genera presupuesto detallado en 30 segundos mientras explica al paciente.',
                valor: 'Ahorro de 4.5min × 15 veces/mes = 1h ahorrada',
              },
              {
                hora: '11:00 (Recepción saturada)',
                escenario: 'Llaman 3 pacientes a la vez para cambiar cita',
                sinIA: 'Recepción atiende uno por uno. Los otros esperan o cuelgan frustrados. Proceso manual en Gesden para cada cambio.',
                conIA: 'Los 3 pueden cambiar cita simultáneamente por WhatsApp. IA consulta disponibilidad en Gesden y reagenda al instante.',
                valor: 'Ahorro 15min por cambio × 40 cambios/mes = 10h',
              },
              {
                hora: '14:30 (Revisión de radiografía)',
                escenario: 'Análisis de panorámica de nuevo paciente',
                sinIA: 'Dentista analiza manualmente. Riesgo de pasar por alto hallazgos sutiles si hay prisa.',
                conIA: 'IA hace pre-análisis, destaca áreas sospechosas, sugiere zonas a revisar. Dentista confirma. Mayor precisión.',
                valor: 'Detección temprana + confianza diagnóstica',
              },
              {
                hora: '19:00 (Fin del día)',
                escenario: 'Paciente terminó tratamiento hace 3 días',
                sinIA: 'Nadie hace seguimiento. Si hay complicación, el paciente se queja o va a otro lado. Reseña negativa potencial.',
                conIA: 'IA envía mensaje automático: "¿Cómo te encuentras? ¿Algún dolor?". Detecta problemas temprano. Paciente se siente cuidado.',
                valor: 'Prevención de reseñas negativas + fidelización',
              },
              {
                hora: 'Domingo 15:00',
                escenario: 'Paciente nuevo quiere información sobre ortodoncia invisible',
                sinIA: 'Nadie disponible. Paciente busca en Google, encuentra otra clínica que sí responde. Cliente perdido para siempre.',
                conIA: 'IA responde al instante, explica opciones, precios orientativos, ventajas. Agenda cita para valoración. Cliente captado.',
                valor: 'Tratamiento de ortodoncia ~3.000€',
              },
            ].map((ejemplo, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">{ejemplo.hora}</div>
                  <h4 className="font-bold text-black">{ejemplo.escenario}</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <p className="text-xs font-bold text-gray-400 uppercase mb-2">Sin IA</p>
                    <p className="text-gray-700 text-sm">{ejemplo.sinIA}</p>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                    <p className="text-xs font-bold text-blue-600 uppercase mb-2">Con IA de Nexgent</p>
                    <p className="text-gray-900 text-sm">{ejemplo.conIA}</p>
                  </div>
                </div>
                <div className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                  💰 Valor: {ejemplo.valor}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ANÁLISIS DE RIESGO Y GARANTÍAS */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-6 font-semibold">
              <Shield className="w-5 h-5" />
              Mitigación de Riesgo
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-black mb-4">¿Qué pasa si no funciona como esperamos?</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">Garantías y compromisos de Nexgent</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              { titulo: '2 MESES GRATIS DE SERVICIO', desc: 'Regalamos los primeros 2 meses del servicio mensual (598€ de valor). Puedes testear, ajustar y validar resultados sin pagar nada. Empiezas a pagar solo cuando estés convencido.', destacado: true },
              { titulo: 'Periodo de ajuste y optimización', desc: 'Durante los primeros meses trabajamos contigo en ajustes continuos. Si no ves resultados tangibles, seguimos optimizando sin coste adicional.' },
              { titulo: 'Compromiso de ROI', desc: 'Si tras 4 meses (2 gratis + 2 pagando) no has recuperado al menos el 50% de la inversión en ahorros medibles, ajustamos o devolvemos.' },
              { titulo: 'Integración garantizada', desc: 'Garantizamos integración perfecta con tu software actual (Gesden G5, etc.). Si hay problemas técnicos, los resolvemos sin coste.' },
              { titulo: 'Soporte ilimitado', desc: 'Acceso directo al equipo técnico sin límite de consultas. Respondemos en menos de 2h en horario laboral.' },
              { titulo: 'Sin permanencia', desc: 'Contrato mensual sin compromiso de permanencia. Si decides cancelar, no hay penalización.' },
              { titulo: 'Formación incluida', desc: 'Formación completa a todo el equipo hasta que se sientan cómodos. Sessions adicionales sin coste si es necesario.' },
            ].map((garantia, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }}
                className={garantia.destacado ? "bg-blue-50 rounded-2xl p-6 border-2 border-blue-600" : "bg-gray-50 rounded-2xl p-6 border border-gray-200"}
              >
                <div className="flex items-start gap-3 mb-3">
                  {garantia.destacado ? (
                    <Sparkles className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  ) : (
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  )}
                  <h4 className={`font-bold text-lg ${garantia.destacado ? 'text-blue-600' : 'text-black'}`}>{garantia.titulo}</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{garantia.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
            className="bg-blue-600 rounded-3xl p-8 text-white text-center"
          >
            <Rocket className="w-14 h-14 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">Nuestro compromiso</h3>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              No cobramos si no generas valor. Estamos tan seguros del impacto que <strong className="text-white">garantizamos resultados medibles en 3 meses</strong> o seguimos trabajando hasta conseguirlos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* COMPARATIVA GRANULAR CON SOFTWARE ACTUAL */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-black mb-4">Lo que tu software NO puede hacer</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">Limitaciones de los software tradicionales que la IA resuelve</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { limitacion: 'No atiende fuera de horario', solucionIA: 'Atención 24/7 automática en WhatsApp, web y teléfono', impacto: '+6-10 citas/mes captadas' },
              { limitacion: 'No hace seguimiento proactivo', solucionIA: 'Seguimiento post-tratamiento, recordatorios de revisión, detección de pacientes inactivos', impacto: '+15-20% recurrencia' },
              { limitacion: 'No pide reseñas', solucionIA: 'Solicitud automática en el momento perfecto, gestión de feedback negativo antes de Google', impacto: '+300% reseñas' },
              { limitacion: 'Transcripción manual de notas', solucionIA: 'Dicta por voz y la IA estructura las notas en formato estándar directamente en el sistema', impacto: '-70% tiempo documentación' },
              { limitacion: 'No analiza imágenes', solucionIA: 'Pre-análisis de radiografías, detección asistida de caries y patologías, alertas automáticas', impacto: 'Mayor precisión diagnóstica' },
              { limitacion: 'No optimiza la agenda', solucionIA: 'IA sugiere reagendamiento óptimo, rellena huecos, predice cancelaciones y busca sustitutos', impacto: '+15-20% ocupación' },
              { limitacion: 'Multiidioma requiere personal', solucionIA: 'Atención automática en 50+ idiomas sin necesidad de personal bilingüe', impacto: 'Acceso a pacientes internacionales' },
              { limitacion: 'No detecta patrones', solucionIA: 'Análisis predictivo: tendencias, pacientes en riesgo de abandono, estacionalidad, oportunidades', impacto: 'Decisiones basadas en datos' },
            ].map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }} viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 border border-gray-200"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">❌</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm mb-1">{item.limitacion}</h4>
                  </div>
                </div>
                <div className="flex items-start gap-3 mb-3 pl-11">
                  <div className="flex-1">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700 text-sm">{item.solucionIA}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-3 mt-3">
                  <p className="text-blue-600 font-semibold text-sm">→ {item.impacto}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUÉ AHORA */}
      <section className="py-20 bg-gray-50">
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
