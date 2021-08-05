import React, { useState } from 'react';

import CloseButton from 'components/skeleton/CloseButton';

import * as S from './styles';
import dummyResponse from 'services/api/plans';

const MyPlans = () => {
  const [plans, setPlans] = useState(dummyResponse.plans);

  return (
    <S.Container>
      <S.Title>
        <h1>My Plans</h1>
        <CloseButton />
      </S.Title>
      { 
        plans.length ? 
        plans.map(plan => <S.Pill key={plan.id}>{ plan.title }</S.Pill>) :
        <S.Pill><strong>There are no plans yet</strong></S.Pill>
      }
    </S.Container>
  );
};

export default MyPlans;