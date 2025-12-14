import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ConfigProvider } from 'antd';

import "styles/site.scss";
import App from 'App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider componentSize="small">
        <App />
    </ConfigProvider>
  </StrictMode>,
)
