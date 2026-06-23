import "./globals.css";

export const metadata = {
  title: "Aquaterias – Mineral Water",
  description:
    "Premium mineral water delivery service. Pure, healthy, delivered to your door.",
  keywords: "mineral water, water delivery, healthy water, aquaterias",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Font Awesome via CDN */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body className="body-black">{children}</body>
    </html>
  );
}
