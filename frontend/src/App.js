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
  MapPin,
  Globe,
  Zap,
  Award,
  Heart
} from "lucide-react";
import "./App.css";

// Mock data for products - Nothing style
const products = [
  {
    id: 1,
    name: "Nike Air Force 1",
    price: "19,500",
    image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb",
    status: "🔥 Бестселлер",
    inStock: true
  },
  {
    id: 2,
    name: "Nike Air Max 1",
    price: "22,000",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    status: "💎 Проверено",
    inStock: true
  },
  {
    id: 3,
    name: "Nike Dunk Low",
    price: "18,500",
    image: "https://images.pexels.com/photos/20298285/pexels-photo-20298285.png",
    status: "🔥 Бестселлер",
    inStock: true
  },
  {
    id: 4,
    name: "Air Jordan 1 High OG",
    price: "25,000",
    image: "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8",
    status: "💎 Проверено",
    inStock: true
  },
  {
    id: 5,
    name: "Adidas Ultra Boost",
    price: "16,900",
    image: "https://images.pexels.com/photos/18202569/pexels-photo-18202569.jpeg",
    status: "В наличии",
    inStock: true
  },
  {
    id: 6,
    name: "Nike Air Max 90",
    price: "20,800",
    image: "https://images.pexels.com/photos/5710075/pexels-photo-5710075.jpeg",
    status: "В наличии",
    inStock: true
  },
  {
    id: 7,
    name: "Converse Chuck Taylor",
    price: "12,500",
    image: "https://images.unsplash.com/photo-1562424995-2efe650421dd",
    status: "В наличии",
    inStock: true
  },
  {
    id: 8,
    name: "Vans Old Skool",
    price: "14,200",
    image: "https://images.unsplash.com/photo-1718882704207-067806784758",
    status: "В наличии",
    inStock: true
  }
];

// Mock testimonials
const testimonials = [
  {
    id: 1,
    name: "Александр К.",
    rating: 5,
    text: "Наконец-то нашел магазин, где не нужно сомневаться в качестве. Купил Air Force 1 — приехали точно такие, как на фото.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Мария С.",
    rating: 5,
    text: "Кураторский подход — это именно то, что нужно. Не надо листать тысячи моделей, здесь только лучшее.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b96c2a9d?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Дмитрий Л.",
    rating: 5,
    text: "Заказ пришел через 12 дней. Упаковка идеальная, размер подошел точно. Качество на высоте.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  }
];

// Process steps
const processSteps = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Подлинность гарантирована",
    description: "Каждая пара проходит многоуровневую проверку на POIZON — площадке, где подделки невозможны в принципе."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Быстрая доставка из Азии", 
    description: "После оплаты твой заказ отправляется в течение 24 часов. Без задержек и непонятных статусов."
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "10-20 дней в пути",
    description: "Чёткие сроки без пустых обещаний. Ты всегда знаешь, когда получишь свои кроссовки."
  },
  {
    icon: <Eye className="w-8 h-8" />,
    title: "Отслеживание каждого шага",
    description: "Полный контроль над доставкой в режиме реального времени. От склада в Азии до твоего города."
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Получение в СДЭК",
    description: "Забери свой заказ в ближайшем отделении СДЭК. Более 3000 пунктов выдачи по всей России."
  }
];

function App() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  return (
    <div className="App nothing-style">
      {/* Header - Nothing Style */}
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 nothing-header"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <motion.div 
              className="text-2xl font-bold text-white nothing-logo"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              KICKORIGIN
            </motion.div>
            <div className="flex items-center gap-6">
              <Globe className="w-5 h-5 text-gray-400" />
              <span className="text-gray-400 text-sm font-medium">RU</span>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Hero Section - Nothing Style */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden nothing-hero">
        {/* Background with parallax */}
        <div 
          className="absolute inset-0 hero-bg"
          style={{
            backgroundImage: `url(https://images.pexels.com/photos/20298285/pexels-photo-20298285.png)`,
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        />
        <div className="absolute inset-0 bg-black/70" />
        
        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-teal-400 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="nothing-title mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              50 главных<br />
              <span className="text-teal-400">кроссовок</span><br />
              планеты
            </motion.h1>
            
            <motion.p 
              className="nothing-subtitle mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Проверено. Задокументировано.<br />
              Дальше можно не искать.
            </motion.p>
            
            <motion.button 
              className="nothing-button-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Открыть коллекцию
              <ArrowRight className="ml-3 w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Emotional Block - Storytelling */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="grid lg:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <motion.h2 
                className="nothing-section-title"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Да, ты из тех,<br />
                кто <span className="text-teal-500">разбирается</span>
              </motion.h2>
              
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-lg text-gray-600 leading-relaxed">
                  Ты листаешь сотни предложений и знаешь: где-то здесь твоя идеальная пара. Но каждый раз один и тот же вопрос — действительно ли это оригинал? И почему такая цена?
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Ты ценишь подлинные вещи. Не потому что это модно — просто по-другому не умеешь. Фейки вызывают физический дискомфорт, а переплачивать за чужой маркетинг — против твоих принципов.
                </p>
                
                <div className="nothing-quote-card">
                  <p className="text-xl font-medium text-gray-900 mb-4">
                    И вот здесь, в момент выбора, мы делаем всё по-другому.
                  </p>
                  <p className="text-gray-600">
                    Хватит мучиться от бесконечного выбора. Мы отбираем только те модели, которые действительно стоит носить.
                  </p>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="nothing-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1562424995-2efe650421dd" 
                  alt="Curated selection"
                  className="w-full h-96 object-cover rounded-2xl"
                />
                <div className="absolute top-4 right-4 nothing-badge">
                  Curated
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Catalog - Nothing Grid Style */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="nothing-title-white mb-6">
              Каталог<br />
              <span className="text-teal-400">50 моделей. Всё здесь.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                className="nothing-product-card group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="nothing-status-badge">
                      {product.status}
                    </span>
                  </div>
                  {product.inStock && (
                    <div className="absolute bottom-3 right-3">
                      <span className="nothing-stock-badge">
                        В наличии
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-white">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-teal-400">{product.price} ₽</span>
                  </div>
                  
                  <button className="nothing-button-secondary w-full">
                    Купить
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps - Nothing Style */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="nothing-section-title mb-6">
              Твой путь к<br />
              <span className="text-teal-500">оригинальным кроссовкам</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="nothing-process-step"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="nothing-process-icon">
                  {step.icon}
                </div>
                <div className="text-center mt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews - Nothing Cards */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="nothing-section-title mb-4">Отзывы</h2>
            <p className="text-xl text-gray-600">Что говорят покупатели</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="nothing-review-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <div className="flex text-teal-500 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{testimonial.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Telegram - Last Call Section */}
      <section className="py-32 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-teal-400 rounded-full opacity-60"
              style={{
                left: `${10 + i * 25}%`,
                top: `${20 + i * 15}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="nothing-telegram-icon mb-8">
              <MessageCircle className="w-12 h-12 text-teal-400" />
            </div>
            
            <h2 className="nothing-title-white mb-6">
              Telegram
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Скидка 500₽ за подписку. Пишем про сникер-культуру
            </p>

            {!isSubmitted ? (
              <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
                <div className="nothing-form-container">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ваш email для получения скидки"
                    className="nothing-input mb-6"
                    required
                  />
                  <button 
                    type="submit"
                    className="nothing-button-primary w-full"
                  >
                    Получить скидку 500₽
                  </button>
                </div>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="nothing-success-message"
              >
                <CheckCircle className="w-8 h-8 text-teal-400 mx-auto mb-4" />
                <p className="text-white">
                  Спасибо! Скоро пришлем ссылку на Telegram-канал со скидкой 500₽
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Footer - Nothing Minimal */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold mb-4 text-teal-400">
                KICKORIGIN
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                50 главных кроссовок планеты.<br />
                Проверено. Задокументировано.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-teal-400 transition-colors">Каталог</a>
                <a href="#" className="block text-gray-400 hover:text-teal-400 transition-colors">FAQ</a>
                <a href="#" className="block text-gray-400 hover:text-teal-400 transition-colors">Контакты</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-teal-400 transition-colors">Доставка</a>
                <a href="#" className="block text-gray-400 hover:text-teal-400 transition-colors">Гарантии</a>
                <a href="#" className="block text-gray-400 hover:text-teal-400 transition-colors">Возврат</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © 2024 KICKORIGIN. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;