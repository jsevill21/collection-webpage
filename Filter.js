filterSelection("all");
function filterSelection(c) {
    let x = document.getElementsByClassName("filterDiv");
    
    for (let i = 0; i < x.length; i++) {
        if (x[i].classList.contains("show")) {
            x[i].classList.remove("show");
        }
        if (c == "all" || x[i].classList.contains(c)) {
            if (!x[i].classList.contains("show")) {
                x[i].className += " show";
            }
        }
    }
  }


  let allBtn = document.getElementById("all");
  let prepaintedBtn = document.getElementById("prepainted");
  let posableBtn = document.getElementById("posable");

  allBtn.addEventListener("click", function () {
    let active = document.getElementsByClassName("active");
    if (active.length > 0) {
      active[0].classList.remove("active");
    }
    this.classList.add("active");
  })

  prepaintedBtn.addEventListener("click", function () {
    let active = document.getElementsByClassName("active");
    if (active.length > 0) {
      active[0].classList.remove("active");
    }
    this.classList.add("active");
  })

  posableBtn.addEventListener("click", function () {
    let active = document.getElementsByClassName("active");
    if (active.length > 0) {
      active[0].classList.remove("active");
    }
    this.classList.add("active");
  })
  
