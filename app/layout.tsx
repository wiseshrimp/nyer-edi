import "./styles/global.scss"
import { irvinFont } from "./lib/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={`${irvinFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
