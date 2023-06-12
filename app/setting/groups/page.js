'use client';
import Link from 'next/link';

import React ,{useEffect ,useState } from 'react';
import Paginate from "react-paginate";

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

    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0)
    const [pageLimit, setPageLimit] = useState(10)
    const [pageFrom, setPageFrom] = useState(1)
    const [pageTotal, setPageTotal] = useState(0)
    const [items, setItems] = useState([]);

    const [groupCode, setGroupCode] = useState('');
    const [groupName, setGroupName] = useState('');
    const [activeStatus, setActiveStatus] = useState('');

    async function fetchGroups(pageNumber = 1) {
        try {

            const queryParams = { 
                                    page: pageNumber ,
                                    limt: pageLimit ,
                                    group_code: groupCode ,
                                    group_name: groupName ,
                                    active_sataus: activeStatus ,
                                    sortBy: '' ,
                                    orderBy: ''
                                }
            
            const params = new URLSearchParams();
            Object.entries(queryParams).forEach(([key, value]) => {
                if (value !== '') {
                    params.append(key, value);
                }
            }); 
            
            const str = params.toString()?"?"+params.toString():"";

            const response = await fetch(`${process.env.API_URL}/api/setting/groups${str}`)
            const data = await response.json()

            setItems(data.items.data)
            setPageCount(data.items.total/10)
            setPageFrom(data.items.from)
            setPageTotal(data.items.total)
        } catch (error) {
            console.error("Error adding group:", error)
            throw error;
        }
    }

    useEffect(() => {
        fetchGroups(currentPage);
    }, [currentPage]);

    const handlePageClick = async ({ selected }) => {
        setCurrentPage(selected+1);
    };

    const handleLimitChange = async (limit) => {
        setPageLimit(limit);
    };

    const fetchData = async (sortBy) => {
        console.log('Limit changed:', sortBy);
    };
    
    const handleSearch = () => {
        setCurrentPage(1);
        fetchGroups(currentPage);
    };

    const handleClear = () => {
        setGroupCode('');
        setGroupName('');
        setActiveStatus('');
        setCurrentPage(1);
        fetchGroups(currentPage);
    };

    const columns = [
        {    Header: 'No' , accessor: 'no' ,width:"5%",className:"text-center", Cell: ({ row }) => (
                <nobr> {row.index + pageFrom}</nobr>
            ),
        },
        { Header: 'Group Code', accessor: 'group_code',width:"20%" },
        { Header: 'Group Name', accessor: 'group_name' ,width:"30%" },
        { Header: 'Active Status', accessor: 'active_status' ,width:"20%" ,className:"text-center"},
        {
            Header: 'Actions' , width:"15%",className:"text-center", disableSortBy: true, Cell: ({ row }) => (
                <nobr>
                    <Link href={"/setting/groups/edit/"+row.original.id} className="btn btn-success btn-mini">
                        <i className="fa fa-pencil" aria-hidden="true"></i>
                    </Link>&nbsp;
                    <button className="btn btn-danger btn-mini" type="button" onClick={() => handleEdit(row.original.id)}>
                        <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                </nobr>
            ),
        },
    ];

    return (
        <>
            <main className="app-content">
                <Breadcrumb title_page={title_page} crumbs={crumbs} />
                <div className="row">
                    <div className="col-md-12 f-btn-right">
                        <Link href="/setting/groups/create" className="btn btn-primary">
                            <i className="fa fa-plus" aria-hidden="true"></i> เพิ่มข้อมูล
                        </Link>
                    </div>
                    <div className="col-md-12">
                        <div className="tile">
                            <div className="col-md-12">
                                <h3 className="tile-title"><i className="fa fa-search" aria-hidden="true"></i> ค้นหาข้อมูล </h3>
                                <div className="tile-body">
                                    <form className="row">
                                        <div className="form-group col-md-3">
                                            <label className="control-label">รหัสกลุ่ม</label>
                                            <input 
                                                type="text" 
                                                className="form-control"
                                                value={groupCode}
                                                onChange={(e) => setGroupCode(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label className="control-label">ชื่อกลุ่ม</label>
                                            <input 
                                                type="text" 
                                                className="form-control"
                                                value={groupName}
                                                onChange={(e) => setGroupName(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label className="control-label">สถานะการใช้งาน</label>
                                            <select className="form-control" value={activeStatus} onChange={(e) => setActiveStatus(e.target.value)} >
                                                <option value={''}>-all-</option>
                                                <option value={'Active'}>Active</option>
                                                <option value={'Inactive'}>Inactive</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-3 align-self-end">
                                            <button className="btn btn-primary" type="button" onClick={handleSearch}>
                                                <i className="fa fa-search" aria-hidden="true"></i> Search
                                            </button>&nbsp;
                                            <button className="btn btn-warning" type="button" onClick={handleClear}>
                                                <i className="fa fa-repeat" aria-hidden="true"></i> Clear
                                            </button>
                                        </div> 
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="table-responsive">
                                    <DataTable columns={columns} data={items} onLimitChange={handleLimitChange} fetchData={fetchData}/>
                                    {items.length > 0 && 
                                        <>  
                                            <div className={"dataTables_info"} id="example_info" >Showing {pageFrom} to {pageFrom} of {pageTotal} entries</div>
                                            <div className={"dataTables_paginate paging_simple_numbers"} id="example_paginate">
                                                <Paginate
                                                    previousLabel={"previous"}
                                                    nextLabel={"next"}
                                                    breakLabel={"..."}
                                                    pageCount={pageCount}
                                                    marginPagesDisplayed={2}
                                                    pageRangeDisplayed={3}
                                                    onPageChange={handlePageClick}
                                                    containerClassName={"pagination justify-content-center"}
                                                    pageClassName={"page-item"}
                                                    pageLinkClassName={"page-link"}
                                                    previousClassName={"page-item"}
                                                    previousLinkClassName={"page-link"}
                                                    nextClassName={"page-item"}
                                                    nextLinkClassName={"page-link"}
                                                    breakClassName={"page-item"}
                                                    breakLinkClassName={"page-link"}
                                                    activeClassName={"active"}
                                                />
                                            </div>
                                        </>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
