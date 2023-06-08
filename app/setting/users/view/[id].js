import Link from 'next/link';

import Breadcrumb from '../../components/Template/Breadcrumb';

export const metadata = {
    title: process.env.APP_NAME+' :: Setting > User'
}
export default function Home() {
  
    return (
        <>
            <main className="app-content">
                <Breadcrumb></Breadcrumb>
                <div className="row">
                    <div className="col-md-12 f-btn-right">
                        <Link href="/setting/users/create" className="btn btn-primary">
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
                                            <label className="control-label">Name</label>
                                            <input className="form-control" type="text" placeholder="Enter your name" />
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label className="control-label">Email</label>
                                            <input className="form-control" type="text" placeholder="Enter your email" />
                                        </div>
                                        <div className="form-group col-md-4 align-self-end">
                                            <button className="btn btn-primary" type="button">
                                                <i className="fa fa-search" aria-hidden="true"></i> Search
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
                                                    <button className="btn btn-success btn-sm" type="button">
                                                        <i className="fa fa-pencil" aria-hidden="true"></i> Edit
                                                    </button>&nbsp;
                                                    <button className="btn btn-info btn-sm" type="button">
                                                        <i className="fa fa-search" aria-hidden="true"></i> View
                                                    </button>&nbsp;
                                                    <button className="btn btn-danger btn-sm" type="button">
                                                        <i className="fa fa-trash" aria-hidden="true"></i> Delete
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
