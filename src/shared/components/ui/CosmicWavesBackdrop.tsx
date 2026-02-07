import React from 'react';
import { cn } from '../../../lib/utils';

interface CosmicWavesBackdropProps {
  className?: string;
}

const CosmicWavesBackdrop: React.FC<CosmicWavesBackdropProps> = ({ className }) => {
  return (
    <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)} aria-hidden="true">
      <div className="cosmic-waves-base" />
      <div className="cosmic-waves-layer cosmic-waves-layer-1" />
      <div className="cosmic-waves-layer cosmic-waves-layer-2" />
      <div className="cosmic-waves-stars" />
      <div className="cosmic-waves-glow" />
    </div>
  );
};

export default React.memo(CosmicWavesBackdrop);
