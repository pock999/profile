## 參考
- [sbayd / react-cv](https://github.com/sbayd/react-cv/blob/master/src/index.js)
- [stephanemonnot](https://stephanemonnot.com/)



profile/
├── .github/workflows/deploy.yml  # GitHub Actions (期望 5)
├── public/                       # 靜態資源 (圖片、favicon)
├── src/
│   ├── assets/                   # 需要被 Vite 處理的圖片
│   ├── components/               # React 元件
│   ├── i18n/                     # 語言包管理 (期望 2)
│   │   ├── en.json
│   │   └── zh.json
│   ├── App.jsx
│   └── main.jsx
├── index.html                    # 移到根目錄 (Vite 特性)
├── tailwind.config.js            # Tailwind 配置 (期望 6)
├── vite.config.js                # Vite 配置 (期望 3, 7)
└── package.json