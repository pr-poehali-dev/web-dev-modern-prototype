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
  };

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Современная платформа электронной коммерции с интеграцией платежей и системой управления заказами',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      image: 'https://cdn.poehali.dev/projects/4f15433f-f80b-4f9f-bb76-e5aae8985d28/files/d0d50093-f12b-4bcf-a27e-30ea0887070e.jpg'
    },
    {
      title: 'Social Network',
      description: 'Социальная сеть с real-time чатом, лентой новостей и системой уведомлений',
      tech: ['React', 'WebSocket', 'Redis', 'MongoDB'],
      image: 'https://cdn.poehali.dev/projects/4f15433f-f80b-4f9f-bb76-e5aae8985d28/files/d0d50093-f12b-4bcf-a27e-30ea0887070e.jpg'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Интерактивная панель аналитики с визуализацией данных и отчётами',
      tech: ['TypeScript', 'D3.js', 'Express', 'PostgreSQL'],
      image: 'https://cdn.poehali.dev/projects/4f15433f-f80b-4f9f-bb76-e5aae8985d28/files/d0d50093-f12b-4bcf-a27e-30ea0887070e.jpg'
    },
    {
      title: 'Mobile Banking App',
      description: 'Мобильное приложение банка с биометрией и мгновенными переводами',
      tech: ['React Native', 'Firebase', 'Node.js'],
      image: 'https://cdn.poehali.dev/projects/4f15433f-f80b-4f9f-bb76-e5aae8985d28/files/d0d50093-f12b-4bcf-a27e-30ea0887070e.jpg'
    },
    {
      title: 'AI Content Generator',
      description: 'Платформа для генерации контента на базе AI с персонализацией',
      tech: ['Next.js', 'OpenAI API', 'Python', 'FastAPI'],
      image: 'https://cdn.poehali.dev/projects/4f15433f-f80b-4f9f-bb76-e5aae8985d28/files/d0d50093-f12b-4bcf-a27e-30ea0887070e.jpg'
    },
    {
      title: 'Video Streaming Service',
      description: 'Стриминговый сервис с адаптивным качеством и системой рекомендаций',
      tech: ['React', 'AWS', 'GraphQL', 'CDN'],
      image: 'https://cdn.poehali.dev/projects/4f15433f-f80b-4f9f-bb76-e5aae8985d28/files/d0d50093-f12b-4bcf-a27e-30ea0887070e.jpg'
    }
  ];

  const skills = [
    { name: 'React & Next.js', level: 95, icon: 'Code2' },
    { name: 'TypeScript', level: 90, icon: 'FileCode2' },
    { name: 'Node.js & Express', level: 88, icon: 'Server' },
    { name: 'PostgreSQL & MongoDB', level: 85, icon: 'Database' },
    { name: 'UI/UX Design', level: 80, icon: 'Palette' },
    { name: 'DevOps & AWS', level: 75, icon: 'Cloud' }
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
            >
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </header>

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
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Web Developer
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
              Создаю современные веб-приложения с фокусом на производительность и UX
            </p>
            <div className="flex gap-4 justify-center items-center flex-wrap">
              <Button 
                size="lg" 
                className="gap-2 group"
                onClick={() => scrollToSection('portfolio')}
              >
                Портфолио
                <Icon name="ArrowDown" className="group-hover:translate-y-1 transition-transform" size={20} />
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
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Портфолио</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Избранные проекты, демонстрирующие опыт работы с современными технологиями
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
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Навыки</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Технологический стек и экспертиза в разработке
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
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Связаться</h2>
            <p className="text-center text-muted-foreground mb-12">
              Готов обсудить ваш проект. Напишите мне, и я отвечу в ближайшее время
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
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/20">
                <Icon name="Github" size={24} />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/20">
                <Icon name="Linkedin" size={24} />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/20">
                <Icon name="Twitter" size={24} />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/20">
                <Icon name="Mail" size={24} />
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
