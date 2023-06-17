import Top from "./Top";
import Time from "./aside/Time";
import Size from "./aside/Size";
import CakeList from "./menu/CakeList";
import OtherList from "./menu/OtherList";

const Main = () => {
  return (
    <main className="p-5 pt-10">
      <Top />
      <article className="my-3 grid w-full grid-cols-main gap-3">
        <aside className="flex flex-col justify-between">
          <Time />
          <Size />
        </aside>
        <CakeList />
      </article>
      <article className="flex justify-between">
        <OtherList name="drink" />
        <OtherList name="food" />
      </article>
    </main>
  );
};

export default Main;
