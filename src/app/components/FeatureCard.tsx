export default function FeatureCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href?: string; // Optional href
}) {
  const cardContent = (
    <div className="border rounded-lg p-6 flex flex-col items-center hover:shadow-lg transition-shadow bg-white">
      {/* Placeholder SVG for Feature Icon */}
      <div className="w-16 h-16 bg-gray-300 flex items-center justify-center text-gray-700 rounded">
        Icon
      </div>
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 text-center mt-2">{description}</p>
    </div>
  );

  // If href is provided, wrap cardContent in a link
  return href ? (
    <a href={href} className="block">
      {cardContent}
    </a>
  ) : (
    cardContent
  );
}
