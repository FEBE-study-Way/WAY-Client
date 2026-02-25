import Google from '@/assets/svg/Google';
import Logo from '@/assets/svg/Logo';

export default function SigninView() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="mb-7">
        <Logo />
      </div>
      <div className="flex gap-2 flex-col mb-20">
        <p className="h3 text-gray-700">Where Are You</p>
        <p className="body1 text-center">학교 실 관리/신청</p>
      </div>
      <div>
        <button className="flex justify-center gap-5 border border-gray-200 text-gray-700 body1 rounded-xl w-100 h-13.25 py-3 cursor-pointer">
          <Google /> Google로 계속하기
        </button>
      </div>
    </div>
  );
}
