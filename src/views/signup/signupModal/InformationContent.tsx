export default function InformationContent() {
  return (
    <div className="flex flex-col gap-9 body3 text-gray-600">
      <p className="body2 text-gray-500">
        본 서비스는 「개인정보 보호법」 등 관련 법령을 준수하며, 이용자의 개인정보를 중요하게
        보호합니다.
      </p>

      <div className="flex flex-col gap-2">
        <h3 className="h3 text-gray-600">제1조(수집하는 개인정보 항목 및 방법)</h3>
        <p>본 서비스는 다음과 같은 개인정보를 수집합니다.</p>
        <ul className="flex flex-col gap-1 list-disc pl-5">
          <li>회원 가입 시: 이메일, 학번, 이름</li>
        </ul>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="h3 text-gray-600">제2조(개인정보의 이용 목적)</h3>
        <p>수집한 개인정보는 다음의 목적에 한하여 이용됩니다.</p>
        <ul className="flex flex-col gap-1 list-disc pl-5">
          <li>서비스 제공 및 운영</li>
          <li>사용자 식별 및 회원 관리</li>
          <li>이용자 문의 대응 및 공지사항 전달</li>
          <li>서비스 개선 및 안정적인 운영</li>
        </ul>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="h3 text-gray-600">제3조(개인정보의 보유 및 이용 기간)</h3>
        <ul className="flex flex-col gap-1 list-disc pl-5">
          <li>회원 탈퇴 시 또는 개인정보 수집·이용 목적 달성 시 지체 없이 파기합니다.</li>
          <li>
            단, 관계 법령에 따라 일정 기간 보관이 필요한 경우 해당 기간 동안 보관할 수 있습니다.
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="h3 text-gray-600">제4조(개인정보의 제3자 제공)</h3>
        <p>본 서비스는 이용자의 개인정보를 외부에 제공하지 않습니다.</p>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="h3 text-gray-600">제5조(이용자의 권리 및 행사 방법)</h3>
        <p>이용자는 언제든지 자신의 개인정보에 대한 조회, 수정, 삭제를 요청할 수 있습니다.</p>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="h3 text-gray-600">제6조(개인정보의 안전성 확보 조치)</h3>
        <p>본 서비스는 개인정보 보호를 위해 다음과 같은 조치를 취하고 있습니다.</p>
        <ul className="flex flex-col gap-1 list-disc pl-5">
          <li>접근 권한 관리</li>
          <li>개인정보 처리 계정 최소화</li>
          <li>내부 관리 기준 수립</li>
        </ul>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="h3 text-gray-600">제7조(개인정보처리방침 변경)</h3>
        <p>
          본 방침은 법령 또는 서비스 변경에 따라 수정될 수 있으며, 변경 시 서비스 내 공지를 통해
          안내합니다.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="h3 text-gray-600">제8조(개인정보 보호책임자)</h3>
        <div className="bg-gray-100 py-8 px-6 rounded-xl">
          <ul className="text-gray-600 body2 flex flex-col gap-1 list-disc pl-5">
            <li>책임자: 팀 WAY</li>
            <li>이메일: s25024@gsm.hs.kr</li>
          </ul>
        </div>
      </div>

      <hr className="border-gray-600" />

      <div className="text-gray-600 body3">
        <p>공고일자: 2026년 1월 29일</p>
        <p>시행일자: 2026년 1월 29일</p>
      </div>
    </div>
  );
}
