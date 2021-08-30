import React, { FC } from 'react';

interface FunctionPageProps {
  onFinish: any;
}
const Function: FC<FunctionPageProps> = ({ onFinish }) => {
  const [str, setStr] = React.useState("")
  return (
    <>
      <div className="testDemo">
        <input type="text"
          aria-label="myInput"
          onChange={(e: any) => { setStr(e.target.value) }}
        />
        <button type='button' className="myBut" onClick={() => { console.log(str); onFinish() }}>
          consoleLog
        </button>
        <div>您输入的内容是：{str}</div>
      </div>
    </>
  );
};

export default Function;
