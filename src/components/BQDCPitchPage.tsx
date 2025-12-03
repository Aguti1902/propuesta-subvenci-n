import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Clock,
  Calendar,
  FileText,
  AlertCircle,
  Users,
  Bot,
  CheckCircle,
  Sparkles,
  Zap,
  TrendingUp,
  Shield,
  Target,
  Award,
  ArrowRight,
  Database,
  Building2,
  Rocket,
  BarChart3,
  ArrowLeft,
} from 'lucide-react';
import ContactModal from './ContactModal';

interface BQDCPitchPageProps {
  onBack: () => void;
}

export default function BQDCPitchPage({ onBack }: BQDCPitchPageProps) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50">
      {/* HERO BQDC */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-600 to-transparent opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20"></div>

        {/* Botón Volver */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={onBack}
            className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors duration-300 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-semibold">Volver a selección</span>
          </motion.button>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
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

            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/20">
              <Sparkles className="w-6 h-6" />
              <span className="text-lg font-semibold">Propuesta Estratégica BQDC</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight">
              Espacio de Datos Dental + IA
              <span className="block text-blue-300 mt-3">para toda la red BQDC</span>
            </h1>

            <p className="text-2xl lg:text-3xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Convertir a BQDC en la <strong className="text-white">primera red dental privada de España</strong> con un espacio de datos clínico común e IA transversal
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 bg-green-500/20 backdrop-blur-sm px-6 py-3 rounded-xl border border-green-400/30">
                <CheckCircle className="w-6 h-6 text-green-300" />
                <span className="font-semibold text-lg">Hasta 30.000€ por clínica</span>
              </div>
              <div className="flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm px-6 py-3 rounded-xl border border-purple-400/30">
                <Database className="w-6 h-6 text-purple-300" />
                <span className="font-semibold text-lg">Espacio de Datos Común</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-6 py-3 rounded-xl border border-blue-400/30">
                <Bot className="w-6 h-6 text-blue-300" />
                <span className="font-semibold text-lg">IA Clínica + Administrativa</span>
              </div>
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

      {/* PROBLEMA ACTUAL BQDC */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full mb-6 font-semibold">
              <AlertCircle className="w-5 h-5" />
              Situación Actual
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              El reto de BQDC hoy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Como muchas redes dentales, cada clínica funciona de forma independiente
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-red-50 rounded-2xl p-6 border-2 border-red-200"
            >
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <Building2 className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Clínicas como islas digitales</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Cada clínica opera con sus propios sistemas y datos, sin conexión entre ellas
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-red-50 rounded-2xl p-6 border-2 border-red-200"
            >
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <FileText className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Pruebas y formularios repetidos</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Cuando un paciente cambia de clínica, se vuelven a pedir pruebas ya realizadas
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-red-50 rounded-2xl p-6 border-2 border-red-200"
            >
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Sin historial clínico único</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                No existe un historial clínico compartido a nivel de red BQDC
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-red-50 rounded-2xl p-6 border-2 border-red-200"
            >
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Carga administrativa repetitiva</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Tareas manuales y procesos duplicados en cada centro
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-red-50 rounded-2xl p-6 border-2 border-red-200"
            >
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Calidad asistencial desigual</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Falta de estándares y protocolos comunes entre centros
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-red-50 rounded-2xl p-6 border-2 border-red-200"
            >
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Datos sin aprovechar</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Información valiosa que no se utiliza para mejorar la red
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* OPORTUNIDAD KTED PARA BQDC */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full mb-6 font-semibold">
              <Sparkles className="w-5 h-5" />
              La Oportunidad
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              Lo que permite KTED para BQDC
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Una subvención que transforma completamente la infraestructura digital de la red
            </p>
          </motion.div>

          {/* Timeline de la oportunidad */}
          <div className="relative max-w-5xl mx-auto">
            {/* Línea vertical */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 via-blue-500 to-purple-600"></div>

            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="relative pl-24 pb-12"
            >
              <div className="absolute left-0 w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-green-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Hasta 30.000€ por clínica BQDC</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Cada clínica privada de BQDC puede acceder a la máxima cuantía de la subvención KTED. 
                  <strong className="text-gray-900"> Coste 0 para las clínicas.</strong>
                </p>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="relative pl-24 pb-12"
            >
              <div className="absolute left-0 w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Conexión al Espacio de Datos Dental</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Todas las clínicas se conectan a un <strong className="text-gray-900">Espacio de Datos Dental común</strong>, 
                  permitiendo compartir información clínica de forma segura y controlada dentro de BQDC.
                </p>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="relative pl-24 pb-12"
            >
              <div className="absolute left-0 w-16 h-16 bg-indigo-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-indigo-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Estándar único de datos clínicos</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Todas las clínicas trabajan con el mismo estándar de datos, facilitando la 
                  <strong className="text-gray-900"> interoperabilidad y continuidad asistencial</strong> en toda la red.
                </p>
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="relative pl-24 pb-12"
            >
              <div className="absolute left-0 w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-purple-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Implantación y 2 meses de servicio cubiertos</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  La subvención cubre toda la implantación técnica, el desarrollo del Agente IA y 
                  <strong className="text-gray-900"> los primeros 2 meses de servicio</strong> sin coste adicional.
                </p>
              </div>
            </motion.div>

            {/* Step 5 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="relative pl-24"
            >
              <div className="absolute left-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg border-2 border-purple-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Preparación para el EHDS europeo</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  BQDC se adelanta y se prepara para el futuro <strong className="text-gray-900">Espacio Europeo de Datos de Salud (EHDS)</strong>, 
                  posicionándose como líder en digitalización del sector dental.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BENEFICIOS DEL ESPACIO DE DATOS DENTAL */}
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
              <Database className="w-5 h-5" />
              Espacio de Datos Dental
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              Beneficios del Espacio de Datos para BQDC
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un ecosistema digital que conecta todas las clínicas y mejora la atención
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg border border-blue-200 hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Historia clínica portable</h3>
              <p className="text-gray-600 leading-relaxed">
                Los pacientes pueden moverse entre clínicas BQDC con su historial completo siempre disponible
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg border border-green-200 hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Menos pruebas duplicadas</h3>
              <p className="text-gray-600 leading-relaxed">
                Evita repetir pruebas diagnósticas ya realizadas, ahorrando tiempo y recursos
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg border border-purple-200 hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Continuidad asistencial real</h3>
              <p className="text-gray-600 leading-relaxed">
                Atención integrada y coordinada en toda la red BQDC
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 shadow-lg border border-orange-200 hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Gobernanza y seguridad</h3>
              <p className="text-gray-600 leading-relaxed">
                Control total sobre los datos con los máximos estándares de seguridad y privacidad
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 shadow-lg border border-teal-200 hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 bg-teal-500 rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Base para investigación</h3>
              <p className="text-gray-600 leading-relaxed">
                Datos anonimizados para investigación clínica propia y mejora continua
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 shadow-lg border border-indigo-200 hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 bg-indigo-500 rounded-xl flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Diferenciación total</h3>
              <p className="text-gray-600 leading-relaxed">
                Ventaja competitiva única frente a otras cadenas dentales en España
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CAPA DE IA SOBRE EL ESPACIO DE DATOS */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 font-semibold border border-white/20">
              <Bot className="w-5 h-5" />
              Inteligencia Artificial
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">
              IA clínica y administrativa
              <span className="block text-blue-300 mt-2">sobre el Espacio de Datos de BQDC</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              La capa de inteligencia que multiplica el valor de los datos compartidos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card IA Clínica */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-500/20 to-indigo-600/20 backdrop-blur-sm rounded-3xl p-8 border-2 border-blue-400/30 shadow-2xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center">
                  <Sparkles className="w-9 h-9 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold">IA Clínica</h3>
                  <p className="text-blue-200">Soporte a decisiones médicas</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Pre-diagnósticos y alertas preventivas</h4>
                    <p className="text-blue-100 text-sm">Análisis de datos históricos para detectar patrones y prevenir problemas</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Soporte a toma de decisiones</h4>
                    <p className="text-blue-100 text-sm">Recomendaciones basadas en casos similares de toda la red BQDC</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Análisis de patrones</h4>
                    <p className="text-blue-100 text-sm">Insights sobre caries, periodoncia, implantes, etc. en toda la red</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Estandarización de protocolos</h4>
                    <p className="text-blue-100 text-sm">Homogeneización de calidad asistencial en todas las clínicas BQDC</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-500/30 rounded-full text-xs font-semibold border border-green-400/30">Mejor diagnóstico</span>
                <span className="px-3 py-1 bg-blue-500/30 rounded-full text-xs font-semibold border border-blue-400/30">Prevención activa</span>
                <span className="px-3 py-1 bg-purple-500/30 rounded-full text-xs font-semibold border border-purple-400/30">Calidad homogénea</span>
              </div>
            </motion.div>

            {/* Card IA Administrativa */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-500/20 to-pink-600/20 backdrop-blur-sm rounded-3xl p-8 border-2 border-purple-400/30 shadow-2xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center">
                  <Zap className="w-9 h-9 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold">IA Administrativa</h3>
                  <p className="text-purple-200">Automatización operativa</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Atención al paciente 24/7</h4>
                    <p className="text-purple-100 text-sm">WhatsApp, web, chat: respuesta instantánea cualquier día y hora</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Gestión automatizada de citas</h4>
                    <p className="text-purple-100 text-sm">Reservas, cambios, recordatorios y reducción de no-shows</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Seguimiento post-tratamiento</h4>
                    <p className="text-purple-100 text-sm">Comunicaciones automatizadas y personalizadas para cada paciente</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Solicitud automática de reseñas</h4>
                    <p className="text-purple-100 text-sm">Aumenta la reputación online en el momento perfecto</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Organización documental</h4>
                    <p className="text-purple-100 text-sm">Reducción del 50-70% de tareas administrativas repetitivas</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-orange-500/30 rounded-full text-xs font-semibold border border-orange-400/30">Ahorro de tiempo</span>
                <span className="px-3 py-1 bg-pink-500/30 rounded-full text-xs font-semibold border border-pink-400/30">Mejor experiencia</span>
                <span className="px-3 py-1 bg-green-500/30 rounded-full text-xs font-semibold border border-green-400/30">Más ingresos</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* QUÉ GANA BQDC */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full mb-6 font-semibold shadow-lg">
              <Award className="w-6 h-6" />
              Visión Estratégica
            </div>
            <h2 className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-4">
              Qué gana BQDC con esta iniciativa
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Más que una subvención: una transformación estratégica completa
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-200 hover:shadow-2xl transition-all"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                <Award className="w-9 h-9 text-white" />
              </div>
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle className="w-7 h-7 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Primera red dental privada</h3>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Ser la <strong>primera red dental privada de España</strong> con un espacio de datos clínico propio
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl border-2 border-purple-200 hover:shadow-2xl transition-all"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                <Target className="w-9 h-9 text-white" />
              </div>
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle className="w-7 h-7 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Ventaja competitiva clara</h3>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Diferenciación absoluta frente a otras cadenas dentales y clínicas independientes
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl border-2 border-green-200 hover:shadow-2xl transition-all"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                <Users className="w-9 h-9 text-white" />
              </div>
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle className="w-7 h-7 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Mayor calidad asistencial</h3>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Protocolos estandarizados y mejor experiencia del paciente en toda la red
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl border-2 border-teal-200 hover:shadow-2xl transition-all"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                <BarChart3 className="w-9 h-9 text-white" />
              </div>
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle className="w-7 h-7 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Capacidad de investigación</h3>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Datos anonimizados para investigación clínica propia y mejora continua basada en evidencia
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl border-2 border-orange-200 hover:shadow-2xl transition-all"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                <TrendingUp className="w-9 h-9 text-white" />
              </div>
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle className="w-7 h-7 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Ahorro operativo significativo</h3>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Reducción del 50-70% en carga administrativa y optimización de recursos en todas las clínicas
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl border-2 border-indigo-200 hover:shadow-2xl transition-all"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                <Sparkles className="w-9 h-9 text-white" />
              </div>
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle className="w-7 h-7 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Proyecto 100% financiado</h3>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                <strong>30.000€ por clínica</strong> totalmente cubiertos por la subvención KTED, sin inversión de BQDC
              </p>
            </motion.div>
          </div>

          {/* CTA Destacado */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 rounded-3xl p-10 lg:p-16 text-white text-center shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400 opacity-10 rounded-full blur-3xl -ml-48 -mb-48"></div>
            
            <div className="relative">
              <Rocket className="w-20 h-20 mx-auto mb-6" />
              <h3 className="text-3xl lg:text-5xl font-extrabold mb-6 leading-tight">
                BQDC puede convertirse en la referencia
                <span className="block text-blue-300 mt-2">del sector dental privado en España</span>
              </h3>
              <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto mb-8 leading-relaxed">
                Si BQDC decide liderar este proyecto, será pionera en <strong className="text-white">digitalización e inteligencia artificial</strong> en odontología privada
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsContactModalOpen(true)}
                  className="px-12 py-6 bg-white text-indigo-700 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 inline-flex items-center gap-3 group"
                >
                  Solicitar información para BQDC
                  <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
                </motion.button>

                <motion.a
                  href="https://calendly.com/nexgent-demo/subvencion-kted-2025"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-6 bg-indigo-500 text-white rounded-2xl font-bold text-xl border-2 border-white/30 hover:bg-indigo-400 transition-all duration-300 flex items-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-7 h-7" />
                  Agendar reunión con BQDC
                </motion.a>
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
              Propuesta exclusiva BQDC · Subvención KTED 2025
            </p>
            <p className="text-xs text-gray-500 mt-3">
              Espacio de Datos Dental + IA para toda la red BQDC
            </p>
          </div>
          
          <div className="border-t border-gray-800 pt-6 text-center text-sm">
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

