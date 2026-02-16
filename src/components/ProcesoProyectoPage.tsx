import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  ArrowLeft,
  CheckCircle,
  Euro,
  Calendar,
  Rocket,
  FileCheck,
  Target,
  Settings,
  Zap,
  Award,
  Shield,
  Building2,
  Sparkles,
  ArrowRight,
  Database,
  TrendingUp,
  Clock,
} from 'lucide-react';
import ContactModal from './ContactModal';

interface ProcesoProyectoPageProps {
  onBack: () => void;
}

export default function ProcesoProyectoPage({ onBack }: ProcesoProyectoPageProps) {
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
              <Rocket className="w-4 h-4" />
              <span className="text-sm font-semibold">Proceso y Financiación del Proyecto</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black mb-6 leading-tight">
              Cómo funciona el proyecto
              <span className="block text-blue-600 mt-2">Paso a paso</span>
            </h1>

            <p className="text-xl text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed">
              Desglose completo de financiación, timeline, hitos de pago y proceso de desarrollo
            </p>
          </motion.div>
        </div>
      </section>

      {/* COSTE/OPORTUNIDAD - BENEFICIO ECONÓMICO CLARO */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-6 font-semibold">
              <TrendingUp className="w-5 h-5" />
              Análisis Económico
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-black mb-4">Por qué este proyecto es rentable para tu clínica</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">Análisis claro de coste vs beneficio</p>
          </motion.div>

          {/* Comparativa visual */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* LO QUE INVIERTES */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 border-2 border-gray-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gray-600 rounded-xl flex items-center justify-center">
                  <Euro className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black">Lo que inviertes</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-semibold">Adelanto (antes 7 marzo):</span>
                    <span className="text-2xl font-bold text-gray-900">2.000€</span>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-semibold">Pago final (mes 6):</span>
                    <span className="text-2xl font-bold text-gray-900">8.000€</span>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-xl p-5 border-2 border-gray-300">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-900 font-bold text-lg">Total invertido:</span>
                    <span className="text-3xl font-extrabold text-gray-900">10.000€</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* LO QUE RECIBES */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
              className="bg-blue-600 rounded-3xl p-8 text-white"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Lo que recibes</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100 font-semibold">Subvención (mes 6):</span>
                    <span className="text-2xl font-bold">10.000€</span>
                  </div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100 font-semibold">Agente IA completo:</span>
                    <span className="text-2xl font-bold">Incluido</span>
                  </div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100 font-semibold">2 meses gratis servicio:</span>
                    <span className="text-2xl font-bold">640€</span>
                  </div>
                </div>
                <div className="bg-white/20 rounded-xl p-5 border-2 border-white/40">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">Inversión neta:</span>
                    <span className="text-4xl font-extrabold">0€</span>
                  </div>
                  <p className="text-blue-100 text-xs mt-2 text-center">10.000€ invertidos = 10.000€ recuperados</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Beneficio económico MENSUAL */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
            className="bg-white rounded-3xl p-10 border-2 border-blue-200"
          >
            <h3 className="text-3xl font-bold text-black mb-8 text-center">Beneficio económico mensual estimado</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Ingresos */}
              <div>
                <h4 className="font-bold text-black mb-4 text-lg flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                  Nuevos ingresos/mes
                </h4>
                <div className="space-y-3">
                  {[
                    { concepto: 'Pacientes inactivos recuperados', valor: '~5.800€', detalle: '29 pacientes × 200€' },
                    { concepto: 'Nuevas citas por atención 24/7', valor: '~450€', detalle: '6 citas × 75€' },
                    { concepto: 'Reducción de no-shows', valor: '~600€', detalle: '8 citas recuperadas × 75€' },
                    { concepto: 'Mejor ocupación de agenda', valor: '~350€', detalle: 'Optimización de huecos' },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-gray-700 text-sm font-semibold">{item.concepto}</span>
                        <span className="text-xl font-bold text-blue-600">{item.valor}</span>
                      </div>
                      <p className="text-gray-500 text-xs">{item.detalle}</p>
                    </div>
                  ))}
                  <div className="bg-blue-600 text-white rounded-xl p-4">
                    <div className="flex justify-between items-center">
                      <span className="font-bold">Subtotal ingresos:</span>
                      <span className="text-2xl font-extrabold">~7.200€/mes</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ahorros */}
              <div>
                <h4 className="font-bold text-black mb-4 text-lg flex items-center gap-2">
                  <Clock className="w-6 h-6 text-blue-600" />
                  Ahorros operativos/mes
                </h4>
                <div className="space-y-3">
                  {[
                    { concepto: 'Ahorro en documentación', valor: '~650€', detalle: '13h × 50€/h' },
                    { concepto: 'Ahorro en atención telefónica', valor: '~680€', detalle: '17h × 40€/h' },
                    { concepto: 'Ahorro en gestión de citas', valor: '~360€', detalle: '9h × 40€/h' },
                    { concepto: 'Reducción de errores admin', valor: '~200€', detalle: 'Menos tiempo corrigiendo' },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-gray-700 text-sm font-semibold">{item.concepto}</span>
                        <span className="text-xl font-bold text-blue-600">{item.valor}</span>
                      </div>
                      <p className="text-gray-500 text-xs">{item.detalle}</p>
                    </div>
                  ))}
                  <div className="bg-gray-200 rounded-xl p-4">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-gray-900">Subtotal ahorros:</span>
                      <span className="text-2xl font-extrabold text-gray-900">~1.890€/mes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* TOTAL */}
            <div className="bg-blue-600 rounded-2xl p-8 text-white text-center">
              <h4 className="text-xl font-bold mb-4">Beneficio total estimado por clínica</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <div className="text-sm text-blue-100 mb-1">Nuevos ingresos</div>
                  <div className="text-3xl font-extrabold">7.200€/mes</div>
                </div>
                <div>
                  <div className="text-sm text-blue-100 mb-1">Ahorros operativos</div>
                  <div className="text-3xl font-extrabold">1.890€/mes</div>
                </div>
                <div className="bg-white/20 rounded-xl p-4">
                  <div className="text-sm text-blue-100 mb-1">TOTAL BENEFICIO</div>
                  <div className="text-4xl font-extrabold">9.090€/mes</div>
                </div>
              </div>
              <div className="border-t border-white/20 pt-6">
                <div className="flex justify-between items-center max-w-2xl mx-auto">
                  <span className="text-lg font-semibold">Coste mensual (con descuento BQDC):</span>
                  <span className="text-2xl font-bold">-320€/mes</span>
                </div>
                <div className="flex justify-between items-center max-w-2xl mx-auto mt-3 pt-3 border-t border-white/20">
                  <span className="text-xl font-bold">Beneficio NETO mensual:</span>
                  <span className="text-5xl font-extrabold text-white">+8.770€</span>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-blue-50 rounded-2xl p-6 border-2 border-blue-300 text-center">
              <div className="text-5xl font-extrabold text-blue-600 mb-3">ROI: 2.740%</div>
              <p className="text-gray-700 text-lg">
                Por cada <strong className="text-blue-600">320€ que inviertes</strong>, generas <strong className="text-black">8.770€ de beneficio</strong>
              </p>
              <p className="text-gray-500 text-sm mt-2">
                El proyecto se paga solo en menos de 2 semanas de operación
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINANCIACIÓN DETALLADA */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-6 font-semibold">
              <Euro className="w-5 h-5" />
              Estructura Financiera
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-black mb-4">Desglose de inversión por clínica</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">Cómo se financia el proyecto y cuándo se paga cada parte</p>
          </motion.div>

          {/* Diagrama de flujo financiero */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
            className="bg-white rounded-3xl p-10 border-2 border-gray-200 mb-12"
          >
            <h3 className="text-2xl font-bold text-black mb-8 text-center">Flujo de financiación por clínica</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Adelanto clínica */}
              <div className="text-center">
                <div className="bg-blue-600 rounded-2xl p-6 text-white mb-4">
                  <div className="text-sm font-semibold text-blue-100 mb-2">Adelanto de la clínica</div>
                  <div className="text-5xl font-extrabold mb-2">2.000€</div>
                  <p className="text-blue-100 text-sm">Antes del 7 de marzo</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <p className="text-gray-700 text-sm font-semibold">Para arrancar el desarrollo</p>
                </div>
              </div>

              {/* Subvención */}
              <div className="text-center">
                <div className="bg-blue-600 rounded-2xl p-6 text-white mb-4">
                  <div className="text-sm font-semibold text-blue-100 mb-2">Subvención recibida</div>
                  <div className="text-5xl font-extrabold mb-2">10.000€</div>
                  <p className="text-blue-100 text-sm">En ~6 meses</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                  <p className="text-gray-700 text-sm font-semibold">La clínica recibe este dinero</p>
                </div>
              </div>

              {/* Pendiente */}
              <div className="text-center">
                <div className="bg-gray-900 rounded-2xl p-6 text-white mb-4">
                  <div className="text-sm font-semibold text-gray-300 mb-2">Pendiente de pago</div>
                  <div className="text-5xl font-extrabold mb-2">8.000€</div>
                  <p className="text-gray-300 text-sm">Tras recibir subvención</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <p className="text-gray-700 text-sm font-semibold">Para completar el proyecto</p>
                </div>
              </div>
            </div>

            {/* Resumen */}
            <div className="bg-blue-50 rounded-2xl p-6 border-2 border-blue-200">
              <h4 className="font-bold text-black text-center mb-4">Resumen por clínica</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="text-gray-700">Subvención total disponible:</span>
                  <span className="font-bold text-blue-600">15.000€</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="text-gray-700">Importe que recibe la clínica:</span>
                  <span className="font-bold text-blue-600">10.000€</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="text-gray-700">Inversión total de la clínica:</span>
                  <span className="font-bold text-black">10.000€</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-blue-600 text-white rounded-lg">
                  <span className="font-semibold">Inversión neta real:</span>
                  <span className="font-extrabold text-2xl">0€</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm text-center mt-4">
                La clínica adelanta 2.000€, luego paga 8.000€, pero recibe 10.000€ de la subvención = <strong className="text-blue-600">inversión neta 0€</strong>
              </p>
            </div>
          </motion.div>

          {/* Timeline de pagos */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 border-2 border-gray-200"
          >
            <h3 className="text-2xl font-bold text-black mb-8 text-center">Timeline de pagos</h3>
            <div className="space-y-4">
              {[
                { momento: 'Antes del 7 marzo 2026', concepto: 'Adelanto inicial', cantidad: '2.000€', quien: 'Paga la clínica', color: 'bg-blue-600 text-white' },
                { momento: 'Septiembre 2026 (estimado)', concepto: 'Llega la subvención', cantidad: '10.000€', quien: 'Recibe la clínica', color: 'bg-green-600 text-white' },
                { momento: 'Tras recibir subvención', concepto: 'Pago final', cantidad: '8.000€', quien: 'Paga la clínica', color: 'bg-blue-600 text-white' },
              ].map((pago, index) => (
                <div key={index} className={`${pago.color} rounded-2xl p-5 flex items-center justify-between`}>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <div className="text-sm opacity-90 mb-1">{pago.momento}</div>
                      <div className="font-bold text-lg">{pago.concepto}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-extrabold">{pago.cantidad}</div>
                    <div className="text-sm opacity-90">{pago.quien}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* QUÉ SE PUEDE HACER CON LOS 10.000€ */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-6 font-semibold">
              <Sparkles className="w-5 h-5" />
              Alcance del Desarrollo
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-black mb-4">Qué incluyen los 10.000€ de desarrollo</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">Todo lo que se desarrollará para cada clínica con el presupuesto disponible</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Desarrollo por clínica individual */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
              className="bg-gray-50 rounded-3xl p-8 border-2 border-blue-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black">Agente IA individual por clínica</h3>
              </div>
              <div className="space-y-3">
                {[
                  'Asistente de atención al paciente 24/7',
                  'Integración con software de gestión (Gesden G5, etc.)',
                  'Conexión WhatsApp Business',
                  'Chat web en la página de la clínica',
                  'Gestión inteligente de citas y recordatorios',
                  'Transcripción por voz de notas clínicas',
                  'Generación automática de presupuestos',
                  'Sistema de solicitud de reseñas',
                  'Campañas de recuperación de pacientes inactivos',
                  'Dashboard de KPIs en tiempo real',
                  'Personalización completa (tono, protocolos, precios)',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Desarrollo para BQDC (si aplica) */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
              className="bg-blue-600 rounded-3xl p-8 text-white"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Capacidades de red BQDC</h3>
              </div>
              <div className="space-y-3">
                {[
                  'Espacio de datos dental unificado (opcional)',
                  'Sincronización de historiales entre clínicas',
                  'Dashboard central para dirección BQDC',
                  'Benchmarking automático entre centros',
                  'IA transversal que aprende de toda la red',
                  'Comunicación unificada de marca',
                  'Gestión centralizada de marketing',
                  'Sistema de derivación inteligente entre clínicas',
                  'Analytics consolidado de toda la red',
                  'Protocolos estandarizados con IA',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="text-blue-100 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-white/10 rounded-xl p-4 border border-white/20">
                <p className="text-blue-100 text-sm">
                  <strong className="text-white">Nota:</strong> Las capacidades de red se activan progresivamente según se vayan sumando clínicas al proyecto
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
            className="bg-blue-600 rounded-3xl p-8 text-white text-center"
          >
            <Rocket className="w-14 h-14 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">Con 10.000€ por clínica se puede hacer TODO</h3>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Tanto el agente individual de cada clínica como las capacidades de red BQDC quedan cubiertos. Es un presupuesto suficiente para un desarrollo completo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ROADMAP COMPLETO */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-6 font-semibold">
              <Calendar className="w-5 h-5" />
              Roadmap del Proyecto
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-black mb-4">Timeline de 6-10 meses</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">Duración estimada del desarrollo completo</p>
          </motion.div>

          {/* Timeline visual */}
          <div className="relative">
            <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-1 bg-blue-200"></div>
            
            <div className="space-y-8">
              {[
                {
                  fase: 'Fase 1: Arranque',
                  duracion: 'Semanas 1-2',
                  hitos: [
                    'Pago inicial de 2.000€ por clínica (antes del 7 marzo)',
                    'Kickoff con dirección BQDC',
                    'Análisis de requisitos de cada clínica',
                    'Configuración de infraestructura técnica',
                    'Acceso a sistemas y software actual',
                  ],
                  color: 'bg-blue-600',
                },
                {
                  fase: 'Fase 2: Desarrollo Core',
                  duracion: 'Meses 1-3',
                  hitos: [
                    'Desarrollo del agente IA base',
                    'Integración con software de gestión (Gesden G5, etc.)',
                    'Conexión WhatsApp Business',
                    'Chat web y sistema de atención 24/7',
                    'Módulo de gestión de citas automática',
                    'Sistema de recordatorios inteligentes',
                  ],
                  color: 'bg-blue-600',
                },
                {
                  fase: 'Fase 3: Funcionalidades Avanzadas',
                  duracion: 'Meses 3-5',
                  hitos: [
                    'Transcripción por voz de notas clínicas',
                    'Generación automática de presupuestos',
                    'Sistema de solicitud de reseñas',
                    'Campañas de recuperación de pacientes inactivos',
                    'Dashboard de KPIs',
                    'Análisis predictivo básico',
                  ],
                  color: 'bg-blue-600',
                },
                {
                  fase: 'Fase 4: Testeo y Ajustes',
                  duracion: 'Meses 4-6',
                  hitos: [
                    'Lanzamiento en primeras clínicas',
                    '2 MESES GRATIS de servicio para testear',
                    'Recopilación de feedback del equipo',
                    'Ajustes y optimizaciones',
                    'Validación de resultados',
                    'Llegada estimada de la subvención',
                  ],
                  color: 'bg-blue-600',
                },
                {
                  fase: 'Fase 5: Despliegue Completo',
                  duracion: 'Meses 6-8',
                  hitos: [
                    'Pago de 7.000€ pendientes (con subvención recibida)',
                    'Extensión a todas las clínicas BQDC',
                    'Formación completa a cada equipo',
                    'Configuración específica por centro',
                    'Monitorización y soporte intensivo',
                  ],
                  color: 'bg-blue-600',
                },
                {
                  fase: 'Fase 6: Capacidades de Red',
                  duracion: 'Meses 8-10',
                  hitos: [
                    'Activación del espacio de datos unificado',
                    'Sincronización de historiales entre clínicas',
                    'IA transversal que aprende de toda la red',
                    'Dashboard central para dirección',
                    'Sistema de derivación inteligente',
                    'Optimización continua',
                  ],
                  color: 'bg-blue-600',
                },
              ].map((fase, index) => (
                <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }}
                  className="relative pl-20 lg:pl-24"
                >
                  <div className={`absolute left-0 lg:left-2 w-14 h-14 ${fase.color} rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                    {index + 1}
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xl font-bold text-black">{fase.fase}</h4>
                      <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{fase.duracion}</span>
                    </div>
                    <div className="space-y-2">
                      {fase.hitos.map((hito, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{hito}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HITOS CLAVE Y ENTREGAS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-6 font-semibold">
              <Target className="w-5 h-5" />
              Hitos y Entregas
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-black mb-4">Qué recibirás y cuándo</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">Entregables concretos en cada fase del proyecto</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { 
                hito: 'Mes 1: Primera versión funcional',
                entregables: ['Agente IA básico operativo', 'Atención en WhatsApp funcionando', 'Primeras respuestas automáticas', 'Acceso al dashboard inicial'],
                icon: Rocket,
              },
              { 
                hito: 'Mes 2: Integración completa',
                entregables: ['Conexión con software de gestión', 'Reserva de citas automática', 'Chat web implementado', 'Recordatorios activados'],
                icon: Settings,
              },
              { 
                hito: 'Mes 3: Funcionalidades avanzadas',
                entregables: ['Transcripción por voz operativa', 'Presupuestos automáticos', 'Sistema de reseñas activo', 'Campaña de recuperación de inactivos'],
                icon: Zap,
              },
              { 
                hito: 'Mes 4-5: Fase de testeo (GRATIS)',
                entregables: ['2 meses de servicio sin coste', 'Ajustes basados en feedback', 'Optimizaciones continuas', 'Validación de métricas'],
                icon: Award,
              },
              { 
                hito: 'Mes 6: Recepción de subvención',
                entregables: ['Clínica recibe 10.000€', 'Pago de 7.000€ pendientes', 'Despliegue a más clínicas', 'Formación a nuevos equipos'],
                icon: Euro,
              },
              { 
                hito: 'Meses 7-10: Red completa + IA transversal',
                entregables: ['Espacio de datos unificado', 'Todas las clínicas operativas', 'IA de red activada', 'Dashboard central BQDC'],
                icon: Database,
              },
            ].map((hito, index) => {
              const Icon = hito.icon;
              return (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 border border-gray-200"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-bold text-black">{hito.hito}</h4>
                  </div>
                  <div className="space-y-2">
                    {hito.entregables.map((entregable, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{entregable}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PASO A PASO DEL PROCESO */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-6 font-semibold">
              <FileCheck className="w-5 h-5" />
              Proceso Completo
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-black mb-4">Paso a paso: De hoy al Go-Live</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">El proceso completo desde la firma hasta tener la IA funcionando</p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                paso: '1',
                titulo: 'Confirmación y firma',
                cuando: 'Ahora - Febrero 2026',
                acciones: [
                  'BQDC confirma cuántas clínicas entran al proyecto',
                  'Firma de acuerdo de desarrollo con Nexgent',
                  'Definición de estrategia de despliegue',
                ],
                responsable: 'Dirección BQDC',
                color: 'bg-blue-600',
              },
              {
                paso: '2',
                titulo: 'Pago inicial y arranque',
                cuando: 'Antes del 7 marzo 2026',
                acciones: [
                  'Cada clínica paga 2.000€ de adelanto',
                  'Kickoff técnico con equipos de las clínicas',
                  'Recopilación de datos y credenciales de acceso',
                  'Nexgent arranca el desarrollo',
                ],
                responsable: 'Clínicas + Nexgent',
                color: 'bg-blue-600',
              },
              {
                paso: '3',
                titulo: 'Desarrollo intensivo',
                cuando: 'Marzo - Mayo 2026 (3 meses)',
                acciones: [
                  'Desarrollo del agente IA base',
                  'Integración con software de gestión',
                  'Conexión de canales (WhatsApp, web)',
                  'Configuración personalizada por clínica',
                  'Primeras pruebas internas',
                ],
                responsable: 'Nexgent',
                color: 'bg-blue-600',
              },
              {
                paso: '4',
                titulo: 'Testeo y validación (GRATIS)',
                cuando: 'Mayo - Junio 2026 (2 meses)',
                acciones: [
                  'Lanzamiento en primeras clínicas de la red',
                  '2 MESES DE SERVICIO GRATIS',
                  'Monitorización intensiva de resultados',
                  'Ajustes basados en feedback real',
                  'Validación de métricas de ROI',
                ],
                responsable: 'Primeras clínicas + Nexgent',
                destacado: true,
                color: 'bg-blue-600',
              },
              {
                paso: '5',
                titulo: 'Llegada de la subvención',
                cuando: 'Agosto - Septiembre 2026 (~6 meses)',
                acciones: [
                  'La subvención es aprobada y desembolsada',
                  'Cada clínica recibe 10.000€',
                  'Pago de 8.000€ pendientes a Nexgent',
                  'Liberación del presupuesto para escalado',
                ],
                  responsable: 'Administración + Clínicas',
                  color: 'bg-green-600',
                },
              {
                paso: '6',
                titulo: 'Despliegue completo',
                cuando: 'Septiembre - Noviembre 2026 (3 meses)',
                acciones: [
                  'Extensión a todas las clínicas de la red',
                  'Formación individual a cada equipo',
                  'Personalización específica por centro',
                  'Inicio del servicio mensual (320€/mes)',
                ],
                  responsable: 'Nexgent + Todas las clínicas',
                  color: 'bg-blue-600',
                },
              {
                paso: '7',
                titulo: 'Activación de red',
                cuando: 'Diciembre 2026 - Enero 2027',
                acciones: [
                  'Conexión del espacio de datos BQDC',
                  'Sincronización de historiales',
                  'IA transversal operativa',
                  'Dashboard central para dirección',
                  'Optimización continua',
                ],
                  responsable: 'Nexgent + Dirección BQDC',
                  color: 'bg-blue-600',
                },
            ].map((etapa, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }}
                className={`relative ${etapa.destacado ? 'bg-blue-50 border-2 border-blue-600' : 'bg-gray-50 border border-gray-200'} rounded-2xl p-6`}
              >
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 ${etapa.color} rounded-2xl flex items-center justify-center flex-shrink-0 text-white font-bold text-2xl shadow-lg`}>
                    {etapa.paso}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-xl font-bold text-black mb-1">{etapa.titulo}</h4>
                        <p className="text-sm text-blue-600 font-semibold">{etapa.cuando}</p>
                      </div>
                      {etapa.destacado && (
                        <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                          GRATIS
                        </div>
                      )}
                    </div>
                    <div className="space-y-2 mb-3">
                      {etapa.acciones.map((accion, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{accion}</span>
                        </div>
                      ))}
                    </div>
                    <div className="text-xs text-gray-500 mt-2">
                      <strong>Responsable:</strong> {etapa.responsable}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RESUMEN VISUAL DEL PROYECTO */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
            className="bg-blue-600 rounded-3xl p-10 text-white"
          >
            <h2 className="text-3xl font-bold text-center mb-8">Resumen del proyecto completo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                  <div className="text-sm text-blue-100 mb-1">Duración total</div>
                  <div className="text-2xl font-bold">6-10 meses</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                  <div className="text-sm text-blue-100 mb-1">Inversión neta por clínica</div>
                  <div className="text-2xl font-bold">0€</div>
                  <p className="text-xs text-blue-200 mt-1">Cubierto por subvención</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                  <div className="text-sm text-blue-100 mb-1">Servicio mensual (tras 2 meses gratis)</div>
                  <div className="text-2xl font-bold">320€/mes</div>
                  <p className="text-xs text-blue-200 mt-1">Con descuento red completa</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white/20 rounded-xl p-4 border-2 border-white/40">
                  <div className="text-sm text-blue-100 mb-1">Regalo de Nexgent</div>
                  <div className="text-2xl font-bold">2 meses gratis</div>
                  <p className="text-xs text-blue-200 mt-1">640€ de valor</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                  <div className="text-sm text-blue-100 mb-1">Fases de despliegue</div>
                  <div className="text-2xl font-bold">Progresivo</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                  <div className="text-sm text-blue-100 mb-1">Timeline de subvención</div>
                  <div className="text-2xl font-bold">~6 meses</div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white/10 rounded-xl p-6 border border-white/20 text-center">
              <p className="text-lg">
                <strong className="text-white">Bottom line:</strong> Desarrollo completo cubierto por subvención + 2 meses gratis + servicio a 320€/mes
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* COMPROMISOS Y GARANTÍAS */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-black mb-4">Nuestros compromisos</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">Lo que Nexgent garantiza en este proyecto</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { titulo: 'Cumplimiento de plazos', desc: 'Si no cumplimos con los hitos acordados, no cobramos hasta que estén completados.' },
              { titulo: 'Calidad del desarrollo', desc: 'Todo el código y la IA pasan por control de calidad estricto antes de cada entrega.' },
              { titulo: 'Formación incluida', desc: 'Formación completa a cada equipo, sin límite de sesiones hasta que todos se sientan cómodos.' },
              { titulo: 'Soporte durante desarrollo', desc: 'Canal directo de comunicación con el equipo técnico durante toda la fase de desarrollo.' },
              { titulo: '2 meses gratis garantizados', desc: 'Sin importar qué pase, los primeros 2 meses de servicio son gratis para todas las clínicas.' },
              { titulo: 'Integración garantizada', desc: 'Si hay problemas técnicos con la integración del software actual, los resolvemos sin coste adicional.' },
            ].map((compromiso, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-200"
              >
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-black mb-2">{compromiso.titulo}</h4>
                    <p className="text-gray-600 text-sm">{compromiso.desc}</p>
                  </div>
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
            <p className="text-sm text-gray-400">Proceso y Financiación del Proyecto</p>
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
