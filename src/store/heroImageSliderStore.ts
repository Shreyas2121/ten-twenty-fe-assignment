import { create } from "zustand";
import { heroImages } from "../constants";

interface StoreT {
  currentImageIndex: number;
  nextImage: () => void;
  currentBgImage: string;
}

export const useHeroImageSliderStore = create<StoreT>((set) => ({
  currentImageIndex: 0,
  currentBgImage: heroImages[0],
  nextImage: () =>
    set((state) => {
      const nextIndex = (state.currentImageIndex + 1) % heroImages.length;
      return {
        currentImageIndex: nextIndex,
        transitioning: true,
        currentBgImage: heroImages[nextIndex],
      };
    }),
}));
