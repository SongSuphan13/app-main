import Link from 'next/link';

import Breadcrumb from '@/components/Template/Breadcrumb';

export const metadata = {
    title: process.env.APP_NAME+' :: Setting > Users'
}
export default function Home() {
    const title_page = { titlePage:'Users' ,menuId:10 };
    const crumbs = [
        { label: 'Home', link: '/menu'  },
        { label: 'Users', link: '/setting/users' },
        { label: 'Create' }
      ];
    
    return (
        <>
            <main className="app-content">
                <Breadcrumb title_page={title_page} crumbs={crumbs} />
                <div className="row">
                    <div className="col-md-12 f-btn-right">
                        <Link href="/setting/users" className="btn btn-danger">
                            <i className="fa fa-home fa-lg" aria-hidden="true"></i> Home
                        </Link>
                    </div>
                    <div className="col-md-12">
                        <div className="tile">
                            <div className="col-md-12">
                                <h3 className="tile-title"><i className="fa fa-search" aria-hidden="true"></i> Create </h3>
                                <div className="tile-body">
                                    <div className="row">
                                        <div className="form-group col-md-2">
                                            <label className="control-label">Title</label>
                                            <select className="form-control" id="exampleSelect1">
                                                <option>Mr.</option>
                                                <option>Ms.</option>
                                                <option>Mss.</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label className="control-label">First Name</label>
                                            <input className="form-control" type="text" placeholder="" />
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label className="control-label">Last Name</label>
                                            <input className="form-control" type="text" placeholder="" />
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label className="control-label">Email</label>
                                            <input className="form-control" type="text" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-3">
                                            <label className="control-label">Mobile</label>
                                            <input className="form-control" type="text" placeholder="" />
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label className="control-label">Active Status</label>
                                            <select className="form-control" id="exampleSelect1">
                                                <option>Active</option>
                                                <option>Inactive</option>
                                            </select>
                                        </div>
                                        {/* <div className="form-group col-md-3">
                                            <label className="control-label">Last Name</label>
                                            <input className="form-control" type="text" placeholder="" />
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label className="control-label">Email</label>
                                            <input className="form-control" type="text" placeholder="" />
                                        </div> */}
                                    </div>
                                </div>
                                <div className="tile-footer mt-12">
                                    <div className="row">
                                        <div className="col-md-12 col-md-offset-3 text-center">
                                            <button className="btn btn-primary" type="button"><i className="fa fa-fw fa-lg fa-check-circle"></i>Save</button>&nbsp;&nbsp;&nbsp;
                                            <Link href="/setting/users" className="btn btn-secondary">
                                                <i className="fa fa-fw fa-lg fa-times-circle" aria-hidden="true"></i> Cancel
                                            </Link>
                                         </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
