import "../../index.css";

type Params = {
  isActive: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Hamburger({ isActive, setActive }: Params) {
  return (
    <div
      className={`${isActive && "open"}`}
      id="nav-icon3"
      onClick={() => setActive(!isActive)}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
