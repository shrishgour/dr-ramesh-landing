import { ThemeProvider } from "next-themes";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Dr. Ramesh Barupal – Homeopathic Doctor",
  description:
    "Dr. Ramesh Barupal provides holistic homeopathy care for kidney stones, thyroid, migraine, diabetes, allergies, and chronic diseases.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sora.variable} no-scrollbar antialiased`}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={true}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
