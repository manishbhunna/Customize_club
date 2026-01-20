import ProductStorage from "./ProductStorage";

const AboutItem = () => {
  return (
    <section className="product-section">
      <div className="container">
        <h3 className="text-center w-100 bg-black text-white mb-5 p-3">
          About the Item
        </h3>

        {ProductStorage.MenCollections.images.map((imgSrc, idx) => {
          const isImageRight = idx % 2 === 1;
          const orderImageClass = isImageRight ? "order-md-2" : "";
          const orderTextClass = isImageRight ? "order-md-1" : "";

          // Safeguard in case titles/descriptions are missing
          const title = product.longDescription?.tittle?.[idx] || "No Title";
          const description = product.longDescription?.descriptions?.[idx] || "No Description";

          return (
            <div className="row align-items-center mb-5" key={idx}>
              <div className={`col-md-6 mb-4 ${orderImageClass}`}>
                <img src={imgSrc} className="img-fluid product-img" alt={title} />
              </div>
              <div className={`col-md-6 fs-4 ${orderTextClass}`}>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutItem;
