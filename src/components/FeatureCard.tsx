import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { useState } from 'react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  details?: string;
  color?: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  details,
  color = 'primary',
}: FeatureCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const colorClasses = {
    primary: 'bg-primary-50 text-primary-600 group-hover:bg-primary-100',
    blue: 'bg-blue-50 text-blue-600 group-hover:bg-blue-100',
    green: 'bg-green-50 text-green-600 group-hover:bg-green-100',
    purple: 'bg-purple-50 text-purple-600 group-hover:bg-purple-100',
    orange: 'bg-orange-50 text-orange-600 group-hover:bg-orange-100',
  };

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="group cursor-pointer"
      onClick={() => details && setIsExpanded(!isExpanded)}
    >
      <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
        <div className={`w-14 h-14 rounded-xl ${colorClasses[color as keyof typeof colorClasses] || colorClasses.primary} flex items-center justify-center mb-4 transition-colors duration-300`}>
          <Icon className="w-7 h-7" />
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
        
        {details && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: isExpanded ? 'auto' : 0,
              opacity: isExpanded ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-sm text-gray-500">{details}</p>
            </div>
          </motion.div>
        )}
        
        {details && (
          <div className="mt-4 flex items-center text-primary-600 font-medium text-sm">
            {isExpanded ? 'Ver menos' : 'Ver más detalles'}
            <motion.svg
              animate={{ rotate: isExpanded ? 180 : 0 }}
              className="w-4 h-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </motion.svg>
          </div>
        )}
      </div>
    </motion.div>
  );
}

