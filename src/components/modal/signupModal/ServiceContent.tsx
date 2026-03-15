export default function ServiceContent() {
  return (
    <div className="flex flex-col gap-9 body3 text-gray-600">
      <p className="body2 text-gray-500">
        서비스를 이용하시거나 회원으로 가입하실 경우 본 약관에 동의하시게 되므로, 잠시 시간을 내셔서
        주의 깊게 살펴봐 주시기 바랍니다.
      </p>

      <div className="flex flex-col gap-2">
        <h3 className="h3 text-gray-600">제1조(목적)</h3>
        <p>
          본 약관은 본 서비스의 이용 조건 및 절차, 이용자와 운영팀 간의 권리·의무를 규정함을
          목적으로 합니다.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="h3 text-gray-600">제2조(회원 가입 및 관리)</h3>
        <ul className="flex flex-col gap-1 list-disc pl-5">
          <li>이용자는 정확한 정보를 제공하여 회원가입을 해야 합니다.</li>
          <li>허위 정보 제공 시 서비스 이용이 제한될 수 있습니다.</li>
          <li>이용자는 언제든지 회원 탈퇴를 요청할 수 있습니다.</li>
        </ul>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="h3 text-gray-600">제3조(이용자의 의무)</h3>
        <p>이용자는 다음 행위를 해서는 안 됩니다.</p>
        <ul className="flex flex-col gap-1 list-disc pl-5">
          <li>타인의 권리 또는 명예를 침해하는 행위</li>
          <li>관련 법령 또는 공공질서에 위반되는 행위</li>
          <li>서비스 운영을 방해하는 행위</li>
        </ul>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="h3 text-gray-600">제4조(서비스 제공 및 변경)</h3>
        <li>서비스는 운영상 또는 기술적 필요에 따라 일부 또는 전체가 변경·중단될 수 있습니다.</li>
        <li>중요한 변경 사항은 사전에 공지합니다.</li>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="h3 text-gray-600">제5조(서비스 이용 제한)</h3>
        <p>이용자가 본 약관을 위반하는 경우, 서비스 이용이 제한되거나 계정이 정지될 수 있습니다.</p>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="h3 text-gray-600">제6조(책임의 제한)</h3>
        <p>
          본 서비스는 무료로 제공되는 서비스로, 운영팀의 고의 또는 중과실이 없는 한 서비스 이용
          과정에서 발생한 손해에 대해 책임을 지지 않습니다.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="h3 text-gray-600">제7조(약관의 변경)</h3>
        <p>본 약관은 사전 공지 후 변경될 수 있습니다.</p>
      </div>

      <hr className="border-gray-600" />

      <div className="text-gray-600 body3">
        <p>공고일자: 2026년 1월 29일</p>
        <p>시행일자: 2026년 1월 29일</p>
      </div>
    </div>
  );
}
