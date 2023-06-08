
import Breadcrumb from "@/components/Template/Breadcrumb";
import AppMenuIcon from "@/components/Template/AppMenuIcon";

export const metadata = {
  title: process.env.APP_NAME+" :: Home",
};

export async function getStaticProps() {

  console.log("----------------");
  const response = await fetch("https://dummyjson.com/users?limit=10");
  const data  = await response.json();
  // const menu = data
  console.log("----------------");
  console.log(data.users);

  return { props: {menus: data.users} };

}

export default function MenuIconPage({menus}) {

  console.log(menus);

  const title_page = { titlePage: process.env.APP_NAME };
  const crumbs = [{}];

  return (
    <>
      <main className="app-content">
        <Breadcrumb title_page={title_page} crumbs={crumbs} />
        <div className="row">
          <AppMenuIcon menus={menus} />
        </div>
      </main>
    </>
  );

}