/**
 * 
 * Preload font files
 * 
 */

import localFont from "next/font/local"

export const adobeCaslonPro = localFont({
  src: [
    // Regular
    {
      path: '../assets/fonts/AdobeCaslonPro-Regular.woff',
      weight: '400'
    },
    {
      path: '../assets/fonts/AdobeCaslonPro-Regular.woff2',
      weight: '400'
    },

    // Regular italic
    {
      path: '../assets/fonts/AdobeCaslonPro-Italic.woff',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../assets/fonts/AdobeCaslonPro-Italic.woff2',
      weight: '400',
      style: 'italic'
    },

    // Semi Bold
    {
      path: '../assets/fonts/AdobeCaslonPro-SemiBold.woff',
      weight: '600'
    },
    {
      path: '../assets/fonts/AdobeCaslonPro-SemiBold.woff2',
      weight: '600'
    },

    // Semi Bold Italic
    {
      path: '../assets/fonts/AdobeCaslonPro-SemiBoldItalic.woff',
      weight: '600',
      style: 'italic'
    },
    {
      path: '../assets/fonts/AdobeCaslonPro-SemiBoldItalic.woff2',
      weight: '600',
      style: 'italic'
    },

    // Bold
    {
      path: '../assets/fonts/AdobeCaslonPro-Bold.woff',
      weight: '700',
    },
    {
      path: '../assets/fonts/AdobeCaslonPro-Bold.woff2',
      weight: '700',
    },

    // Bold Italic
    {
      path: '../assets/fonts/AdobeCaslonPro-BoldItalic.woff',
      weight: '700',
      style: 'italic'
    },
    {
      path: '../assets/fonts/AdobeCaslonPro-BoldItalic.woff2',
      weight: '700',
      style: 'italic'
    },
  ],
  variable: '--Adobe-Caslon-Pro'
})

export const graphikFont = localFont({
  src: [
    // Regular
    {
      path: '../assets/fonts/Graphik-Regular-Web.eot',
      weight: '400'
    },
    {
      path: '../assets/fonts/Graphik-Regular-Web.woff',
      weight: '400'
    },    {
      path: '../assets/fonts/Graphik-Regular-Web.woff2',
      weight: '400'
    },

    // Regular Italic
    {
      path: '../assets/fonts/Graphik-RegularItalic-Web.eot',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../assets/fonts/Graphik-RegularItalic-Web.woff',
      weight: '400',
      style: 'italic'
    },    {
      path: '../assets/fonts/Graphik-RegularItalic-Web.woff2',
      weight: '400',
      style: 'italic'
    },

    // Medium
    {
      path: '../assets/fonts/Graphik-Medium.eot',
      weight: '500'
    },
    {
      path: '../assets/fonts/Graphik-Medium.woff',
      weight: '500'
    },
    {
      path: '../assets/fonts/Graphik-Medium.woff2',
      weight: '500'
    },

    // Medium italic
    {
      path: '../assets/fonts/Graphik-MediumItalic.eot',
      weight: '500',
      style: 'italic'
    },
    {
      path: '../assets/fonts/Graphik-MediumItalic.woff',
      weight: '500',
      style: 'italic'
    },
    {
      path: '../assets/fonts/Graphik-MediumItalic.woff2',
      weight: '500',
      style: 'italic'
    }
  ],
  variable: '--Graphik'
})

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
  variable: '--Irvin'
})

export const neutrafaceFont = localFont({
  src: [
    {
      path: '../assets/fonts/NeutrafaceNewYorkerWeb-SemiBold.woff',
      weight: '500'
    },
    {
      path: '../assets/fonts/NeutrafaceNewYorkerWeb-SemiBold.woff2',
      weight: '500'
    }
  ],
  variable: '--Neutraface'
})