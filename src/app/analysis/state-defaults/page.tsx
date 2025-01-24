export const metadata = {
  title: "State-Wise Loan Defaults",
  description: "Evaluate state-wise loan distributions and default rates.",
};

async function fetchStateDefaults() {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/data_analysis/state-defaults`;

  try {
    const response = await fetch(apiUrl, { cache: "no-store" }); // Ensure fresh data for each request
    if (!response.ok) {
      throw new Error("Failed to fetch state defaults data.");
    }

    return response.json();
  } catch (err: unknown) {
    const errorMessage =
      err instanceof Error ? err.message : "An unexpected error occurred.";
    console.error("Error fetching state defaults data:", errorMessage);
    throw new Error(errorMessage);
  }
}

export default async function StateDefaultsPage() {
  let imageData: string | null = null;
  let highestDefaults: Record<string, number> | null = null;
  let lowestDefaults: Record<string, number> | null = null;
  let summary: string | null = null;
  let error: string | null = null;

  try {
    const data = await fetchStateDefaults();
    imageData = data.image;
    highestDefaults = data.highest_default_rate;
    lowestDefaults = data.lowest_default_rate;
    summary = data.summary;
  } catch (err: unknown) {
    error =
      err instanceof Error ? err.message : "An unexpected error occurred.";
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col items-center p-8 sm:p-20">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold">State-Wise Loan Defaults</h1>
        <p className="text-gray-600">
          Evaluate state-wise loan distributions and default rates.
        </p>
      </header>

      <main className="flex flex-col items-center w-full max-w-4xl">
        {error ? (
          <p className="text-red-600 text-lg">{error}</p>
        ) : (
          <>
            {imageData && (
              <div className="mb-8">
                <img
                  src={imageData}
                  alt="State-Wise Default Rates Chart"
                  className="max-w-full h-auto border rounded-lg shadow-md"
                />
              </div>
            )}

            {summary && (
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Summary</h2>
                <p className="text-gray-700">{summary}</p>
              </section>
            )}

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Top 5 States with Highest Default Rates</h2>
              {highestDefaults ? (
                <ul className="list-disc list-inside">
                  {Object.entries(highestDefaults).map(([state, rate]) => (
                    <li key={state} className="text-gray-700">
                      {state}: {(rate * 100).toFixed(2)}%
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No data available.</p>
              )}
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Top 5 States with Lowest Default Rates</h2>
              {lowestDefaults ? (
                <ul className="list-disc list-inside">
                  {Object.entries(lowestDefaults).map(([state, rate]) => (
                    <li key={state} className="text-gray-700">
                      {state}: {(rate * 100).toFixed(2)}%
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No data available.</p>
              )}
            </section>
          </>
        )}
      </main>
    </div>
  );
}
