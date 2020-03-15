import React from "react";
import { List } from "./components/List/List";
import { Form } from "./components/Form/Form";
import style from "./App.module.sass";

export const App = () => {
  return (
    <div className={style.app}>
      <header className={style.appHeader}>
        <h2>TO_DO_APP</h2>
        <Form />
      </header>
      <main className={style.mainSection}>
        <List />
      </main>
    </div>
  );
};
