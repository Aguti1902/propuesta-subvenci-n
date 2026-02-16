import { motion } from 'framer-motion';
import { Building2, Network, ArrowRight, Bot, Calculator, Rocket, Euro, Calendar, CheckCircle } from 'lucide-react';

interface LoginSelectorProps {
  onSelectClinica: () => void;
  onSelectBQDC: () => void;
  onSelectROI: () => void;
  onSelectProceso: () => void;
}

export default function LoginSelector({ onSelectClinica, onSelectBQDC, onSelectROI, onSelectProceso }: LoginSelectorProps) {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          {/* Logo Nexgent */}
          <div className="flex items-center justify-center mb-8">
            <div className="bg-white rounded-2xl p-5">
              <img 
                src="/images/LOGO.png" 
                alt="Nexgent Logo" 
                className="h-20 w-auto object-contain"
              />
            </div>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-600 px-5 py-2 rounded-full mb-6">
            <Bot className="w-5 h-5 text-white" />
            <span className="text-sm font-semibold text-white">Inteligencia Artificial para el Sector Dental</span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-extrabold text-black mb-4 tracking-tight">
            Elige tu propuesta
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Descubre todo lo que la IA puede hacer por tu clínica dental o por tu red de clínicas
          </p>
        </motion.div>

        {/* Cards de selección principales */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Card Clínica Dental */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.02, y: -5 }}
            onClick={onSelectClinica}
            className="bg-white rounded-3xl p-8 lg:p-10 cursor-pointer group hover:shadow-2xl transition-all duration-300 border-2 border-blue-500"
          >
            <div className="mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Building2 className="w-9 h-9 text-white" />
              </div>
              <h2 className="text-3xl font-extrabold text-black mb-3">
                Clínica Dental
              </h2>
              <p className="text-lg text-gray-500 mb-6 leading-relaxed">
                Todo lo que la IA puede hacer por una clínica dental individual
              </p>
            </div>

            <div className="space-y-3 mb-8">
              {['Atención al paciente 24/7', 'Gestión inteligente de citas', 'IA clínica y diagnóstica', 'Marketing y reputación automatizada'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-gray-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-gray-200">
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                Ver propuesta completa
              </span>
              <ArrowRight className="w-6 h-6 text-blue-600 group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </motion.div>

          {/* Card BQDC */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.02, y: -5 }}
            onClick={onSelectBQDC}
            className="bg-blue-600 rounded-3xl p-8 lg:p-10 cursor-pointer group hover:shadow-2xl transition-all duration-300 border-2 border-blue-500 hover:border-blue-400 relative overflow-hidden"
          >
            <div className="relative mb-6">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Network className="w-9 h-9 text-white" />
              </div>
              <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full mb-4">
                <span className="text-xs font-bold text-white uppercase tracking-wide">Red de clínicas</span>
              </div>
              <h2 className="text-3xl font-extrabold text-white mb-3">
                Asociación BQDC
              </h2>
              <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                IA estratégica para toda la red de clínicas BQDC
              </p>
            </div>

            <div className="space-y-3 mb-8 relative">
              {['Espacio de datos dental unificado', 'IA clínica transversal para toda la red', 'Dashboard y benchmarking inteligente', 'Diferenciación competitiva total'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-white">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-white/20 relative">
              <span className="text-sm font-bold text-white uppercase tracking-wide">
                Ver propuesta estratégica
              </span>
              <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </motion.div>

          {/* Card ROI/Justificación */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            whileHover={{ scale: 1.02, y: -5 }}
            onClick={onSelectROI}
            className="bg-white rounded-3xl p-8 lg:p-10 cursor-pointer group hover:shadow-2xl transition-all duration-300 border-2 border-blue-600"
          >
            <div className="mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Calculator className="w-9 h-9 text-white" />
              </div>
              <div className="inline-flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full mb-4">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">Respuesta directa</span>
              </div>
              <h2 className="text-3xl font-extrabold text-black mb-3">
                ROI y Valor Real
              </h2>
              <p className="text-lg text-gray-500 mb-6 leading-relaxed">
                Justificación del precio y mejoras vs tu software actual
              </p>
            </div>

            <div className="space-y-3 mb-8">
              {['¿Por qué 495€/mes? Análisis de ROI', 'Qué añade vs Gesden G5', 'Datos reales de clientes', 'Timeline de resultados esperados'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-gray-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-gray-200">
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                Ver análisis completo
              </span>
              <ArrowRight className="w-6 h-6 text-blue-600 group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </motion.div>
        </div>

        {/* Card Proceso del Proyecto - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          whileHover={{ scale: 1.01, y: -3 }}
          onClick={onSelectProceso}
          className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 lg:p-10 cursor-pointer group hover:shadow-2xl transition-all duration-300 border-2 border-blue-700 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          
          <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Rocket className="w-11 h-11" />
              </div>
              <div>
                <h2 className="text-3xl font-extrabold mb-2">
                  Proceso del Proyecto
                </h2>
                <p className="text-blue-100 leading-relaxed">
                  Financiación, timeline y roadmap completo
                </p>
              </div>
            </div>

            <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { icon: Euro, text: 'Desglose financiero' },
                { icon: Calendar, text: 'Timeline 6-10 meses' },
                { icon: Rocket, text: 'Roadmap desarrollo' },
                { icon: CheckCircle, text: 'Hitos de pago' },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                    <Icon className="w-6 h-6 mx-auto mb-2" />
                    <span className="text-sm font-semibold">{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative mt-6 flex items-center justify-center">
            <span className="text-sm font-bold uppercase tracking-wide mr-2">Ver proceso completo</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </div>
        </motion.div>

        {/* Footer info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 text-sm">
            Propuestas de Inteligencia Artificial por <span className="font-bold text-black">Nexgent</span>
          </p>
          <a href="https://www.nexgent.io" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 text-xs mt-2 inline-block transition-colors">
            www.nexgent.io
          </a>
        </motion.div>
      </div>
    </div>
  );
}
