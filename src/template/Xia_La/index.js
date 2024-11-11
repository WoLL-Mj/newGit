import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import './index.css'

export default function InfiniteScroller() {
    const [list, setList] = useState([]);
    const requestList = () => {
        debugger
        const response = {list: [1,2,4,5,6,7]}
        setList(list.concat(response.list));
    }
    useEffect(() => {
        requestList();
    }, []);
    return (
        <div style={{height: '200px', overflow: 'auto', border: '1px solid'}}>
        <InfiniteScroll
            initialLoad={false}
            loadMore={requestList}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            useWindow={true}
        >
            {list.map((item, index) => (
            <div style={{ height: 100 }} key={index}>
                {item}
            </div>
            ))}
        </InfiniteScroll>
    </div>
  );
};