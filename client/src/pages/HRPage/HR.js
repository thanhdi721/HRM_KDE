import React from 'react';
import { useState } from 'react';

function HR () {

    const [startTime, setStartTime] = useState ('08:00');
    const [endTime, setEndTime] = useState ('17:00'); 
    const [totalWorkHours, setTotalWorkHours] = useState (0);

    const handleStartTimeChange = (e) => {
        setStartTime (e.target.value);
        calcutateTotalWorkHours (e.target.value, endTime);
    };

    const handleEndTimeChange = (e) => {
        setEndTime (e.target.value);
        calcutateTotalWorkHours (startTime, e.target.value);
    };

    const calcutateTotalWorkHours = (start, end) => {
        if (start && end) {
            const startHours = Number(start.split(':')[0]);
            const startMinutes = Number(start.split(':')[1]);
            const endHours = Number(end.split(':')[0]);
            const endMinutes = Number(end.split(':')[1]);

            const totalMinutes = (endHours * 60 + endMinutes) - (startHours * 60 + startMinutes);
            const totalWorkHours = (totalMinutes - 60) / 60;
            setTotalWorkHours(totalWorkHours);
        }
    };

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
                    <th>Giờ vào ca</th>
                    <th>Giờ tan ca</th>
                    <th>Kết quả</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>10724</td>
                    <td>NGUYỄN VĂN GIL</td>
                    <td>8/10/2023</td>
                    <td>14:00</td>
                    <td>17:00</td>
                    <td>Về sớm</td>
                    <td>Việc gia đình	</td>
                    <td>14:01</td>
                    <td>17:00</td>
                    <td>2:59</td>
                    <td><input type="time" value={startTime} onChange={handleStartTimeChange} /></td>
                    <td><input type="time" value={endTime} onChange={handleEndTimeChange} /></td>
                    <td>{totalWorkHours.toFixed(2)}</td>
                </tr>
                </tbody>
            </table>
        </div>
        
    );
}

export default HR;
