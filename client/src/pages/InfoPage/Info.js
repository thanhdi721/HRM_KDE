import React from 'react';
import './css/InfoPage.css';


const Info = ({infos}) => {

    return (
        <div className="container">
            <div className="row">
                <div className="col img">
                    <img src={infos.img} alt={infos.name} className="img-thumbnail"/>
                </div>
                <div className="col-sm-8 if">
                    <p>Họ và tên: {infos.name}</p>
                    <p>MSNV: {infos.msnv}</p>
                    <p>Giới tính: {infos.gt}</p>
                    <p>Chức vụ: {infos.cv}</p>
                    <p>Bộ phận: {infos.bp}</p>
                    <p>Phòng ban: {infos.pb}</p>
                    <p>CBQL trực tiếp: {infos.cbqltt}</p>
                    <p>CBQL cấp trên: {infos.cbqlct}</p>
                </div>
            </div>
        </div>
        
    );
}

export default Info;
