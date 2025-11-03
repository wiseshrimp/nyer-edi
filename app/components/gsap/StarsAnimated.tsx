/**
 * StarsAnimated.tsx
 * 
 * Renders two canvas elements: Tile Canvas and Full Size Canvas
    * Tile canvas: Renders stars image, loops through an array of star positions and "erases" the stars
    * Full size canvas: Creates a pattern out of tile canvas and repeats across viewport width and height, thus preventing unnecessary additional loops
 */

import { useEffect, useRef } from "react"
import styles from './Stars.module.scss'
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

type StarPos = {
    x: number
    y: number
    r: number
}

type StarType = StarPos & {
    alpha: number
    target: number
    nextChange: number
    ease: number
}

const STAR_POSITIONS: StarPos[] = [
    { x: 150, y: 50, r: 10 },
    { x: 200, y: 85, r: 20 },
    { x: 505, y: 75, r: 20 },
    { x: 835, y: 200, r: 30 },
    { x: 110, y: 560, r: 30 },
    { x: 790, y: 520, r: 30 },
    { x: 820, y: 550, r: 30 },
    { x: 245, y: 405, r: 20 },
    { x: 100, y: 840, r: 10 }
]

const StarsAnimated = () => {
    const tileCanvasRef = useRef<HTMLCanvasElement | null>(null)
    const visibleCanvasRef = useRef<HTMLCanvasElement | null>(null)
    
    const imgRef = useRef<HTMLImageElement | null>(null)
    const starsRef = useRef<StarType[] | null>(null)

    useEffect(() => {
        // Load star image
        const img = new Image()
        img.src = '/images/stars.png'
        img.onload = () => {
            imgRef.current = img
            resizeCanvas()
            // Size tile canvas according to image dimensions
            resizeSmallCanvas()
            draw()
        }

        // Create random star values
        const now = performance.now()
        starsRef.current = STAR_POSITIONS.map(star => ({
            ...star,
            alpha: 1, // Current alpha value
            target: 1, // Target alpha value before resets
            nextChange: now + Math.random() * 800, // Next time it will oscillate alpha
            ease: Math.random() * 0.03 // Random easing value
        }))

        // Resize listener – Only need to resize the visible canvas
        window.addEventListener('resize', resizeCanvas)
        return () => window.removeEventListener('resize', resizeCanvas)
    }, [])

    // Size small canvas to be the same height and width as image
    const resizeSmallCanvas = () => {
        const canvas = tileCanvasRef.current
        const img = imgRef.current
        if (!canvas || !img) {
            return
        }
        canvas.width = img.width
        canvas.height = img.height
    }

    const resizeCanvas = () => {
        const canvas = visibleCanvasRef.current
        if (!canvas) {
            return
        }
        const dpr = window.devicePixelRatio || 1
        const width = window.innerWidth
        const height = window.innerHeight

        canvas.width = width * dpr
        canvas.height = height * dpr
        canvas.style.height = `${height}px`
        canvas.style.width = `${width}px`
        const ctx = canvas.getContext('2d')!
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const draw = () => {
        const   canvas = tileCanvasRef.current,
                visibleCanvas = visibleCanvasRef.current,
                img = imgRef.current,
                stars = starsRef.current

        if (!canvas || !img || !stars || !visibleCanvas) {
            requestAnimationFrame(draw)
            return
        }

        const tileCtx = canvas.getContext('2d')
        const visibleCtx = visibleCanvas.getContext('2d')

        if (!tileCtx || !visibleCtx) {
            requestAnimationFrame(draw)
            return
        }

        const now = performance.now()
        tileCtx.clearRect(0, 0, img.width, img.height)
        
        // Draw tile canvas
        tileCtx.drawImage(img, 0, 0, img.width, img.height)
        tileCtx.save()
        tileCtx.globalCompositeOperation = 'destination-out'

        // Remove areas of the tile canvas image
        for (const star of stars) {
            // Reassign change values
            if (now > star.nextChange) {
                star.nextChange = now + Math.random() * 1500
                const toBrighten = Math.random() < 0.5 // Brighten or darken?
                star.target = toBrighten ? 1 : Math.random() * 0.01 // Fully visible or random alpha
                star.ease = Math.random() * 0.3
            }

            // Lerp toward target value
            star.alpha += (star.target - star.alpha) * star.ease
            tileCtx.fillStyle = "green"

            tileCtx.globalAlpha = 1 - star.alpha
            // tileCtx.globalAlpha = 1 // Debugging :) 
            // tileCtx.globalCompositeOperation = 'source-over' // Debugging :) 
            tileCtx.beginPath()
            tileCtx.fillRect(star.x, star.y, star.r * 2, star.r * 2)
        }

        // Reset tileCtx for next loop
        tileCtx.restore()
        tileCtx.globalAlpha = 1
        tileCtx.globalCompositeOperation = 'source-over'

        // Paint the full screen canvas with the tile canvas pattern
        const width = visibleCanvas.width
        const height = visibleCanvas.height
        visibleCtx.clearRect(0, 0, width, height)
        const pattern = visibleCtx.createPattern(canvas, 'repeat')

        if (pattern) {
            visibleCtx.fillStyle = pattern
            visibleCtx.fillRect(0, 0, width, height)
        }

        requestAnimationFrame(draw)
    }

    return (
        <div>
            {/* Tile Canvas (hidden) */}
            <canvas
                style={{display: 'none'}}
                ref={tileCanvasRef} />

            {/* Visible Canvas with Tile Pattern */}
            <canvas 
                className={`${styles.stars__canvas} gsap__stars-layer`}
                ref={visibleCanvasRef} />
        </div>
    )
}

export default StarsAnimated