import Link from "next/link";
import FeatureCard from "./components/FeatureCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col justify-between items-center p-8 sm:p-20">
      {/* Hero Section */}
      <header className="flex flex-col items-center gap-4 mb-12 text-center">
        {/* Placeholder SVG for Logo */}
        <div className="w-32 h-8 bg-blue-500 flex items-center justify-center text-white font-bold rounded cursor-pointer">
          <Link href="/">LC</Link>
        </div>
        <h1 className="text-4xl font-bold">Lending Club Analysis</h1>
        <p className="text-lg text-gray-600">
          Discover insights and identify risks in lending data.
        </p>
      </header>

      {/* Features Section */}
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
        <FeatureCard
          title="Loan Distribution"
          description="Analyze and visualize the distribution of loan amounts across the dataset."
          href="/analysis/loan-distribution"
        />
        <FeatureCard
          title="Grade Defaults"
          description="Explore which loan grades are most frequently associated with defaults."
          href="/analysis/grade-defaults"
        />
        <FeatureCard
          title="State Defaults"
          description="Evaluate state-wise loan distributions and default rates."
          href="/analysis/state-defaults"
        />
        <FeatureCard
          title="Risk Factors"
          description="Identify factors contributing to high-default loans."
          href="/analysis/risk-factors"
        />
        <FeatureCard
          title="Temporal Trends"
          description="Analyze how defaults change over time and identify trends."
          href="/analysis/temporal-trends"
        />
        <FeatureCard
          title="Analysis Report"
          description="Get a comprehensive summary of findings, insights, and recommendations."
          href="/analysis/report"
        />
      </main>

      {/* Call to Action */}
      <section className="mt-16 text-center">
        <h2 className="text-2xl font-semibold">Ready to Explore?</h2>
        <p className="text-gray-600 mt-2">
          Start by analyzing loan distributions or exploring default rates.
        </p>
        <div className="flex gap-4 mt-4 justify-center">
          <button className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700">
            Start Analysis
          </button>
          <button className="bg-gray-100 px-6 py-2 rounded shadow hover:bg-gray-200">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
}
