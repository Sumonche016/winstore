export async function getProducts() {
  let res = await fetch(`${process.env.SERVER_URL}/products`);
  if (!res.ok) {
    throw new Error("Failed to fetch  data");
  }
  return res.json();
}
