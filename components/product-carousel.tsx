"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface ProductCarouselProps {
  images: string[];
}

export function ProductCarousel({ images }: ProductCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [emblaPopupRef, emblaPopupApi] = useEmblaCarousel();
  const [thumbsRef, thumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [isPreviewOpen, setIsPreviewOpen] = React.useState(false);

  const scrollPrev = React.useCallback((api: any) => {
    if (api) api.scrollPrev();
  }, []);

  const scrollNext = React.useCallback((api: any) => {
    if (api) api.scrollNext();
  }, []);

  const onThumbClick = React.useCallback(
    (index: number) => {
      if (!emblaApi || !thumbsApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi, thumbsApi]
  );

  const onSelect = React.useCallback(() => {
    if (!emblaApi || !thumbsApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    thumbsApi.scrollTo(emblaApi.selectedScrollSnap());
  }, [emblaApi, thumbsApi, setSelectedIndex]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  React.useEffect(() => {
    if (isPreviewOpen && emblaPopupApi) {
      emblaPopupApi.scrollTo(selectedIndex);
    }
  }, [isPreviewOpen, emblaPopupApi, selectedIndex]);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-lg" ref={emblaRef}>
        <div className="flex">
          {images.map((src, index) => (
            <div
              className="relative aspect-[4/3] min-w-0 flex-[0_0_100%] cursor-pointer"
              key={index}
              onClick={() => setIsPreviewOpen(true)}
            >
              <Image
                src={src}
                alt={`Product image ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-4 right-4 flex gap-2">
        <Button
          variant="secondary"
          size="icon"
          onClick={() => scrollPrev(emblaApi)}
          className="h-8 w-8 rounded-full cursor-pointer"
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous image</span>
        </Button>
        <Button
          variant="secondary"
          size="icon"
          onClick={() => scrollNext(emblaApi)}
          className="h-8 w-8 rounded-full"
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next image</span>
        </Button>
      </div>
      {/* <div className="mt-4 overflow-hidden w-fit" ref={thumbsRef}>
        <div className="flex gap-2">
          {images.map((src, index) => (
            <button
              key={index}
              onClick={() => onThumbClick(index)}
              className={`relative aspect-[4/3] w-20 flex-[0_0_auto] overflow-hidden rounded-md ${
                index === selectedIndex ? "ring-2 ring-primary" : ""
              }`}
            >
              <Image
                src={src}
                alt={`Product thumbnail ${index}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div> */}
      <div className="mt-4 overflow-hidden w-fit" ref={thumbsRef}>
        <div className="flex gap-2">
          {images.map((src, index) => (
        <button
              key={index}
              onClick={() => onThumbClick(index)}
              className={`relative aspect-[4/3] w-20 flex-[0_0_auto] overflow-hidden rounded-md ${
              index === selectedIndex ? "ring-2 ring-primary" : ""
              }`}
            >
          <Image
             src={src}
             alt={`Product thumbnail ${index}`}
             fill
             className="object-cover"
          />
        </button>
        ))}
        </div>
      </div>
      
      <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
        <DialogContent className="max-w-7xl">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsPreviewOpen(false)}
            className="absolute right-4 top-4 z-10"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close preview</span>
          </Button>
          <div className="relative" ref={emblaPopupRef}>
            <div className="flex">
              {images.map((src, index) => (
                <div
                  key={index}
                  className="relative min-w-0 flex-[0_0_100%] overflow-hidden"
                >
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={src}
                      alt={`Product image ${index + 1}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform gap-2">
            <Button
              variant="secondary"
              size="icon"
              onClick={() => scrollPrev(emblaPopupApi)}
              className="h-8 w-8 rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous image</span>
            </Button>
            <Button
              variant="secondary"
              size="icon"
              onClick={() => scrollNext(emblaPopupApi)}
              className="h-8 w-8 rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next image</span>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
