export const scrollIntoView = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView();
};
