"use client";

import { useEffect, useState } from "react";

export default function LoanDistribution() {
  const [imageData, setImageData] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/data_analysis/loan-distribution");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setImageData(data.image); // Backend returns the base64-encoded image
      } catch (err) {
        setError("Failed to fetch loan distribution data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p className="text-center text-lg">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-600">{error}</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col items-center justify-center p-8 sm:p-20">
      <h1 className="text-4xl font-bold mb-6">Loan Distribution</h1>
      <p className="text-lg text-gray-600 mb-6">
        This chart shows the distribution of loan amounts.
      </p>
      {imageData && (
        <img
          src={imageData}
          alt="Loan Amount Distribution"
          className="w-full max-w-4xl rounded shadow-lg"
        />
      )}
    </div>
  );
}
