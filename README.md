## README
Sue Roh's take home assignment for New Yorker's Developer Editorial Design / Interactives position.

## Instructions
Using Node.js, React and a framework of your choice (e.g., Gatsby, Astro, Next.js), make a static site following the design file linked below and using the included text and assets.
Add the following effects to the basic design:
1. Animate the searchlights like this:
https://downloads.newyorker.com/tnyint-code-test/hero-animation.mp4
2. Use a parallax effect to make the clouds scroll more slowly than the other background elements.

You can use any libraries you’d like (for animation, styling, etc.); just be prepared to explain your choices. Share your finished work in a GitHub repository. Use incremental commits to show your progress.

Your finished project should have two npm scripts; a start script that starts the development server at localhost:3000, and a build script that outputs static files to a dist/ directory.

You will be evaluated on the following criteria:
- Does the project work as intended
- Fidelity to the design spec
- Mobile / desktop responsiveness
- Readability and organization of the code

## Stack
- Next.js (React)
- Typescript
- SCSS modules
- GSAP

## Installation

```bash
# Install dependencies
npm install

npm run dev
# or
npm start
# or
npm run build
npm run serve

# Open
http://localhost:3000
```

## Notes
- **Animation Libraries**: I used GSAP because of the scrolling / parallax features of the assignment. Also, GSAP's timeline feature makes it really easy to control timing of the animations. 
- **Star Animation**: I wanted to do something extra / play around, so I implemented a version of the star animation in the reference video. Instead of the reference video which flickered the stars using what looks to be rotating objects, I faded in/out areas of the image

## Technical Improvements (Future Work)
- **Responsiveness**: Not fully responsive to extra small and extra large screens.
- **Animations**: The transition scroll animation between the header and body text is a little jolty, since the GSAP scroll and browser window scroll are operating at different speeds. With more time, I would smooth out the transition between the two.
- **Image Optimizations**: The images are already small, but the pngs could be exported as webp files to save space. Also, the cloud images are all separate and could be a single file, unless the designers wanted to purposefully stagger them for different screen sizes.
- **Star Animation Optimization**: The current star animation currently renders frame-by-frame. I'm sure that there is a better way to do this – perhaps by interpolating between a couple pre-rendered textures?
- **Accessibility**: I made sure that the scroll was also easily navigable by the keyboard, but I would revisit other forms of navigation / shortcut buttons to verify that all interactive elements are accessible. Many of the elements are missing aria labels and need to be added.
- **Image Loading**: Add loading states for images + content
- **Testing + Edge Cases**: Add Jest or another testing library and validate that the layout looks correct with different text input