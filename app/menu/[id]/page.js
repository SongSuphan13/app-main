import Link from "next/link";

import Breadcrumb from '@/components/Template/Breadcrumb';
import AppMenuIcon from '@/components/Template/AppMenuIcon';

export const metadata = {
    title: process.env.APP_NAME+' Imports'
}
export default function MenuIconPageByID() {
    const title_page = { titlePage: process.env.APP_NAME };
    const crumbs = [{ }];
    
    const menuIcon = [
             ];

    // const backURL = menuIcon[0].parent_id ? '/menu/'+menuIcon[0].parent_id : '/menu'
    return (
        <>
            {/* <main className="app-content">
                <Breadcrumb title_page={title_page} crumbs={crumbs} />
                <div className="row">
                    <div className="col-md-12 f-btn-right">
                        <Link href={backURL}className="btn btn-danger">
                            <i className="fa fa-arrow-left" aria-hidden="true"></i> ย้อนกลับ
                        </Link>
                    </div>
                    <AppMenuIcon menuIcons={menuIcon} />
                </div>
            </main> */}
        </>
    )
}
