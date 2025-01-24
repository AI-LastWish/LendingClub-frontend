export const metadata = {
  title: "Risk Factors Analysis",
  description: "Identify key factors contributing to high-default loans.",
};

async function fetchRiskFactors() {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/data_analysis/risk-factors`;

  try {
    const response = await fetch(apiUrl, { cache: "no-store" }); // Ensure fresh data for each request
    if (!response.ok) {
      throw new Error("Failed to fetch risk factors data.");
    }

    return response.json();
  } catch (err: unknown) {
    const errorMessage =
      err instanceof Error ? err.message : "An unexpected error occurred.";
    console.error("Error fetching risk factors data:", errorMessage);
    throw new Error(errorMessage);
  }
}

export default async function RiskFactorsPage() {
  let data: {
    image: string;
    summary: string;
    most_correlated: Record<string, number>;
    least_correlated: Record<string, number>;
  } | null = null;
  let error: string | null = null;

  try {
    data = await fetchRiskFactors();
  } catch (err: unknown) {
    error = err instanceof Error ? err.message : "An unexpected error occurred.";
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col items-center p-8 sm:p-20">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold">Risk Factors Analysis</h1>
        <p className="text-gray-600">
          Identify key factors contributing to high-default loans.
        </p>
      </header>

      <main className="flex flex-col items-center w-full max-w-4xl">
        {error ? (
          <p className="text-red-600 text-lg">{error}</p>
        ) : data ? (
          <>
            {/* Display Image */}
            <img
              src={data.image}
              alt="Risk Factors Chart"
              className="max-w-full h-auto border rounded-lg shadow-md mb-8"
            />

            {/* Display Summary */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold">Summary</h2>
              <p className="text-gray-700 mt-2">{data.summary}</p>
            </section>

            {/* Display Most and Least Correlated Factors */}
            <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
              <div>
                <h3 className="text-xl font-semibold mb-4">Most Correlated Factors</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  {Object.entries(data.most_correlated).map(([key, value]) => (
                    <li key={key}>
                      <strong>{key}</strong>: {value.toFixed(3)}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Least Correlated Factors</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  {Object.entries(data.least_correlated).map(([key, value]) => (
                    <li key={key}>
                      <strong>{key}</strong>: {value.toFixed(3)}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </>
        ) : (
          <p>Loading data...</p>
        )}
      </main>
    </div>
  );
}
