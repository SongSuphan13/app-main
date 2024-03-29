import Link from 'next/link';
import React from 'react';

import Breadcrumb from '@/components/Template/Breadcrumb';

export const metadata = {
    title: process.env.APP_NAME+' :: Setting > Users'
}
export default function Home() {
    const title_page = { titlePage:'Users' ,menuId:10 };
    const crumbs = [
        { label: 'Home', link: '/menu'  },
        { label: 'Users' }
      ];
       
    return (
        <>
            <main className="app-content">
                <Breadcrumb title_page={title_page} crumbs={crumbs} />
                <div className="row">
                    <div className="col-md-12 f-btn-right">
                        <Link href="/setting/users/create" className="btn btn-primary">
                            <i className="fa fa-plus" aria-hidden="true"></i> เพิ่มข้อมูล
                        </Link>
                    </div>
                    <div className="col-md-12">
                        <div className="tile">
                            <div className="col-md-12">
                                <h3 className="tile-title"><i className="fa fa-search" aria-hidden="true"></i> ค้นหา </h3>
                                <div className="tile-body">
                                    <form className="row">
                                        <div className="form-group col-md-3">
                                            <label className="control-label">รหัสผู้ใช้งาน</label>
                                            <input className="form-control" type="text" id="s_username"/>
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label className="control-label">ชื่อ</label>
                                            <input className="form-control" type="text" id="s_frist_name"/>
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label className="control-label">นามสกุล</label>
                                            <input className="form-control" type="text" id="s_last_name"/>
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label className="control-label">ชื่อเต็ม</label>
                                            <input className="form-control" type="text" id="s_full_name"/>
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label className="control-label">อีเมล</label>
                                            <input className="form-control" type="text"  id="s_email"/>
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label className="control-label">สถานะการใช้งาน</label>
                                            <select className="form-control" id="s_active_status">
                                                <option>-all-</option>
                                                <option>Active</option>
                                                <option>Inactive</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-4 align-self-end">
                                            <button className="btn btn-primary" type="button">
                                                <i className="fa fa-search" aria-hidden="true"></i> ค้นหา
                                            </button>&nbsp;&nbsp;
                                            <button className="btn btn-warning" type="button">
                                                <i className="fa fa-repeat" aria-hidden="true"></i> ล้างการค้นหา
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
                                                <td>   </td>
                                                <td>Sathaphon</td>
                                                <td>    </td>
                                                <td> </td>
                                                <td>090-4332132</td>
                                                <td className="text-center nobr">Active</td>
                                                <td className="text-center nobr">
                                                    <button className="btn btn-warning btn-mini" type="button">
                                                        <i className="fa fa-cogs" aria-hidden="true"></i> ตั้งค่า
                                                    </button>&nbsp;
                                                    <button className="btn btn-success btn-mini" type="button">
                                                        <i className="fa fa-pencil" aria-hidden="true"></i> แก้ไข
                                                    </button>&nbsp;
                                                    <button className="btn btn-info btn-mini" type="button">
                                                        <i className="fa fa-search" aria-hidden="true"></i> ดูรายละเอียด
                                                    </button>&nbsp;
                                                    <button className="btn btn-danger btn-mini" type="button">
                                                        <i className="fa fa-trash" aria-hidden="true"></i> ลบ
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
