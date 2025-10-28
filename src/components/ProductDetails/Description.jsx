import UserInput from "./UserInput"

const Description = ({product}) => {
  return (<>
   
            <h3 className="fw-bold mb-3 fs-5 fs-md-4 fs-lg-3">{product.name}</h3>

<div className="d-flex flex-wrap gap-2 gap-md-3 mb-4">
  <span className="text-danger fw-bold fs-6 fs-md-5">{product.discount}</span>
  <span className="text-success fw-bold fs-5 fs-md-4">₹{product.price}</span>
  <h6 className="fs-6 fs-md-5">
    MRP: <del>{product.marketPrice}</del> (incl of all tax)
  </h6>
</div>

<div className="col-lg-12 mb-4 fs-6 fs-md-5">
  <ul>
    {product.details.map((detail, index) => (
      <li key={index}>{detail}</li>
    ))}
  </ul>
</div>

<UserInput product={product}></UserInput>
               
  </>
  )
}

export default Description