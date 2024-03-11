import useSetting from "@/hooks/useSetting";
import { COLOR_SETTING } from "@/lib/constants";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { setting, t } = useSetting();
  const navigate = useNavigate();
  return (
    <nav
      className="sticky top-0 w-full py-2 px-6 text-light flex justify-between z-50 backdrop-blur-sm"
      style={{
        backgroundColor: COLOR_SETTING[setting.color],
      }}
    >
      <button type="button" onClick={() => navigate("/")}>
        <Icon width={35} icon="mdi:home" />
      </button>

      <section className="flex gap-4 items-center">
        <button type="button" onClick={() => navigate("/list")} className="flex gap-2 items-center">
          <Icon icon="material-symbols:list" width={40} />
          <h6>List</h6>
        </button>
      </section>
    </nav>
  );
}
