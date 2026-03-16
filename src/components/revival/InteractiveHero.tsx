import { useRef, useState, useCallback, useEffect } from "react";
import {
  TransformWrapper,
  TransformComponent,
  type ReactZoomPanPinchRef,
} from "react-zoom-pan-pinch";
import { cn } from "@/lib/utils";
import { ZoomIn, ZoomOut, Move, RotateCcw } from "lucide-react";

interface InteractiveHeroProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle?: string;
  overlay?: "gold" | "dark";
  children?: React.ReactNode;
  className?: string;
}

export function InteractiveHero({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  overlay = "gold",
  children,
  className,
}: InteractiveHeroProps) {
  const transformRef = useRef<ReactZoomPanPinchRef>(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [currentScale, setCurrentScale] = useState(1);
  const [imageSize, setImageSize] = useState<{
    width: number;
    height: number;
  } | null>(null);

  // Load image natural dimensions to compute proper sizing
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageSize({ width: img.naturalWidth, height: img.naturalHeight });
    };
    img.src = imageSrc;
  }, [imageSrc]);

  const handleInteraction = useCallback(() => {
    if (!hasInteracted) setHasInteracted(true);
  }, [hasInteracted]);

  const handleTransform = useCallback(
    (_ref: ReactZoomPanPinchRef, state: { scale: number }) => {
      setCurrentScale(state.scale);
    },
    []
  );

  // Calculate image display dimensions using "cover" logic:
  // The image must fill the entire viewport — no gaps on any side.
  // On desktop (wide screen): width = viewport width, height scales up (vertical pan).
  // On mobile (tall screen): height = viewport height, width scales up (horizontal pan).
  const vw = typeof window !== "undefined" ? window.innerWidth : 1200;
  const vh = typeof window !== "undefined" ? window.innerHeight : 800;
  const aspectRatio = imageSize
    ? imageSize.width / imageSize.height
    : 16 / 9;

  // Pick the dimension that makes the image fully cover the viewport
  const widthFromHeight = vh * aspectRatio;
  const heightFromWidth = vw / aspectRatio;

  const imgDisplayWidth = Math.max(vw, widthFromHeight);
  const imgDisplayHeight = Math.max(vh, heightFromWidth);

  return (
    <section
      className={cn("relative overflow-hidden h-[100vh] bg-navy-dark", className)}
    >
      {/* Pannable / Zoomable image layer */}
      <TransformWrapper
        ref={transformRef}
        initialScale={1}
        minScale={1}
        maxScale={5}
        // Center the image on load
        initialPositionX={-(imgDisplayWidth - vw) / 2}
        initialPositionY={-(imgDisplayHeight - vh) / 2}
        limitToBounds={true}
        centerZoomedOut={false}
        smooth={true}
        wheel={{ smoothStep: 0.04 }}
        panning={{ velocityDisabled: false }}
        onPanning={handleInteraction}
        onZoom={handleInteraction}
        onTransformed={handleTransform}
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            <TransformComponent
              wrapperStyle={{
                width: "100%",
                height: "100vh",
                overflow: "hidden",
              }}
              contentStyle={{
                width: imgDisplayWidth,
                height: imgDisplayHeight,
              }}
            >
              <img
                src={imageSrc}
                alt={imageAlt}
                style={{ width: imgDisplayWidth, height: imgDisplayHeight }}
                className="block object-cover pointer-events-none select-none"
                draggable={false}
              />
            </TransformComponent>

            {/* Zoom controls */}
            <div className="absolute bottom-6 right-6 z-30 flex flex-col gap-2">
              <button
                onClick={() => zoomIn(0.5)}
                className="rounded-full bg-white/15 p-2.5 text-white backdrop-blur-md transition-all hover:bg-white/25 active:scale-95"
                aria-label="Zoom in"
              >
                <ZoomIn className="h-5 w-5" />
              </button>
              <button
                onClick={() => zoomOut(0.5)}
                className="rounded-full bg-white/15 p-2.5 text-white backdrop-blur-md transition-all hover:bg-white/25 active:scale-95"
                aria-label="Zoom out"
              >
                <ZoomOut className="h-5 w-5" />
              </button>
              <button
                onClick={() => resetTransform()}
                className="rounded-full bg-white/15 p-2.5 text-white backdrop-blur-md transition-all hover:bg-white/25 active:scale-95"
                aria-label="Reset view"
              >
                <RotateCcw className="h-5 w-5" />
              </button>
            </div>
          </>
        )}
      </TransformWrapper>

      {/* Overlay gradient — fixed, not affected by pan/zoom */}
      <div
        className={cn(
          "absolute inset-0 z-10 pointer-events-none",
          overlay === "gold" ? "photo-overlay-gold" : "photo-overlay-dark"
        )}
      />

      {/* Content — fixed, not affected by pan/zoom */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        <div className="mx-auto max-w-4xl px-6 text-center text-white">
          <h1 className="font-serif text-display font-bold drop-shadow-lg">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 font-sans text-body-lg text-white/90 drop-shadow-md md:text-h4">
              {subtitle}
            </p>
          )}
          {children && (
            <div className="mt-8 flex flex-wrap justify-center gap-4 pointer-events-auto">
              {children}
            </div>
          )}
        </div>
      </div>

      {/* "Drag to explore" hint */}
      <div
        className={cn(
          "absolute bottom-8 left-1/2 z-20 -translate-x-1/2 flex items-center gap-2 rounded-full bg-black/40 px-5 py-2.5 text-sm font-sans text-white/90 backdrop-blur-md transition-all duration-700",
          hasInteracted
            ? "opacity-0 translate-y-4 pointer-events-none"
            : "opacity-100 animate-pulse"
        )}
      >
        <Move className="h-4 w-4" />
        <span className="hidden sm:inline">Drag to explore &bull; Scroll to zoom</span>
        <span className="sm:hidden">Swipe to explore &bull; Pinch to zoom</span>
      </div>

      {/* Zoom level indicator */}
      <div className="absolute top-4 right-4 z-20 rounded-full bg-black/30 px-3 py-1 font-sans text-xs text-white/70 backdrop-blur-sm pointer-events-none">
        {currentScale.toFixed(1)}x
      </div>
    </section>
  );
}
