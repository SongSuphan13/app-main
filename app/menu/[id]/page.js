import Link from "next/link";

import Breadcrumb from '@/components/Template/Breadcrumb';
import AppMenuIcon from '@/components/Template/AppMenuIcon';

export const metadata = {
    title: process.env.APP_NAME+' Imports'
}

export const revalidate = 5;

export const dynamicParams = true;

async function getMenus(params) {

    const response = await fetch(`${process.env.API_URL}/api/menus/${params.id}` ,{ cache: 'no-store' });
    const data  = await response.json();
    return data.items;

}

export default async function MenuIconPageByID({ params }) {
    const title_page = { titlePage: process.env.APP_NAME };
    const crumbs = [{ }];

    const menus = await getMenus( params );

    // const backURL = '/menu/'+(menus[0].parent_id ? menus[0].parent_id : "") ;

    return (
        <>
            <main className="app-content">
                <Breadcrumb title_page={title_page} crumbs={crumbs} />
                <div className="row">
                    {/* <div className="col-md-12 f-btn-right">
                        <Link href={backURL} className="btn btn-danger">
                            <i className="fa fa-arrow-left" aria-hidden="true"></i> ย้อนกลับ
                        </Link>
                    </div> */}
                    <AppMenuIcon menus={menus} />
                </div>
            </main>
        </>
    )
}
