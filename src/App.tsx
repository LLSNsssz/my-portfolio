import React from 'react';

const Resume = () => {
    const skills = [
        {
            category: "Backend",
            items: ["Java", "Spring Boot", "Spring Security", "Spring Data JPA", "JUnit5", "Gradle"]
        },
        {
            category: "Database & Cache",
            items: ["MySQL", "Redis", "JPA", "QueryDSL"]
        },
        {
            category: "DevOps",
            items: ["AWS EC2", "AWS RDS", "Docker", "GitHub Actions", "Nginx"]
        },
        {
            category: "Tools & Collaboration",
            items: ["Git", "GitHub", "Swagger", "Postman"]
        }
    ];

    const projects = [
        {
            title: "SecondInning: AI 중고거래 플랫폼",
            period: "2024.01 - 2024.02",
            description: "Spring Boot와 AI 기술을 활용하여 중고거래 플랫폼을 개발한 팀 프로젝트입니다. 실시간 채팅과 안전한 거래 환경을 제공하며, AI를 통한 가격 추천 기능을 구현했습니다.",
            role: "백엔드 개발자 (6인 팀: 백엔드 4명, 프론트엔드 2명)",
            achievements: [
                "Spring Security와 JWT를 활용한 사용자 인증/인가 시스템 구현",
                "Redis를 활용한 Refresh Token 관리로 보안성 강화",
                "실시간 채팅을 위한 WebSocket 및 Redis Pub/Sub 구현",
                "Bucket4j를 활용한 Rate Limiting으로 API 요청 제한 구현",
                "JavaMailSender를 통한 이메일 인증 및 비밀번호 재설정 기능 개발",
                "AWS EC2, RDS를 활용한 클라우드 인프라 구축",
                "GitHub Actions를 통한 CI/CD 파이프라인 구축으로 배포 자동화",
                "Swagger를 활용한 API 문서화로 프론트엔드 팀과의 협업 효율화",
            ],
            details: {
                architecture: [
                    "MSA 아키텍처 설계로 서비스 간 독립성 확보",
                    "Docker 컨테이너화로 배포 환경 표준화",
                    "Redis 캐싱으로 데이터베이스 부하 감소",
                    "JPA N+1 문제 해결을 위한 페치 조인 적용"
                ],
                security: [
                    "JWT를 통한 stateless 인증 구현",
                    "Spring Security를 활용한 보안 설정",
                    "XSS, CSRF 공격 방지 로직 구현",
                    "민감 정보 암호화 처리"
                ],
                performance: [
                    "Redis 캐싱으로 응답 시간 평균 200ms 이하 달성",
                    "이미지 최적화를 통한 로딩 속도 개선",
                    "API 요청 제한으로 서버 부하 관리"
                ]
            },
            learned: [
                "MSA 설계 경험을 통한 확장 가능한 아키텍처 이해",
                "실시간 데이터 처리를 위한 Redis 활용 경험",
                "보안을 고려한 인증/인가 시스템 설계 능력 향상",
                "CI/CD 파이프라인 구축으로 자동화된 개발 프로세스 경험",
                "팀 프로젝트에서의 효율적인 협업 방식 습득"
            ],
            technologies: [
                "Spring Boot",
                "Spring Security",
                "MySQL",
                "Redis",
                "AWS",
                "Docker",
                "GitHub Actions"
            ],
            githubLink: "https://github.com/LLSNsssz/Play-Baseballv2",
            liveDemo: "https://54.180.243.156.nip.io/"
        }
    ];

    return (
        <div className="max-w-[21cm] mx-auto bg-white shadow-lg my-8 min-h-[29.7cm] relative">
            {/* 우측 상단 배너 */}
            <div className="absolute -top-4 -right-4 bg-gray-800 text-white px-6 py-2 rounded-lg shadow-lg transform rotate-6 transition-transform hover:rotate-0">
                <p className="text-sm font-medium">백엔드 개발자</p>
                <p className="text-lg font-bold">이승희입니다 👋</p>
            </div>

            <div className="flex">
                {/* 왼쪽 사이드바 */}
                <div className="w-1/3 bg-gradient-to-br from-gray-800 to-gray-900 text-white p-8 min-h-[29.7cm]">
                    <div className="sticky top-8">
                        <div className="group relative">
                            <img
                                src={`${process.env.PUBLIC_URL}/profile.jpg`}
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
                                        <a href="https://github.com/LLSNsssz"
                                           target="_blank"
                                           rel="noopener noreferrer"
                                           className="text-gray-300 hover:text-white transition-colors flex items-center">
                                            <span className="mr-2">⭐</span> GitHub
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="hover:translate-x-2 transition-all duration-300">
                                <h2 className="text-lg font-semibold mb-3 border-b border-white/10 pb-2">간단 소개</h2>
                                <p className="text-sm text-gray-300 leading-relaxed">
                                    안녕하세요. 저는 지속적인 학습을 통해 성장하며, 효율적인 백엔드 시스템 구축에 관심이 많은 개발자입니다.
                                    특히 문제 해결 과정에서 최적의 해결책을 찾아내는 것을 즐기며, 팀과의 협업을 통해 더 나은 서비스를
                                    만들어내는 것을 목표로 하고 있습니다.
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
                            <div key={index} className="mb-8 border border-gray-200 rounded-lg p-6 hover:shadow-lg
                                    transition-all duration-300 hover:-translate-y-1">
                                <h3 className="text-xl font-semibold mb-3 text-gray-800">{project.title}</h3>
                                <p className="text-gray-600 mb-2">{project.period}</p>
                                <p className="text-gray-600 mb-2">{project.role}</p>
                                <p className="text-gray-600 mb-4">{project.description}</p>

                                <h4 className="text-lg font-semibold mb-2 text-gray-700">주요 성과:</h4>
                                <ul className="list-disc list-inside mb-4 space-y-1">
                                    {project.achievements.map((achievement, achievementIndex) => (
                                        <li key={achievementIndex}
                                            className="text-gray-600 hover:text-gray-800 transition-colors text-sm">
                                            {achievement}
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-6">
                                    <h4 className="text-lg font-semibold mb-2 text-gray-700">아키텍처 및 기술적 구현:</h4>
                                    <ul className="list-disc list-inside mb-4 space-y-1">
                                        {project.details.architecture.map((detail, idx) => (
                                            <li key={idx} className="text-gray-600 hover:text-gray-800 transition-colors text-sm">
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>

                                    <h4 className="text-lg font-semibold mb-2 text-gray-700">보안 및 성능 최적화:</h4>
                                    <ul className="list-disc list-inside mb-4 space-y-1">
                                        {[...project.details.security, ...project.details.performance].map((detail, idx) => (
                                            <li key={idx} className="text-gray-600 hover:text-gray-800 transition-colors text-sm">
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>

                                    <h4 className="text-lg font-semibold mb-2 text-gray-700">배운 점:</h4>
                                    <ul className="list-disc list-inside mb-4 space-y-1">
                                        {project.learned.map((item, idx) => (
                                            <li key={idx} className="text-gray-600 hover:text-gray-800 transition-colors text-sm">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

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