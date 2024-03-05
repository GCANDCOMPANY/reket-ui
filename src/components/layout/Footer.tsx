import React from 'react';

const Footer = () => {
  return (
    <div className="flex flex-wrap bg-gray-0 p-24 shadow-[4px_4px_-4px_-4px_rgba(0,0,0,0.3)] md:px-48 md:py-48">
      <div className="mb-32 mr-24 border-gray-4 pr-24 md:border-r-1">
        <p className="mb-16 text-15 font-semibold text-gray-7">(주)지씨앤컴퍼니</p>
        <div className="mb-8 flex">
          <p className="min-w-128 text-14 text-gray-6">대표이사</p>
          <p className="text-14 text-gray-6">지경섭</p>
        </div>
        <div className="mb-8 flex">
          <p className="min-w-128 text-14 text-gray-6">사업자등록번호</p>
          <p className="text-14 text-gray-6">599-81-01643</p>
        </div>
        <div className="mb-8 flex">
          <p className="min-w-128 text-14 text-gray-6">통신판매업신고</p>
          <p className="text-14 text-gray-6">2021-서울중구-1893</p>
        </div>
        <div className="mb-8 flex">
          <p className="min-w-128 text-14 text-gray-6">주소</p>
          <p className="text-14 text-gray-6">
            2 서울특별시 중구 장충단로 13길 20,
            <br />
            현대시티타워 12층 D-16,
            <br />
            GC&COMPANY
          </p>
        </div>
        <div className="flex">
          <p className="min-w-128 text-14 text-gray-6">전화번호</p>
          <p className="text-14 text-gray-6">070-7788-8720</p>
        </div>
      </div>
      <div className="mb-32">
        <p className="mb-16 text-15 font-medium text-gray-6">REKET 고객센터 070-7788-8720</p>
        <p className="mb-8 text-14 text-gray-6">이메일 contact@reket.co.kr</p>
        <div>
          <a href="#" className="">
            <span className="hover:underline-1 text-14 text-gray-6 decoration-gray-6 decoration-2 underline-offset-2 hover:underline">
              이용약관
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
