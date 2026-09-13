// Lightweight animation: create ambient particles and subtle pointer parallax.
const particles = document.querySelector(".particles");

for (let i = 0; i < 55; i++) {
  const p = document.createElement("span");
  p.className = "particle";
  p.style.left = `${Math.random() * 100}%`;
  p.style.top = `${75 + Math.random() * 35}%`;
  p.style.animationDuration = `${7 + Math.random() * 12}s`;
  p.style.animationDelay = `${-Math.random() * 14}s`;
  p.style.opacity = `${0.2 + Math.random() * 0.65}`;
  particles.appendChild(p);
}

const orbit = document.querySelector(".orbit");

window.addEventListener("pointermove", (event) => {
  if (window.innerWidth < 800) return;

  const x = (event.clientX / window.innerWidth - 0.5) * 2;
  const y = (event.clientY / window.innerHeight - 0.5) * 2;

  orbit.style.transform = `rotateY(${x * 2.2}deg) rotateX(${-y * 1.4}deg)`;
});

window.addEventListener("pointerleave", () => {
  orbit.style.transform = "";
});

document.querySelectorAll(".tech").forEach((item) => {
  item.addEventListener("click", () => {
    item.animate(
      [
        { transform: "translate(-50%, -50%) scale(1)" },
        { transform: "translate(-50%, -50%) scale(1.3)" },
        { transform: "translate(-50%, -50%) scale(1)" }
      ],
      { duration: 420, easing: "ease-out" }
    );
  });
});
