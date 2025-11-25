import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { useState } from 'react';

interface TimelineStep {
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
  details: string[];
}

interface TimelineProps {
  steps: TimelineStep[];
}

export default function Timeline({ steps }: TimelineProps) {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <div className="relative">
      {/* Línea vertical en móvil / horizontal en desktop */}
      <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isActive = activeStep === index;
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div
                className="cursor-pointer group"
                onClick={() => setActiveStep(isActive ? null : index)}
              >
                {/* Número y círculo */}
                <div className="flex flex-col items-center mb-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? 'bg-primary-600 shadow-lg shadow-primary-300'
                        : 'bg-white border-4 border-primary-400 group-hover:border-primary-600'
                    }`}
                  >
                    <Icon className={`w-10 h-10 ${isActive ? 'text-white' : 'text-primary-600'}`} />
                  </motion.div>
                  <div className={`mt-3 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                    isActive ? 'bg-primary-600 text-white' : 'bg-primary-100 text-primary-600'
                  }`}>
                    {step.number}
                  </div>
                </div>

                {/* Contenido */}
                <div className={`bg-white rounded-xl p-6 shadow-md transition-all duration-300 ${
                  isActive ? 'shadow-xl border-2 border-primary-400' : 'border border-gray-100 group-hover:shadow-lg'
                }`}>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed text-center">{step.description}</p>

                  {/* Detalles expandibles */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: isActive ? 'auto' : 0,
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <ul className="space-y-2">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-600">
                            <svg className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>

                  {/* Indicador de click */}
                  <div className="mt-3 text-center text-xs text-primary-600 font-medium">
                    {isActive ? '▲ Click para cerrar' : '▼ Click para ver detalles'}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

