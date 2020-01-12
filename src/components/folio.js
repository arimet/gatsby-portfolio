import React from "react";
import { Link } from "gatsby";

const Folio = ({ title, description, path, image }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
    <img className="w-full" src={image} alt="Sunset in the mountains"/>
    <div className="px-6 py-4">
     <div className="font-bold text-xl mb-2">{ title }</div>
      <p className="text-gray-700 text-base">
        { description }
      </p>
    </div>
    <div className="px-6 py-4">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
    </div>
  </div>
);

export default Folio;