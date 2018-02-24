export default () => {
  const lazyLoadedImages = Array.from(document.querySelectorAll('img[data-src]'));

  lazyLoadedImages.forEach((img) => {
    img.setAttribute('src', img.getAttribute('data-src'));
    img.onload = () => img.removeAttribute('data-src');
  });

  // array spread test
  const a = [1, 2, 3];
  const b = [1, 2, 3];
  const c = [...a, ...b];

  console.log(c);

  // object spread test
  const d = {
    a: 'a',
    b: 'b',
  };
  const e = {
    ...d,
    e: 'e',
  };

  console.log(e);
};
