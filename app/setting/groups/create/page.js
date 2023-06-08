
// import React, { useState } from 'react';
import Link from 'next/link';

import Breadcrumb from '@/components/Template/Breadcrumb';

import TreeCheckbox from '@/components/TreeCheckbox';
import BtnSaveGroup from '@/components/BtnSaveGroup';

export const metadata = {
    title: process.env.APP_NAME+' :: Setting > User'
}

export default function Home() {
    const title_page = { titlePage:'Groups' ,menuId:10 };
    const url_save = "/"
    const url_cancel = "/setting/groups"
    const url_back = "/setting/groups"

    const crumbs = [
        { label: 'Home', link: '/menu'  },
        { label: 'Groups', link: '/setting/groups' },
        { label: 'Create' }
      ];

    return (
        <>
            <main className="app-content">
                <Breadcrumb title_page={title_page} crumbs={crumbs} />
                <div className="row">
                    <div className="col-md-12 f-btn-right">
                        <Link href={url_back} className="btn btn-danger">
                            <i className="fa fa-home fa-lg" aria-hidden="true"></i> Home
                        </Link>
                    </div>
                    <div className="col-md-12">
                        <div className="tile">
                            <div className="col-md-12">
                                <h3 className="tile-title"><i className="fa fa-search" aria-hidden="true"></i> Create </h3>
                                <div className="tile-body">
                                    <div className="row">
                                        <div className="form-group col-md-3">
                                            <label className="control-label">Group Code</label>
                                            <input className="form-control" type="text" placeholder="" />
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label className="control-label">Group Name</label>
                                            <input className="form-control" type="text" placeholder="" />
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label className="control-label">Active Status</label>
                                            <select className="form-control" id="exampleSelect1">
                                                <option>Active</option>
                                                <option>Inactive</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-12">
                                            <TreeCheckbox/>
                                        </div>
                                    </div>
                                </div>
                                <div className="tile-footer mt-12">
                                    <div className="row">
                                        <div className="col-md-12 col-md-offset-3 text-center">
                                            <button className="btn btn-primary" type="button"><i className="fa fa-fw fa-lg fa-check-circle"></i>Save</button>&nbsp;&nbsp;&nbsp;
                                            <Link href={url_cancel} className="btn btn-secondary">
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
