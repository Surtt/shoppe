import { ProductCartProps } from './product-cart.props';

const ProductCart = ({ className, ...props }: ProductCartProps) => {
  return <div {...props} className={className}></div>;
};

export default ProductCart;
