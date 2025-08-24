gsap.registerPlugin(ScrollTrigger);

// sun 처음 숨기기
gsap.set(".sun", { opacity: 0 });

const aboutTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".line-one",
    start: "top top",
    end: "bottom top",
    pin: true,
    scrub: true, // 스크롤과 동기화
    // markers: true,
  },
});

// 텍스트 올라오기
aboutTl
  .from(".line-one span", {
    y: "100vw",
    stagger: 0.2,
    duration: 2,
  })
  .to(".line-one", {
    backgroundColor: "yellow",
    duration: 3,
    ease: "power1.inOut",
  })
  .to(".sun", {
    opacity: 1,
    x: "-100", // 원래 자리
    ease: "power1.inOut",
  })
  // 잠시 멈춤
  .to({}, { duration: 1 })
  // 텍스트와 sun 동시에 화면 밖으로 이동 (scrub과 함께 자연스럽게)
  .to(".line-one span", {
    x: "-100vw",
    ease: "power1.inOut",
    duration: 3,
  })
  .to(
    ".sun",
    {
      x: "100vw",
      ease: "power1.inOut",
      duration: 3,
    },
    "<"
  )
  .to(".line-one", {
    backgroundColor: "white",
    duration: 5,
    ease: "none",
  });

// line-two 애니메이션
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".line-two",
      start: "top top",
      end: "+=200%", // 구간 길이 조금 늘려줌
      scrub: true,
      pin: true,
      // markers: true,
    },
  })
  .from(".line-two span:first-child", {
    x: "-100vw",
    y: "-100vw",
    scale: 3,
    opacity: 0,
    ease: "power2.out",
  })
  .from(
    ".line-two span:last-child",
    {
      x: "100vw",
      y: "-100vw",
      scale: 3,
      opacity: 0,
      ease: "power2.out",
    },
    "<"
  )
  // --- O 위로 올라갔다가 다시 제자리 ---
  .to(".line-two span:first-child", {
    y: "-50",
    duration: 1,
    ease: "power1.inOut",
  })
  .to(".line-two span:first-child", {
    y: 0,
    ease: "power1.inOut",
  })
  // --- R 위로 올라갔다가 다시 제자리 ---
  .to(".line-two span:last-child", {
    y: "-50",
    duration: 1,
    ease: "power1.inOut",
  })
  .to(".line-two span:last-child", {
    y: 0,
    ease: "power1.inOut",
  });

/* line-three */
const lineThreeSpans = document.querySelectorAll(".line-three span");
gsap.set(".moon", { opacity: 0 });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".line-three",
      start: "top top",
      end: "+=1200", // 스크롤 구간 길이
      scrub: true,
      pin: true,
      markers: true,
    },
  })
  // 글자 아래에서 올라오기
  .from(lineThreeSpans, {
    y: "100vw",
    stagger: 0.2,
    duration: 2,
  })
  .to(".line-three", {
    backgroundPositionX: "0%", // 오른쪽에서 왼쪽으로 이동
    duration: 3,
    ease: "power1.inOut",
  })
  .to(lineThreeSpans, {
    color: "white",
    stagger: 0.2,
    duration: 1,
    ease: "power1.inOut",
  })
  .to(".moon", {
    opacity: 1,
    x: "-100", // 원래 자리
    ease: "power1.inOut",
  });
