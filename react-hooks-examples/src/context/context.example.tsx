import { FC } from "react";
import { Contacts } from "./contacts";
import { authorData, AuthorDataContext } from "./context";

const Main = () => (
  <main>
    <h1>Hell, this is Muye log paeg</h1>
    <p>
      Lore ipsum dolor sit amet consectetur a dipisicing elit. Natus Vincere, <b><code>return</code></b> sins
      obfusscati corporis perferendis a meth esse Nemo quos repellen dus magnum ipsa
      a liquid tempora dolorum mollitia quasi possimus nulla, velit modi?
    </p>

    <Contacts />
  </main>
);
const Footer: FC<{ author: string }> = ({ author }) => {
  const year = new Date().getFullYear();
  return (
    <footer>
      By {author}. (C)ock {year}
    </footer>
  );
};

const App = () => {
  const { authorName } = authorData;
  return (
    <>
    <AuthorDataContext.Provider value={authorData}>
      <Main />
    </AuthorDataContext.Provider>
      {/* <AuthorDataContext.Provider value={authorData}>
        <Main />
      </AuthorDataContext.Provider> */}
      <Footer author={authorName} />
    </>
  );
};
export default App;
