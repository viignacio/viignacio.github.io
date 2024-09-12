// Add interactivity for the "Show Message" button
document.getElementById('contactButton').addEventListener('click', function() {
    const message = document.getElementById('contactMessage');
    message.classList.toggle('hidden');
  });