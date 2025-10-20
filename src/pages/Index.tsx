import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Жилой комплекс "Северный"',
      category: 'Многоквартирные дома',
      beforeImage: 'https://cdn.poehali.dev/projects/db3f924c-bb4c-45a9-8811-e3c278957bd9/files/14568d22-3e35-435e-895c-d75f83f58ad2.jpg',
      afterImage: 'https://cdn.poehali.dev/projects/db3f924c-bb4c-45a9-8811-e3c278957bd9/files/2d505520-4ff4-4406-b65d-2985828bad51.jpg',
      area: '15,000 м²',
      duration: '18 месяцев',
    },
    {
      id: 2,
      title: 'Бизнес-центр "Альфа"',
      category: 'Коммерческая недвижимость',
      beforeImage: 'https://cdn.poehali.dev/projects/db3f924c-bb4c-45a9-8811-e3c278957bd9/files/2462f9a4-5395-422c-8830-c96d5a1da771.jpg',
      afterImage: 'https://cdn.poehali.dev/projects/db3f924c-bb4c-45a9-8811-e3c278957bd9/files/0d648c07-5bbd-4399-8500-cb9f7528463f.jpg',
      area: '8,500 м²',
      duration: '12 месяцев',
    },
    {
      id: 3,
      title: 'Загородный дом',
      category: 'Частное строительство',
      beforeImage: 'https://cdn.poehali.dev/projects/db3f924c-bb4c-45a9-8811-e3c278957bd9/files/e3339037-0b7f-425a-ad05-73a6ba0adc75.jpg',
      afterImage: 'https://cdn.poehali.dev/projects/db3f924c-bb4c-45a9-8811-e3c278957bd9/files/8be7b65d-b16f-4427-8f51-d1834809cab5.jpg',
      area: '450 м²',
      duration: '10 месяцев',
    },
  ];

  const services = [
    {
      icon: 'Building2',
      title: 'Жилое строительство',
      description: 'Возведение многоквартирных домов и жилых комплексов под ключ',
    },
    {
      icon: 'Landmark',
      title: 'Коммерческие объекты',
      description: 'Строительство бизнес-центров, торговых и офисных зданий',
    },
    {
      icon: 'Home',
      title: 'Частные дома',
      description: 'Индивидуальное проектирование и строительство загородных домов',
    },
    {
      icon: 'Wrench',
      title: 'Реконструкция',
      description: 'Капитальный ремонт и модернизация существующих зданий',
    },
  ];

  const stats = [
    { value: '200+', label: 'Завершенных проектов' },
    { value: '15 лет', label: 'На рынке' },
    { value: '98%', label: 'Довольных клиентов' },
    { value: '50+', label: 'Специалистов в команде' },
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Building2" className="text-secondary" size={32} />
            <span className="text-2xl font-bold text-primary">СтройМастер</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm font-medium hover:text-secondary transition-colors">
              Главная
            </a>
            <a href="#projects" className="text-sm font-medium hover:text-secondary transition-colors">
              Проекты
            </a>
            <a href="#services" className="text-sm font-medium hover:text-secondary transition-colors">
              Услуги
            </a>
            <a href="#about" className="text-sm font-medium hover:text-secondary transition-colors">
              О компании
            </a>
            <Button className="bg-secondary hover:bg-secondary/90">
              Связаться с нами
            </Button>
          </nav>
          <button className="md:hidden">
            <Icon name="Menu" size={24} />
          </button>
        </div>
      </header>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
              Строим будущее с точностью и качеством
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Профессиональное строительство жилых и коммерческих объектов любой сложности. 
              Гарантия качества на каждом этапе.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                Наши проекты
              </Button>
              <Button size="lg" variant="outline">
                Получить консультацию
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Наши проекты</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Результаты нашей работы говорят сами за себя. Смотрите трансформацию от начала до конца.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 flex">
                      <div className="w-1/2 relative">
                        <img
                          src={project.beforeImage}
                          alt="До"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-2 left-2 bg-black/70 text-white px-3 py-1 rounded text-sm font-medium">
                          До
                        </div>
                      </div>
                      <div className="w-1/2 relative">
                        <img
                          src={project.afterImage}
                          alt="После"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-2 right-2 bg-secondary text-white px-3 py-1 rounded text-sm font-medium">
                          После
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-secondary font-medium mb-2">{project.category}</div>
                    <h3 className="text-xl font-bold text-primary mb-4">{project.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Icon name="Maximize" size={16} />
                        {project.area}
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="Clock" size={16} />
                        {project.duration}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр строительных услуг от проектирования до сдачи объекта
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-secondary" size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">О компании</h2>
              <p className="text-lg text-muted-foreground mb-6">
                СтройМастер — ведущая строительная компания с 15-летним опытом работы на рынке. 
                Мы специализируемся на возведении жилых и коммерческих объектов, предлагая решения 
                полного цикла от проектирования до сдачи в эксплуатацию.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Наша команда профессионалов использует передовые технологии и материалы высокого 
                качества, обеспечивая надежность и долговечность каждого построенного объекта.
              </p>
              <Button className="bg-secondary hover:bg-secondary/90">
                Узнать больше
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6">
                  <CardContent className="p-0">
                    <div className="text-4xl font-bold text-secondary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Building2" size={28} />
                <span className="text-xl font-bold">СтройМастер</span>
              </div>
              <p className="text-sm opacity-80">
                Профессиональное строительство с 2009 года
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#home" className="hover:opacity-100">Главная</a></li>
                <li><a href="#projects" className="hover:opacity-100">Проекты</a></li>
                <li><a href="#services" className="hover:opacity-100">Услуги</a></li>
                <li><a href="#about" className="hover:opacity-100">О компании</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@stroymaster.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, ул. Строителей, 10
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Соцсети</h4>
              <div className="flex gap-4">
                <a href="#" className="hover:text-secondary transition-colors">
                  <Icon name="Instagram" size={24} />
                </a>
                <a href="#" className="hover:text-secondary transition-colors">
                  <Icon name="Facebook" size={24} />
                </a>
                <a href="#" className="hover:text-secondary transition-colors">
                  <Icon name="Youtube" size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-80">
            © 2024 СтройМастер. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;