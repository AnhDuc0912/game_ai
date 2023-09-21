import { Container } from "@mui/material";
import React from "react";
import "./DefaultLayout.css";
import { Link } from "react-router-dom";

function DefaultLayout({ children }) {
  return (
    <Container fixed>
      <Link to={'/pathFinderVisualizer'}>Trở về trang chủ</Link>
      <div style={{ marginTop: "100px" }}>{children}</div>
      <div style={{ marginTop: "100px", textAlign: 'left' }}>
        <h4>Bài tập số 1 môn Trí tuệ nhân tạo</h4>
        <h5>
          GV hướng dẫn: Cô Đặng Thị Phúc
          <b style={{ fontSize: "1.5rem", color: "pick" }}> xinh đẹp</b>{" "}
          <span style={{ color: "#e25555" }}>&#9829;</span>
        </h5>
        <h5>Nhóm trưởng: Nguyễn Quốc Huy</h5>
        <h5>Phạm Quốc Anh Đức</h5>
        <h5>Võ Dương Khang</h5>
      </div>
    </Container>
  );
}

export default DefaultLayout;
