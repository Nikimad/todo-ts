import type { FC, ReactNode } from "react";

import "./Main.css";

interface MainProps {
  children: ReactNode;
}

const Main: FC<MainProps> = ({ children }) => (
  <main className="container main">{children}</main>
);

export default Main;
