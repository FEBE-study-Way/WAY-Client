import '../styles/global.css';
import { pretendard } from '../styles/font';

export const metadata = {
  title: 'WAY-Client',
  description: 'WAY는 GSM 실 신청 및 예약 서비스입니다.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={pretendard.className}>
      <body>{children}</body>
    </html>
  );
}
