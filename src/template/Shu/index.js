import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
export default function Shu() {
    const row = [1,2,3,4,5,6,7,8,9]
    const col = [1,2,3,4,5,6,7,8,9]

    return (
        <>
            {row.map(item => {
                return (
                    <div style={{ display: 'flex', width: 360}}>
                        {col.map(item => {
                            return (
                                <div style={{ width: 40, height: 40, border: '1px solid'}}>
                                    <input style={{ width: 40, height: 40}}></input>
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </>
    )
}