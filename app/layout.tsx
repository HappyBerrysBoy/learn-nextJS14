import Navigation from "../components/navigation";
// import "../styles/global.css";

export const metadata = {
  title: {
    default: "Next.js Playground",
    template: "%s | Next.js",
  },
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  );
}
