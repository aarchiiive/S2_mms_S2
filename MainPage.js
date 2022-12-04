import React from 'react';
import ReactDOM from 'react-dom';
import './index.js';
import User from './UserList';

function User({ User }) {
    return (
        <>
        <div>
            <h4>이름: {User.name}</h4>
            <h4>전화번호: {User.phone}세</h4>
            <h4>주소: {User.addr}</h4>
            <h4>SNS: {User.SNS}</h4>
            <h4>직책: {User.position}세</h4>
            <h4>이메일: {User.email}</h4>
            <h4>이름: {User.memo}</h4>
        </div>
        </>
    );
}

export default Student;