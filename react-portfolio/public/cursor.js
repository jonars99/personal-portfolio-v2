document.addEventListener("DOMContentLoaded", () => {

  // select cursor divs //
  const clickCursorBlob = document.querySelector(".click-for-blob")
  const cursorTag = document.querySelector(".cursor-trail")
  const balls = cursorTag.querySelectorAll("div")

  // variables //
  let futureX = 0
  let futureY = 0
  let currentX = 25
  let currentY = 23
  let speed;
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
      currentX = 25
      currentY = 23
      cancelAnimationFrame(requestAnimation)
    }

  }

  // listen for click //
  clickCursorBlob.addEventListener("click", () => {
    document.querySelector(".message").innerHTML = "you can put me back"

    // activate cursor animation //
    if (cursorTag.classList.contains("inactive")) {
      document.body.style.cursor = "none"

      balls.forEach((ball) => {
        ball.style.width = "18px"
        ball.style.height = "18px"
        ball.style.position = "absolute"
        ball.classList.remove("bouncing")
      })
      
      clickCursorBlob.classList.remove("bouncing")

      moveBalls("activate")

      cursorTag.classList.replace("inactive", "active")
    }

    else if (cursorTag.classList.contains("active")) {
      document.body.style.cursor = "default"
      document.querySelector(".message").style.display = "none"

      moveBalls("deactivate")
      
      balls.forEach((ball) => {
        ball.style.left = "25px"
        ball.style.top = "23px"
        ball.style.position = "fixed"
        ball.style.width = "11px"
        ball.style.height = "11px"
        ball.classList.add("bouncing")
      })

      clickCursorBlob.classList.add("bouncing")
      
      cursorTag.classList.replace("active", "inactive")

    }

  })

})
