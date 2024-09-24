import React from 'react';
import './App.css';

const App: React.FC = () => {
  const skills = ['Java', 'Spring Boot', 'Spring MVC', 'Spring Data JPA', 'Spring Security',
    'MySQL', 'Git', 'GitHub', 'Docker', 'AWS'];

  return (
      <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="bg-blue-600 text-white p-6">
            <h1 className="text-3xl font-bold">이승희</h1>
            <p className="text-xl mt-2">백엔드 개발자</p>
          </div>

          <div className="p-6">
            <section className="mb-6">
              <h2 className="text-2xl font-semibold mb-4">소개</h2>
              <p className="text-gray-700">
                다양한 기술과 열정으로 팀의 목표를 함께 이루어 나가는 백엔드 개발자입니다.
                (주)이스트소프트에서 ESTsoft 백엔드 개발자 양성 과정을 수료했으며,
                협업 능력과 문제 해결 능력을 바탕으로 프로젝트를 성공적으로 이끌어내고자 합니다.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-semibold mb-4">기술 스택</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
                ))}
              </div>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-semibold mb-4">프로젝트</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold">SecondInning: AI 중고거래 플랫폼</h3>
                  <p className="text-gray-600 mt-1">
                    AI 기술을 활용한 혁신적인 중고거래 플랫폼 개발. Spring Boot와 Next.js를 사용하여
                    안전하고 신뢰할 수 있는 거래 환경 구축.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-semibold mb-4">교육</h2>
              <div>
                <h3 className="text-xl font-semibold">ESTsoft 백엔드 개발자 양성 과정</h3>
                <p className="text-gray-600">(주)이스트소프트 | 2024.05 ~ 2024.09</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">연락처</h2>
              <div className="flex space-x-4">
                <a href="mailto:seunghee@example.com" className="text-blue-600 hover:text-blue-800">
                  이메일
                </a>
                <a href="https://github.com/LLSNsssz" className="text-blue-600 hover:text-blue-800">
                  GitHub
                </a>
                <a href="https://linkedin.com/in/seunghee-lee" className="text-blue-600 hover:text-blue-800">
                  LinkedIn
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
  );
};

export default App;