import React from 'react';
import './App.css';

const App: React.FC = () => {
  const skills = [
    'Java', 'Spring Boot', 'Spring MVC', 'Spring Data JPA', 'Spring Security',
    'MySQL', 'PostgreSQL', 'Redis', 'MongoDB',
    'Git', 'GitHub', 'GitLab CI/CD',
    'Docker', 'Kubernetes',
    'AWS (EC2, S3, RDS, Lambda)',
    'RESTful API Design', 'Microservices Architecture',
    'Test-Driven Development (TDD)', 'JUnit', 'Mockito'
  ];

  const projects = [
    {
      title: "SecondInning: AI 중고거래 플랫폼",
      description: "AI 기술을 활용한 혁신적인 중고거래 플랫폼 개발. Spring Boot와 Next.js를 사용하여 안전하고 신뢰할 수 있는 거래 환경 구축.",
      technologies: "Spring Boot, Next.js, MySQL, AWS, Docker",
      role: "백엔드 개발 리드",
      achievements: [
        "실시간 채팅 기능 구현으로 사용자 간 커뮤니케이션 20% 향상",
        "AI 기반 가격 추천 시스템 도입으로 거래 성사율 15% 증가",
        "마이크로서비스 아키텍처 도입으로 시스템 확장성 개선 및 배포 시간 50% 단축"
      ]
    },
    {
      title: "스마트 물류 관리 시스템",
      description: "IoT 센서와 빅데이터 분석을 활용한 실시간 물류 추적 및 최적화 시스템 개발",
      technologies: "Java, Spring Boot, Kafka, Elasticsearch, Docker, Kubernetes",
      role: "백엔드 개발자",
      achievements: [
        "실시간 데이터 처리 파이프라인 구축으로 물류 추적 정확도 99.9% 달성",
        "머신러닝 기반 수요 예측 모델 통합으로 재고 관리 효율성 30% 향상",
        "마이크로서비스 아키텍처 적용으로 시스템 장애 복구 시간 70% 단축"
      ]
    }
  ];

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
                5년차 백엔드 개발자로, 복잡한 비즈니스 로직을 효율적이고 확장 가능한 시스템으로 구현하는 데 전문성을 가지고 있습니다.
                대규모 트래픽 처리, 마이크로서비스 아키텍처 설계, 클라우드 네이티브 애플리케이션 개발 경험을 바탕으로
                안정적이고 고성능의 백엔드 시스템을 구축해왔습니다. 지속적인 학습과 새로운 기술 적용을 통해
                최적의 솔루션을 제공하는 것을 목표로 하고 있습니다.
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
              <div className="space-y-6">
                {projects.map((project, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-4">
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <p className="text-gray-600 mt-1">{project.description}</p>
                      <p className="text-sm text-gray-500 mt-1">기술 스택: {project.technologies}</p>
                      <p className="text-sm font-semibold mt-1">역할: {project.role}</p>
                      <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
                        {project.achievements.map((achievement, idx) => (
                            <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                ))}
              </div>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-semibold mb-4">교육</h2>
              <div>
                <h3 className="text-xl font-semibold">OO대학교 컴퓨터공학과</h3>
                <p className="text-gray-600">학사 | 2016.03 ~ 2020.02</p>
              </div>
              <div className="mt-4">
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