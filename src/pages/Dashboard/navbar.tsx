import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { Link, useRoute } from "wouter";

const ActiveLink = (props: any) => {
  console.log(props.className)
    const [isActive] = useRoute(props.href);
  
    return (
      <Link {...props} className={props.className + (isActive ? " active" : "")}>{props.children}</Link>
    );
}

const Navbar = () => {
  return (
    <nav className="flex items-center flex-wrap border-b border-slate-700 p-4 gap-8">
      <ActiveLink href="/app/dashboard" className="text-2xl font-semibold ml-2">streamlined</ActiveLink>
      <div className="grow flex relative">
        <Input
          className="w-full pl-10 focus:outline-none focus:ring-1 focus:ring-slate-500 text-slate-300"
          placeholder="Search for presentations..."
         />
        <SearchIcon className="absolute top-2 left-2 stroke-slate-400" />
      </div>
      
    </nav>
  )
}

export default Navbar