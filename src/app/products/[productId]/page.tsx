export default function Products({
  params,
}: {
  params: { productId: string };
}) {
  return <h1>Product Details1 {params.productId}</h1>;
}
