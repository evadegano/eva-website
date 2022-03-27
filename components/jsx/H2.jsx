function getAnchor(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, '')
    .replace(/[ ]/g, '-');
}

export default function H2({ children }) {
  const anchor = getAnchor(children);

  return (
    <h2 id={anchor}>{children}</h2>
  );
}