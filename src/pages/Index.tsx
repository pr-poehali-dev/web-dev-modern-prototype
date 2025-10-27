import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = document.querySelectorAll('[data-section]');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setVisibleSections(prev => new Set(prev).add(section.id));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const projects = [
    {
      title: 'AI-платформа для бизнеса',
      description: 'Интеллектуальная система автоматизации бизнес-процессов с машинным обучением',
      tech: ['Next.js', 'OpenAI', 'Python', 'TensorFlow'],
      image: 'https://cdn.poehali.dev/projects/4f15433f-f80b-4f9f-bb76-e5aae8985d28/files/d0d50093-f12b-4bcf-a27e-30ea0887070e.jpg'
    },
    {
      title: 'Цифровой финтех',
      description: 'Передовое финансовое приложение с блокчейном и криптовалютными транзакциями',
      tech: ['React', 'Blockchain', 'Web3', 'Solidity'],
      image: 'https://cdn.poehali.dev/projects/4f15433f-f80b-4f9f-bb76-e5aae8985d28/files/d0d50093-f12b-4bcf-a27e-30ea0887070e.jpg'
    },
    {
      title: 'IoT экосистема',
      description: 'Платформа управления умными устройствами с real-time аналитикой данных',
      tech: ['TypeScript', 'MQTT', 'InfluxDB', 'Grafana'],
      image: 'https://cdn.poehali.dev/projects/4f15433f-f80b-4f9f-bb76-e5aae8985d28/files/d0d50093-f12b-4bcf-a27e-30ea0887070e.jpg'
    },
    {
      title: 'Метаверс платформа',
      description: '3D-пространство для виртуальных мероприятий с VR/AR интеграцией',
      tech: ['Three.js', 'WebGL', 'WebXR', 'Unity'],
      image: 'https://cdn.poehali.dev/projects/4f15433f-f80b-4f9f-bb76-e5aae8985d28/files/d0d50093-f12b-4bcf-a27e-30ea0887070e.jpg'
    },
    {
      title: 'Квантовые вычисления',
      description: 'Облачная платформа для квантовых вычислений и симуляций',
      tech: ['Python', 'Qiskit', 'FastAPI', 'Kubernetes'],
      image: 'https://cdn.poehali.dev/projects/4f15433f-f80b-4f9f-bb76-e5aae8985d28/files/d0d50093-f12b-4bcf-a27e-30ea0887070e.jpg'
    },
    {
      title: 'Нейросетевой ассистент',
      description: 'AI-ассистент с натуральным языком и голосовым управлением',
      tech: ['React', 'GPT-4', 'Whisper', 'Azure'],
      image: 'https://cdn.poehali.dev/projects/4f15433f-f80b-4f9f-bb76-e5aae8985d28/files/d0d50093-f12b-4bcf-a27e-30ea0887070e.jpg'
    }
  ];

  const skills = [
    { name: 'AI & Machine Learning', level: 95, icon: 'Brain' },
    { name: 'Современные фреймворки', level: 93, icon: 'Code2' },
    { name: 'Облачные технологии', level: 90, icon: 'Cloud' },
    { name: 'Web3 & Blockchain', level: 87, icon: 'Link' },
    { name: '3D & WebGL', level: 85, icon: 'Box' },
    { name: 'DevOps & CI/CD', level: 88, icon: 'Workflow' }
  ];

  return (
    <div className="min-h-screen">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/80 backdrop-blur-lg border-b border-border shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Code2" size={24} className="text-white" />
              </div>
              <span className="text-xl font-bold">DevPortfolio</span>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                Портфолио
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                Навыки
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                Контакты
              </button>
              <Button size="sm" onClick={() => scrollToSection('contact')}>
                Связаться
              </Button>
            </nav>

            <Button 
              size="icon" 
              variant="ghost" 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </header>

      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      <div className={`fixed top-0 right-0 bottom-0 w-80 bg-card border-l border-border z-50 transform transition-transform duration-300 ease-out md:hidden ${
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Icon name="Code2" size={20} className="text-white" />
            </div>
            <span className="text-lg font-bold">Меню</span>
          </div>
          <Button 
            size="icon" 
            variant="ghost"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Icon name="X" size={24} />
          </Button>
        </div>

        <nav className="p-6">
          <div className="space-y-1">
            <button
              onClick={() => scrollToSection('hero')}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors text-left"
            >
              <Icon name="Home" size={20} className="text-primary" />
              <span>Главная</span>
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors text-left"
            >
              <Icon name="Briefcase" size={20} className="text-primary" />
              <span>Портфолио</span>
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors text-left"
            >
              <Icon name="Code" size={20} className="text-primary" />
              <span>Навыки</span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors text-left"
            >
              <Icon name="Mail" size={20} className="text-primary" />
              <span>Контакты</span>
            </button>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">Связь со мной</p>
            <div className="grid grid-cols-3 gap-2">
              <Button variant="outline" size="icon" className="rounded-full hover:bg-primary/20">
                <Icon name="MessageCircle" size={20} />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full hover:bg-primary/20">
                <Icon name="Phone" size={20} />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full hover:bg-primary/20">
                <Icon name="Share2" size={20} />
              </Button>
            </div>
          </div>

          <div className="mt-8">
            <Button 
              className="w-full gap-2"
              size="lg"
              onClick={() => scrollToSection('contact')}
            >
              <Icon name="Send" size={20} />
              Связаться со мной
            </Button>
          </div>
        </nav>
      </div>

      <section 
        data-section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div 
          className="absolute inset-0 opacity-20 animate-gradient"
          style={{
            background: 'linear-gradient(45deg, hsl(var(--primary)), hsl(var(--secondary)), hsl(var(--primary)))',
            backgroundSize: '400% 400%'
          }}
        />
        
        <div 
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, hsl(var(--primary) / 0.15), transparent 40%)`
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="animate-fade-in text-center lg:text-left">
              <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <span className="text-sm font-medium text-primary">Новое поколение веб-разработки</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary leading-tight">
                Создание современных сайтов
              </h1>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
                и веб-приложений под ключ
              </h2>
              <div className="mb-6 p-4 bg-muted/50 rounded-lg border-l-4 border-primary">
                <p className="text-lg font-semibold mb-2">🚀 Инновации и результат в каждом проекте</p>
              </div>
              <p className="text-base md:text-lg text-muted-foreground mb-8 font-light leading-relaxed">
                Превращаем смелые идеи в передовые цифровые решения. Используем AI, современные технологии и инновационные подходы для создания веб-приложений будущего.
              </p>
              <div className="flex gap-4 justify-center lg:justify-start items-center flex-wrap">
                <Button 
                  size="lg" 
                  className="gap-2 group"
                  onClick={() => scrollToSection('portfolio')}
                >
                  Наши проекты
                  <Icon name="Sparkles" className="group-hover:rotate-12 transition-transform" size={20} />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="gap-2"
                  onClick={() => scrollToSection('contact')}
                >
                  <Icon name="Mail" size={20} />
                  Связаться
                </Button>
              </div>
            </div>

            <div className="animate-slide-up hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
                <img 
                  src="https://cdn.poehali.dev/projects/4f15433f-f80b-4f9f-bb76-e5aae8985d28/files/8e17f5d5-5246-4a77-9650-ab0b15a57dac.jpg"
                  alt="Современная веб-разработка"
                  className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-muted-foreground" />
        </div>
      </section>

      <section 
        data-section
        id="portfolio" 
        className="py-24 px-4"
      >
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Передовые проекты</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Реализованные решения с использованием AI, блокчейна и передовых технологий
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className={`overflow-hidden group hover:scale-105 transition-all duration-500 hover:shadow-2xl cursor-pointer ${
                  visibleSections.has('portfolio') 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-20'
                }`}
                style={{ 
                  transitionDelay: visibleSections.has('portfolio') ? `${index * 0.1}s` : '0s'
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section 
        data-section
        id="skills"
        className="py-24 px-4 bg-muted/30"
      >
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Технологии будущего</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Экспертиза в современных технологиях и инновационных подходах
          </p>
          
          <div className="max-w-3xl mx-auto space-y-8">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className={`transition-all duration-700 ${
                  visibleSections.has('skills')
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: visibleSections.has('skills') ? `${index * 0.1}s` : '0s' }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Icon name={skill.icon as any} size={24} className="text-primary" />
                    <span className="font-medium text-lg">{skill.name}</span>
                  </div>
                  <span className="text-muted-foreground font-semibold">{skill.level}%</span>
                </div>
                
                <div className="h-3 bg-muted rounded-full overflow-hidden relative">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1500 ease-out"
                    style={{ 
                      width: visibleSections.has('skills') ? `${skill.level}%` : '0%',
                      transitionDelay: visibleSections.has('skills') ? `${index * 0.15 + 0.3}s` : '0s'
                    }}
                  />
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    style={{
                      transform: 'translateX(-100%)',
                      animation: visibleSections.has('skills') ? 'shimmer 2s infinite' : 'none',
                      animationDelay: `${index * 0.2}s`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section 
        data-section
        id="contact" 
        className="py-24 px-4"
      >
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Начнём сотрудничество</h2>
            <p className="text-center text-muted-foreground mb-12">
              Готовы воплотить вашу идею в цифровую реальность? Свяжитесь с нами для обсуждения проекта
            </p>
            
            <Card className={`p-8 transition-all duration-700 ${
              visibleSections.has('contact')
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-95'
            }`}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Имя
                  </label>
                  <Input
                    id="name"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Сообщение
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Расскажите о вашем проекте..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full gap-2">
                  <Icon name="Send" size={20} />
                  Отправить сообщение
                </Button>
              </form>
            </Card>

            <div className="flex justify-center gap-6 mt-12">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/20" asChild>
                <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
                  <Icon name="MessageCircle" size={24} />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/20" asChild>
                <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                  <Icon name="Phone" size={24} />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/20" asChild>
                <a href="https://vk.com/" target="_blank" rel="noopener noreferrer">
                  <Icon name="Share2" size={24} />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Icon name="Code2" size={24} className="text-white" />
                </div>
                <span className="text-xl font-bold">DevPortfolio</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Профессиональная разработка веб-приложений с современными технологиями
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Навигация</h3>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('portfolio')} className="block text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Портфолио
                </button>
                <button onClick={() => scrollToSection('skills')} className="block text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Навыки
                </button>
                <button onClick={() => scrollToSection('contact')} className="block text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Контакты
                </button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Технологии</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>React & Next.js</p>
                <p>TypeScript</p>
                <p>Node.js</p>
                <p>PostgreSQL</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  contact@devportfolio.com
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, Россия
                </p>
              </div>
            </div>
          </div>

          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 DevPortfolio. Все права защищены.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}