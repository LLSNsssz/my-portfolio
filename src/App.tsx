import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Contact {
    email: string;
    phone: string;
    github: string;
}

interface Skill {
    category: string;
    items: string[];
}

interface Section {
    subtitle: string;
    items: string[];
}

interface SlideContent {
    name?: string;
    title: string;
    contact?: Contact;
    description?: string;
    skills?: Skill[];
    items?: string[];
    sections?: Section[];
    period?: string;
    role?: string;
}

interface Slide {
    id: string;
    type: 'intro' | 'about' | 'skills' | 'project-overview' | 'project-list' | 'project-details';
    content: SlideContent;
}

const SlidePortfolio = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides: Slide[] = [
        {
            id: 'intro',
            type: 'intro',
            content: {
                name: "이승희",
                title: "백엔드 개발자",
                contact: {
                    email: "seungjang93@gmail.com",
                    phone: "010-4100-2147",
                    github: "https://github.com/LLSNsssz"
                }
            }
        },
        {
            id: 'about',
            type: 'about',
            content: {
                title: "About Me",
                description: "안녕하세요. 저는 지속적인 학습을 통해 성장하며, 효율적인 백엔드 시스템 구축에 관심이 많은 개발자입니다. 특히 문제 해결 과정에서 최적의 해결책을 찾아내는 것을 즐기며, 팀과의 협업을 통해 더 나은 서비스를 만들어내는 것을 목표로 하고 있습니다."
            }
        },
        {
            id: 'skills',
            type: 'skills',
            content: {
                title: "Technical Skills",
                skills: [
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
                ]
            }
        },
        {
            id: 'project-overview',
            type: 'project-overview',
            content: {
                title: "SecondInning: AI 중고거래 플랫폼",
                period: "2024.01 - 2024.02",
                role: "백엔드 개발자 (6인 팀)",
                description: "Spring Boot와 AI 기술을 활용하여 중고거래 플랫폼을 개발한 팀 프로젝트입니다. 실시간 채팅과 안전한 거래 환경을 제공하며, AI를 통한 가격 추천 기능을 구현했습니다."
            }
        },
        {
            id: 'project-list',
            type: 'project-list',
            content: {
                title: "주요 성과",
                items: [
                    "Spring Security와 JWT를 활용한 사용자 인증/인가 시스템 구현",
                    "Redis를 활용한 Refresh Token 관리로 보안성 강화",
                    "실시간 채팅을 위한 WebSocket 및 Redis Pub/Sub 구현",
                    "Bucket4j를 활용한 Rate Limiting으로 API 요청 제한 구현",
                    "JavaMailSender를 통한 이메일 인증 및 비밀번호 재설정 기능 개발",
                    "AWS EC2, RDS를 활용한 클라우드 인프라 구축",
                    "GitHub Actions를 통한 CI/CD 파이프라인 구축으로 배포 자동화",
                    "Swagger를 활용한 API 문서화로 프론트엔드 팀과의 협업 효율화"
                ]
            }
        },
        {
            id: 'project-details',
            type: 'project-details',
            content: {
                title: "기술적 구현 상세",
                sections: [
                    {
                        subtitle: "아키텍처",
                        items: [
                            "MSA 아키텍처 설계로 서비스 간 독립성 확보",
                            "Docker 컨테이너화로 배포 환경 표준화",
                            "Redis 캐싱으로 데이터베이스 부하 감소",
                            "JPA N+1 문제 해결을 위한 페치 조인 적용"
                        ]
                    },
                    {
                        subtitle: "보안",
                        items: [
                            "JWT를 통한 stateless 인증 구현",
                            "Spring Security를 활용한 보안 설정",
                            "XSS, CSRF 공격 방지 로직 구현",
                            "민감 정보 암호화 처리"
                        ]
                    }
                ]
            }
        }
    ];

    const nextSlide = () => {
        if (currentSlide < slides.length - 1) {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const prevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        }
    };

    const renderSlideContent = (slide: Slide) => {
        switch (slide.type) {
            case 'intro':
                return (
                    <div className="flex flex-col items-center justify-center h-full">
                        <img
                            src="/profile.jpg"
                            alt="이승희"
                            className="w-32 h-32 rounded-full mb-8 object-cover border-4 border-white shadow-xl"
                        />
                        <h1 className="text-5xl font-bold mb-4">{slide.content.name}</h1>
                        <h2 className="text-2xl text-gray-600 mb-8">{slide.content.title}</h2>
                        <div className="space-y-2 text-center">
                            <p className="flex items-center justify-center">
                                <span className="mr-2">📧</span> {slide.content.contact?.email}
                            </p>
                            <p className="flex items-center justify-center">
                                <span className="mr-2">📱</span> {slide.content.contact?.phone}
                            </p>
                            <a
                                href={slide.content.contact?.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center text-blue-600 hover:text-blue-800"
                            >
                                <span className="mr-2">⭐</span> GitHub
                            </a>
                        </div>
                    </div>
                );

            case 'about':
                return (
                    <div className="flex flex-col items-center justify-center h-full">
                        <h2 className="text-4xl font-bold mb-12">{slide.content.title}</h2>
                        <p className="text-xl text-gray-700 max-w-3xl text-center leading-relaxed">
                            {slide.content.description}
                        </p>
                    </div>
                );

            case 'skills':
                return (
                    <div className="flex flex-col h-full">
                        <h2 className="text-4xl font-bold mb-12 text-center">{slide.content.title}</h2>
                        <div className="grid grid-cols-2 gap-8 px-8">
                            {slide.content.skills?.map((skill, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                                    <h3 className="text-xl font-semibold mb-4">{skill.category}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {skill.items.map((item, i) => (
                                            <span
                                                key={i}
                                                className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                                            >
                        {item}
                      </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            case 'project-overview':
                return (
                    <div className="flex flex-col items-center justify-center h-full">
                        <h2 className="text-4xl font-bold mb-8">{slide.content.title}</h2>
                        <p className="text-xl mb-4">{slide.content.period}</p>
                        <p className="text-xl mb-8">{slide.content.role}</p>
                        <p className="text-xl text-gray-700 max-w-3xl text-center leading-relaxed">
                            {slide.content.description}
                        </p>
                    </div>
                );

            case 'project-list':
                return (
                    <div className="flex flex-col h-full">
                        <h2 className="text-4xl font-bold mb-12 text-center">{slide.content.title}</h2>
                        <ul className="space-y-4 px-12">
                            {slide.content.items?.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="text-blue-500 mr-4">•</span>
                                    <span className="text-lg text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                );

            case 'project-details':
                return (
                    <div className="flex flex-col h-full">
                        <h2 className="text-4xl font-bold mb-12 text-center">{slide.content.title}</h2>
                        <div className="grid grid-cols-2 gap-8 px-8">
                            {slide.content.sections?.map((section, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                                    <h3 className="text-xl font-semibold mb-4">{section.subtitle}</h3>
                                    <ul className="space-y-2">
                                        {section.items.map((item, i) => (
                                            <li key={i} className="flex items-start">
                                                <span className="text-blue-500 mr-2">•</span>
                                                <span className="text-gray-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <div className="flex-1 flex flex-col items-center justify-center p-8">
                <div className="w-full max-w-6xl aspect-[16/9] bg-white rounded-xl shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 p-12">
                        {renderSlideContent(slides[currentSlide])}
                    </div>

                    <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center space-x-4">
                        <button
                            onClick={prevSlide}
                            disabled={currentSlide === 0}
                            className={`p-2 rounded-full ${
                                currentSlide === 0
                                    ? 'text-gray-400 cursor-not-allowed'
                                    : 'text-gray-700 hover:bg-gray-100'
                            }`}
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <span className="text-gray-700">
              {currentSlide + 1} / {slides.length}
            </span>
                        <button
                            onClick={nextSlide}
                            disabled={currentSlide === slides.length - 1}
                            className={`p-2 rounded-full ${
                                currentSlide === slides.length - 1
                                    ? 'text-gray-400 cursor-not-allowed'
                                    : 'text-gray-700 hover:bg-gray-100'
                            }`}
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SlidePortfolio;