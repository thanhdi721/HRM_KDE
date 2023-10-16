import React from 'react';

const HR = ({HRs}) => {

    return (
        <div className="table-container" style={{ overflowX: "auto" }}>
            <table className="table table-bordered table-striped">
                <thead>
                <tr>
                    <th>MSNV</th>
                    <th>HỌ TÊN</th>
                    <th>NGÀY</th>
                    <th>TỪ GIỜ - CỦA NLĐ</th>
                    <th>ĐẾN GIỜ - CỦA NLĐ</th>
                    <th>LOẠI</th>
                    <th>LÝ DO</th>
                    <th>TỪ GIỜ - GHI NHẬN CỦA BẢO VỆ</th>
                    <th>ĐẾN GIỜ - GHI NHẬN CỦA BẢO VỆ</th>
                    <th>TỔNG SỐ GIỜ NGHỈ RA CỔNG</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{HRs.msnv}</td>
                    <td>{HRs.name}</td>
                    <td>{HRs.date}</td>
                    <td>{HRs.tunld}</td>
                    <td>{HRs.dennld}</td>
                    <td>{HRs.loai}</td>
                    <td>{HRs.lydo}</td>
                    <td>{HRs.tubaove}</td>
                    <td>{HRs.denbaove}</td>
                    <td>{HRs.tongracong}</td>
                </tr>
                </tbody>
            </table>
        </div>
        
    );
}

export default HR;
