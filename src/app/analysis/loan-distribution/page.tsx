export const metadata = {
  title: "Loan Distribution Analysis",
  description: "Visualize the distribution of loan amounts.",
};

async function fetchLoanDistribution() {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/data_analysis/loan-distribution`;

  try {
    const response = await fetch(apiUrl, { cache: "no-store" }); // Ensure fresh data for each request
    if (!response.ok) {
      throw new Error("Failed to fetch loan distribution data.");
    }

    return response.json();
  } catch (err: unknown) {
    const errorMessage =
      err instanceof Error ? err.message : "An unexpected error occurred.";
    console.error("Error fetching loan distribution data:", errorMessage);
    throw new Error(errorMessage);
  }
}

export default async function LoanDistributionPage() {
  let imageData: string | null = null;
  let summary: string | null = null;
  let error: string | null = null;

  try {
    const data = await fetchLoanDistribution();
    imageData = data.image; // Base64 image data from backend
    summary = data.summary; // Generated summary from backend
  } catch (err: unknown) {
    error =
      err instanceof Error ? err.message : "An unexpected error occurred.";
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col items-center p-8 sm:p-20">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold">Loan Distribution</h1>
        <p className="text-gray-600">
          Analyze and visualize the distribution of loan amounts.
        </p>
      </header>

      <main className="flex flex-col items-center gap-8">
        {error ? (
          <p className="text-red-600 text-lg">{error}</p>
        ) : (
          <>
            {imageData ? (
              <img
                src={imageData}
                alt="Loan Distribution Chart"
                className="max-w-full h-auto border rounded-lg shadow-md"
              />
            ) : (
              <p>No chart available.</p>
            )}

            {summary ? (
              <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl">
                <h2 className="text-xl font-semibold mb-4">Summary</h2>
                <p className="text-gray-700">{summary}</p>
              </div>
            ) : (
              <p>No summary available.</p>
            )}
          </>
        )}
      </main>
    </div>
  );
}
