import React, { useState } from "react";
import { NavLink, Route } from "react-router-dom";
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb } from "antd";
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
export const AdminTemplate = (props) => {
    const [state, setState] = useState({ collapsed: false });
    const onCollapse = (collapsed) => {
        setState({ collapsed });
    };

    let { Component, ...resParams } = props;
    return (
        <Route
            {...resParams}
            render={(propsRoute) => {
                return (
                    <>
                        <Layout style={{ minHeight: "100vh" }}>
                            <Sider
                                collapsible
                                collapsed={state.collapsed}
                                onCollapse={onCollapse}
                            >
                                <div className="logo" />
                                <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
                                    <div className="pt-5 pb-5 text-center">
                                        <img
                                            src="/img/Header/logo.png" alt='/img/Header/logo.png'
                                            style={{ borderRadius: "50%", height: '50px', width: '50px' }}
                                        />
                                        {!state.collapsed ? (
                                            <div className="text-warning mt-3 font-weight-bold">
                                                ADMIN
                                            </div>
                                        ) : (
                                                ""
                                            )}
                                    </div>
                                    {/* <Menu.Item key="1" icon={<PieChartOutlined />}></Menu.Item> */}
                                    <SubMenu key="sub1" icon={<UserOutlined />} title="Phim">
                                        <Menu.Item key="3">
                                            <NavLink to='/admin/quanlyphim'>Quản lý phim</NavLink>
                                        </Menu.Item>
                                    </SubMenu>
                                    <SubMenu key="sub2" icon={<TeamOutlined />} title="Người dùng">
                                        <Menu.Item key="6">
                                            <NavLink to='/admin/quanlynguoidung'>Quản lý người dùng</NavLink>
                                        </Menu.Item>
                                    </SubMenu>
                                </Menu>
                            </Sider>
                            <Layout className="site-layout">
                                <Header
                                    className="site-layout-background"
                                    style={{ padding: 0 }}
                                />
                                <Content style={{ margin: "0 16px" }}>
                                    <Breadcrumb style={{ margin: "16px 0" }}>
                                        {/* <Breadcrumb.Item>User</Breadcrumb.Item>
                                        <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
                                    </Breadcrumb>
                                    <div
                                        className="site-layout-background"
                                        style={{ padding: 24, minHeight: 360 }}
                                    >
                                        <Component {...propsRoute} />
                                    </div>
                                </Content>
                                <Footer style={{ textAlign: "center" }}>
                                    Lư Trung Cinema
                                </Footer>
                            </Layout>
                        </Layout>
                    </>
                );
            }}
        />
    );
};
