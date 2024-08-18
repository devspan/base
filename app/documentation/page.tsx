// app/documentation/page.tsx
export default function Page() {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Documentation</h1>
        <p>Welcome to the Rupaya documentation. Here you'll find comprehensive guides and documentation to help you start working with Rupaya as quickly as possible, as well as support if you get stuck.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Getting Started</h2>
        <ul className="list-disc list-inside">
          <li>Introduction to Rupaya</li>
          <li>Setting up a Rupaya wallet</li>
          <li>Using Rupaya stablecoins</li>
          {/* Add more documentation topics */}
        </ul>
      </div>
    );
  }