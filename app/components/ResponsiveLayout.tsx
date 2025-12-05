"use client";

import { ReactNode, createContext, useContext, useEffect, useState } from "react";

// Breakpoints (matching Tailwind defaults)
const BREAKPOINTS = {
  mobile: 640,   // < 640px
  tablet: 1024,  // 640px - 1024px
  desktop: 1024, // > 1024px
} as const;

type DeviceType = "mobile" | "tablet" | "desktop";

interface ResponsiveContextType {
  device: DeviceType;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  width: number;
}

const ResponsiveContext = createContext<ResponsiveContextType>({
  device: "desktop",
  isMobile: false,
  isTablet: false,
  isDesktop: true,
  width: 1200,
});

// Hook to use responsive context
export function useResponsive() {
  return useContext(ResponsiveContext);
}

// Provider component
export function ResponsiveProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ResponsiveContextType>({
    device: "desktop",
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let device: DeviceType = "desktop";
      
      if (width < BREAKPOINTS.mobile) {
        device = "mobile";
      } else if (width < BREAKPOINTS.desktop) {
        device = "tablet";
      }

      setState({
        device,
        isMobile: device === "mobile",
        isTablet: device === "tablet",
        isDesktop: device === "desktop",
        width,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ResponsiveContext.Provider value={state}>
      {children}
    </ResponsiveContext.Provider>
  );
}

// Container component with responsive max-width and padding
interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

export function Container({ children, className = "", size = "lg" }: ContainerProps) {
  const sizeClasses = {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
    full: "max-w-full",
  };

  return (
    <div className={`mx-auto px-4 sm:px-6 lg:px-8 w-full ${sizeClasses[size]} ${className}`}>
      {children}
    </div>
  );
}

// Section wrapper with consistent spacing
interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: "default" | "white" | "primary" | "accent";
  spacing?: "sm" | "md" | "lg";
  id?: string;
}

export function Section({ 
  children, 
  className = "", 
  background = "default",
  spacing = "lg",
  id,
}: SectionProps) {
  const bgClasses = {
    default: "bg-background",
    white: "bg-white",
    primary: "bg-primary",
    accent: "bg-accent",
  };

  const spacingClasses = {
    sm: "py-8 sm:py-12",
    md: "py-12 sm:py-16",
    lg: "py-16 sm:py-20 lg:py-24",
  };

  return (
    <section 
      id={id}
      className={`${bgClasses[background]} ${spacingClasses[spacing]} ${className}`}
    >
      {children}
    </section>
  );
}

// Show only on mobile
export function MobileOnly({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`block sm:hidden ${className}`}>{children}</div>;
}

// Show only on tablet and up
export function TabletUp({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`hidden sm:block ${className}`}>{children}</div>;
}

// Show only on desktop
export function DesktopOnly({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`hidden lg:block ${className}`}>{children}</div>;
}

// Hide on mobile
export function HideMobile({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`hidden sm:block ${className}`}>{children}</div>;
}

// Responsive Grid
interface GridProps {
  children: ReactNode;
  className?: string;
  cols?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
  gap?: "sm" | "md" | "lg";
}

export function Grid({ 
  children, 
  className = "", 
  cols = { mobile: 1, tablet: 2, desktop: 3 },
  gap = "md",
}: GridProps) {
  const gapClasses = {
    sm: "gap-4",
    md: "gap-6 lg:gap-8",
    lg: "gap-8 lg:gap-12",
  };

  const colsClass = `grid-cols-${cols.mobile || 1} sm:grid-cols-${cols.tablet || 2} lg:grid-cols-${cols.desktop || 3}`;

  return (
    <div className={`grid ${colsClass} ${gapClasses[gap]} ${className}`}>
      {children}
    </div>
  );
}

// Responsive Text
interface TextProps {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
}

export function Text({ 
  children, 
  className = "", 
  as: Component = "p",
  size = "base",
}: TextProps) {
  const sizeClasses = {
    xs: "text-xs sm:text-sm",
    sm: "text-sm sm:text-base",
    base: "text-base sm:text-lg",
    lg: "text-lg sm:text-xl lg:text-2xl",
    xl: "text-xl sm:text-2xl lg:text-3xl",
    "2xl": "text-2xl sm:text-3xl lg:text-4xl",
    "3xl": "text-3xl sm:text-4xl lg:text-5xl",
    "4xl": "text-4xl sm:text-5xl lg:text-6xl",
  };

  return (
    <Component className={`${sizeClasses[size]} ${className}`}>
      {children}
    </Component>
  );
}

// Responsive Button
interface ButtonProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  fullWidthMobile?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
}

export function Button({ 
  children, 
  className = "", 
  variant = "primary",
  fullWidthMobile = true,
  onClick,
  type = "button",
}: ButtonProps) {
  const variantClasses = {
    primary: "bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/30",
    secondary: "bg-primary hover:bg-primary/90 text-white",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  };

  const widthClass = fullWidthMobile ? "w-full sm:w-auto" : "";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        px-6 py-3 sm:px-8 sm:py-4
        rounded-lg sm:rounded-xl
        font-semibold
        text-base sm:text-lg
        transition-all hover:scale-105
        ${variantClasses[variant]}
        ${widthClass}
        ${className}
      `}
    >
      {children}
    </button>
  );
}

// Stack component for vertical layouts
interface StackProps {
  children: ReactNode;
  className?: string;
  gap?: "xs" | "sm" | "md" | "lg" | "xl";
  align?: "start" | "center" | "end";
}

export function Stack({ 
  children, 
  className = "", 
  gap = "md",
  align = "start",
}: StackProps) {
  const gapClasses = {
    xs: "gap-2",
    sm: "gap-3 sm:gap-4",
    md: "gap-4 sm:gap-6",
    lg: "gap-6 sm:gap-8",
    xl: "gap-8 sm:gap-12",
  };

  const alignClasses = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
  };

  return (
    <div className={`flex flex-col ${gapClasses[gap]} ${alignClasses[align]} ${className}`}>
      {children}
    </div>
  );
}

// Default export - Layout wrapper
export default function ResponsiveLayout({ children }: { children: ReactNode }) {
  return (
    <ResponsiveProvider>
      {children}
    </ResponsiveProvider>
  );
}


