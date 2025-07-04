import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';

export interface ProductImage {
  productImage: string;
  productName: string;
}

export interface ProductSpecs {
  model_no: string;
  color: string[];
  origin: string;
  trademark: string;
  type: string;
  pressure: string;
  weight: string;
  number_of_burners: number;
  ignition_mode: string;
  production_capacity: string;
  MOQ: number;
}

export interface ProductVariant {
  product_name: string;
  material: string;
  specification: ProductSpecs;
  features: string[];
}

export interface ProductCardProps {
  id: number;
  name: string;
  slug: string;
  description: string;
  imageUrls: ProductImage[];
  longDesc1: string;
  longDesc2: string;
  specification?: ProductVariant[]; 
}

export default function ProductCard({ products = [],limit}: { products?: ProductCardProps[]; limit?: number;}) {
    const visibleProducts = limit ? products.slice(0,limit) : products;
    const navigate = useNavigate();

   const handleProductCatalog = (product: ProductCardProps) => {
        navigate(`/products/${product.slug}`);
    };

  return (
    <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleProducts.map((product: ProductCardProps)=>(
            <div 
                key={product.id} 
                // className="bg-white p-6 rounded-lg shadow-md mb-6 text-center hover:text-white hover:bg-secondary transition-colors duration-300 ease-in-out"
                className="p-6 rounded-lg shadow-md mb-6 text-center transition-colors duration-300 ease-in-out bg-white"
            >
                {product.imageUrls && 
                    <div className="mb-4 text-secondary">
                        <img
                            src={product.imageUrls[0]?.productImage}
                            alt={product.imageUrls[0]?.productName}
                            width="100%"
                            height="50%"
                            className="object-cover w-full h-60 rounded-lg"
                        />
                    </div>
                }
                <h1 className="text-lg font-semibol text-primarycolor">{product.name}</h1>
                <p className= "text-xs p-4 text-accent">{product.description}</p>
                <Button label="Go To Product" variantStyle="noBgStyle" onClick={() => handleProductCatalog(product)} rightIcon ={<FontAwesomeIcon icon={faArrowRightLong} className="hover:text-white" />} />
            </div>

        ))}
    </div>
  );
}