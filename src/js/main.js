export default function special(obj) {
  const arr = obj.special;
  arr.forEach((spec) => {
    if (!spec.description) {
      spec.description = 'Описание недоступно';
    }
  });
  return arr;
}
