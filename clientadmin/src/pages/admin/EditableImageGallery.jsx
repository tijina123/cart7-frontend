import React, { useRef } from "react";

const EditableImageGallery = ({ images, onEdit, onDelete }) => {
  const fileInputRefs = useRef([]);
  const addImageRef = useRef(null);

  const handleReplaceImage = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      onEdit(index, file); // delegate file replacement to parent
    }
  };

  const triggerFileInput = (index) => {
    if (fileInputRefs.current[index]) {
      fileInputRefs.current[index].click();
    }
  };

  const handleAddImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      onEdit(images.length, file); // add new image at the next index
    }
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative rounded-lg overflow-hidden shadow-md border border-gray-200 group"
        >
          <img
            src={typeof image === "string" ? image : URL.createObjectURL(image)}
            alt={`Preview ${index}`}
            className="w-full h-22 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 hidden group-hover:flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => triggerFileInput(index)}
              className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-1 rounded shadow"
            >
              Edit
            </button>
            <button
              type="button"
              onClick={() => onDelete(index)}
              className="bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1 rounded shadow"
            >
              Delete
            </button>
          </div>
          <input
            type="file"
            accept="image/jpeg, image/png, image/webp"
            style={{ display: "none" }}
            ref={(el) => (fileInputRefs.current[index] = el)}
            onChange={(e) => handleReplaceImage(e, index)}
          />
        </div>
      ))}

      {images.length < 4 && (
        <div
          className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg h-24 cursor-pointer hover:border-purple-400 transition"
          onClick={() => addImageRef.current.click()}
        >
          <span className="text-gray-500">+ Add Image</span>
          <input
            type="file"
            accept="image/jpeg, image/png, image/webp"
            style={{ display: "none" }}
            ref={addImageRef}
            onChange={handleAddImage}
          />
        </div>
      )}
    </div>
  );
};

export default EditableImageGallery;
