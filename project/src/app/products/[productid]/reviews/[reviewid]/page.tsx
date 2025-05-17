// app/products/[productId]/reviews/[reviewId]/page.tsx

interface PageProps {
    params: {
      productid: string;
      reviewid: string;
    };
  }
  
  export default async function ProductReview({ params }: PageProps) {
    const { productid, reviewid } = params;
  
    console.log("Product ID:", productid);
    console.log("Review ID:", reviewid);
  
    return (
      <div>
        <h1>Review {reviewid} for Product {productid}</h1>
      </div>
    );
  }
  