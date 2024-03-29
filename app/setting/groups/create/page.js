
"use client"
import { useState } from "react";
import Link from 'next/link';

import Breadcrumb from '@/components/Template/Breadcrumb';

import TreeCheckbox from '@/components/TreeCheckbox';
import BtnSaveGroup from '@/components/BtnSaveGroup';

import ModalConfirm from '@/components/Modal/Confirm';

export const metadata = {
    title: process.env.APP_NAME+' :: Setting > User'
}

async function addGroups(obj) {
    try {

        const response = await fetch(`${process.env.API_URL}/api/setting/groups`, {
                                    method: "POST",
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

export default function CreatePage() {

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
        { label: 'Create' }
      ];
    

    const handleFormSubmit = async (e) => {
        e.preventDefault();
      
        try {
            let obj = {
                        'group_code': groupCode,
                        'group_seq': groupSeq,
                        'group_name': groupName,
                        'active_status': activeStatus,
                };

            // const response = await addGroups(obj);
            // if(response.status){
            //     alert("successfully");
            // }else{
            //     alert("Invalid username or password");
            // }
            setGroupSeq("");
            setGroupCode("");
            setGroupName("");
            setActiveStatus("--Please choose an option--");
            console.log('successfully');
        } catch (error) {
          console.error('error :', error);
        }
    };

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
                                <form onSubmit={handleFormSubmit}>
                                    <h3 className="tile-title"><i className="fa fa-search" aria-hidden="true"></i> Create </h3>
                                    <div className="tile-body">
                                        <div className="row">
                                            <div className="form-group col-md-2">
                                                <label className="control-label">Group Seq</label>
                                                <input 
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Group Seq"
                                                    value={groupSeq}
                                                    onChange={(e) => setGroupSeq(e.target.value)}
                                                />
                                            </div>
                                            <div className="form-group col-md-3">
                                                <label className="control-label">Group Code</label>
                                                <input 
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Group Code"
                                                    value={groupCode}
                                                    onChange={(e) => setGroupCode(e.target.value)}
                                                />
                                            </div>
                                            <div className="form-group col-md-3">
                                                <label className="control-label">Group Name</label>
                                                <input 
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Group Name"
                                                    value={groupName}
                                                    onChange={(e) => setGroupName(e.target.value)}
                                                />
                                            </div>
                                            <div className="form-group col-md-3">
                                                <label className="control-label">Active Status</label>
                                                <select name="active_status" className="form-control" onChange={(e) => setActiveStatus(e.target.value)} >
                                                    <option value="">--Please choose an option--</option>
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
                                                <button className="btn btn-primary" type="submit"><i className="fa fa-fw fa-lg fa-check-circle"></i>Save</button>&nbsp;&nbsp;&nbsp;
                                                <Link href={url_cancel} className="btn btn-secondary">
                                                    <i className="fa fa-fw fa-lg fa-times-circle" aria-hidden="true"></i> Cancel
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
