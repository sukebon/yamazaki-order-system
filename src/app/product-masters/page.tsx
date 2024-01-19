import ProductListTable from "@/components/product-masters/product-list-table";
import { db } from "@/db";

export default async function ProductMastersPage() {
  const products = await db.product.findMany({
    include: {
      category: true,
      color: true,
    },
    orderBy: {
      productName: "asc",
    },
  });

  if (!products) {
  }

  return (
    <div className="mx-auto max-w-[calc(600px)]">
      <div className="text-center font-bold">商品マスター一覧</div>
      <ProductListTable products={products} />
    </div>
  );
}
