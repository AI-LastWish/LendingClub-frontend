export const metadata = {
  title: "Lending Club Analysis Report",
  description: "A comprehensive report summarizing loan analysis and trends.",
};

async function fetchReport() {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/data_analysis/report`;

  try {
    const response = await fetch(apiUrl, { cache: "no-store" }); // Fetch fresh data for each request
    if (!response.ok) {
      throw new Error("Failed to fetch the report data.");
    }

    return response.json();
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "An unexpected error occurred.";
    console.error("Error fetching report data:", errorMessage);
    throw new Error(errorMessage);
  }
}

type ReportData = {
  summary: string;
  image?: string;
};

export default async function ReportPage() {
  let reportData: ReportData | null = null;
  let error: string | null = null;

  try {
    const data = await fetchReport();
    reportData = data as ReportData; // Ensure fetched data matches the expected type
  } catch (err) {
    error = err instanceof Error ? err.message : "An unexpected error occurred.";
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-8 sm:p-20">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold">Lending Club Analysis Report</h1>
        <p className="text-gray-600">
          A comprehensive summary of loan distributions, defaults, and trends.
        </p>
      </header>

      {error ? (
        <p className="text-red-600 text-lg">{error}</p>
      ) : (
        reportData && (
          <div className="space-y-12">
            {/* Visualization and Summary */}
            <section>
              <h2 className="text-2xl font-semibold">Summary</h2>
              <p className="mt-2 text-gray-600">{reportData.summary}</p>
              {reportData.image && (
                <img
                  src={reportData.image}
                  alt="Analysis Visualization"
                  className="mt-4 max-w-full h-auto border rounded-lg shadow-md"
                />
              )}
            </section>
          </div>
        )
      )}
    </div>
  );
}
