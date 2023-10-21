import "../../index.css";

type Params = {
  title: string;
  icon?: string;
  isActive?: boolean;
};

export default function NavItem({ title, icon, isActive }: Params) {
  return (
    <div className="w-6/12 mx-auto py-3 cursor-pointer">
      <span className="flex flex-row items-center justify-start gap-3">
        {icon && <img src={icon} alt={title} width={20} />}
        <div>
          <h2>{title}</h2>
          {isActive && <div className="navitem"></div>}
        </div>
      </span>
    </div>
  );
}
