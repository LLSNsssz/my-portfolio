import React from 'react';
import { ChevronDoubleDownIcon } from '@heroicons/react/24/solid';

const Resume: React.FC = () => {
  const skills = [
    { category: "Backend", items: ["Java", "Spring Boot", "Spring MVC", "Spring Data JPA", "Spring Security"] },
    { category: "Database", items: ["MySQL", "Redis"] },
    { category: "DevOps", items: ["Git", "GitHub", "Docker", "AWS (EC2, S3, RDS, Lambda)"] },
    { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "React"] },
    { category: "Others", items: ["RESTful API Design", "Microservices Architecture", "Test-Driven Development (TDD)"] }
  ];

  const projects = [
    {
      title: "SecondInning: AI 기반 중고거래 플랫폼",
      description: "Spring Boot와 React를 사용한 AI 기반 중고거래 웹 애플리케이션",
      achievements: [
        "실시간 채팅 기능 구현으로 사용자 간 커뮤니케이션 20% 향상",
        "AI 기반 가격 추천 시스템 도입으로 거래 성사율 15% 증가",
        "마이크로서비스 아키텍처 도입으로 시스템 확장성 개선 및 배포 시간 50% 단축"
      ],
      technologies: ["Spring Boot", "React", "MySQL", "Docker", "AWS"],
      githubLink: "https://github.com/yourusername/secondinning",
      liveDemo: "https://54.180.243.156.nip.io/"
    }
  ];

  return (
      <div className="flex min-h-screen bg-gray-100">
        {/* 왼쪽 사이드바 */}
        <div className="w-1/4 bg-blue-600 text-white p-6 fixed h-full overflow-auto">
          <img src="/api/placeholder/128" alt="이승희" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"/>
          <h1 className="text-2xl font-bold mb-2 text-center">이승희</h1>
          <p className="text-xl mb-4 text-center">백엔드 개발자</p>
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">연락처</h2>
            <p className="text-sm">이메일: seungjang93@gmail.com</p>
            <p className="text-sm">전화번호: 010-4100-2147</p>
          </div>
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">링크</h2>
            <ul className="text-sm">
              <li><a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">GitHub</a></li>
              <li><a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">LinkedIn</a></li>
              <li><a href="https://yourusername.github.io/portfolio" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">포트폴리오</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">간단 소개</h2>
            <p className="text-sm">
              안녕하세요. 저는 복잡한 문제를 해결하고 효율적인 백엔드 시스템을 구축하는 것을 즐기는 개발자입니다.
              지속적인 학습과 새로운 기술 습득을 통해 더 나은 개발자로 성장하고자 노력하고 있습니다.
            </p>
          </div>
        </div>

        {/* 오른쪽 주요 내용 */}
        <div className="w-3/4 ml-auto p-6">
          <div id="skills" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">기술 스택</h2>
            {skills.map((skillGroup, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-xl font-semibold text-blue-600 mb-3">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                        <span key={skillIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                    ))}
                  </div>
                </div>
            ))}
          </div>

          <div id="projects" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">프로젝트</h2>
            {projects.map((project, index) => (
                <div key={index} className="mb-8 bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <h4 className="text-lg font-semibold mb-2">주요 성과:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-700 mb-4">
                    {project.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex}>{achievement}</li>
                    ))}
                  </ul>
                  <h4 className="text-lg font-semibold mb-2">사용 기술:</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">GitHub 저장소</a>
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">라이브 데모</a>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default Resume;