import React from 'react';
import TableHead from './TableHead';
import TableItem from './TableItem';

const TableList = ({posts, title}) => {
    
    return (
        <>
            <p className="h5 text-center">{title}</p>
            <table className="table table-striped" >
                <TableHead />
                <tbody>
                {posts.map((post, index) => (
                    <TableItem number = {index+1} post = {post} key={post.id}/>
                ))}                       
                </tbody>
                
            </table>
        </>
    );
};

export default TableList;