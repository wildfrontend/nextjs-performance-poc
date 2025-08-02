import Image from 'next/image';

import { Product } from '@/types/pages/products';

const ProductContent: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="container mx-auto p-6 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="border rounded-lg overflow-hidden">
            <Image
              alt={product.title}
              className="w-full h-auto"
              height={500}
              src={product.images[0]}
              width={500}
            />
          </div>
          <div className="flex space-x-2 mt-4"></div>
        </div>
        <div>
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-gray-500">{product.category}</p>

          {/* 價格與折扣 */}
          <div className="flex items-center space-x-4 mt-2">
            <span className="text-2xl font-semibold text-primary">
              ${product.price}
            </span>
            {product.discountPercentage > 0 && (
              <span className="text-red-500 text-lg">
                -{product.discountPercentage}% Off
              </span>
            )}
          </div>

          {/* 庫存狀態 */}
          <p
            className={`mt-2 ${product.stock > 0 ? 'text-green-600' : 'text-red-500'}`}
          >
            {product.availabilityStatus}
          </p>

          {/* SKU、重量、尺寸 */}
          <div className="mt-4">
            <p>
              <strong>SKU:</strong> {product.sku}
            </p>
            <p>
              <strong>Weight:</strong> {product.weight} kg
            </p>
            <p>
              <strong>Dimensions:</strong> {product.dimensions.width} x{' '}
              {product.dimensions.height} x {product.dimensions.depth} cm
            </p>
          </div>
          {/* 購買按鈕 */}
          <button className="btn btn-primary w-full mt-4">Add to Cart</button>
          {/* 保固 & 退貨政策 */}
          <p className="mt-4 text-sm text-gray-500">
            <strong>Warranty:</strong> {product.warrantyInformation}
          </p>
          <p className="text-sm text-gray-500">
            <strong>Return Policy:</strong> {product.returnPolicy}
          </p>
        </div>
      </div>
      {/* 評論區塊 */}
      <div className="mt-10">
        <h2 className="text-xl font-bold mb-4">Customer Reviews</h2>
        {product.reviews.length > 0 ? (
          product.reviews.map((review, index) => (
            <div className="border-b py-3" key={index}>
              <p className="text-sm text-gray-500">
                {review.reviewerName} - {review.date}
              </p>
              <p className="text-yellow-500">⭐ {review.rating} / 5</p>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default ProductContent;
