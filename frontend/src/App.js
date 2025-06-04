import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Star, 
  Clock, 
  Shield, 
  Truck, 
  Eye,
  MessageCircle,
  CheckCircle,
  User,
  Package,
  MapPin
} from "lucide-react";
import "./App.css";

// Mock data for products
const products = [
  {
    id: 1,
    name: "Nike Air Jordan 1 Retro High",
    price: "19,500",
    image: "https://images.unsplash.com/photo-1609011809547-fec587101c8d",
    category: "Классика"
  },
  {
    id: 2,
    name: "Nike Air More Uptempo",
    price: "22,000",
    image: "https://images.unsplash.com/photo-1497149988863-70b8d8483b78",
    category: "Эксклюзив"
  },
  {
    id: 3,
    name: "Air Jordan Collection",
    price: "18,500",
    image: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3",
    category: "Коллекция"
  },
  {
    id: 4,
    name: "Premium Nike Air Max",
    price: "20,800",
    image: "https://images.unsplash.com/photo-1511556670410-f6989d6b0766",
    category: "Топ"
  },
  {
    id: 5,
    name: "Adidas Lifestyle",
    price: "16,900",
    image: "https://images.pexels.com/photos/684152/pexels-photo-684152.jpeg",
    category: "Стиль"
  },
  {
    id: 6,
    name: "Sneaker Details",
    price: "21,300",
    image: "https://images.pexels.com/photos/8764560/pexels-photo-8764560.jpeg",
    category: "Детали"
  }
];

// Mock testimonials
const testimonials = [
  {
    id: 1,
    name: "Андрей С.",
    rating: 5,
    text: "Наконец-то нашел место, где не нужно гадать — оригинал или нет. Взял Jordan 1, качество идеальное, пришли за 14 дней.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Мария К.",
    rating: 5,
    text: "Устала от поисков в интернете. Здесь действительно отобрано всё лучшее. Заказала Air Max, получила именно то, что ожидала.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b96c2a9d?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Дмитрий Л.",
    rating: 5,
    text: "Кураторский подход — это то, что я искал. Не надо листать тысячи вариантов, всё уже отобрано. Качество гарантировано.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  }
];

function App() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 5000);
    }
  };

  // Parallax effect for hero
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallax = document.querySelector('.parallax-bg');
      if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-nav">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <div className="text-2xl font-bold text-white">KICKORIGIN</div>
            <div className="hidden md:flex space-x-8 text-white/80">
              <a href="#catalog" className="hover:text-white transition-colors">Каталог</a>
              <a href="#process" className="hover:text-white transition-colors">Процесс</a>
              <a href="#reviews" className="hover:text-white transition-colors">Отзывы</a>
              <a href="#telegram" className="hover:text-white transition-colors">Telegram</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Section 1: УТП */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="parallax-bg absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url(https://images.pexels.com/photos/2918534/pexels-photo-2918534.jpeg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-purple-900/70 to-blue-900/80" />
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-none tracking-tight"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            50 главных<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              кроссовок
            </span><br />
            планеты
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-white/90 mb-12 font-light max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Проверено. Задокументировано.<br />
            Дальше можно не искать.
          </motion.p>
          
          <motion.button 
            className="glass-button group px-12 py-6 text-xl font-semibold text-white border border-white/30 rounded-2xl hover:border-white/60 transition-all duration-500"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Открыть коллекцию
            <ArrowRight className="inline-block ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
          </motion.button>
        </div>
      </section>

      {/* Section 2: Targeting */}
      <section className="py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-30" />
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-tight">
              "Да, ты из тех,<br />
              кто <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">разбирается</span>"
            </h2>
            
            <p className="text-2xl md:text-3xl text-slate-600 mb-16 font-light leading-relaxed">
              "Ты листаешь сотни предложений и знаешь: где-то здесь твоя идеальная пара. Но каждый раз один и тот же вопрос — действительно ли это оригинал? И почему такая цена?"
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="prose prose-lg text-slate-700 leading-relaxed">
                <p className="text-xl mb-6">
                  Ты ценишь подлинные вещи. Не потому что это модно — просто по-другому не умеешь. Фейки вызывают физический дискомфорт, а переплачивать за чужой маркетинг — против твоих принципов.
                </p>
                
                <p className="text-xl mb-8">
                  Ты знаешь, чего хочешь. Но когда открываешь очередной маркетплейс... Сотни моделей. Тысячи продавцов. Миллион вопросов без ответов. И каждый раз следопытом — проверять, перепроверять, сомневаться.
                </p>

                <div className="bg-white/70 backdrop-blur-lg p-8 rounded-3xl border border-white/30 shadow-lg">
                  <p className="text-lg font-medium text-slate-800 mb-4">Знакомо, когда:</p>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-violet-500 rounded-full mt-3 flex-shrink-0" />
                      Нашел идеальную модель, но сомневаешься в подлинности
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-violet-500 rounded-full mt-3 flex-shrink-0" />
                      Видишь явно завышенную цену и понимаешь, что платишь за чужую рекламу
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-violet-500 rounded-full mt-3 flex-shrink-0" />
                      Открываешь каталог и через 15 минут закрываешь — глаза разбегаются
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-violet-500 rounded-full mt-3 flex-shrink-0" />
                      Чувствуешь себя одиноким в этом бесконечном поиске
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/2364589/pexels-photo-2364589.jpeg" 
                  alt="Sneaker enthusiast"
                  className="w-full h-96 object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-violet-900/30 to-transparent rounded-3xl" />
              </div>
            </motion.div>
          </div>

          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-violet-600 to-indigo-600 p-12 rounded-3xl text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                И вот здесь, в момент выбора, мы делаем всё по-другому.
              </h3>
              
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                Хватит мучиться от бесконечного выбора. Мы отбираем только те модели, которые действительно стоит носить. Никаких лишних вариантов, только кураторский подход, который делает твой выбор лёгким и уверенным.
              </p>
              
              <p className="text-lg mb-10 opacity-80">
                Мы такие же, как ты. Мы создали то, чего сами не могли найти — место, где не нужно выбирать между оригинальностью и разумной ценой. Где каждая модель прошла отбор, и ты точно знаешь, за что платишь.
              </p>
              
              <button className="bg-white text-violet-600 px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-50 transition-colors duration-300 group">
                Показать коллекцию
                <ArrowRight className="inline-block ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Catalog */}
      <section id="catalog" className="py-32 bg-gradient-to-b from-slate-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-30" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-8xl font-black text-white mb-8 leading-none">
              Каталог
            </h2>
            <p className="text-2xl md:text-3xl text-gray-400 font-light">
              50 моделей. Точка.
            </p>
            <p className="text-xl text-gray-500 mt-4 max-w-2xl mx-auto">
              50 моделей, после которых можно удалить закладки. Всё, что искал — уже здесь.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                className="group relative overflow-hidden rounded-3xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="glass-card h-full">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-violet-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {product.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
                        {product.price} ₽
                      </span>
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:from-violet-700 hover:to-indigo-700 transition-all duration-300 group-hover:scale-105">
                      Заказать
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <button className="glass-button px-12 py-4 text-xl font-semibold text-white border border-white/30 rounded-2xl hover:border-white/60 transition-all duration-500">
              Показать все 50 моделей
            </button>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Process */}
      <section id="process" className="py-32 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-tight">
              Твой путь к<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
                оригинальным кроссовкам
              </span>
            </h2>
          </motion.div>

          <div className="space-y-16">
            {[
              {
                number: "1",
                title: "Подлинность гарантирована",
                description: "Каждая пара проходит многоуровневую проверку на POIZON — площадке, где подделки невозможны в принципе. Никаких \"почти оригиналов\" и \"точных копий\".",
                icon: <Shield className="w-8 h-8" />,
                image: "https://images.unsplash.com/photo-1511556820780-d912e42b4980"
              },
              {
                number: "2",
                title: "Быстрая доставка из Азии",
                description: "После оплаты твой заказ отправляется в течение 24 часов. Без задержек и непонятных статусов.",
                icon: <Clock className="w-8 h-8" />,
                image: "https://images.unsplash.com/photo-1567535969438-dffc001e5804"
              },
              {
                number: "3",
                title: "10-20 дней в пути",
                description: "Чёткие сроки без пустых обещаний. Ты всегда знаешь, когда получишь свои кроссовки.",
                icon: <Truck className="w-8 h-8" />,
                image: "https://images.pexels.com/photos/8764560/pexels-photo-8764560.jpeg"
              },
              {
                number: "4",
                title: "Отслеживание каждого шага",
                description: "Полный контроль над доставкой в режиме реального времени. От склада в Азии до твоего города — видишь каждое перемещение заказа.",
                icon: <Eye className="w-8 h-8" />,
                image: "https://images.pexels.com/photos/684152/pexels-photo-684152.jpeg"
              },
              {
                number: "5",
                title: "Получение в СДЭК",
                description: "Забери свой заказ в ближайшем отделении СДЭК. Более 3000 пунктов выдачи по всей России.",
                icon: <MapPin className="w-8 h-8" />,
                image: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-6 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl">
                      {step.number}
                    </div>
                    <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center text-violet-600">
                      {step.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">{step.title}</h3>
                  <p className="text-xl text-slate-600 leading-relaxed">{step.description}</p>
                </div>
                
                <div className="flex-1">
                  <div className="relative">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-80 object-cover rounded-3xl shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-violet-900/20 to-transparent rounded-3xl" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <button className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-12 py-4 rounded-2xl font-semibold text-xl hover:from-violet-700 hover:to-indigo-700 transition-all duration-300 group">
              Выбрать кроссовки
              <ArrowRight className="inline-block ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Reviews */}
      <section id="reviews" className="py-32 bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-8xl font-black text-white mb-8 leading-none">
              Отзывы
            </h2>
            <p className="text-2xl text-gray-400 font-light">
              Что говорят покупатели
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="glass-card p-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4 border-2 border-violet-500"
                  />
                  <div>
                    <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                    <div className="flex text-yellow-400 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">{testimonial.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Telegram */}
      <section id="telegram" className="py-32 bg-gradient-to-b from-violet-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 pattern-hexagon opacity-20" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-lg rounded-3xl mb-8">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-6xl md:text-8xl font-black text-white mb-8 leading-none">
              Telegram
            </h2>
            <p className="text-2xl md:text-3xl text-white/90 mb-12 font-light">
              500₽ за подписку. Пишем про сникер-культуру
            </p>

            {!isSubmitted ? (
              <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
                <div className="glass-card p-8">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ваш email для доступа"
                    className="w-full px-6 py-4 bg-white/10 backdrop-blur-lg border border-white/30 rounded-xl text-white placeholder-white/60 text-lg focus:outline-none focus:border-white/60 mb-6"
                    required
                  />
                  <button 
                    type="submit"
                    className="w-full bg-white text-violet-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
                  >
                    Подписаться за 500₽
                  </button>
                </div>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card p-8 max-w-md mx-auto"
              >
                <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <p className="text-white text-lg">
                  Спасибо! Скоро пришлем ссылку на Telegram-канал
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h3 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">
                KICKORIGIN
              </h3>
              <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                50 главных кроссовок планеты.<br />
                Проверено. Задокументировано.<br />
                Дальше можно не искать.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Информация</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">О проекте</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Доставка</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Гарантии</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Контакты</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Telegram</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Email</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">FAQ</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-500">
              © 2024 KICKORIGIN. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;