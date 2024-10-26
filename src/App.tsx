import React from 'react';

const Resume = () => {
    const skills = [
        {category: "Backend", items: ["Java", "Spring Boot", "Spring MVC", "Spring Data JPA", "Spring Security"]},
        {category: "Database", items: ["MySQL", "PostgreSQL", "Redis", "MongoDB"]},
        {category: "DevOps", items: ["Git", "GitHub", "Docker", "Kubernetes", "AWS (EC2, S3, RDS, Lambda)"]},
        {category: "Frontend", items: ["HTML", "CSS", "JavaScript", "React"]},
        {
            category: "Others",
            items: ["RESTful API Design", "Microservices Architecture", "Test-Driven Development (TDD)"]
        }
    ];

    const projects = [
        {
            title: "SecondInning: AI 중고거래 플랫폼",
            description: "교육 기관에서 진행한 팀 프로젝트로, Spring Boot와 React를 사용하여 AI 중고거래 웹 애플리케이션을 개발하였습니다.",
            achievements: [
                "Spring Boot를 사용하여 백엔드 API를 개발하고 React로 프론트엔드를 구현",
                "MySQL 데이터베이스를 사용하여 상품 및 사용자 정보 관리",
                "채팅 기능을 구현하여 사용자 간 커뮤니케이션 활성화",
                "Bucket4j를 활용하여 API 호출 횟수를 제한함으로써 서버 부하 관리",
                "JWT를 사용하여 stateless한 사용자 인증 시스템을 구현하여 서버 부담 감소",
                "회원 관련 CRUD 기능 및 프론트엔드 개발을 통해 사용자 편의성 향상",
                "AWS를 활용한 애플리케이션 배포 및 RDS를 통한 데이터베이스 관리로 확장성 및 가용성 확보",
                "Git과 Github를 활용한 버전 관리 및 협업"
            ],
            technologies: ["Spring Boot", "React", "MySQL", "AWS"],
            githubLink: "https://github.com/LLSNsssz/Play-Baseballv2",
            liveDemo: "https://54.180.243.156.nip.io/"
        }
    ];

    return (
        <div className="max-w-[21cm] mx-auto bg-white shadow-lg my-8 min-h-[29.7cm] relative">
            {/* 우측 상단 배너 */}
            <div
                className="absolute -top-4 -right-4 bg-gray-800 text-white px-6 py-2 rounded-lg shadow-lg transform rotate-6 transition-transform hover:rotate-0">
                <p className="text-sm font-medium">백엔드 개발자</p>
                <p className="text-lg font-bold">이승희입니다 👋</p>
            </div>

            <div className="flex">
                {/* 왼쪽 사이드바 */}
                <div className="w-1/3 bg-gradient-to-br from-gray-800 to-gray-900 text-white p-8 min-h-[29.7cm]">
                    <div className="sticky top-8">
                        <div className="group relative">
                            <img
                                src="/my-portfolio/profile.jpg"
                                alt="이승희"
                                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white/10
         transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>

                        <h1 className="text-2xl font-bold mb-2 text-center">이승희</h1>
                        <p className="text-lg mb-8 text-center text-gray-300">백엔드 개발자</p>

                        <div className="space-y-8">
                            <div className="hover:translate-x-2 transition-all duration-300">
                                <h2 className="text-lg font-semibold mb-3 border-b border-white/10 pb-2">연락처</h2>
                                <div className="space-y-2 text-gray-300">
                                    <p className="text-sm flex items-center">
                                        <span className="mr-2">📧</span> seungjang93@gmail.com
                                    </p>
                                    <p className="text-sm flex items-center">
                                        <span className="mr-2">📱</span> 010-4100-2147
                                    </p>
                                </div>
                            </div>

                            <div className="hover:translate-x-2 transition-all duration-300">
                                <h2 className="text-lg font-semibold mb-3 border-b border-white/10 pb-2">링크</h2>
                                <ul className="space-y-2">
                                    <li>
                                        <a href="https://github.com/yourusername"
                                           target="_blank"
                                           rel="noopener noreferrer"
                                           className="text-gray-300 hover:text-white transition-colors flex items-center">
                                            <span className="mr-2">⭐</span> GitHub
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://linkedin.com/in/yourusername"
                                           target="_blank"
                                           rel="noopener noreferrer"
                                           className="text-gray-300 hover:text-white transition-colors flex items-center">
                                            <span className="mr-2">💼</span> LinkedIn
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="hover:translate-x-2 transition-all duration-300">
                                <h2 className="text-lg font-semibold mb-3 border-b border-white/10 pb-2">간단 소개</h2>
                                <p className="text-sm text-gray-300 leading-relaxed">
                                    안녕하세요. 저는 복잡한 문제를 해결하고 효율적인 백엔드 시스템을 구축하는 것을 즐기는 개발자입니다.
                                    지속적인 학습과 새로운 기술 습득을 통해 더 나은 개발자로 성장하고자 노력하고 있습니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 오른쪽 주요 내용 */}
                <div className="w-2/3 p-8">
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-gray-200 pb-2">
                            기술 스택
                        </h2>
                        {skills.map((skillGroup, index) => (
                            <div key={index} className="mb-6 hover:-translate-y-1 transition-all duration-300">
                                <h3 className="text-lg font-semibold text-gray-700 mb-3">{skillGroup.category}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {skillGroup.items.map((skill, skillIndex) => (
                                        <span
                                            key={skillIndex}
                                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm
                               hover:bg-gray-200 transition-all duration-200 hover:scale-105"
                                        >
                      {skill}
                    </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-gray-200 pb-2">
                            프로젝트
                        </h2>
                        {projects.map((project, index) => (
                            <div key={index}
                                 className="mb-8 border border-gray-200 rounded-lg p-6 hover:shadow-lg
                            transition-all duration-300 hover:-translate-y-1">
                                <h3 className="text-xl font-semibold mb-3 text-gray-800">{project.title}</h3>
                                <p className="text-gray-600 mb-4">{project.description}</p>

                                <h4 className="text-lg font-semibold mb-2 text-gray-700">주요 내용:</h4>
                                <ul className="list-disc list-inside mb-4 space-y-1">
                                    {project.achievements.map((achievement, achievementIndex) => (
                                        <li key={achievementIndex}
                                            className="text-gray-600 hover:text-gray-800 transition-colors text-sm">
                                            {achievement}
                                        </li>
                                    ))}
                                </ul>

                                <h4 className="text-lg font-semibold mb-2 text-gray-700">사용 기술:</h4>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm
                               hover:bg-gray-200 transition-all duration-200"
                                        >
                      {tech}
                    </span>
                                    ))}
                                </div>

                                <div className="flex space-x-4">
                                    <a href={project.githubLink}
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="text-gray-600 hover:text-gray-800 text-sm underline">
                                        GitHub 저장소
                                    </a>
                                    <a href={project.liveDemo}
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="text-gray-600 hover:text-gray-800 text-sm underline">
                                        라이브 데모
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;