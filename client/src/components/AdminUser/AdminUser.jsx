import React, { useEffect, useState } from "react";
import { WrapperHeader } from "./style";
import { Button, Form, Modal, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import TableComponent from "../TableComponent/TableComponent";
import InputComponent from "../InputComponent/InputComponent";
import * as UserService from "../../services/UserService";
import { useMutationHooks } from "../../hooks/useMutationHooks";
import Loading from "../LoadingComponent/Loading";
import * as Message from "../../components/Message/Message";
import { useQuery } from "@tanstack/react-query";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import DrawerComponent from "../DrawerComponent/DrawerComponent";

const AdminUser = () => {
  const fetchGetDetailsUser = async () => {
    const res = await UserService.adminGetDetailsUsers(rowSelected);
    console.log("res", res);
  };

  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [rowSelected, setRowSelected] = useState("");
  const handleDetailsUser = () => {
    if (rowSelected) {
      fetchGetDetailsUser();
    }
    setIsOpenDrawer(true);
    console.log("rowSelected", rowSelected);
  };
  const renderAction = () => {
    return (
      <div>
        <DeleteOutlined
          style={{ fontSize: "30px", color: "red", cursor: "pointer" }}
        />
        <EditOutlined
          style={{ fontSize: "30px", color: "orange", cursor: "pointer" }}
          onClick={handleDetailsUser}
        />
      </div>
    );
  };

  const [stateUser, setStateUser] = useState({
    msnv: "",
    fullName: "",
    password: "",
    confirmPassword: "",
    gender: "",
    directManagers: "",
    superiorManagers: "",
    isAttendance: "",
    isManager: "",
    isSecurity: "",
  });
  const [stateUserDetails, setStateUserDetails] = useState({
    msnv: "",
    fullName: "",
    password: "",
    confirmPassword: "",
    gender: "",
    directManagers: "",
    superiorManagers: "",
    isAttendance: "",
    isManager: "",
    isSecurity: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const mutation = useMutationHooks((data) => {
    const {
      msnv,
      fullName,
      password,
      confirmPassword,
      gender,
      directManagers,
      superiorManagers,
      isAttendance,
      isManager,
      isSecurity,
    } = data;
    const res = UserService.register({
      msnv,
      fullName,
      password,
      confirmPassword,
      gender,
      directManagers,
      superiorManagers,
      isAttendance,
      isManager,
      isSecurity,
    });
    return res;
  });
  const getAllUser = async () => {
    const res = await UserService.getAllUser();
    return res;
  };
  const { isLoading: isLoadingUsers, data: users } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUser,
  });

  const dataTable =
    users?.data?.length &&
    users?.data?.map((user) => {
      return { ...user, key: user._id };
    });
  const columns = [
    {
      title: "msnv",
      dataIndex: "msnv",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "fullName",
      dataIndex: "fullName",
    },
    {
      title: "position",
      dataIndex: "position",
    },
    {
      title: "department",
      dataIndex: "department",
    },
    {
      title: "workHours",
      dataIndex: "workHours",
    },
    {
      title: "directManagers",
      dataIndex: "directManagers",
    },
    {
      title: "superiorManagers",
      dataIndex: "superiorManagers",
    },
    // {
    //   title: "isAttendance",
    //   dataIndex: "isAttendance",
    // },
    // {
    //   title: "isManager",
    //   dataIndex: "isManager",
    // },
    // {
    //   title: "isSecurity",
    //   dataIndex: "isSecurity",
    // },
    {
      title: "Action",
      dataIndex: "Action",
      render: renderAction,
    },
  ];

  const onFinish = () => {
    mutation.mutate(stateUser);
    console.log("finish", stateUser);
  };
  const { data, isLoading, isSuccess } = mutation;
  useEffect(() => {
    if (isSuccess && data?.status === "success") {
      Message.success();
      handleCancel();
    } else if (data?.status === "error") {
      Message.error();
    }
  }, [isSuccess]);

  const handleCancel = () => {
    setIsModalOpen(false);
    setStateUser({
      msnv: "",
      fullName: "",
      password: "",
      confirmPassword: "",
      gender: "",
    });
  };
  const handleOnchange = (e) => {
    setStateUser({
      ...stateUser,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <WrapperHeader>quản lí người dùng</WrapperHeader>
      <div style={{ marginTop: "20px" }}>
        <Button
          style={{
            width: "150px",
            height: "150px ",
            borderRadius: "6px",
            borderStyle: "dashed",
          }}
          onClick={() => setIsModalOpen(true)}
        >
          <PlusOutlined style={{ fontSize: "60px" }} />
        </Button>
      </div>
      <div style={{ marginTop: "20px" }}>
        <TableComponent
          columns={columns}
          isLoading={isLoadingUsers}
          data={dataTable}
          onRow={(record, rowIndex) => {
            return {
              onClick: (event) => {
                setRowSelected(record._id);
              },
            };
          }}
        />
      </div>
      <Modal
        title="thêm nhân viên"
        open={isModalOpen}
        onCancel={handleCancel}
        footer=""
      >
        <Loading isLoading={isLoading}>
          <Form
            name="basic"
            labelCol={{
              span: 6,
            }}
            wrapperCol={{
              span: 18,
            }}
            style={{
              maxWidth: 600,
            }}
            onFinish={onFinish}
            autoComplete="on"
          >
            <Form.Item
              label="msnv"
              name="msnv"
              rules={[
                {
                  required: true,
                  message: "Please input your msnv!",
                },
              ]}
            >
              <InputComponent
                value={stateUser.msnv}
                onChange={handleOnchange}
                name="msnv"
              />
            </Form.Item>

            <Form.Item
              label="Họ và Tên"
              name="fullName"
              rules={[
                {
                  required: true,
                  message: "Please input your fullName!",
                },
              ]}
            >
              <InputComponent
                value={stateUser.fullName}
                onChange={handleOnchange}
                name="fullName"
              />
            </Form.Item>
            <Form.Item
              label="Mật Khẩu"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <InputComponent
                value={stateUser.password}
                onChange={handleOnchange}
                name="password"
              />
            </Form.Item>
            <Form.Item
              label="Nhập lại mật khẩu"
              name="confirmPassword"
              rules={[
                {
                  required: true,
                  message: "Please input your confirmPassword!",
                },
              ]}
            >
              <InputComponent
                value={stateUser.confirmPassword}
                onChange={handleOnchange}
                name="confirmPassword"
              />
            </Form.Item>
            <Form.Item
              label="giới tính"
              name="gender"
              rules={[
                {
                  required: true,
                  message: "Please input your gender!",
                },
              ]}
            >
              <InputComponent
                value={stateUser.gender}
                onChange={handleOnchange}
                name="gender"
              />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Loading>
      </Modal>
      <DrawerComponent
        title="Sửa thông tin"
        isOpen={isOpenDrawer}
        onClose={() => setIsOpenDrawer(false)}
        width="90%"
      >
        <Loading isLoading={isLoading}>
          <Form
            name="basic"
            labelCol={{
              span: 6,
            }}
            wrapperCol={{
              span: 18,
            }}
            style={{
              maxWidth: 600,
            }}
            onFinish={onFinish}
            autoComplete="on"
          >
            <Form.Item
              label="msnv"
              name="msnv"
              rules={[
                {
                  required: true,
                  message: "Please input your msnv!",
                },
              ]}
            >
              <InputComponent
                value={stateUser.msnv}
                onChange={handleOnchange}
                name="msnv"
              />
            </Form.Item>

            <Form.Item
              label="Họ và Tên"
              name="fullName"
              rules={[
                {
                  required: true,
                  message: "Please input your fullName!",
                },
              ]}
            >
              <InputComponent
                value={stateUser.fullName}
                onChange={handleOnchange}
                name="fullName"
              />
            </Form.Item>
            <Form.Item
              label="directManagers"
              name="directManagers"
              rules={[
                {
                  required: true,
                  message: "Please input your directManagers!",
                },
              ]}
            >
              <InputComponent
                value={stateUser.directManagers}
                onChange={handleOnchange}
                name="directManagers"
              />
            </Form.Item>
            <Form.Item
              label="superiorManagers"
              name="superiorManagers"
              rules={[
                {
                  required: true,
                  message: "Please input your superiorManagers!",
                },
              ]}
            >
              <InputComponent
                value={stateUser.superiorManagers}
                onChange={handleOnchange}
                name="superiorManagers"
              />
            </Form.Item>
            <Form.Item
              label="giới tính"
              name="gender"
              rules={[
                {
                  required: true,
                  message: "Please input your gender!",
                },
              ]}
            >
              <InputComponent
                value={stateUser.gender}
                onChange={handleOnchange}
                name="gender"
              />
            </Form.Item>
            <Form.Item
              label="isAttendance"
              name="isAttendance"
              rules={[
                {
                  required: true,
                  message: "Please input your isAttendance!",
                },
              ]}
            >
              <InputComponent
                value={stateUser.isAttendance}
                onChange={handleOnchange}
                name="isAttendance"
              />
            </Form.Item>
            <Form.Item
              label="isManager"
              name="isManager"
              rules={[
                {
                  required: true,
                  message: "Please input your gender!",
                },
              ]}
            >
              <InputComponent
                value={stateUser.isManager}
                onChange={handleOnchange}
                name="isManager"
              />
            </Form.Item>
            <Form.Item
              label="isSecurity"
              name="isSecurity"
              rules={[
                {
                  required: true,
                  message: "Please input your isSecurity!",
                },
              ]}
            >
              <InputComponent
                value={stateUser.isSecurity}
                onChange={handleOnchange}
                name="isSecurity"
              />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Loading>
      </DrawerComponent>
    </div>
  );
};

export default AdminUser;
