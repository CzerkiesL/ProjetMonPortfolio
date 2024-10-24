import gsap from 'gsap';

export function launchAboutContentAnimation(isDesktop) {
  if (isDesktop) {
    gsap.fromTo(
      '.avatar',
      { opacity: 0 },
      { opacity: 1, duration: 0.75, delay: 0.5, ease: 'ease-out' },
    );
  } else {
    gsap.fromTo(
      '.avatar',
      { opacity: 0 },
      { opacity: 1, duration: 0.75, delay: 2.75, ease: 'ease-out' },
    );
  }

  let tl = gsap.timeline();
  tl.fromTo(
    `.text-1`,
    { opacity: 0 },
    { opacity: 1, duration: 0.75, delay: 0.5, ease: 'ease-out' },
  )
    .fromTo(
      `.text-2`,
      { opacity: 0 },
      { opacity: 1, duration: 0.75, ease: 'ease-out' },
    )
    .fromTo(
      `.text-3`,
      { opacity: 0 },
      { opacity: 1, duration: 0.75, ease: 'ease-out' },
    );
}
