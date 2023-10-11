import React from 'react';
import InfoData from './InfoData';

function Info () {

    const {msnv, name, gt, cv, bp, pb, cbqltt, cbqlct } = InfoData;

    return (
        <div>
            <div>
                <h1>THÔNG TIN CÁ NHÂN</h1>
            </div>
            <div>
                <p>ảnh/logo</p>
            </div>
            <div>
                <p>Họ và tên: {name}</p>
                <p>MSNV: {msnv}</p>
                <p>Giới tính: {gt}</p>
                <p>Chức vụ: {cv}</p>
                <p>Bộ phận: {bp}</p>
                <p>Phòng ban: {pb}</p>
                <p>CBQL trực tiếp: {cbqltt}</p>
                <p>CBQL cấp trên: {cbqlct}</p>
            </div>
        </div>
    );
}

export default Info;