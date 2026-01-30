import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export function Card({ children, className = "", hover = false, glow = false }: CardProps) {
  const hoverStyles = hover ? "hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30" : "";
  const glowStyles = glow ? "shadow-lg shadow-cyan-500/20" : "";
  
  return (
    <div
      className={`bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 transition-all duration-300 ${hoverStyles} ${glowStyles} ${className}`}
    >
      {children}
    </div>
  );
}
