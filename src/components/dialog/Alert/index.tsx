import React from 'react';
import { useRecoilState } from 'recoil';
import app from 'src/recoils/app';
import { StyledButton, SubmitButton } from 'src/components/button';
import Icons from './Icons';

const Alert = (): JSX.Element | null => {
  const [{ isOpen, type, onCancle, onOk, title, message }, setAlertState] = useRecoilState(
    app.alertState,
  );

  return isOpen ? (
    <div className="fixed left-[50%] top-[12%] z-10 min-w-[356px] max-w-[448px] translate-x-[-50%] transform animate-fadein rounded-lg border-1 border-[#f1f1f1] bg-white p-24 shadow">
      <div className="mb-32 flex-center">
        <Icons type={type} />
        <div className="ml-24 flex-1 rounded">
          <p className="mb-8 text-18 font-semibold max-md:text-16">{title}</p>
          <p className="max-md:text-14">{message}</p>
        </div>
      </div>
      <div className="flex justify-end">
        {onCancle && (
          <StyledButton
            className="mr-12"
            onClick={() => {
              if (onCancle) onCancle();
              setAlertState((prev) => ({ ...prev, isOpen: false }));
            }}
          >
            취소
          </StyledButton>
        )}
        <SubmitButton
          className="text-white"
          onClick={() => {
            if (onOk) onOk();
            setAlertState((prev) => ({ ...prev, isOpen: false }));
          }}
        >
          확인
        </SubmitButton>
      </div>
    </div>
  ) : null;
};

export default Alert;
