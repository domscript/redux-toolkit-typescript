import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { login, logout, selectLog } from "../auth/authSlice";
import classes from "./Header.module.css";

export const Header = () => {
  const logUser = useAppSelector(selectLog);

  const dispatch = useAppDispatch();

  const logoutHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    dispatch(logout());
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {logUser && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};
