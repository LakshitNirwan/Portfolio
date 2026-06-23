export const hoverEffect = (
  currentRotation: number
) => ({
  scale: 1,
  x: -4,
  y: -4,
  rotate: currentRotation,
  boxShadow: "12px 12px 0px 0px #000000",
  transition: {
    duration: 0.2,
  },
});