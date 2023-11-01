import { Radio } from "antd";
import { WrapperInputFrom } from "./style";
import { useState } from "react";

const MoreStaff = () => {
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <div style={{ marginTop: "24px" }}>
      <from>
        <WrapperInputFrom className="input-group flex-nowrap">
          <span className="input-group-text" id="addon-wrapping">
            MSNV
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Mã nhân viên"
          />
        </WrapperInputFrom>
        <WrapperInputFrom className="input-group flex-nowrap">
          <span className="input-group-text" id="addon-wrapping">
            Họ và tên
          </span>
          <input type="text" className="form-control" placeholder="Họ và tên" />
        </WrapperInputFrom>
        <WrapperInputFrom className="input-group flex-nowrap">
          <span className="input-group-text" id="addon-wrapping">
            Giới tính
          </span>
          <Radio.Group
            onChange={onChange}
            value={value}
            style={{ marginLeft: "16px", marginTop: "6px" }}
          >
            <Radio value={1}>Nam</Radio>
            <Radio value={2}>Nữ</Radio>
          </Radio.Group>
        </WrapperInputFrom>
        <WrapperInputFrom className="input-group flex-nowrap">
          <span className="input-group-text" id="addon-wrapping">
            Chức vụ
          </span>

          <select className="form-select" id="inputGroupSelect01">
            <option selected>Chức vụ</option>
            <option value="1">ăn bám</option>
            <option value="2">ăn hại</option>
            <option value="3">phế vật</option>
          </select>
        </WrapperInputFrom>
        <WrapperInputFrom className="input-group flex-nowrap">
          <span className="input-group-text" id="addon-wrapping">
            Phòng ban
          </span>
          <select className="form-select" id="inputGroupSelect01">
            <option selected>Phòng ban</option>
            <option value="1">chuồng lợn</option>
            <option value="2">chuồng gà</option>
            <option value="3">chuồng bò</option>
          </select>
        </WrapperInputFrom>
        <WrapperInputFrom className="input-group flex-nowrap">
          <span className="input-group-text" id="addon-wrapping">
            người quản lý trực tiếp
          </span>
          <select className="form-select" id="inputGroupSelect01">
            <option selected>Người quản lý</option>
            <option value="1">heo</option>
            <option value="2">bò</option>
            <option value="3">lợn</option>
          </select>
        </WrapperInputFrom>
        <WrapperInputFrom className="input-group flex-nowrap">
          <span className="input-group-text" id="addon-wrapping">
            cấp trên Quản lý
          </span>
          <select className="form-select" id="inputGroupSelect01">
            <option selected>Cấp trên quản lý</option>
            <option value="1">heo</option>
            <option value="2">bò</option>
            <option value="3">gà</option>
          </select>
        </WrapperInputFrom>
        <WrapperInputFrom className="input-group flex-nowrap">
          <span className="input-group-text" id="addon-wrapping">
            Giờ làm việc
          </span>
          <input type="time" className="form-control" placeholder="Username" />
          <input type="time" className="form-control" placeholder="Username" />
        </WrapperInputFrom>
        <button
          type="button"
          className="btn btn-success"
          style={{ display: "flex", textAlign: "center", margin: "auto" }}
        >
          Thêm
        </button>
      </from>
    </div>
  );
};
export default MoreStaff;
