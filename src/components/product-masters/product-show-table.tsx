"use client"
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { Category, Color, Product, Size, Sku } from "@prisma/client";

interface ProductCategoryColor extends Product {
  category: Category | null;
  color: Color | null;
}

interface SkuProductSize extends Sku {
    product: ProductCategoryColor;
    size: Size | null;
}

interface ProductShowTableProps {
  skus:SkuProductSize[];
}

export default function ProductShowTable({ skus }: ProductShowTableProps) {
  return (
    <Table className="mt-6">
      <TableHeader>
        <TableColumn>JANコード</TableColumn>
        <TableColumn>商品コード</TableColumn>
        <TableColumn>サイズ</TableColumn>
        <TableColumn>価格</TableColumn>
      </TableHeader>
      <TableBody>
        {skus?.map((sku) => (
          <TableRow key={sku.id}>
            <TableCell>{sku.janCode}</TableCell>
            <TableCell>{sku.productCode}</TableCell>
            <TableCell>{sku.size?.name}</TableCell>
            <TableCell>{sku.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
