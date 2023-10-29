import style from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";

export function SearchBar({ onSubmit }) {
  function submit(e) {
    if (e.key == "Enter" && e.target.value.trim() != "") {
      // console.log("***", e.target.value);
      onSubmit(e.target.value);
    }
  }

  return (
    <>
      <SearchIcon size={27} className={style.icon} />
      <input
        onKeyUp={submit}
        type="text"
        placeholder="Search a tv show you may like"
        className={style.input}
      />
    </>
  );
}
