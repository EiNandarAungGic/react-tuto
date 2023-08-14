import React from "react";

export default function Contact(props) {
  return (
    <div class="bg-white rounded-lg shadow-md">
      <div class="p-4">
        <div class="h-auto">
          <img src={props.image} class="object-cover w-1/3 h-auto rounded-lg" />
        </div>
        <h2 class="text-lg font-semibold mt-4">{props.name}</h2>
        <p class="text-gray-600 mt-2">{props.price}</p>
      </div>
    </div>
  );
}
