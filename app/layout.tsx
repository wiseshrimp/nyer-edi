import "./styles/global.scss"
import { adobeCaslonPro, graphikFont, irvinFont, neutrafaceFont } from "./lib/fonts"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={`
          ${irvinFont.variable} 
          ${neutrafaceFont.variable}
          ${adobeCaslonPro.variable}
          ${graphikFont.variable}
        `}>
        {children}
      </body>
    </html>
  );
}
