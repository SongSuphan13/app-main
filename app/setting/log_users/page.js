import Link from 'next/link';
import React from 'react';

import Breadcrumb from '@/components/Template/Breadcrumb';

export const metadata = {
    title: process.env.APP_NAME + ' :: Setting > Log Users'
}
export default function Home() {
    const title_page = { titlePage: 'Log Users', menuId: 10 };
    const crumbs = [
        { label: 'Home', },
        { label: 'Log Users' }
    ];

    return (
        <>
            <main className="app-content">
                <Breadcrumb title_page={title_page} crumbs={crumbs} />
                <div className="row">
                    <div className="col-md-12">
                        <div className="tile">
                            <div className="col-md-12">
                                <h3 className="tile-title"><i className="fa fa-search" aria-hidden="true"></i> Search </h3>
                                <div className="tile-body">
                                    <form className="row">
                                        <div className="form-group col-md-3">
                                            <label className="control-label">Username</label>
                                            <input className="form-control" type="text" />
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label className="control-label">First Name</label>
                                            <input className="form-control" type="text" />
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label className="control-label">Last Name</label>
                                            <input className="form-control" type="text" />
                                        </div>
                                        <div className="form-group col-md-3 col-sm-12 align-self-end">
                                            <button className="btn btn-primary" type="button">
                                                <i className="fa fa-search" aria-hidden="true"></i> Search
                                            </button>&nbsp;&nbsp;
                                            <button className="btn btn-warning" type="button">
                                                <i className="fa fa-repeat" aria-hidden="true"></i> Clear
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="table-responsive ">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr className="th-primary nobr">
                                                <th>#</th>
                                                <th>Username</th>
                                                <th>Full Name</th>
                                                <th width="10%">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="text-center">1</td>
                                                <td>   </td>
                                                <td>Sathaphon     </td>
                                                <td className="text-center nobr">
                                                    <Link href="setting/log_users/view" className="btn btn-info btn-mini">
                                                        <i className="fa fa-search" aria-hidden="true"></i>
                                                    </Link>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
