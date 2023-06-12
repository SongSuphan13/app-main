
import Breadcrumb from "@/components/Template/Breadcrumb";
import AppMenuIcon from "@/components/Template/AppMenuIcon";

export const metadata = {
  title: process.env.APP_NAME+" :: Home",
};

export const revalidate = 5;

async function getMenus() {
  
  const response = await fetch(`${process.env.API_URL}/api/menus`,{ cache: 'no-store' });
  const data  = await response.json();
  console.log(data);
  return data.items;
}

export default async function MenuIconPage() {

  const title_page = { titlePage: process.env.APP_NAME };
  const crumbs = [{}];

  const menus = await getMenus();


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