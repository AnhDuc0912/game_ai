import React from 'react';
import './App.css';
import PathfindingVisualizer from './PathfindingVisualizer/PathfindingVisualizer';
import { Container } from '@mui/material';

function App() {
  return (
    <Container fixed>
      <div style={{ marginTop: '100px' }}>
        <PathfindingVisualizer />
      </div>
      <div style={{ marginTop: '100px' }}>
        <h4>
          Bài tập số 1 môn Trí tuệ nhân tạo
        </h4>
        <h5>GV hướng dẫn: Cô Đặng Thị Phúc xinh đẹp</h5>
        <h5>Nhóm trưởng: Nguyễn Quốc Huy</h5>
        <h5>Phạm Quốc Anh Đức</h5>
        <h5>Võ Dương Khang</h5>
      </div>
    </Container>
  );
}

export default App;
