import ScrollReveal from "scrollreveal";
import SmoothScroll from "smooth-scroll";
import Lozad from "lozad";
import Aload from "aload";

if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", (user) => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

const scrollReveal = ScrollReveal();

const scrollConfig = {
  viewFactor: 0.75,
  duration: 400,
  delay: 250,
  easing: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  scale: 0.5,
};

const blurbs = document.querySelectorAll("img[id^=blurb-]");

blurbs.forEach((node) => scrollReveal.reveal(node, scrollConfig));

scrollReveal.reveal(".header", {...scrollConfig, viewFactor: 0.25, delay: 200, duration: 300});

new SmoothScroll('a[href*="#"]');

Lozad().observe();

window.onload = () => {
  Aload();
};
