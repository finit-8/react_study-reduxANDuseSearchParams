import React from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

const IntroContainer = () => {
  const {jobs} = useSelector(state => state?.jobs)
  console.log(jobs)
  // useSelector()로 redux의 객체 jobs를 들고옴.
 
  // (↑ redux객체 jobs !== ↓ 쿼리스트링key jobs)

  const [searchParams] = useSearchParams()
  const job = searchParams.get("jobs")     
  console.log(job)
  // URL쿼리스트링에서 jobs라는 key의 value를 가져와 변수job에 담음
  // job도 객체임

  console.log(jobs[job])
  // job변수의 값과 redux객체 jobs의 키값 중, 일치하는 데이터를 가져옴

  const {name, skills} = jobs[job];
  const skillList = skills.map((skill, i) => {
    <li key={i}>{skill}</li>
  })

  
  return (
    <div>
      <h1>소개페이지</h1>
      <p>이름: {name}</p>
      <p>직업: {job}</p>
      <ul>
        {skillList}
      </ul>
    </div>
  );
};

export default IntroContainer;