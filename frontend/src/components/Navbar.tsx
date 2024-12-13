import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex justify-between items-center">
        <li>
          <Link to="/" className="text-white text-lg font-bold">
            All Products
          </Link>
        </li>
        <li>
          <Link to="/product-by-id" className="text-white text-lg font-bold">
            Product by ID
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
