

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

    // all button reset.....
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



// Rejected filter click......
rejectedFilterBtn.addEventListener("click", function() {

    cards.forEach(card => {

        const status = card.querySelector(".status-btn").innerText.trim();

        if (status === "REJECTED") {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }

    });

});




