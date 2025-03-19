import "@/styles/globals.css"; // Ensures global styles are applied

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-black text-white min-h-screen">
      <Component {...pageProps} />
    </div>
  );
}
