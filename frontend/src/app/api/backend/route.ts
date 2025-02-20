export async function GET() {
  return new Response(
    JSON.stringify({ message: "Metsaspace Backend is running!" }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}
