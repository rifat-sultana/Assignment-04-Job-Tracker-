
let interviewList = [];
let rejectedList= [];

let totalCount = document.getElementById('totalCount');
let interviewCount = document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejectedCount');

// const allFilterBtn = document.getElementById('all-filter-btn')
// const interviewFilterBtn = document.getElementById('interview-filter-btn')
// const rejectedFilterBtn = document.getElementById('rejected-filter-btn')


const mainContainer = document.querySelector('main');
console.log(mainContainer);


const cardItems= document.getElementById('cardItems');
console.log(cardItems.children.length);


// calculateCount();


function toggleStyle(id){

    // reset all button ...........
    
    allFilterBtn.classList.remove('bg-cyan-300', 'text-red');
    interviewFilterBtn.classList.remove('bg-cyan-300', 'text-red');
    rejectedFilterBtn.classList.remove('bg-cyan-300', 'text-red');

    allFilterBtn.classList.add('bg-white', 'text-black');
    interviewFilterBtn.classList.add('bg-white', 'text-black');
    rejectedFilterBtn.classList.add('bg-white', 'text-black');

    // button click .....button  select
    const selected = document.getElementById(id);

    selected.classList.remove('bg-white', 'text-black');
    selected.classList.add('bg-cyan-300', 'text-red');
}

mainContainer.addEventListener('click', function(event){
    const target = event.target;
    console.log(target.parentNode);
})



// Interview Click......

document.querySelectorAll(".interview-btn").forEach(btn => {
    btn.addEventListener("click", function() {
      const card = this.closest(".job-card");
      const status = card.querySelector(".status-btn");

      if (status.innerText.trim() === "NOT APPLIED") {
          status.innerText = "INTERVIEW";
            totalCount.innerText--;
            interviewCount.innerText++;
        }
    });
});

// Rejected Click
document.querySelectorAll(".rejected-btn").forEach(btn => {
    btn.addEventListener("click", function() {

      const card = this.closest(".job-card");
      const status = card.querySelector(".status-btn");

      if (status.innerText.trim() === "NOT APPLIED") {
          status.innerText = "REJECTED";
            totalCount.innerText--;
            rejectedCount.innerText++;
        }
    });
});

// Interview click
document.querySelectorAll(".interview-btn").forEach(btn => {

    btn.addEventListener("click", function() {

    const card = this.closest(".job-card");

    const interviewBtn = card.querySelector(".interview-btn");
    const rejectedBtn = card.querySelector(".rejected-btn");

    interviewBtn.classList.add("bg-red-500", "text-white");
    rejectedBtn.classList.remove("bg-green-500", "text-white");

  });

});

    // Rejected click...........
document.querySelectorAll(".rejected-btn").forEach(btn => {

  btn.addEventListener("click", function() {

    const card = this.closest(".job-card");

    const interviewBtn = card.querySelector(".interview-btn");
    const rejectedBtn = card.querySelector(".rejected-btn");

    rejectedBtn.classList.add("bg-green-500", "text-white");
    interviewBtn.classList.remove("bg-red-500", "text-white");

  });

});

// filtering...................

const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectedFilterBtn = document.getElementById("rejected-filter-btn");

const cards = document.querySelectorAll(".job-card");


// All filter click...
allFilterBtn.addEventListener("click", function() {

    cards.forEach(card => {
        card.style.display = "flex";
    });

});


// Interview filter click....
interviewFilterBtn.addEventListener("click", function() {

    cards.forEach(card => {

     const status = card.querySelector(".status-btn").innerText.trim();
        if (status === "INTERVIEW") {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });
});


//  no jobs available file.....
interviewFilterBtn.addEventListener("click", function () {

    let count = 0;

    document.querySelectorAll(".job-card")
        .forEach(card => {
        const status = card.querySelector(".status-btn").innerText.trim();

        if (status === "INTERVIEW") {
            card.style.display = "flex";
            count++;
        } else {
            card.style.display = "none";
        }

    });
        if (count === 0) {
        window.location.href = "nojob.html";
    }
});


// Rejected filter click......
rejectedFilterBtn.addEventListener("click",function() {

    cards.forEach(card => {
        const status = card.querySelector(".status-btn").innerText.trim();

        if (status === "REJECTED") {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }

    });

});

// no jobs available............

rejectedFilterBtn.addEventListener("click",function () {

    let count = 0;

    document.querySelectorAll(".job-card")
    .forEach(card => {
        const status = card.querySelector(".status-btn").innerText.trim();

        if (status === "REJECTED") {
            card.style.display = "flex";
            count++;
        } else {
            card.style.display = "none";
        }

    });

    if (count === 0) {
        window.location.href = "nojob.html";
    }

});

// Activity of delete button................

document.querySelectorAll(".delete-btn")
     .forEach(btn => {
   btn.addEventListener("click", function () {

    const card = this.closest(".job-card");
    card.remove();   
  });

});
