// 화면이 그려지기 전에 저장된 라이트/다크 설정을 먼저 적용해요 (깜빡임 방지)
(function () { try { var t = localStorage.getItem('sqlwb:theme'); if (t === 'light' || t === 'dark') document.documentElement.setAttribute('data-theme', t); } catch (e) {} })();
