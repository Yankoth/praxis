import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = () => {
  return <Loader2 className="text-blue-500 animate-spin mb-6" size={35} />;
};

export default LoadingSpinner;
