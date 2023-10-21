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
            const totalWorkHours = ((totalMinutes - 60) / 60) - (totalGateHours);
            setTotalWorkHours(totalWorkHours);
        }
    };

    const [gateOutTime, setGateOutTime] = useState (0);
    const [gateInTime, setGateInTime] = useState (0);
    const [totalGateHours, setTotalGateHours] = useState (0);

    const handleGateOutChange = (e) => {
        setGateOutTime (e.target.value);
        calcutateTotalGateTime (e.target.value, gateInTime);
    };

    const handleGateInChange = (e) => {
        setGateInTime (e.target.value);
        calcutateTotalGateTime (gateOutTime, e.target.value);
    };

    const calcutateTotalGateTime = (out, ins) => {
        if (out && ins) {
            const gateOutHours = Number(out.split(':')[0]);
            const gateOutMinutes = Number(out.split(':')[1]);
            const gateInHours = Number(ins.split(':')[0])
            const gateInMinutes = Number(ins.split(':')[1]);

            const totalGateMinutes = (gateInHours * 60 + gateInMinutes) - (gateOutHours * 60 + gateOutMinutes);
            const totalGateHours = (totalGateMinutes) / 60;
            setTotalGateHours(totalGateHours);
        }
    }

    return (
        <div className="table-container" style={{ overflowX: "auto" }}>
            <table className="table table-bordered ">
                <thead>
                <tr>
                    <th>MSNV</th>
                    <th>HỌ TÊN</th>
                    <th>NGÀY</th>
                    <th>TỪ GIỜ</th>
                    <th>ĐẾN GIỜ</th>
                    <th>LOẠI</th>
                    <th>LÝ DO</th>
                    <th>TỪ-BẢO VỆ GHI NHẬN</th>
                    <th>ĐẾN-BẢO VỆ GHI NHẬN</th>
                    <th>TỔNG GIỜ RA CỔNG</th>
                    <th>GIỜ VÀO CA</th>
                    <th>GIỜ RA CA</th>
                    <th>TỔNG CA LÀM</th>
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
                    <td><input type="time" value={gateOutTime} onChange={handleGateOutChange} /></td>
                    <td><input type="time" value={gateInTime} onChange={handleGateInChange} /></td>
                    <td>{totalGateHours.toFixed(2)}</td>
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
