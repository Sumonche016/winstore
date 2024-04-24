export async function getSingleProduct(id) {
  let res = await fetch(`${process.env.SERVER_URL}/products/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch  data");
  }
  return res.json();
}
