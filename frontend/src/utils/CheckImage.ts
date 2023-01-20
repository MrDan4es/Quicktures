export const CheckImage = (imageSrc: string, good: any, bad: any) => {
  const img = new Image();
  img.onload = good;
  img.onerror = bad;
  img.src = imageSrc;
};
