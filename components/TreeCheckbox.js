"use client"

import React, { useState } from 'react';

import CheckboxTree from 'react-checkbox-tree';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';

export default function TreeCheckbox() {
    const [checked, setChecked] = useState([]);
    const [expanded, setExpanded] = useState([process.env.APP_NAME]);

    console.log(expanded);

    const nodes = [
        {
            value: process.env.APP_NAME,
            label: process.env.APP_NAME,
            children: [
                {
                    value: 'node11',
                    label: 'Reports',
                    children: [
                        { value: 'subnode12', label: 'Subnode 1' },
                        { value: 'subnode22', label: 'Subnode 2' },
                    ],
                },
                {
                    value: 'node1',
                    label: 'Imports',
                    children: [
                        {
                            value: 'node111',
                            label: 'Import Rabbit With  HB',
                            children: [
                               { value: 'subnode3', label: 'Add /Edit' },
                            ],
                        }, {
                            value: 'node1112',
                            label: 'Import True PA',
                            children: [
                               { value: 'subnode31', label: 'Add /Edit' },
                            ],
                        }, {
                            value: 'node1113',
                            label: 'Import NTL Daliy',
                            children: [
                               { value: 'subnode32', label: 'Add /Edit' },
                                { value: 'subnode72', label: 'Delete' },
                            ],
                        },
                    ],
                },
                {
                    value: 'User Account',
                    label: 'User Account',
                    children: [
                        {
                            value: 'node113',
                            label: 'User',
                            children: [
                               { value: 'subnode33', label: 'Add /Edit' },
                                { value: 'subnode53', label: 'View' },
                                { value: 'subnode73', label: 'Delete' },
                            ],
                        }, {
                            value: 'node1114',
                            label: 'Group',
                            children: [
                               { value: 'subnode34', label: 'Add /Edit' },
                                { value: 'subnode54', label: 'View' },
                                { value: 'subnode74', label: 'Delete' },
                            ],
                        }, {
                            value: 'node1115',
                            label: 'Logs',
                            children: [
                                { value: 'subnode55', label: 'View' },
                            ],
                        }
                    ],
                },{
                    value: 'Manual',
                    label: 'Manual',
                    children: [
                        { value: 'subnode124', label: 'View' },
                    ],
                },
            ], 
        },
    ];

    const handleCheck = (checkedValues) => {
        setChecked(checkedValues);
    };

    const handleExpand = (expandedValues) => {
        setExpanded(expandedValues);
    };

    return (
        <>
            <CheckboxTree
                id="aa"
                nodes={nodes}
                checked={checked}
                expanded={expanded}
                onCheck={handleCheck}
                onExpand={handleExpand}
            />
        </>
    )
}
