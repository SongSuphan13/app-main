import Image from "next/image";
import Link from "next/link";

export default function AppMenuIcon({ menus = [] }) {

  return (
    <>
      {menus.map((menu, index) => (
          <div className="col-md-3" key={index} >
            <div className="tile">
              <div className="tile-title-w-btn menu-icon">
              <Link href={menu.menu_url ? menu.menu_url:'menu/'+menu.id}>
                <Image
                  src={menu.menu_icon}
                  width={75}
                  height={75}
                  alt={menu.menu_name}
                />  
                </Link>
              </div>
              <div className="tile-body text-center">
                <b>{menu.menu_name}</b>
              </div>
            </div>
          </div>
      ))}
    </>
  );
}
