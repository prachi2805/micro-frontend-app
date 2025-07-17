import { create } from "zustand";
import { Photo, AppState } from "../types";

// Interface for the API response structure
interface ApiResponse {
  products: Photo[];
  total: number;
  skip: number;
  limit: number;
}

const useStore = create<AppState>((set, get) => ({
  // Initial state
  photos: [],
  currentPage: 0,
  loading: false,
  hasMore: true,
  favorites: [],

  // Load photos from API
  loadPhotos: async (page = 1, reset = false) => {
    const { loading, hasMore } = get();

    if (loading || (!hasMore && !reset)) {
      console.log('Skipping load:', { loading, hasMore, reset });
      return;
    }

    set({ loading: true });
    console.log("Loading photos from API, page:", page);

    try {
      const url = `https://dummyjson.com/products?page=${page}&limit=10`;
      console.log("Fetching URL:", url);
      
      const response = await fetch(url);
      console.log("Response status:", response.status);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data: ApiResponse = await response.json();
      console.log("API Response:", data);
      
      // Extract products array from the response
      const newPhotos: Photo[] = data.products || [];
      console.log("New photos:", newPhotos.length);

      if (newPhotos.length === 0) {
        console.log("No more photos available");
        set({ hasMore: false, loading: false });
        return;
      }

      set((state) => {
        const updatedPhotos = reset ? newPhotos : [...state.photos, ...newPhotos];
        console.log("Updated photos count:", updatedPhotos.length);
        return {
          photos: updatedPhotos,
          currentPage: page,
          loading: false,
          hasMore: newPhotos.length === 10, // If less than 10, no more pages
        };
      });
    } catch (error) {
      console.error("Error loading photos:", error);
      set({ loading: false });
    }
  },

  // Toggle favorite status
  toggleFavorite: (photo: Photo) => {
    set((state) => {
      const exists = state.favorites.find((fav) => fav.id === photo.id);
      if (exists) {
        return {
          favorites: state.favorites.filter((fav) => fav.id !== photo.id),
        };
      } else {
        return {
          favorites: [...state.favorites, photo],
        };
      }
    });
  },

  // Check if photo is favorite
  isFavorite: (photoId: number) => {
    const { favorites } = get();
    return favorites.some((fav) => fav.id === photoId);
  },

  // Reset photos (for testing)
  resetPhotos: () => {
    set({
      photos: [],
      currentPage: 0,
      hasMore: true,
      loading: false,
    });
  },
}));

export default useStore;
