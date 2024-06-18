document.addEventListener("DOMContentLoaded", function() {
  // Get all faq-question elements
  const faqQuestions = document.querySelectorAll('.faq-question');

  // Add click event listener to each faq-question
  faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
      const faqItem = this.closest('.faq-item');

      // Get the answer element within the faq-item
      const answer = faqItem.querySelector('.faq-answer');

      // Toggle the display of the answer
      if (answer.style.display === 'block' || getComputedStyle(answer).display === 'block') {
        answer.style.display = 'none';
      } else {
        answer.style.display = 'block';
      }
    });
  });

  const highlightedEmails = document.querySelectorAll('.highlighted-email');

  highlightedEmails.forEach(function(email) {
    email.addEventListener('click', function() {
      document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

// Calculate the time difference between now and June 8, 2024, 8:00 AM
const targetDate = new Date(2024, 5, 8, 8, 0, 0); // June 8th, 2024, 8:00 AM

// Update the countdown every second
const countdownInterval = setInterval(function() {
  const now = new Date();
  const difference = targetDate.getTime() - now.getTime();

  // Check if the target date has passed
  if (difference <= 0) {
    clearInterval(countdownInterval);
    document.querySelector('.clock-days .val').textContent = 0;
    document.querySelector('.clock-hours .val').textContent = 0;
    document.querySelector('.clock-minutes .val').textContent = 0;
    document.querySelector('.clock-seconds .val').textContent = 0;
    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.querySelector('.clock-days .val').textContent = days;
  document.querySelector('.clock-hours .val').textContent = hours;
  document.querySelector('.clock-minutes .val').textContent = minutes;
  document.querySelector('.clock-seconds .val').textContent = seconds;
}, 1000);

// Final countdown initialization
$('.countdown').final_countdown({
  start: '1362139200',
  end: '1388461320',
  now: '1387461319',
  selectors: {
    value_seconds: '.clock-seconds .val',
    canvas_seconds: 'canvas_seconds',
    value_minutes: '.clock-minutes .val',
    canvas_minutes: 'canvas_minutes',
    value_hours: '.clock-hours .val',
    canvas_hours: 'canvas_hours',
    value_days: '.clock-days .val',
    canvas_days: 'canvas_days'
  },
  seconds: {
    borderColor: '#7995D5',
    borderWidth: '6'
  },
  minutes: {
    borderColor: '#ACC742',
    borderWidth: '6'
  },
  hours: {
    borderColor: '#ECEFCB',
    borderWidth: '6'
  },
  days: {
    borderColor: '#FF9900',
    borderWidth: '6'
  }
}, function() {
  // Finish callback
});
});

function downloadPDF() {
  var pdfUrl = "pdfs/HackPrix_Sponsor_Deck.pdf";

  var anchor = document.createElement('a');

  anchor.setAttribute('href', pdfUrl);

  anchor.setAttribute('download', '');

  anchor.click();
}


document.querySelector('.scroll-arrow-left').addEventListener('click', () => {
  document.querySelector('.tracks-container').scrollBy({
    left: -window.innerWidth,
    behavior: 'smooth'
  });
});

document.querySelector('.scroll-arrow-right').addEventListener('click', () => {
  document.querySelector('.tracks-container').scrollBy({
    left: window.innerWidth,
    behavior: 'smooth'
  });
});

// Get the animated text and dots
const animatedText = document.getElementById("animated-text");
const dots = document.querySelectorAll(".dot");

console.log(animatedText); // Check if animatedText is not null
console.log(dots); // Check if dots is not empty

// Function to fade in the dots infinitely
function animateDots() {
  dots.forEach((dot) => {
    dot.style.animation = "fadeInOut 2s infinite";
  });
}

// Call the function to start dot animation
animateDots();
document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.getElementById('menuButton');
  const dropdownContent = document.getElementById('dropdownContent');
  
  if (!menuButton || !dropdownContent) {
    console.error('Menu button or dropdown content not found.');
    return;
  }

  menuButton.addEventListener('click', function(event) {
    event.stopPropagation();
    dropdownContent.classList.toggle('show');
  });

  document.addEventListener('click', function() {
    if (dropdownContent.classList.contains('show')) {
      dropdownContent.classList.remove('show');
    }
  });

  dropdownContent.addEventListener('click', function(event) {
    event.stopPropagation();
  });
});
// Add loading class to body to show loader
document.body.classList.add('loading');

setTimeout(function() {
    document.getElementById('loader-container').style.display = 'none';
    document.body.classList.remove('loading'); // Remove loading class
}, Math.random() * (4000 - 3000) + 2000);

document.addEventListener('DOMContentLoaded', function() {
  const scheduleContainer = document.querySelector('.schedule-container');
  const leftArrow = document.querySelector('#schedule .scroll-arrow-left');
  const rightArrow = document.querySelector('#schedule .scroll-arrow-right');

  if (leftArrow && rightArrow && scheduleContainer) {
    leftArrow.addEventListener('click', function() {
      scheduleContainer.scrollBy({
        left: -scheduleContainer.clientWidth,
        behavior: 'smooth'
      });
    });

    rightArrow.addEventListener('click', function() {
      scheduleContainer.scrollBy({
        left: scheduleContainer.clientWidth,
        behavior: 'smooth'
      });
    });
  } else {
    console.error("Elements not found", { leftArrow, rightArrow, scheduleContainer });
  } 
});

