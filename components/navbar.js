import Link from "next/link";
import utilStyles from '../styles/utils.module.css';


export default function Navbar(props) {
  return (
    <nav>
      <Link href={'/'}><a className={utilStyles.logo}>Eva Degano</a></Link>

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