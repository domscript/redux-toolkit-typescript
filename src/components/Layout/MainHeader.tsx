import { CartButton } from "../Cart/CartButton";
import classes from "./MainHeader.module.css";

export const MainHeader = (props: any) => {
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};
