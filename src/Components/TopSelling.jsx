import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const products = [
  { id: 1, title: "Streetwear Tee", rating: 4.5, price: 32, image: "https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=800&auto=format&fit=crop" },
  { id: 2, title: "Denim Jacket", rating: 4.8, price: 75, image: "https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=800&auto=format&fit=crop" },
  { id: 3, title: "Black Hoodie", rating: 4.7, price: 45, image: "https://images.unsplash.com/photo-1503341338985-c0477be52513?q=80&w=800&auto=format&fit=crop" },
  { id: 4, title: "Casual Shirt", rating: 4.5, price: 38, image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=800&auto=format&fit=crop" },
];

const renderStars = (rating) => {
  const filled = Math.min(5, Math.max(0, Math.round(rating)));
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      i <= filled 
        ? <FaStar key={i} className="text-yellow-400" /> 
        : <FaRegStar key={i} className="text-yellow-400" />
    );
  }
  return stars;
};

const TopSelling = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-14" style={{ fontFamily: 'Satoshi, sans-serif' }}>
      
      <div className="mb-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold capitalize">Top Selling</h2>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <div 
            key={p.id} 
            className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100 transition-all hover:shadow-md hover:-translate-y-1"
          >
            <div className="aspect-[3/3.2] w-full overflow-hidden rounded-xl bg-gray-100 group">
              <img 
                src={p.image} 
                alt={p.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              />
            </div>
            <div className="mt-3">
              <h3 className="font-semibold text-gray-900">{p.title}</h3>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center gap-0.5">{renderStars(p.rating)}</div>
              </div>
              <div className="text-lg font-bold mt-2">₹ {p.price}</div>
            </div>
          </div>
        ))}
      </div>

      
      <div className="mt-8 flex justify-center">
        <button className="px-6 py-3 rounded-full border border-gray-300 bg-white text-black font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base">
          View More
        </button>
      </div>
    </section>
  );
};

export default TopSelling;
