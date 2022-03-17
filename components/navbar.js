import Link from "next/link";


export default function Navbar(props) {
  return (
    <nav>
      <div><Link href={'/'}><a>Eva Degano</a></Link></div>
      <ul>
        {props.navLinks.map((link, idx) => {
          return (
            <li key={idx}>
              <Link href={link.path}>
                <a>{link.name}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  );
}