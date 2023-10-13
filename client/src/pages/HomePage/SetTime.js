import React, { useState } from "react";
import { TimePicker } from "antd";
import moment from "moment";

const SetTime = () => {
  const [selectedMinute, setSelectedMinute] = useState(0);

  const minuteOptions = [];
  for (let i = 5; i <= 60; i += 5) {
    minuteOptions.push(i);
  }

  return (
    <TimePicker
      format="HH:mm"
      minuteStep={5}
      renderExtraFooter={() => {
        return (
          <div>
            <span>Chọn phút:</span>
            <TimePicker
              format="mm"
              minuteStep={5}
              onChange={(m) => {
                setSelectedMinute(m); // Lưu giá trị phút được chọn vào state
                // Xử lý sự kiện khi giá trị phút thay đổi
                // Mã code xử lý khi giá trị phút thay đổi ở đây
              }}
              value={moment("00:00", "HH:mm").minute(selectedMinute)}
            >
              {minuteOptions.map((minute) => (
                <TimePicker.Option
                  key={minute}
                  value={moment("00:00", "HH:mm").minute(minute)}
                >
                  {moment("00:00", "HH:mm").minute(minute).format("mm")}
                </TimePicker.Option>
              ))}
            </TimePicker>
          </div>
        );
      }}
    />
  );
};

export default SetTime;
