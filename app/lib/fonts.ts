import localFont from "next/font/local"

export const irvinFont = localFont({
  src: [
    {
      path: '../assets/fonts/Irvin-Heading.otf'
    },
    {
      path: '../assets/fonts/Irvin-Heading.ttf'
    },
    {
      path: '../assets/fonts/Irvin-Heading.woff'
    },
    {
      path: '../assets/fonts/Irvin-Heading.woff2'
    }
  ],
  variable: '--Irvin-Heading'
})
