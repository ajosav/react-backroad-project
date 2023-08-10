export default function PageLink({ href, text, itemClassName }) {
  return (
    <li>
      <a href={href} className={itemClassName}>
        {text}
      </a>
    </li>
  );
}
