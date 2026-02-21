import { useRef, useEffect } from 'react'

export default function WaveBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const drawWave = (yOffset, amplitude, frequency, speed, opacity) => {
      ctx.beginPath()
      ctx.moveTo(0, canvas.height)

      for (let x = 0; x <= canvas.width; x += 2) {
        const y =
          yOffset +
          Math.sin(x * frequency + time * speed) * amplitude +
          Math.sin(x * frequency * 0.5 + time * speed * 0.7) * amplitude * 0.5
        ctx.lineTo(x, y)
      }

      ctx.lineTo(canvas.width, canvas.height)
      ctx.closePath()
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`
      ctx.fill()
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      drawWave(canvas.height * 0.75, 30, 0.003, 0.4, 0.015)
      drawWave(canvas.height * 0.78, 25, 0.004, 0.3, 0.02)
      drawWave(canvas.height * 0.82, 20, 0.005, 0.5, 0.025)
      drawWave(canvas.height * 0.86, 15, 0.006, 0.35, 0.015)
      drawWave(canvas.height * 0.9, 10, 0.007, 0.45, 0.01)

      time += 0.016
      animationId = requestAnimationFrame(animate)
    }

    resize()
    animate()
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  )
}
