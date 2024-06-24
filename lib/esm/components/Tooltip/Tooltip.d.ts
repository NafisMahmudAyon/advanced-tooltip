import React from 'react';
interface TooltipProps {
    children: React.ReactNode;
    content: React.ReactNode;
    location?: 'top' | 'bottom' | 'left' | 'right';
    className?: string;
    tooltipStyle?: string;
}
export declare const Tooltip: React.FC<TooltipProps>;
export {};
