import React from "react";
import { Heart, Star, ShoppingCart } from "lucide-react";
import { type Photo } from "../types";

interface PhotoCardProps {
  photo: Photo;
  isFavorite: boolean;
  onToggleFavorite: (photo: Photo) => void;
}

const PhotoCard: React.FC<PhotoCardProps> = ({
  photo,
  isFavorite,
  onToggleFavorite,
}) => {
  // Use thumbnail or first image as the main image
  const imageUrl = photo.thumbnail || photo.images?.[0] || "";

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {/* Image */}
      <div
        className="flex justify-center items-center bg-gray-100"
        style={{ height: "160px" }}
      >
        <img
          src={imageUrl}
          alt={photo.title}
          className="object-cover rounded-md"
          style={{ maxHeight: "140px", maxWidth: "140px" }}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://via.placeholder.com/140x140?text=No+Image";
          }}
        />
      </div>

      {/* Content */}
      <div className="!p-4">
        {/* Title and Brand */}
        <div className="!mb-2">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
            {photo.id}. {photo.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm !mb-3 line-clamp-2">
          {photo.description}
        </p>

        {/* Price and Rating */}
        <div className="flex items-center justify-between !mb-3">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-gray-900">
              ${photo.price}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Star size={16} className="text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600">{photo.rating}</span>
          </div>
        </div>

        {/* Action Button */}
        <button
          disabled={photo.stock === 0}
          className={`w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg transition-colors ${
            photo.stock > 0
              ? "bg-blue-600 hover:bg-blue-700 text-white"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
          onClick={() => onToggleFavorite(photo)}
        >
          Add to Favourite
          <Heart size={20} fill={isFavorite ? "currentColor" : "none"} />
        </button>
      </div>
    </div>
  );
};

export default PhotoCard;
