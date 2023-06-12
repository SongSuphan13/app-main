"use client"
import Link from 'next/link';
import { useState } from "react";

import Breadcrumb from '@/components/Template/Breadcrumb';

export const metadata = {
    title: process.env.APP_NAME+' :: Setting > Groups'
}

export const dynamicParams = true;
 
export async function generateStaticParams() {
    return [{id:'1'}]
}
 
async function getGroupData(params) {
    var options = {
        method: 'GET',
        headers: { "Content-Type": "application/json" },
    };
    const response = await fetch(`${process.env.API_URL}/api/setting/groups/${params.id}` ,options);
    const groups =  await response.json();
    return groups
}

async function updGroup(obj) {
    try {
        const response = await fetch(`${process.env.API_URL}/api/setting/groups/1`, {
                                    method: "PUT",
                                    headers: { "Content-Type": "application/json" },
                                    body: JSON.stringify(obj),
                                });

        if (!response.status) {
            throw new Error("Failed to add group");
        }
        const data = await response.json();
        return data;
        
    } catch (error) {
        console.error("Error adding group:", error);
        throw error;
    }
}

export default async function Group({ params }) {
    const [groupSeq, setGroupSeq] = useState("");
    const [groupCode, setGroupCode] = useState("");
    const [groupName, setGroupName] = useState("");
    const [activeStatus, setActiveStatus] = useState("");

    const title_page = { titlePage:'Groups' ,menuId:10 };
    const url_save = "/"
    const url_cancel = "/setting/groups"
    const url_back = "/setting/groups"

    const crumbs = [
        { label: 'Home', link: '/menu'  },
        { label: 'Groups', link: '/setting/groups' },
        { label: 'Edit' }
    ];

    // console.log(params);
    // const response = await getGroupData(params);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            let obj = {
                        'group_code': groupCode,
                        'group_seq': groupSeq,
                        'group_name': groupName,
                        'active_status': activeStatus,
                };
            const response = await updGroup(obj);
            if(response.status){
                alert("successfully");
            }else{
                alert("Invalid username or password");
            }
            console.log('successfully');
        } catch (error) {
          console.error('error :', error);
        }
    }

    return(
            <>
               <main className="app-content">
                <Breadcrumb title_page={title_page} crumbs={crumbs} />
                <div className="row">
                    <div className="col-md-12 f-btn-right">
                        <Link href={url_back} className="btn btn-danger">
                            <i className="fa fa-home fa-lg" aria-hidden="true"></i> หน้าแรก
                        </Link>
                    </div>
                    <div className="col-md-12">
                        <div className="tile">
                            <div className="col-md-12">
                                <form onSubmit={handleFormSubmit}>
                                    <h3 className="tile-title"><i className="fa fa-search" aria-hidden="true"></i> แก้ไขข้อมูล </h3>
                                    <div className="tile-body">
                                        <div className="row">
                                            <div className="form-group col-md-2">
                                                <label className="control-label">ลำดับ</label>
                                                <input 
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Group Seq"
                                                    value={groupSeq}
                                                    onChange={(e) => setGroupSeq(e.target.value)}
                                                />
                                            </div>
                                            <div className="form-group col-md-3">
                                                <label className="control-label">รหัสกลุ่ม</label>
                                                <input 
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Group Code"
                                                    value={groupCode}
                                                    onChange={(e) => setGroupCode(e.target.value)}
                                                />
                                            </div>
                                            <div className="form-group col-md-3">
                                                <label className="control-label">ชื่อกลุ่ม</label>
                                                <input 
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Group Name"
                                                    value={groupName}
                                                    onChange={(e) => setGroupName(e.target.value)}
                                                />
                                            </div>
                                            <div className="form-group col-md-3">
                                                <label className="control-label">สถานะการใช้งาน</label>
                                                <select className="form-control" value={activeStatus} onChange={(e) => setActiveStatus(e.target.value)} >
                                                    <option value={""}>--กรุณาเลือก--</option>
                                                    <option value={"Active"}>ใช้งาน</option>
                                                    <option value={"Inactive"}>ไม่ใช้งาน</option>
                                                </select>
                                            </div>
                                        </div>
                                        {/* <div className="row">
                                            <div className="form-group col-md-12">
                                                <TreeCheckbox/>
                                            </div>
                                        </div> */}
                                    </div>
                                    <div className="tile-footer mt-12">
                                        <div className="row">
                                            <div className="col-md-12 col-md-offset-3 text-center">
                                                <button className="btn btn-primary" type="submit">
                                                    <i className="fa fa-fw fa-lg fa-check-circle"></i>บันทึก
                                                </button>&nbsp;&nbsp;&nbsp;
                                                <Link href={url_cancel} className="btn btn-secondary">
                                                    <i className="fa fa-fw fa-lg fa-times-circle" aria-hidden="true"></i> ยกเลิก
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            </>
    )
}
