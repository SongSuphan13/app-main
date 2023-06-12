"use client"
import { useState } from "react";
import Link from 'next/link';

import Breadcrumb from '@/components/Template/Breadcrumb';

export const metadata = {
    title: process.env.APP_NAME+' :: Setting > Users'
}
export default function Home() {
    const [titleName, setTitleName] = useState("");
    const [fristName, setFristName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [activeStatus, setActiveStatus] = useState("");

    const title_page = { titlePage:'ข้อมูลผู้ใช้งาน' ,menuId:10 };
    const crumbs = [
        { label: 'หน้าแรก', link: '/menu'  },
        { label: 'ข้อมูลผู้ใช้งาน', link: '/setting/users' },
        { label: 'สร้าข้อมูล' }
      ];
    
    return (
        <>
            <main className="app-content">
                <Breadcrumb title_page={title_page} crumbs={crumbs} />
                <div className="row">
                    <div className="col-md-12 f-btn-right">
                        <Link href="/setting/users" className="btn btn-danger">
                            <i className="fa fa-home fa-lg" aria-hidden="true"></i> หน้าแรก
                        </Link>
                    </div>
                    <div className="col-md-12">
                        <div className="tile">
                            <div className="col-md-12">
                                <h3 className="tile-title"><i className="fa fa-search" aria-hidden="true"></i> สร้าข้อมูล </h3>
                                <div className="tile-body">
                                    <div className="row">
                                        <div className="form-group col-md-2">
                                            <label className="control-label">คำนำหน้า</label>
                                            <select className="form-control" id="exampleSelect1">
                                                <option>Mr.</option>
                                                <option>Ms.</option>
                                                <option>Mss.</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label className="control-label">ชื่อ</label>
                                            <input className="form-control" type="text" />
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label className="control-label">นามสกุล</label>
                                            <input className="form-control" type="text" placeholder="" />
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label className="control-label">อีเมล</label>
                                            <input className="form-control" type="text" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-3">
                                            <label className="control-label">เบอร์โทรมือถือ</label>
                                            <input className="form-control" type="text" placeholder="" />
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label className="control-label">สถานะการใช้งาน</label>
                                            <select className="form-control" id="exampleSelect1">
                                                <option>กรุณาเลือก</option>
                                                <option>ใช้งาน</option>
                                                <option>ไม่ใช้งาน</option>
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
                                            <button className="btn btn-primary" type="button"><i className="fa fa-fw fa-lg fa-check-circle"></i>บันทึก</button>&nbsp;&nbsp;&nbsp;
                                            <Link href="/setting/users" className="btn btn-secondary">
                                                <i className="fa fa-fw fa-lg fa-times-circle" aria-hidden="true"></i> ยดเลิก
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
