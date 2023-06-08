'use client';
import Link from 'next/link';

import React ,{useEffect} from 'react';

import Breadcrumb from '@/components/Template/Breadcrumb';
import DataTable from '@/components/DataTable';
 
export const metadata = {
    title: process.env.APP_NAME+' :: Setting > Groups'
}
export default function Home() {
  
    const title_page = { titlePage:'Groups' ,menuId:10 };
    const crumbs = [
        { label: 'Home', link: '/menu'  },
        { label: 'Groups' }
    ]; 

    const handleClear = () => {
        document.getElementById('groupCode').value='';
        document.getElementById('groupName').value='';
        document.getElementById('activeStatus').value='-please select-';
    };
    
    const columns = [
        { Header: '#', accessor: 'no' ,width:"5%" ,bodyClass:"text-center"},
        { Header: 'Group Code', accessor: 'groupCode',width:"20%" },
        { Header: 'Group Name', accessor: 'groupName' ,width:"30%" },
        { Header: 'Active Status', accessor: 'activeStatus' ,width:"20%" ,bodyClass:"text-center"},
        {
            Header: 'Actions' , width:"15%",bodyClass:"text-center", Cell: ({ row }) => (
                <nobr>
                    <button className="btn btn-success btn-mini" type="button">
                        <i className="fa fa-pencil" aria-hidden="true"></i>
                    </button>&nbsp;
                    <button className="btn btn-danger btn-mini" type="button">
                        <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                </nobr>
            ),
        },
    ];
    
    const data = [
        { no: 1, groupCode: 25 ,groupName:'IT Admin' ,activeStatus:'Active' },
        { no: 1, groupCode: 25 ,groupName:'IT Admin' ,activeStatus:'Active' },
        { no: 1, groupCode: 25 ,groupName:'IT Admin' ,activeStatus:'Active' },
        { no: 1, groupCode: 25 ,groupName:'IT Admin' ,activeStatus:'Active' },
        { no: 1, groupCode: 25 ,groupName:'IT Admin' ,activeStatus:'Active' },
        { no: 1, groupCode: 25 ,groupName:'IT Admin' ,activeStatus:'Active' },
        { no: 1, groupCode: 25 ,groupName:'IT Admin' ,activeStatus:'Active' },
        { no: 1, groupCode: 25 ,groupName:'IT Admin' ,activeStatus:'Active' },
        { no: 1, groupCode: 25 ,groupName:'IT Admin' ,activeStatus:'Active' },
        { no: 1, groupCode: 25 ,groupName:'IT Admin' ,activeStatus:'Active' },
        { no: 1, groupCode: 25 ,groupName:'IT Admin' ,activeStatus:'Active' },
        { no: 1, groupCode: 25 ,groupName:'IT Admin' ,activeStatus:'Active' },
        { no: 1, groupCode: 25 ,groupName:'IT Admin' ,activeStatus:'Active' },
        { no: 1, groupCode: 25 ,groupName:'IT Admin' ,activeStatus:'Active' },
        { no: 1, groupCode: 25 ,groupName:'IT Admin' ,activeStatus:'Active' },
    ];

    useEffect(() => {
        document.title = process.env.APP_NAME+' :: Setting > Groups'
    }, []);

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
                                            <input className="form-control" type="text" id="groupCode"/>
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label className="control-label">Group Name</label>
                                            <input className="form-control" type="text" id="groupName"/>
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label className="control-label">Active Status</label>
                                            <select className="form-control" id="activeStatus" >
                                                <option>-please select-</option>
                                                <option>Active</option>
                                                <option>Inactive</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-3 align-self-end">
                                            <button className="btn btn-primary" type="button">
                                                <i className="fa fa-search" aria-hidden="true"></i> Search
                                            </button>&nbsp;&nbsp;
                                            <button className="btn btn-warning" type="button" id="app-clear" onClick={handleClear}>
                                                <i className="fa fa-repeat" aria-hidden="true"></i> Clear
                                            </button>
                                        </div> 
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="table-responsive">
                                    <DataTable columns={columns} data={data}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
