import React, { useEffect } from 'react';
import { Link, Element, animateScroll as scroll } from 'react-scroll';
import { ChevronDoubleDownIcon } from '@heroicons/react/24/solid';
import './App.css';

const App: React.FC = () => {
  const skills = [
    { category: "Backend", items: ["Java", "Spring Boot", "Spring MVC", "Spring Data JPA", "Spring Security"] },
    { category: "Database", items: ["MySQL", "PostgreSQL", "Redis", "MongoDB"] },
    { category: "DevOps", items: ["Git", "GitHub", "Docker", "Kubernetes", "AWS (EC2, S3, RDS, Lambda)"] },
    { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "React"] },
    { category: "Others", items: ["RESTful API Design", "Microservices Architecture", "Test-Driven Development (TDD)"] }
  ];

  const projects = [
    {
      title: "중고거래 플랫폼",
      description: "Spring Boot와 React를 사용한 실시간 중고거래 웹 애플리케이션",
      achievements: [
        "실시간 채팅 기능 구현으로 사용자 간 커뮤니케이션 20% 향상",
        "거래 데이터 분석 시스템 도입으로 사기 거래 10% 감소"
      ]
    },
    {
      title: "클라우드 기반 로그 분석 시스템",
      description: "AWS 서비스를 활용한 대규모 로그 데이터 실시간 분석 시스템",
      achievements: [
        "ELK 스택 활용으로 로그 처리 속도 50% 개선",
        "이상 탐지 알고리즘 구현으로 시스템 장애 예방 효과 30% 증가"
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          section.classList.add('animate-fade-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-blue-600 text-white p-4 fixed w-full z-10">
          <ul className="flex justify-center space-x-4">
            <li><Link to="intro" smooth={true} duration={500} className="cursor-pointer">소개</Link></li>
            <li><Link to="skills" smooth={true} duration={500} className="cursor-pointer">기술 스택</Link></li>
            <li><Link to="projects" smooth={true} duration={500} className="cursor-pointer">프로젝트</Link></li>
            <li><Link to="contact" smooth={true} duration={500} className="cursor-pointer">연락처</Link></li>
          </ul>
        </nav>

        <Element name="intro" className="section pt-20 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">이승희</h1>
            <p className="text-xl mb-8">백엔드 개발자</p>
            <p className="max-w-2xl mx-auto text-gray-700">
              열정적인 주니어 백엔드 개발자로서, 복잡한 문제를 해결하고 효율적인 솔루션을 개발하는 데 관심이 있습니다.
              지속적인 학습과 새로운 기술 습득을 통해 더 나은 개발자로 성장하고자 노력하고 있습니다.
            </p>
            <ChevronDoubleDownIcon className="h-8 w-8 mx-auto mt-8 animate-bounce text-blue-600" />
          </div>
        </Element>

        <Element name="skills" className="section py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">기술 스택</h2>
            {skills.map((skillGroup, index) => (
                <div key={index} className="mb-8">
                  <h3 className="text-xl font-semibold text-blue-600 mb-4">{skillGroup.category}</h3>
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
        </Element>

        <Element name="projects" className="section py-20 bg-gray-100">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">프로젝트</h2>
            {projects.map((project, index) => (
                <div key={index} className="mb-8 bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <ul className="list-disc list-inside text-sm text-gray-700">
                    {project.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>
            ))}
          </div>
        </Element>

        <Element name="contact" className="section py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">연락처</h2>
            <p className="mb-4">이메일: your.email@example.com</p>
            <div className="flex justify-center space-x-4">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">GitHub</a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">LinkedIn</a>
            </div>
          </div>
        </Element>
      </div>
  );
};

export default App;