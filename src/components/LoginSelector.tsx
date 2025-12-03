import { motion } from 'framer-motion';
import { Building2, Network, ArrowRight, Sparkles } from 'lucide-react';

interface LoginSelectorProps {
  onSelectGeneric: () => void;
  onSelectBQDC: () => void;
}

export default function LoginSelector({ onSelectGeneric, onSelectBQDC }: LoginSelectorProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          {/* Logos */}
          <div className="flex items-center justify-center gap-8 mb-8">
            <div className="bg-white rounded-2xl p-4 shadow-2xl">
              <img 
                src="/images/LOGO.png" 
                alt="Nexgent Logo" 
                className="h-20 w-auto object-contain"
              />
            </div>
            <div className="text-3xl font-bold text-white/60">+</div>
            <div className="bg-white rounded-2xl p-4 shadow-2xl">
              <img 
                src="/images/logo_ACCURO-843x800.avif" 
                alt="ACCURO Logo" 
                className="h-20 w-auto object-contain"
              />
            </div>
          </div>

          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-white/20">
            <Sparkles className="w-6 h-6 text-white" />
            <span className="text-lg font-semibold text-white">Subvención KTED 2025</span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-4">
            Selecciona tu presentación
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Elige la propuesta que deseas visualizar
          </p>
        </motion.div>

        {/* Cards de selección */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card Genérica */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.02, y: -5 }}
            onClick={onSelectGeneric}
            className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl cursor-pointer group hover:shadow-3xl transition-all duration-300 border-4 border-transparent hover:border-blue-500"
          >
            <div className="mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Network className="w-11 h-11 text-white" />
              </div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
                Propuesta Genérica
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Presentación completa de la subvención KTED para asociaciones y centros
              </p>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Hasta 30.000€ por centro</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Agente de IA completo</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Gestión de subvención incluida</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Para cualquier asociación</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-gray-200">
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                Propuesta General
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
            className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 lg:p-10 shadow-2xl cursor-pointer group hover:shadow-3xl transition-all duration-300 border-4 border-purple-400/50 hover:border-pink-400 relative overflow-hidden"
          >
            {/* Efecto de brillo */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/30">
                <Building2 className="w-11 h-11 text-white" />
              </div>
              <div className="inline-flex items-center gap-2 bg-yellow-400/20 backdrop-blur-sm px-3 py-1 rounded-full mb-4 border border-yellow-300/30">
                <Sparkles className="w-4 h-4 text-yellow-200" />
                <span className="text-xs font-bold text-yellow-100 uppercase tracking-wide">Exclusiva</span>
              </div>
              <h2 className="text-3xl font-extrabold text-white mb-3">
                Propuesta BQDC
              </h2>
              <p className="text-lg text-purple-100 mb-6 leading-relaxed">
                Espacio de Datos Dental + IA estratégica para toda la red BQDC
              </p>
            </div>

            <div className="space-y-3 mb-8 relative">
              <div className="flex items-center gap-3 text-white">
                <div className="w-2 h-2 bg-pink-300 rounded-full"></div>
                <span>Primera red dental privada con Espacio de Datos</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <div className="w-2 h-2 bg-pink-300 rounded-full"></div>
                <span>IA clínica + administrativa transversal</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <div className="w-2 h-2 bg-pink-300 rounded-full"></div>
                <span>Historia clínica portable entre clínicas</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <div className="w-2 h-2 bg-pink-300 rounded-full"></div>
                <span>Diferenciación total en el mercado</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-white/20 relative">
              <span className="text-sm font-bold text-pink-200 uppercase tracking-wide">
                Propuesta Estratégica
              </span>
              <ArrowRight className="w-6 h-6 text-pink-200 group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </motion.div>
        </div>

        {/* Footer info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-blue-200 text-sm">
            Ambas propuestas incluyen acceso a la subvención KTED de hasta 30.000€ por centro
          </p>
        </motion.div>
      </div>
    </div>
  );
}

