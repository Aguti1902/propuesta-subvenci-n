import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ProblemCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export default function ProblemCard({ icon: Icon, title, description, index }: ProblemCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl p-6 shadow-md border-l-4 border-red-500 hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
          <Icon className="w-6 h-6 text-red-600" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

