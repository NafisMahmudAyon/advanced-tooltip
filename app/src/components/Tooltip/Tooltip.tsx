'use client'

import React from 'react';
import styled from 'styled-components';

interface TooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
  location?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
  tooltipStyle?: string;
}
var arrowSize = 10;
const TooltipContainer = styled.span`
  --arrow-size: ${arrowSize}px;
  position: relative;
  z-index: 10;
  
  &:hover .tooltip-content,
  &:hover .tooltip-arrow {
    visibility: visible;
    opacity: 1;
  }
  
  .tooltip-content {
    position: absolute;
    visibility: hidden;
    opacity: 0;
    left: 50%;
    padding: 10px 18px;
    min-width: 50px;
    max-width: 300px;
    width: max-content;
    width: -moz-max-content;
    border-radius: 6px;
    font-size: 14px;
    // background-color: rgba(59, 72, 80, 0.9);
    // background-image: linear-gradient(30deg, rgba(59, 72, 80, 0.44), rgba(59, 68, 75, 0.44), rgba(60, 82, 88, 0.44));
    box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.2);
    color: #fff;
    text-align: center;
    white-space: pre-wrap;
    transform: translate(-50%, calc(0px - var(--arrow-size))) scale(0.5);
    transition: 0.2s;
    will-change: transform;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .tooltip-arrow {
    position: absolute;
    visibility: hidden;
    opacity: 0;
    left: 50%;
    bottom: calc(100% + var(--arrow-size));
    border-style: solid;
    border-width: var(--arrow-size) var(--arrow-size) 0 var(--arrow-size);
    border-color: rgba(55, 64, 70, 0.9) transparent transparent transparent;
    transform-origin: top;
    transform: translateX(-50%) scaleY(0);
    transition: 0.2s;
    transition-duration: 0s; /* If the mouse leaves the element, the transition effects for the tooltip arrow are "turned off" */
  }
  
  &:hover .tooltip-content {
    transition-delay: 0.3s;
    transform: translate(-50%, calc(0px - var(--arrow-size))) scale(1);
  }
  
  &:hover .tooltip-arrow {
    transition-delay: 0.5s; /* Starting after the grow effect */
    transition-duration: 0.2s;
    transform: translateX(-50%) scaleY(1);
  }
`;

const TooltipComponent = styled(TooltipContainer) <{ location?: string }>`
  ${({ location }) => location === 'left' && `
    .tooltip-content,
    .tooltip-arrow {
      left: auto;
      right: calc(100% + var(--arrow-size));
      bottom: 50%;
    }
    
    .tooltip-content {
      transform: translate(calc(0px - var(--arrow-size)), 50%) scale(0.5);
    }
    
    &:hover .tooltip-content {
      transform: translate(calc(0px - var(--arrow-size)), 50%) scale(1);
    }
    
    .tooltip-arrow {
      border-width: var(--arrow-size) 0 var(--arrow-size) var(--arrow-size);
      border-color: transparent transparent transparent rgba(55, 64, 70, 0.9);
      transform-origin: left;
      transform: translateY(50%) scaleX(0);
    }
    
    &:hover .tooltip-arrow {
      transform: translateY(50%) scaleX(1);
    }
  `}
  
  ${({ location }) => location === 'right' && `
    .tooltip-content,
    .tooltip-arrow {
      left: calc(100% + var(--arrow-size));
      bottom: 50%;
    }
    
    .tooltip-content {
      transform: translate(var(--arrow-size), 50%) scale(0.5);
    }
    
    &:hover .tooltip-content {
      transform: translate(var(--arrow-size), 50%) scale(1);
    }
    
    .tooltip-arrow {
      border-width: var(--arrow-size) var(--arrow-size) var(--arrow-size) 0;
      border-color: transparent rgba(55, 64, 70, 0.9) transparent transparent;
      transform-origin: right;
      transform: translateY(50%) scaleX(0);
    }
    
    &:hover .tooltip-arrow {
      transform: translateY(50%) scaleX(1);
    }
  `}
  
  ${({ location }) => location === 'bottom' && `
    .tooltip-content,
    .tooltip-arrow {
      top: calc(100% + var(--arrow-size));
      bottom: auto;
    }
    
    .tooltip-content {
      transform: translate(-50%, var(--arrow-size)) scale(0.5);
    }
    
    &:hover .tooltip-content {
      transform: translate(-50%, var(--arrow-size)) scale(1);
    }
    
    .tooltip-arrow {
      border-width: 0 var(--arrow-size) var(--arrow-size) var(--arrow-size);
      border-color: transparent transparent rgba(55, 64, 70, 0.9) transparent;
      transform-origin: bottom;
    }
  `}
`;

export const Tooltip: React.FC<TooltipProps> = ({ children, content, location = 'top', className = "", tooltipStyle = "" }) => {
  return (
    <TooltipComponent location={location} data-tooltip-location={location} className={`${className}`}>
      {children}
      <div className={`tooltip-content ${tooltipStyle}`}>{content}</div>
      <div className="tooltip-arrow" />
    </TooltipComponent>
  );
};

