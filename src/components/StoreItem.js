const StoreItem = ({ image, title, description, price, rating, votes }) => {
  return (
    <div className="my-10 w-80 md:w-96 bg-white border-2 rounded-lg overflow-hidden shadow hover:shadow-2xl transition-all duration-300">
      <img src={image} alt={title} className="h-72 p-2 w-full object-contain" />

      <div className="p-6">
        <div>
          <p className="text-lg md:text-xl md:px-2 inline-block bg-teal-100 p-1 rounded-lg text-teal-800 font-bold mr-3">
            {price}$
          </p>
          <h3 className="mt-2 font-semibold text-lg md:text-xl leading-tight text-gray-900 hover:text-teal-600 transform origin-left hover:scale-105 transition duration-300">
            {title}
          </h3>
        </div>

        <p className="mt-3 p-1 text-gray-800 md:text-lg">
          {description.length > 130
            ? description.slice(0, 130).trim() + "..."
            : description}
        </p>

        <div className="mt-4 flex items-center">
          {[...Array(5)].map((star, index) => (
            <svg
              key={index}
              className={`h-5 w-5 fill-current md:h-6 md:w-6 ${
                index + 1 <= Math.round(rating)
                  ? "text-yellow-500"
                  : "text-gray-400"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}

          <p className="ml-2 text-xs text-gray-400 italic md:text-sm">
            {votes} votes
          </p>
        </div>
      </div>
    </div>
  );
};

export default StoreItem;
