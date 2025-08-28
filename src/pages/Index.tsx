import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  const gameItems = [
    {
      id: 1,
      name: "AK-74M",
      category: "Оружие",
      price: 2500,
      image: "/img/1dc85267-93a7-4948-8187-8824b01dacbb.jpg",
      rarity: "Редкое",
      description: "Автомат Калашникова 74М - надежное оружие для выживания"
    },
    {
      id: 2,
      name: "Медицинский набор",
      category: "Медицина",
      price: 800,
      image: "/img/3407f767-7cc7-4499-bec6-0a16cf2393e1.jpg",
      rarity: "Обычное",
      description: "Полный набор медикаментов для восстановления здоровья"
    },
    {
      id: 3,
      name: "Тактический рюкзак",
      category: "Снаряжение",
      price: 1200,
      image: "/img/2a3b939b-764b-4ba3-8784-deeaf87a51e3.jpg",
      rarity: "Редкое",
      description: "Вместительный рюкзак для длительных походов"
    }
  ];

  const faqItems = [
    {
      question: "Как происходит доставка предметов?",
      answer: "Предметы автоматически добавляются на ваш игровой персонаж в течение 5-10 минут после оплаты."
    },
    {
      question: "Можно ли вернуть покупку?",
      answer: "Возврат возможен в течение 24 часов, если предметы не были использованы в игре."
    },
    {
      question: "Какие способы оплаты принимаются?",
      answer: "Мы принимаем банковские карты, электронные кошельки и криптовалюты."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Target" size={32} className="text-primary" />
              <div>
                <h1 className="text-2xl font-bold font-[Oswald] text-foreground">DAYZ STORE</h1>
                <p className="text-sm text-muted-foreground">Магазин предметов для выживания</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#catalog" className="hover:text-primary transition-colors">Каталог</a>
              <a href="#payment" className="hover:text-primary transition-colors">Оплата</a>
              <a href="#rules" className="hover:text-primary transition-colors">Правила</a>
              <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
              <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-background via-secondary to-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold font-[Oswald] mb-6 bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
            ВЫЖИВИ ЛЮБОЙ ЦЕНОЙ
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Получайте игровые предметы для DayZ мгновенно. Оружие, медикаменты, снаряжение - всё для успешного выживания в зомби-апокалипсисе.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              Перейти к покупкам
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
              <Icon name="Play" size={20} className="mr-2" />
              Как это работает
            </Button>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold font-[Oswald] text-center mb-12">КАТАЛОГ ПРЕДМЕТОВ</h3>
          
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-8">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="weapons">Оружие</TabsTrigger>
              <TabsTrigger value="medical">Медицина</TabsTrigger>
              <TabsTrigger value="gear">Снаряжение</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gameItems.map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border">
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
                      {item.rarity}
                    </Badge>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="font-[Oswald] text-foreground">{item.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{item.category}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-primary">₽{item.price}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      Купить сейчас
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="weapons" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gameItems.filter(item => item.category === "Оружие").map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border">
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
                      {item.rarity}
                    </Badge>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="font-[Oswald] text-foreground">{item.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{item.category}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-primary">₽{item.price}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      Купить сейчас
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="medical" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gameItems.filter(item => item.category === "Медицина").map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border">
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
                      {item.rarity}
                    </Badge>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="font-[Oswald] text-foreground">{item.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{item.category}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-primary">₽{item.price}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      Купить сейчас
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="gear" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gameItems.filter(item => item.category === "Снаряжение").map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border">
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
                      {item.rarity}
                    </Badge>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="font-[Oswald] text-foreground">{item.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{item.category}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-primary">₽{item.price}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      Купить сейчас
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Payment Section */}
      <section id="payment" className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold font-[Oswald] text-center mb-12 text-foreground">СПОСОБЫ ОПЛАТЫ</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center bg-card border-border">
              <CardHeader>
                <Icon name="CreditCard" size={48} className="mx-auto text-primary mb-4" />
                <CardTitle className="font-[Oswald] text-foreground">Банковские карты</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Visa, MasterCard, МИР - быстро и безопасно</p>
              </CardContent>
            </Card>
            <Card className="text-center bg-card border-border">
              <CardHeader>
                <Icon name="Wallet" size={48} className="mx-auto text-primary mb-4" />
                <CardTitle className="font-[Oswald] text-foreground">Электронные кошельки</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">QIWI, WebMoney, Яндекс.Деньги</p>
              </CardContent>
            </Card>
            <Card className="text-center bg-card border-border">
              <CardHeader>
                <Icon name="Bitcoin" size={48} className="mx-auto text-primary mb-4" />
                <CardTitle className="font-[Oswald] text-foreground">Криптовалюты</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Bitcoin, Ethereum, USDT</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section id="rules" className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold font-[Oswald] text-center mb-12">ПРАВИЛА МАГАЗИНА</h3>
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center font-[Oswald] text-foreground">
                  <Icon name="ShieldCheck" size={24} className="mr-3 text-primary" />
                  Общие правила
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Покупки совершаются только зарегистрированными пользователями</li>
                  <li>Один аккаунт - один игровой персонаж для доставки</li>
                  <li>Предметы доставляются автоматически в течение 5-10 минут</li>
                  <li>При технических сбоях - обращайтесь в поддержку</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center font-[Oswald] text-foreground">
                  <Icon name="RefreshCcw" size={24} className="mr-3 text-primary" />
                  Возврат и обмен
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Возврат возможен в течение 24 часов после покупки</li>
                  <li>Предметы не должны быть использованы в игре</li>
                  <li>Обмен производится только на предметы той же категории</li>
                  <li>Комиссия за возврат составляет 10%</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold font-[Oswald] text-center mb-12 text-foreground">ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h3>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-[Oswald] text-foreground hover:text-primary">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold font-[Oswald] text-center mb-12">КОНТАКТЫ</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <Card className="bg-card border-border">
              <CardHeader>
                <Icon name="MessageCircle" size={32} className="mx-auto text-primary mb-2" />
                <CardTitle className="font-[Oswald] text-foreground">Telegram</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">@dayz_store_support</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardHeader>
                <Icon name="Mail" size={32} className="mx-auto text-primary mb-2" />
                <CardTitle className="font-[Oswald] text-foreground">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">support@dayzstore.ru</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardHeader>
                <Icon name="Users" size={32} className="mx-auto text-primary mb-2" />
                <CardTitle className="font-[Oswald] text-foreground">Discord</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">DayZ Store#1337</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardHeader>
                <Icon name="Clock" size={32} className="mx-auto text-primary mb-2" />
                <CardTitle className="font-[Oswald] text-foreground">Поддержка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">24/7</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Icon name="Target" size={24} className="text-primary" />
              <span className="text-xl font-bold font-[Oswald] text-foreground">DAYZ STORE</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Лучший магазин предметов для выживания в DayZ
            </p>
            <Separator className="my-4" />
            <p className="text-sm text-muted-foreground">
              © 2024 DayZ Store. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;