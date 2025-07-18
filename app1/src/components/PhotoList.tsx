import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import useStore from "../store/useStore";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import PhotoCard from "./PhotoCard";

const PhotoList: React.FC = () => {
  const navigate = useNavigate();
  const {
    photos,
    currentPage,
    loading,
    hasMore,
    loadPhotos,
    toggleFavorite,
    isFavorite,
  } = useStore();

  useEffect(() => {
    console.log("PhotoList useEffect:", {
      photosLength: photos?.length,
      loading,
    });
    if (!photos || photos.length === 0) {
      console.log("Loading initial photos...");
      loadPhotos(1, true);
    }
  }, [loadPhotos]);

  // Handle infinite scroll
  const handleLoadMore = () => {
    if (!loading && hasMore) {
      loadPhotos(currentPage + 1);
    }
  };

  // Set up infinite scroll
  useInfiniteScroll({
    loading,
    hasMore,
    onLoadMore: handleLoadMore,
    threshold: 1000,
  });

  return (
    <div className="min-h-screen bg-gray-50 !p-6">
      <div className="max-w-8xl mx-auto relative">
        {/* Header with Back Button */}
        <div className=" sticky !top-0 z-10 bg-gray-50 flex flex-col md:flex-row items-center justify-between gap-4 !mb-8 py-4">
          <h1 className="text-3xl font-bold text-gray-900 text-center md:text-left">
            Product Gallery
          </h1>
          <button
            onClick={() => navigate("/app1")}
            className="flex items-center gap-2 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Dashboard
          </button>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 !p-4">
          {Array.isArray(photos) && photos.length > 0
            ? photos.map((photo) => {
                console.log("Rendering photo:", photo.id, photo.title);
                return (
                  <PhotoCard
                    key={photo.id}
                    photo={photo}
                    isFavorite={isFavorite(photo.id)}
                    onToggleFavorite={toggleFavorite}
                  />
                );
              })
            : !loading && (
                <div className="col-span-full text-center py-8">
                  <p className="text-gray-600">No products available</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Photos: {JSON.stringify(photos)} | Loading:{" "}
                    {loading.toString()}
                  </p>
                </div>
              )}
        </div>

        {/* Loading Indicator */}
        {loading && (
          <div className="flex justify-center items-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            <span className="ml-2 text-gray-700">Loading products...</span>
          </div>
        )}

        {/* End of List Message */}
        {!hasMore && Array.isArray(photos) && photos.length > 0 && (
          <div className="text-center py-8">
            <p className="text-gray-600">No more products to load</p>
          </div>
        )}

        {/* Error State */}
        {!loading && (!Array.isArray(photos) || photos.length === 0) && (
          <div className="text-center py-8">
            <p className="text-gray-600">
              Unable to load products. Please try again.
            </p>
            <button
              onClick={() => {
                console.log("Retry button clicked");
                loadPhotos(1, true);
              }}
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Retry
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotoList;
