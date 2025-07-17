import React from "react";
import { useNavigate } from "react-router-dom";
import { ExternalLink, Heart } from "lucide-react";
import useStore from "../store/useStore";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const favorites = useStore((state) => state.favorites);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>

        {/* Navigation Button */}
        <div className="mb-8">
          <button
            onClick={() => navigate("/app1/list")}
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors"
          >
            <ExternalLink size={20} />
            Go to Photo List
          </button>
        </div>

        {/* Favorites Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Favorites ({favorites.length})
          </h2>

          {favorites.length === 0 ? (
            <p className="text-gray-600 text-center py-8">
              No favorites yet. Go to the photo list to add some!
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {favorites.map((photo) => (
                <div
                  key={photo.id}
                  className="bg-gray-50 rounded-lg p-4 border"
                >
                  <img
                    src={photo.images[0]}
                    alt={photo.title}
                    className="rounded-md mb-3"
                  />
                  <h3 className="font-medium text-gray-900 mb-2">
                    ID: {photo.id}
                  </h3>
                  <p className="text-sm text-gray-700 line-clamp-2">
                    {photo.title}
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <Heart size={16} className="text-red-500 fill-current" />
                    <span className="text-sm text-gray-600">Favorite</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
