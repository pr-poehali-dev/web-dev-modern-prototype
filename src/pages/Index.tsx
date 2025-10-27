import { useState } from 'react';
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20 animate-gradient"
          style={{
            background: 'linear-gradient(45deg, hsl(var(--primary)), hsl(var(--secondary)), hsl(var(--primary)))',
            backgroundSize: '400% 400%'
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
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Портфолио
                <Icon name="ArrowDown" className="group-hover:translate-y-1 transition-transform" size={20} />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="gap-2"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
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

      <section id="portfolio" className="py-24 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Портфолио</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Избранные проекты, демонстрирующие опыт работы с современными технологиями
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="overflow-hidden group hover:scale-105 transition-all duration-300 hover:shadow-2xl cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
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

      <section className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Навыки</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Технологический стек и экспертиза в разработке
          </p>
          
          <div className="max-w-3xl mx-auto space-y-8">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Icon name={skill.icon as any} size={24} className="text-primary" />
                    <span className="font-medium text-lg">{skill.name}</span>
                  </div>
                  <span className="text-muted-foreground font-semibold">{skill.level}%</span>
                </div>
                
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${skill.level}%`,
                      animationDelay: `${index * 0.1}s`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-4">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Связаться</h2>
            <p className="text-center text-muted-foreground mb-12">
              Готов обсудить ваш проект. Напишите мне, и я отвечу в ближайшее время
            </p>
            
            <Card className="p-8">
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
              <Button variant="ghost" size="icon" className="rounded-full">
                <Icon name="Github" size={24} />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Icon name="Linkedin" size={24} />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Icon name="Twitter" size={24} />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Icon name="Mail" size={24} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t py-12">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground">
            © 2024 Web Developer Portfolio. Создано с вниманием к деталям.
          </p>
        </div>
      </footer>
    </div>
  );
}
