"use client"
import Link from 'next/link';
import React, { useEffect } from 'react';
import $ from 'jquery';

export default function AppMenu() {
    useEffect(() => {
        var treeviewMenu = $('.app-menu');

        // Toggle Sidebar
        $('[data-toggle="sidebar"]').click(function (event) {
            event.preventDefault();
            $('.app').toggleClass('sidenav-toggled');
        });

        // Activate sidebar treeview toggle
        $("[data-toggle='treeview']").click(function (event) {
            event.preventDefault();
            if (!$(this).parent().hasClass('is-expanded')) {
                treeviewMenu.find("[data-toggle='treeview']").parent().removeClass('is-expanded');
            }
            $(this).parent().toggleClass('is-expanded');
        });

        // Set initial active toggle
        $("[data-toggle='treeview.'].is-expanded").parent().toggleClass('is-expanded');


    }, []);

    const menuItems = [
        {
            id: 1,
            title: 'Favorit ',
            icon: 'fa fa-star-o',
            link: '/setting/user',
        },
        {
            id: 2,
            title: 'Dashboard',
            icon: 'fa fa-dashboard',
            link: '/Dashboard',
        },
        {
            id: 3,
            title: 'Reports',
            icon: 'fa fa-file-text',
            subItems: [
                {
                    id: 4,
                    title: 'Report Covid Inbound',
                    link: '/setting/users',
                },
                {
                    id: 5,
                    title: 'Report True Happiness',
                    link: '/setting/groups',
                },
                {
                    id: 53,
                    title: 'Report DTAC',
                    link: '/setting/groups',
                },
                {
                    id: 54,
                    title: 'Report by Seller Code',
                    link: '/setting/groups',
                },
                {
                    id: 55,
                    title: 'Report Dashboard Megafin',
                    link: '/setting/groups',
                },
                {
                    id: 56,
                    title: 'Report Motor Non-Type 1',
                    link: '/setting/groups',
                },
            ],
        },
        {
            id: 6,
            title: 'Import',
            icon: 'fa fa-database', 
            subItems: [
                {
                    id: 7,
                    title: 'Import Rabbit With  HB',
                    link: '/setting/users',
                },
                {
                    id: 8,
                    title: 'Import True PA',
                    link: '/setting/users',
                },
                {
                    id: 11,
                    title: 'Import NTL Daliy',
                    link: '/setting/groups',
                },
            ],
        },  
        {
            id: 9,
            title: 'User Account',
            icon: 'fa fa-users',
            subItems: [
                {
                    id: 10,
                    title: 'Users',
                    link: '/setting/users',
                },
                {
                    id: 11,
                    title: 'Groups',
                    link: '/setting/groups',
                },
                {
                    id: 12,
                    title: 'Log Users',
                    link: '/setting/log_users'
                },
            ],
        },
        {
            id: 13,
            title: 'Manual',
            icon: 'fa fa-book',
            link: '/manual',
        },
    ];
    const renderMenuItem = (item) => {
        if (item.subItems) {
            return (
                <li key={item.id} className="treeview" >
                    <Link href="#" className="app-menu__item" data-toggle="treeview">
                        <i className={"app-menu__icon "+item.icon}></i>
                            <span className="app-menu__label">{item.title}</span>
                        <i className="treeview-indicator fa fa-angle-right"></i>
                    </Link>
                    <ul key={item.id} className="treeview-menu">
                        {item.subItems.map((subItem) => renderMenuItem(subItem))}
                    </ul>
                </li>
            )
        }
        if (item.icon) {
            return (
                <li key={item.id}>
                    <Link href={item.link} className="app-menu__item">
                        <i className={"app-menu__icon "+item.icon}></i> 
                        <span className="app-menu__label">{item.title}</span>
                    </Link>
                </li>
            );
        } else {
            return (
                <li key={item.id}>
                    <Link href={item.link} className="treeview-item">
                        <i className="icon fa fa-circle-o"></i> {item.title}
                    </Link>
                </li>
            );
        }
    }

    return (
      <>
        <aside className="app-sidebar">
          <ul className="app-menu">
            {menuItems.map((item) => renderMenuItem(item))}
          </ul>
        </aside>
      </>
    );
}
