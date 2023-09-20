const particles = document.querySelectorAll(".particle");
const container = document.querySelector(".particles");

particles.forEach((p, i) => {
	p.style.backgroundColor = `hsl(${i * 360 / 16}deg, 100%, 50%)`;
	p.style.setProperty("--i", i);
});