import React from "react";
import { TimePicker } from "antd";

const CustomTimePicker = () => {
  // Thiết lập các giá trị phút cho TimePicker
  const minuteOptions = [];
  for (let i = 5; i <= 60; i += 5) {
    minuteOptions.push(<TimePicker.Option key={i} value={i} />);
  }

  return (
    <TimePicker
      format="HH:mm" // Chỉ hiển thị giờ và phút
      minuteStep={5} // Bước nhảy của phút
      // Chỉ hiển thị các giá trị phút được thiết lập trước
      renderExtraFooter={() => (
        <div>
          <span>Chọn phút:</span>
          <TimePicker
            format="mm"
            minuteStep={5}
            onChange={(m) => {
              // Xử lý sự kiện khi giá trị phút thay đổi
              // Mã code xử lý khi giá trị phút thay đổi ở đây
            }}
          >
            {minuteOptions}
          </TimePicker>
        </div>
      )}
    />
  );
};

export default CustomTimePicker;
