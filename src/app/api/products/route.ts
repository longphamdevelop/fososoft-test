import VirtualData from '@/assets/product.json';

async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function GET() {
  await delay(5000);
  return Response.json(VirtualData);
}
