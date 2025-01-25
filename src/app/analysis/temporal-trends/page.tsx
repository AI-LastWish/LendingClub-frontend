export const metadata = {
  title: "Temporal Trends Analysis",
  description:
    "Analyze and interpret the temporal trends of loan defaults over the years.",
};

async function fetchTemporalTrends() {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/data_analysis/temporal-trends`;

  try {
    const response = await fetch(apiUrl, { cache: "no-store" });
    if (!response.ok) {
      throw new Error("Failed to fetch temporal trends data.");
    }

    return response.json();
  } catch (err: unknown) {
    const errorMessage =
      err instanceof Error ? err.message : "An unexpected error occurred.";
    console.error("Error fetching temporal trends data:", errorMessage);
    throw new Error(errorMessage);
  }
}

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default async function TemporalTrendsPage() {
  let imageData: string | null = null;
  let summary: string | null = null;
  let error: string | null = null;

  try {
    const data = await fetchTemporalTrends();
    imageData = data.image; // Base64 image data from backend
    summary = data.summary; // Generated summary from backend
  } catch (err: unknown) {
    error =
      err instanceof Error ? err.message : "An unexpected error occurred.";
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col items-center p-8 sm:p-20">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold">Temporal Trends Analysis</h1>
        <p className="text-gray-600">
          Analyze and interpret the temporal trends of loan defaults over the
          years.
        </p>
      </header>

      <main className="flex flex-col items-center">
        {error ? (
          <p className="text-red-600 text-lg">{error}</p>
        ) : (
          <>
            {imageData && (
              <img
                src={imageData}
                alt="Temporal Trends Chart"
                className="max-w-full h-auto border rounded-lg shadow-md mb-8"
              />
            )}
            {summary && (
              <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl text-left">
                <h2 className="text-2xl font-semibold mb-4">Summary</h2>
                <p className="text-gray-700">{summary}</p>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}
