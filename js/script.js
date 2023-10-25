const btn = document.querySelector(".btn");
const navigationBar = document.querySelector("header .container > nav");
const scrollProgress = document.querySelector(".scroll-height");

const totalHeight = document.body.scrollHeight - window.innerHeight;
btn.addEventListener("click", function () {
  navigationBar.classList.toggle("show");
});
const scrollButton = document.querySelector("button.scroll");
window.onscroll = function () {
  if (window.scrollY >= 600) {
    if (window.innerWidth <= 450) {
      scrollButton.style.display = "none";
    } else {
      scrollButton.style.display = "flex";
    }
  } else {
    scrollButton.style.display = "none";
  }
  const progressHeight = (window.pageYOffset / totalHeight) * 100;
  scrollProgress.style.width = `${progressHeight}%`;
};
scrollButton.addEventListener("click", function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth"
  });
});
const imgOne = document.querySelector(
  ".our-creative-work .container .images img:first-child"
);
imgOne.addEventListener("click", function () {
  window.open("https://mohamedembrator.github.io/study/", "_blank", "");
});
const imgTwo = document.querySelector(
  ".our-creative-work .container .images img:nth-child(2)"
);
imgTwo.addEventListener("click", function () {
  window.open(
    "https://mohamedembrator.github.io/portfolio_website/",
    "_blank",
    ""
  );
});
const imgThree = document.querySelector(
  ".our-creative-work .container .images img:nth-child(3)"
);
imgThree.addEventListener("click", function () {
  window.open("https://mohamedembrator.github.io/Design_2/", "_blank", "");
});
const imgFour = document.querySelector(
  ".our-creative-work .container .images img:nth-child(4)"
);
imgFour.addEventListener("click", function () {
  window.open(
    "https://mohamedembrator.github.io/Embrator_Design_3/",
    "_blank",
    ""
  );
});
const imgFive = document.querySelector(
  ".our-creative-work .container .images img:nth-child(5)"
);
imgFive.addEventListener("click", function () {
  window.open(
    "https://mohamedembrator.github.io/Embrator_Design_4/",
    "_blank",
    ""
  );
});
const imgSix = document.querySelector(
  ".our-creative-work .container .images img:nth-child(6)"
);
imgSix.addEventListener("click", function () {
  window.open(
    "https://mohamedembrator.github.io/Embrator_Design_5/",
    "_blank",
    ""
  );
});
const imgSeven = document.querySelector(
  ".our-creative-work .container .images img:nth-child(7)"
);
imgSeven.addEventListener("click", function () {
  window.open("https://mohamedembrator.github.io/Login_Form/", "_blank", "");
});
const imgEight = document.querySelector(
  ".our-creative-work .container .images img:nth-child(8)"
);
imgEight.addEventListener("click", function () {
  window.open(
    "https://mohamedembrator.github.io/Registration_Form/",
    "_blank",
    ""
  );
});

const copyRights = document.querySelector(
  "footer p:last-of-type span:first-of-type"
);
copyRights.innerHTML = new Date().getFullYear();

const facebook = document.querySelector("footer .social-icons i:first-child");
const linkedIn = document.querySelector("footer .social-icons i:nth-child(2)");
const instagram = document.querySelector("footer .social-icons i:nth-child(3)");
facebook.addEventListener("click", function () {
  window.open(
    "https://www.facebook.com/profile.php?id=100045981390071",
    "_blank",
    ""
  );
});
linkedIn.addEventListener("click", function () {
  window.open("https://www.linkedin.com/in/mohamed-e-00b641274/", "_blank", "");
});
instagram.addEventListener("click", function () {
  window.open("https://www.instagram.com/embratorm/", "_blank", "");
});
