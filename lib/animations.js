export const fadeInUp = {
  initial: { y: 60, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: { duration: 0.8, ease: "easeOut" },
  viewport: { once: true, amount: 0.4 },
};

export const bounceIn = {
  initial: { scale: 0.5, opacity: 0 },
  whileInView: { scale: 1, opacity: 1 },
  transition: { type: "spring", bounce: 0.6, duration: 0.8 },
  viewport: { once: true, amount: 0.3 },
};

export const slideIn = (direction = "left", distance = 100) => {
  const axis = direction === "left" || direction === "right" ? "x" : "y";
  const offset =
    direction === "left" || direction === "top" ? -distance : distance;

  return {
    initial: { [axis]: offset, opacity: 0 },
    whileInView: { [axis]: 0, opacity: 1 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: true, amount: 0.3 },
  };
};
