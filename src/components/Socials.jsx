import React from "react";

function Socials() {
  var date = new Date();
  var year = date.getFullYear();
  return (
    <div class="bottom-container">
      <a class="footer-link" href="nkedin.com/in/daniel-oshili-908b08176">
        <i class=" fab fa-linkedin"></i>
      </a>
      <a class="footer-link" href="https://twitter.com/DOshili">
        <i class=" fab fa-twitter"></i>
      </a>
      <a class="footer-link" href="https://web.facebook.com/Danieloshili">
        <i class=" fab fa-facebook-f"></i>
      </a>
      <a class="footer-link" href="https://github.com/DANIDEL-dev">
        <i class=" fab fa-github"></i>
      </a>
      <a class="footer-link" href="https://www.instagram.com/danidel_ariinze/">
        <i class=" fab fa-instagram"></i>
      </a>
      <p class="copy-right">
        &copy; {year} <spam class="my">Daniel</spam> Arinze Oshili.
      </p>
    </div>
  );
}

export default Socials;
