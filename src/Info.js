import React, { useEffect } from 'react';
import useInput from './useInput';
const Info = () => {
  const initialForm = {
    name: '',
    nickName: ''
  };
  const [state, onChange] = useInput(initialForm);
  console.log('state : ', state);

  const { name, nickName } = state;
  useEffect(() => {
    console.log('렌더링이 완료');
    return () => {
      console.log('cleanup');
    };
  }, []);

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickName" value={nickName} onChange={onChange} />
      </div>
      <div>이름: {name}</div>
      <div>닉네임: {nickName}</div>
    </div>
  );
};

export default Info;
