import React from "react";
import { Counter } from "./components/features/counter/Counter";
import { Header } from "./components/features/header/Header";
import { Auth } from "./components/features/auth/Auth";
import { UserProfile } from "./components/features/userProfile/UserProfile";
import { useAppSelector } from "./app/hooks";
import { selectLog } from "./components/features/auth/authSlice";

import "./App.css";

const App = () => {
  const logUser = useAppSelector(selectLog);

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        {!logUser && <Auth />}
        {logUser && <UserProfile />}
        {logUser && <Counter />}
      </header>
    </div>
  );
};

export default App;
