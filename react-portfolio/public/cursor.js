document.addEventListener("DOMContentLoaded", () => {

  // select cursor divs //
  const clickCursorBlob = document.querySelector(".click-for-blob")
  const cursorTag = document.querySelector(".cursor-trail")
  const balls = cursorTag.querySelectorAll("div")

  // variables //
  let futureX = 0
  let futureY = 0
  let currentX = 30
  let currentY = 30
  let speed = 0.2;
  let requestAnimation;

  // track mouse //
  document.addEventListener("mousemove", function (e) {
    futureX = e.pageX
    futureY = e.pageY
  })

  const moveBalls = (status) => {

    if (status == "activate") {

      balls.forEach((ball, index) => {
        speed = 0.16 - (index * 0.015)

        const animate = function () {
          currentX += (futureX - currentX) * speed
          currentY += (futureY - currentY) * speed
          
          ball.style.left = currentX + "px"
          ball.style.top = currentY + "px"
          
          requestAnimation = requestAnimationFrame(animate);
        }

        animate()

      })
    }
      
    else if (status == "deactivate") {
      speed = 0
      currentX = 30
      currentY = 30
      cancelAnimationFrame(requestAnimation)
    }

  }

  // listen for click //
  clickCursorBlob.addEventListener("click", () => {

    // activate cursor animation //
    if (cursorTag.classList.contains("inactive")) {
      document.body.style.cursor = "none"

      balls.forEach((ball) => {
        ball.style.width = "18px"
        ball.style.height = "18px"
        ball.style.position = "absolute"
      })

      moveBalls("activate")

      cursorTag.classList.replace("inactive", "active")
    }

    else if (cursorTag.classList.contains("active")) {
      document.body.style.cursor = "default"
      
      moveBalls("deactivate")
      
      balls.forEach((ball) => {
        ball.style.left = "30px"
        ball.style.top = "30px"
        ball.style.position = "fixed"
        ball.style.width = "11px"
        ball.style.height = "11px"
      })
      
      cursorTag.classList.replace("active", "inactive")

    }

  })

})
