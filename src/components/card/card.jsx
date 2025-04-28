import './Card.css'

const card = ({selectedProducts,handleDelete}) => {
  //console.log(selectedProducts)
    return (
        <div>
          {
            selectedProducts.map((product) =>(
            <div>

              <div className='mx-10'>
                <img className="selected-img " src={product.image} alt=""/>
                <p>{product.name}</p>
                <button onClick={()=>handleDelete(product.id)} class='btn '>Delete</button>
                </div>
            </div>))
          }
        </div>
    );
};

export default card;