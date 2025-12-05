"use client";

interface LoadingSpinnerProps {
  /** Size: small, medium, large (or xs, sm, md, lg, xl) */
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "small" | "medium" | "large";
  /** Color: primary, accent, white, current */
  color?: "primary" | "accent" | "white" | "current";
  /** Additional CSS classes */
  className?: string;
}

export default function LoadingSpinner({
  size = "md",
  color = "primary",
  className = "",
}: LoadingSpinnerProps) {
  // Map aliases to standard sizes
  const sizeMap: Record<string, string> = {
    xs: "w-4 h-4",
    sm: "w-5 h-5",
    small: "w-5 h-5",
    md: "w-8 h-8",
    medium: "w-8 h-8",
    lg: "w-12 h-12",
    large: "w-12 h-12",
    xl: "w-16 h-16",
  };

  const sizeClasses = sizeMap;

  const colorClasses = {
    primary: "text-primary",
    accent: "text-accent",
    white: "text-white",
    current: "text-current",
  };

  return (
    <svg
      className={`animate-spin ${sizeClasses[size]} ${colorClasses[color]} ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-label="Загрузка..."
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}

// Full page loading overlay
interface LoadingOverlayProps {
  message?: string;
  fullScreen?: boolean;
}

export function LoadingOverlay({
  message = "Загрузка...",
  fullScreen = true,
}: LoadingOverlayProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-4 ${
        fullScreen
          ? "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
          : "w-full py-12"
      }`}
    >
      <LoadingSpinner size="xl" color="accent" />
      {message && (
        <p className="text-foreground/70 text-sm font-medium animate-pulse">
          {message}
        </p>
      )}
    </div>
  );
}

// Skeleton loader for content placeholders
interface SkeletonProps {
  className?: string;
  variant?: "text" | "circular" | "rectangular";
  width?: string;
  height?: string;
}

export function Skeleton({
  className = "",
  variant = "rectangular",
  width,
  height,
}: SkeletonProps) {
  const variantClasses = {
    text: "rounded",
    circular: "rounded-full",
    rectangular: "rounded-lg",
  };

  return (
    <div
      className={`bg-gray-200 dark:bg-gray-700 animate-pulse ${variantClasses[variant]} ${className}`}
      style={{ width, height }}
    />
  );
}

// Card skeleton
export function CardSkeleton({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-card rounded-2xl p-6 border border-border ${className}`}>
      <Skeleton className="w-12 h-12 mb-4" variant="circular" />
      <Skeleton className="w-3/4 h-6 mb-2" />
      <Skeleton className="w-full h-4 mb-1" />
      <Skeleton className="w-2/3 h-4" />
    </div>
  );
}

// Stats skeleton
export function StatsSkeleton() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {[...Array(4)].map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
}

// Dots loading animation
export function LoadingDots({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
      <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
      <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
    </div>
  );
}

// Pulse loading animation
export function LoadingPulse({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="relative">
        <div className="w-12 h-12 bg-accent/30 rounded-full animate-ping absolute" />
        <div className="w-12 h-12 bg-accent rounded-full relative flex items-center justify-center">
          <span className="text-white text-lg">🧀</span>
        </div>
      </div>
    </div>
  );
}

// Button loading state
interface ButtonLoadingProps {
  isLoading: boolean;
  children: React.ReactNode;
  loadingText?: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
}

export function ButtonLoading({
  isLoading,
  children,
  loadingText = "Загрузка...",
  className = "",
  disabled,
  onClick,
  type = "button",
}: ButtonLoadingProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isLoading || disabled}
      className={`relative inline-flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {isLoading ? (
        <>
          <LoadingSpinner size="sm" color="current" />
          <span>{loadingText}</span>
        </>
      ) : (
        children
      )}
    </button>
  );
}

