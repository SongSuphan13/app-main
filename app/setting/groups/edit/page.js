import Link from 'next/link';
import React from 'react';

import Breadcrumb from '@/components/Template/Breadcrumb';

export const metadata = {
    title: process.env.APP_NAME+' :: Setting > Groups'
}
export default function Home() {
    const title_page = { titlePage:'Groups' ,menuId:10 };
    const crumbs = [
        { label: 'Home', },
        { label: 'Groups' }
      ];
       
    return (
        <>
            <main className="app-content">
                <Breadcrumb title_page={title_page} crumbs={crumbs} />
                <div className="row">
                    <div className="col-md-12 f-btn-right">
                        <Link href="/setting/groups/create" className="btn btn-primary">
                            <i className="fa fa-plus" aria-hidden="true"></i> Add Data
                        </Link>
                    </div>
                    <div className="col-md-12">
                        <div className="tile">
                            <div className="col-md-12">
                                <h3 className="tile-title"><i className="fa fa-search" aria-hidden="true"></i> Search </h3>
                                <div className="tile-body">
                                    <form className="row">
                                        <div className="form-group col-md-3">
                                            <label className="control-label">Group Code</label>
                                            <input className="form-control" type="text" />
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label className="control-label">Group Name</label>
                                            <input className="form-control" type="text" />
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label className="control-label">Active Status</label>
                                            <select className="form-control" id="exampleSelect1" >
                                                <option>-please select-</option>
                                                <option>Active</option>
                                                <option>Inactive</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-3 align-self-end">
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
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Email</th>
                                                <th>Mobile</th>
                                                <th>Active Status</th>
                                                <th width="10%">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="text-center">1</td>
                                                <td>Sathaphon.phi</td>
                                                <td>Sathaphon</td>
                                                <td>Phiothongngam</td>
                                                <td>Sathaphon.phi@fwdgi.com</td>
                                                <td>090-4332132</td>
                                                <td className="text-center nobr">Active</td>
                                                <td className="text-center nobr">
                                                    <button className="btn btn-warning btn-sm" type="button">
                                                        <i className="fa fa-cogs" aria-hidden="true"></i>
                                                    </button>&nbsp;
                                                    <button className="btn btn-success btn-sm" type="button">
                                                        <i className="fa fa-pencil" aria-hidden="true"></i>
                                                    </button>&nbsp;
                                                    <button className="btn btn-info btn-sm" type="button">
                                                        <i className="fa fa-search" aria-hidden="true"></i>
                                                    </button>&nbsp;
                                                    <button className="btn btn-danger btn-sm" type="button">
                                                        <i className="fa fa-trash" aria-hidden="true"></i>
                                                    </button>
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
