let start = document.getElementById("start");
let random = document.getElementById("random");
let score = document.getElementById("score");
let print = document.getElementById("print");
let topScore = document.getElementById("topScore");


random.style.display = "none";

start.addEventListener("click", function () {

    random.style.display = "block";

    random.addEventListener("click", function () {

        // location of the box
        let randomY = Math.floor(Math.random() * 500);
        let randomX = Math.floor(Math.random() * 1100);
        random.setAttribute("style", `left:${randomX}px; top:${randomY}px;`);
        random.style.display = "block";

        let scoreValue = score.value = Number(score.value) + 1
        print.innerHTML = `Score: ${scoreValue}`


        if (scoreValue > localStorage.getItem("highscore")) {

            localStorage.setItem("highscore", scoreValue)
            topScore.innerHTML = `Top Score: ${scoreValue}`
        }

    })

    // Countdown
    let timeleft = 10;
    let downloadTimer = setInterval(function () {
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
            document.getElementById("countdown").innerHTML = "Finished";

            if (document.getElementById("countdown").innerHTML == "Finished") {
                random.style.display = "none";

                // Reloads the page
                setInterval(function () {
                    window.location.reload(false);
                }, 2000);
            }
        } 
        else {
            document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
        }
        timeleft -= 1;
    }, 1000);
})

topScore.innerHTML = `Top Score: ${localStorage.getItem("highscore")}`