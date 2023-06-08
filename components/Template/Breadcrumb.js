
import Link from 'next/link';
export default function Breadcrumb({ title_page={titlePage:'Title Page' ,menuId:0} ,crumbs=[{ label: 'Home' }] }) {
    return (
        <>
            <div className="app-title-2">
                <div>
                    <h1>{title_page.titlePage}</h1>
                </div>
                <ul className="app-breadcrumb breadcrumb">
                    {crumbs.map((crumb, index) => (
                        <li key={index} className={index === crumbs.length - 1 ? 'breadcrumb-item' : 'breadcrumb-item'}>
                            {crumb.link ? ( <Link href={crumb.link}> {crumb.label} </Link> ) : ( crumb.label )}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}


