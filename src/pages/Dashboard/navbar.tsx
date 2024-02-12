import { Link, useRoute } from "wouter";

const ActiveLink = (props: any) => {
    const [isActive] = useRoute(props.href);
  
    return (
      <Link {...props}>
        <a className={isActive ? "active" : ""}>{props.children}</a>
      </Link>
    );
}

const Navbar = () => {
  return (
    <nav>
      <ActiveLink href="">Hi</ActiveLink>
    </nav>
  )
}