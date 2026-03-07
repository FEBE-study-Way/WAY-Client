import { Logo } from '@/assets';
import { Input, TermItem } from '@/components';
import ServiceContent from './signupModal/ServiceContent';
import InformationContent from './signupModal/InformationContent';

export default function SignupView() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="mb-7">
        <Logo />
      </div>
      <div className="flex gap-2 flex-col mb-16">
        <p className="h3 text-gray-700">Where Are You</p>
        <p className="body1 text-center">학교 실 관리/신청</p>
      </div>
      <div className="flex flex-col gap-7 mb-7">
        <Input text="이름" />
        <Input text="학번" />
      </div>

      <div className="w-100 flex flex-col gap-5">
        <div className="bg-gray-100 rounded-2xl px-5 py-4 flex items-center gap-4">
          <input type="checkbox" className="w-5 h-5 cursor-pointer" />
          <span className="body2 text-gray-500">전체 약관 동의</span>
        </div>

        <div className="flex flex-col gap-5 px-1">
          <TermItem
            text="[필수] WAY 이용 약관에 동의"
            modalTitle="서비스 이용약관"
            modalContent={<ServiceContent />}
          />
          <TermItem
            text="[필수] 개인정보 수집 및 이용에 동의"
            modalTitle="개인정보처리방침"
            modalContent={<InformationContent />}
          />
        </div>

        <button className="w-full max-h-13.25 bg-blue-100 hover:bg-blue-200 cursor-pointer rounded-full py-4 text-white-100 body1 mt-2 flex items-center justify-center">
          회원가입 하기
        </button>
      </div>
    </div>
  );
}
