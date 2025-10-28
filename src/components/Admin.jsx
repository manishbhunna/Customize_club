import React, { useRef, useState } from "react";

function ProductForm() {
  // useRef for all inputs
  const productidRef=useRef();
  const nameRef = useRef();
  const descriptionRef = useRef();
  const priceRef = useRef();
  const discountRef = useRef();
  const marketPriceRef = useRef();
  const ratingRef = useRef();

  // 4 image refs
  const imageRefs = [useRef(), useRef(), useRef(), useRef()];

  // longDescription refs
  const namedetailRef = useRef();
  const colourRef = useRef();
  const innerviewRef = useRef();

  // preview state for 4 images
  const [previews, setPreviews] = useState([null, null, null, null]);

  // submitted data array
  const [products, setProducts] = useState([]);

  const handleImageChange = (index) => {
    const file = imageRefs[index].current.files[0];
    if (file) {
      const newPreviews = [...previews];
      newPreviews[index] = URL.createObjectURL(file);
      setPreviews(newPreviews);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const productData = {
      productid:productidRef.current.value,
      name: nameRef.current.value,
      description: descriptionRef.current.value,
      price: priceRef.current.value,
      discount: discountRef.current.value,
      marketPrice: marketPriceRef.current.value,
      rating: ratingRef.current.value,
      images: imageRefs.map((ref) => ref.current.files[0]?.name || null), // सिर्फ file names
      longDescription: {
        namedetail: namedetailRef.current.value,
        colour: colourRef.current.value,
        innerview: innerviewRef.current.value,
      },
    };

    // data array में store
    setProducts((prev) => [...prev, productData]);
  };

  return (
    <div className="container mt-4">
      <h3>Product Input Form</h3>
      <form onSubmit={handleSubmit} className="p-4 border rounded bg-light">
        <div className="mb-3">
          <label className="form-label">Product Id Number</label>
          <input
            type="text"
            className="form-control"
            ref={productidRef}
            placeholder="Enter product ID "
          />
        </div>



        <div className="mb-3">
          <label className="form-label">Product Name</label>
          <input
            type="text"
            className="form-control"
            ref={nameRef}
            placeholder="Enter product name"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            ref={descriptionRef}
            placeholder="Enter description"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="text"
            className="form-control"
            ref={priceRef}
            placeholder="Enter price"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Discount</label>
          <input
            type="text"
            className="form-control"
            ref={discountRef}
            placeholder="Enter discount"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Market Price</label>
          <input
            type="text"
            className="form-control"
            ref={marketPriceRef}
            placeholder="Enter market price"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Rating</label>
          <input
            type="number"
            step="0.1"
            className="form-control"
            ref={ratingRef}
            placeholder="Enter rating"
          />
        </div>

        {/* 4 Image inputs */}
        <h5>Upload 4 Product Images</h5>
        {imageRefs.map((ref, index) => (
          <div className="mb-3" key={index}>
            <label className="form-label">Image {index + 1}</label>
            <input
              type="file"
              accept="image/*"
              className="form-control"
              ref={ref}
              onChange={() => handleImageChange(index)}
            />
            {previews[index] && (
              <div className="mt-2">
                <img
                  src={previews[index]}
                  alt={`preview-${index}`}
                  width="200"
                />
              </div>
            )}
          </div>
        ))}

        <h5>Long Description</h5>
        <div className="mb-3">
          <label className="form-label">Name Detail</label>
          <textarea
            className="form-control"
            ref={namedetailRef}
            placeholder="Enter name detail"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Colour</label>
          <textarea
            className="form-control"
            ref={colourRef}
            placeholder="Enter colour details"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Inner View</label>
          <textarea
            className="form-control"
            ref={innerviewRef}
            placeholder="Enter inner view"
          />
        </div>

        <button type="submit" className="btn btn-success w-100">
          Save Product
        </button>
      </form>

      {/* Array Objects Print */}
      <h2 className="mt-4">All Products Data:</h2>
      <pre>{JSON.stringify(products, null, 2)}</pre>
    </div>
  );
}

export default ProductForm;
