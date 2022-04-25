document.addEventListener("DOMContentLoaded", () => {
  const cursorTag = document.querySelector(".cursor-trail")
  const balls = cursorTag.querySelectorAll("div")

  let futureX = 0
  let futureY = 0

  balls.forEach((ball, index) => {
    let currentX = 0
    let currentY = 0
    let speed = 0.3 - (index * 0.01)

    const animate = function () {
    currentX += (futureX - currentX) * speed
    currentY += (futureY - currentY) * speed

    ball.style.left = currentX + "px"
    ball.style.top = currentY + "px"

    requestAnimationFrame(animate) /*run animate on every frame (~60fps)*/
    }

    animate()
  })

  document.addEventListener("mousemove", function (e) {
    futureX = e.pageX
    futureY = e.pageY
  })
})


