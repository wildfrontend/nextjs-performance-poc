'use client';

import {
  Container,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';

export default function EarthCanvasDocs() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      {/* 標題 */}
      <Typography fontWeight="bold" gutterBottom variant="h3">
        3D Earth Canvas 使用說明
      </Typography>

      {/* 功能概述 */}
      <Typography fontWeight="medium" sx={{ mt: 4 }} variant="h5">
        1. 功能概述
      </Typography>
      <Typography sx={{ mt: 1 }} variant="body1">
        這個元件使用 <b>React + React Three Fiber (R3F)</b> 和 <b>Three.js</b>{' '}
        渲染一個可互動的 3D 地球模型，支援以下功能：
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="地球自轉動畫" />
        </ListItem>
        <ListItem>
          <ListItemText primary="使用貼圖顯示真實地球表面" />
        </ListItem>
        <ListItem>
          <ListItemText primary="可用滑鼠旋轉觀看球體（禁用縮放和平移）" />
        </ListItem>
      </List>

      <Divider sx={{ my: 3 }} />

      <Typography sx={{ mt: 2, fontWeight: 'bold' }} variant="subtitle1">
        Earth3D 元件：
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary="<Canvas>"
            secondary="R3F 根容器，相當於 Three.js 的 Scene + Camera + Renderer"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="camera.position = [x, y, z]"
            secondary="三維座標陣列表示相機在 3D 空間的位置。右手坐標系中：X → 左右, Y → 上下, Z → 前後。例如 [0,0,5] 表示相機位於畫面前方 5 單位，對準原點 (0,0,0)"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="ambientLight"
            secondary="環境光，提供整體照明"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="directionalLight"
            secondary="方向光，模擬太陽光效果"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="<OrbitControls>"
            secondary="滑鼠旋轉控制器（旋轉啟用，縮放和平移禁用）"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="<Earth>"
            secondary="地球物件元件，載入貼圖並旋轉"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="sphereGeometry args = [半徑, 水平分段, 垂直分段]"
            secondary="用陣列傳入球體幾何體參數，例如 [1, 1024, 1024] 表示半徑 1、水平/垂直分段各 1024"
          />
        </ListItem>
      </List>

      <Typography sx={{ mt: 2, fontWeight: 'bold' }} variant="subtitle1">
        Earth 元件：
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary="useLoader(TextureLoader)"
            secondary="載入地球貼圖"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="useRef"
            secondary="取得 mesh 實例，方便修改旋轉"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="useFrame"
            secondary="每幀更新 mesh 的 Y 軸旋轉，自轉動畫"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="meshStandardMaterial map={colorMap}"
            secondary="套用貼圖材質"
          />
        </ListItem>
      </List>
    </Container>
  );
}
