const TARGET_FPS = 60

const requestAnimationFrame = window.requestAnimationFrame
  ? window.requestAnimationFrame
  : (fn, fps = TARGET_FPS) => setTimeout(fn, 1000 / fps)

export default requestAnimationFrame
