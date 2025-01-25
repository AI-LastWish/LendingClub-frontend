export const metadata = {
  title: "Loan Distribution",
  description: "View the distribution of loan amounts.",
};

// Fetch data on the server side
async function fetchLoanDistribution() {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/data_analysis/loan-distribution`;

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Failed to fetch data from API: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    return { error: "Failed to fetch loan distribution data." };
  }
}

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default async function LoanDistributionPage() {
  const data = await fetchLoanDistribution();

  if (data.error) {
    return (
      <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col items-center justify-center p-8 sm:p-20">
        <h1 className="text-4xl font-bold mb-6">Loan Distribution</h1>
        <p className="text-red-600 text-lg">{data.error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col items-center justify-center p-8 sm:p-20">
      <h1 className="text-4xl font-bold mb-6">Loan Distribution</h1>
      <p className="text-lg text-gray-600 mb-6">
        This chart shows the distribution of loan amounts.
      </p>
      {data.image && (
        <img
          src={data.image}
          alt="Loan Amount Distribution"
          className="w-full max-w-4xl rounded shadow-lg"
        />
      )}
    </div>
  );
}
