import React from 'react';
import { cn } from '@/lib/utils/cn';

export interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  stepLabels?: string[];
  className?: string;
}

export function ProgressBar({
  currentStep,
  totalSteps,
  stepLabels,
  className,
}: ProgressBarProps) {
  const percentage = Math.min(Math.round((currentStep / totalSteps) * 100), 100);

  return (
    <div className={cn('space-y-2', className)}>
      <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
        <span>
          Step <strong className="text-[#0D1B2A]">{currentStep}</strong> of {totalSteps}
          {stepLabels && stepLabels[currentStep - 1] && (
            <span className="text-[#0D9488] ml-1.5 font-bold">
              • {stepLabels[currentStep - 1]}
            </span>
          )}
        </span>
        <span className="text-[#0D9488] font-mono font-bold">{percentage}%</span>
      </div>

      <div className="w-full h-2 rounded-full bg-slate-200/80 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#0D9488] to-teal-500 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
