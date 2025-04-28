import './Navbar.css'

const Navbar = ({selectedProducts ,price}) => {
    return (
        <div className="bg flex justify-around font-bold p-4 m-4 " >
            <div>
            <h3>SHOPPING MALL</h3>
        </div>
        <div className="">
            <ul className="flex gap-5">
            <li>
            <a href="#" >HOME</a>

            </li>
            <li>
            <a href="#" >PRODUCT</a>

            </li>
            <li> CART {selectedProducts.length}
           

            </li>
            <li>
      <p>$ {price}</p>

            </li>
            </ul>
        </div>
        </div>

    );
};

export default Navbar;