import React, {Component} from 'react';
import Input from '../../../styled/elements/input';
import P from '../../../styled/elements/p';
import Table from '../../../styled/elements/table';

export default function InfoCheck(props) {

    // const {firstName, lastName, gender, age} = this.props.data;

    const tableDivStyle = {
        overflowY: "scroll",
        marginBottom: "220px"
    }

    const renderUserInfo = () => {
        return Object.keys(props.data).map(key => {
            if (key === "step" || key === "user") return;
            
            let category = key.split(/(?=[A-Z])/).join(" ")
            category = category[0].toUpperCase() + category.substr(1);            
            
            return (
                <tr key={key}>
                    <td>{category}</td>
                    <td>{props.data[key]}</td>
                </tr>
            )
        })
    }


    return (
        <div style={tableDivStyle}>
            <Table>
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {renderUserInfo()}                    
                </tbody>
            </Table>
        </div>
    )
}