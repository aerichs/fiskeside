var typed = new Typed(".aboutMe", {
  strings: [
    "til alle:)",
    "til en snasen side om fiske",
    "til ett hjem for stangfiskere!",
  ],
  smartBackspace: true,
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
  loopCount: Infinity,
  startDelay: 1000,
});

function hoho() {
  Swal.fire({
    title: "Her er ett tilfeldig bilde!",
    text: "Fint, ikke sant?",
    imageUrl: "https://unsplash.it/400/200",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image",
  });
}
