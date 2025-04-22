import React from "react";
import ProductVideo from "../assets/Parking video.mp4"; // Replace with your actual video path

const products = [
  "Car Parking",
  "Traffic Challan",
  "FASTag",
  "Test Drive",
  "Bill Payments",
];

const ProductsSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 mt-10">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
        Our Products
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Product List */}
        <div className="space-y-4">
          {products.map((product, index) => (
            <p key={index} className="text-lg font-semibold text-gray-900">
              {product}
            </p>
          ))}

          {/* Highlighted Valet Services Card */}
          <div className="bg-orange-500 text-white p-6 rounded-lg mt-4">
            <h3 className="text-xl font-bold">Valet Services</h3>
            <a href="#" className="text-sm font-semibold underline float-right">
              Learn More
            </a>
            <p className="text-sm mt-2">
              Leading Valet Service in Noida: Professional, Efficient, and Trusted by Top Brands
            </p>
          </div>
        </div>

        {/* Right Side - Video */}
        <div className="w-full">
          <video
            src={ProductVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;


// import React from "react";

// // Product list
// const products = [
//   "Car Parking",
//   "Traffic Challan",
//   "FASTag",
//   "Test Drive",
//   "Bill Payments",
// ];

// // Video sources
// const youtubeEmbedURL = "https://www.youtube.com/embed/r1b03uKWk_M"; // Replace with your own YouTube video
// const hostedMp4URL = "https://www.w3schools.com/html/mov_bbb.mp4";   // Replace with your own hosted mp4 video

// const ProductsSection = () => {
//   return (
//     <div className="max-w-7xl mx-auto px-6 mt-10">
//       {/* Section Title */}
//       <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
//         Our Products
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//         {/* Left Side - Product List */}
//         <div className="space-y-4">
//           {products.map((product, index) => (
//             <p key={index} className="text-lg font-semibold text-gray-900">
//               {product}
//             </p>
//           ))}

//           {/* Highlighted Valet Services Card */}
//           <div className="bg-orange-500 text-white p-6 rounded-lg mt-4 shadow-md">
//             <h3 className="text-xl font-bold">Valet Services</h3>
//             <a
//               href="#"
//               className="text-sm font-semibold underline float-right"
//             >
//               Learn More
//             </a>
//             <p className="text-sm mt-2">
//               Leading Valet Service in Noida: Professional, Efficient, and Trusted by Top Brands
//             </p>
//           </div>
//         </div>

//         {/* Right Side - Video Embed */}
//         <div className="w-full">
//           {/* YouTube Embed */}
//           <iframe
//             className="w-full h-64 md:h-96 rounded-lg shadow-md"
//             src={youtubeEmbedURL}
//             title="Valet Service Video"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           ></iframe>

//           {/* Optional fallback for hosted .mp4 */}
//           {/* Uncomment this section if using direct mp4 instead of YouTube */}
//           {/*
//           <video
//             src={hostedMp4URL}
//             autoPlay
//             loop
//             muted
//             playsInline
//             controls
//             className="w-full h-auto rounded-lg shadow-md mt-4"
//           />
//           */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductsSection;
