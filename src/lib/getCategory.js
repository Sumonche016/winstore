export async function getCategory() {
  let res = await fetch(`${process.env.SERVER_URL}/products/categories`);
  if (!res.ok) {
    throw new Error("Failed to fetch category data");
  }

  return res.json();
}
