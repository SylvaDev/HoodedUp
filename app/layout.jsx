import "./globals.css";
import { inter, urbanJungle } from "./fonts";
import Providers from "./providers";

export const metadata = {
  title: "Hooded Up",
  description: "Limited streetwear drops. Hooded up. Locked in.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${urbanJungle.variable}`}>
      <body className="bg-hooded-charcoal text-hooded-ice">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
