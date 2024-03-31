import products from "@/data/products";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const category = searchParams.get("category");

  if (!category) return Response.json(products);

  return Response.json(
    products.filter((product) => product.category === category),
  );
}
