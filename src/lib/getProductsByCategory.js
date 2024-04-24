export async function getProductByCategory(category) {
  console.log(category);
  let res = await fetch(
    `${process.env.SERVER_URL}/products/category/${
      category ? category : "jewelery"
    }`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch category data");
  }
  return res.json();
}
