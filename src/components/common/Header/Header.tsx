import { IconButton } from "@/components/ui/Buttons/IconButton";
import { SearchInput } from "@/components/ui/Inputs/Input";
import Typography from "@/components/ui/Typography/Typography";
import { CircleUser, Menu, Search, ShoppingCart } from "lucide-react";
import { Link } from "react-router";

const Header = () => {
  return (
    <header>
      <div className="h-9  flex items-center justify-center text-center gap-1 bg-black dark:bg-white">
        <Typography
          as="h3"
          variant="body-sm"
          className="text-white/90 dark:text-black "
        >
          Sign up and get 20% off to your first order.
        </Typography>
        <Typography
          as="span"
          variant="body"
          className="text-white dark:text-black underline"
        >
          <Link to="">Sign Up Now</Link>
        </Typography>
      </div>
      <div className="flex px-6  md:px-10 xl:px-24 py-6">
        <div className="flex items-center w-2/5 lg:w-1/6">
          <IconButton
            size="xl"
            className="block lg:hidden"
            aria-label="Open menu"
          >
            <Menu />
          </IconButton>
          <Typography as="h1" variant="display" className="">
            ZMART
          </Typography>
        </div>
        <nav
          aria-label="Main navigation"
          className="hidden lg:flex items-center justify-around  w-1/3 gap-6"
        >
          <Typography as="h1" variant="body">
            <Link to="/test">Sale</Link>
          </Typography>
          <Typography as="h1" variant="body">
            <Link to="/test">New Arrival</Link>
          </Typography>
          <Typography as="h1" variant="body">
            <Link to="/test">Men</Link>
          </Typography>
          <Typography as="h1" variant="body">
            <Link to="/test">Women</Link>
          </Typography>
        </nav>
        <div className="flex items-center justify-end  space-x-3 w-3/5">
          <SearchInput
            size="xl"
            placeholder="Search..."
            className="hidden md:block "
          />
          <IconButton className="block lg:hidden" aria-label="Search">
            <Search />
          </IconButton>
          <IconButton aria-label="Shopping cart">
            <ShoppingCart />
          </IconButton>
          <IconButton aria-label="User account">
            <CircleUser />
          </IconButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
