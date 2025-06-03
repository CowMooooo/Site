import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Shield, 
  Truck, 
  Star, 
  Clock, 
  CheckCircle, 
  TrendingUp, 
  ChevronLeft, 
  ChevronRight, 
  X,
  Mail,
  MessageCircle
} from "lucide-react";
import "./App.css";

// Mock data for products
const products = [
  {
    id: 1,
    name: "Nike Air Force 1 OFF-WHITE",
    price: "22,000",
    originalPrice: "28,000",
    image: "https://images.unsplash.com/photo-1543508282-6319a3e2621f",
    flag: "🔥 Limited Edition"
  },
  {
    id: 2,
    name: "Saint Laurent Court Classic",
    price: "18,500",
    originalPrice: "25,000",
    image: "https://images.unsplash.com/photo-1718802319172-76d6ce3ba4d1",
    flag: "💰 Лучшая цена"
  },
  {
    id: 3,
    name: "Nike Air Jordan 1 Retro",
    price: "19,900",
    originalPrice: "24,000",
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
    flag: null
  },
  {
    id: 4,
    name: "Puma R78 Premium",
    price: "15,000",
    originalPrice: "19,000",
    image: "https://images.unsplash.com/photo-1610132835946-cecdd132ee0b",
    flag: "💰 Лучшая цена"
  }
];

// Mock testimonials
const testimonials = [
  {
    id: 1,
    name: "Александр К.",
    rating: 5,
    text: "Заказал Nike Air Force 1 - пришли точно такие же как на фото. Качество на высоте, никаких подделок!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Мария С.",
    rating: 5,
    text: "Долго искала оригинальные Saint Laurent по нормальной цене. В KICKORIGIN нашла за 18к вместо 25к в магазинах!",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b96c2a9d?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Дмитрий Л.",
    rating: 5,
    text: "Доставка заняла 12 дней, упаковано идеально. Размер подошел точно по таблице. Буду заказывать еще!",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  }
];

// Size guide data
const sizeGuide = [
  { us: "7", eu: "40", ru: "39" },
  { us: "7.5", eu: "40.5", ru: "39.5" },
  { us: "8", eu: "41", ru: "40" },
  { us: "8.5", eu: "42", ru: "40.5" },
  { us: "9", eu: "42.5", ru: "41" },
  { us: "9.5", eu: "43", ru: "42" },
  { us: "10", eu: "44", ru: "42.5" },
  { us: "10.5", eu: "44.5", ru: "43" },
  { us: "11", eu: "45", ru: "44" },
  { us: "11.5", eu: "45.5", ru: "44.5" },
  { us: "12", eu: "46", ru: "45" }
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Auto-scroll carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % products.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Here you would integrate with Telegram bot webhook
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <div className="App">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1587563871167-1ee9c731aefb)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
              KICK<span className="text-gray-300">ORIGIN</span>
            </h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-200 mb-8 font-light leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Только оригинал. Только тренды.<br />
              Прямиком с POIZON.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Смотреть коллекцию
              </button>
              <button 
                onClick={() => setShowSizeGuide(true)}
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300"
              >
                Таблица размеров
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Curated Collection
            </h2>
            <p className="text-xl text-gray-600">
              Отобранные вручную топ-модели из POIZON
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <motion.div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {products.map((product) => (
                  <div key={product.id} className="w-full flex-shrink-0">
                    <div className="bg-white rounded-2xl p-8 mx-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="relative">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-80 object-cover rounded-xl mb-6"
                        />
                        {product.flag && (
                          <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                            {product.flag}
                          </div>
                        )}
                      </div>
                      
                      <h3 className="text-2xl font-bold text-black mb-2">{product.name}</h3>
                      <div className="flex items-center gap-4 mb-6">
                        <span className="text-3xl font-bold text-black">{product.price} ₽</span>
                        <span className="text-xl text-gray-500 line-through">{product.originalPrice} ₽</span>
                      </div>
                      
                      <button className="w-full bg-black text-white py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-colors duration-300">
                        Заказать
                      </button>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Carousel controls */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Carousel indicators */}
            <div className="flex justify-center mt-8 gap-2">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentSlide ? 'bg-black' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose KICKORIGIN */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Почему KICKORIGIN?
            </h2>
            <p className="text-xl text-gray-600">
              Гарантии качества и честные условия
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "100% оригинал",
                subtitle: "Прямо с POIZON",
                description: "Каждая пара проходит проверку на подлинность в Китае"
              },
              {
                icon: <Truck className="w-8 h-8" />,
                title: "Доставка 10-20 дней",
                subtitle: "Быстро и надежно",
                description: "Отслеживание посылки на каждом этапе доставки"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Цены ниже российских",
                subtitle: "Без переплат",
                description: "Экономия до 30% по сравнению с местными магазинами"
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Curated отбор",
                subtitle: "Только тренды",
                description: "Вручную отобранные топ-50 моделей сезона"
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Гарантия подлинности",
                subtitle: "Наша репутация",
                description: "Возврат денег, если товар окажется не оригинальным"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Проверка в Китае",
                subtitle: "Контроль качества",
                description: "Тщательная упаковка и проверка перед отправкой"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-8 rounded-2xl hover:bg-gray-50 transition-colors duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-2xl mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-2">{feature.title}</h3>
                <p className="text-sm font-semibold text-gray-500 mb-3">{feature.subtitle}</p>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(https://images.pexels.com/photos/9195765/pexels-photo-9195765.jpeg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Отзывы клиентов
            </h2>
            <p className="text-xl text-gray-300">
              Что говорят наши покупатели
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{testimonial.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Узнавай о новых дропах первым
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Уведомления в Telegram без спама — только новые дропы
            </p>

            {!isSubmitted ? (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ваш email"
                  className="flex-1 px-6 py-4 rounded-lg text-black text-lg focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
                <button 
                  type="submit"
                  className="bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Подписаться
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-600 text-white px-8 py-4 rounded-lg inline-flex items-center gap-2"
              >
                <CheckCircle className="w-5 h-5" />
                Спасибо! Скоро пришлем ссылку на Telegram-бот
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Часто задаваемые вопросы
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "Как долго доставка?",
                answer: "Доставка занимает 10-20 дней. Все посылки отслеживаются, вы будете получать уведомления о статусе доставки."
              },
              {
                question: "Это точно оригинал?",
                answer: "Да, мы работаем только с проверенными поставщиками на POIZON. Каждая пара проходит проверку на подлинность перед отправкой."
              },
              {
                question: "Что делать, если размер не подошел?",
                answer: "К сожалению, возврат невозможен из-за особенностей дропшиппинга. Поэтому внимательно изучите таблицу размеров перед заказом. Мы всегда готовы помочь с выбором размера."
              },
              {
                question: "Какие способы оплаты?",
                answer: "Принимаем оплату картой, переводом на карту и через электронные кошельки. Оплата производится после подтверждения заказа."
              },
              {
                question: "Есть ли гарантия?",
                answer: "Мы гарантируем подлинность товара. Если товар окажется не оригинальным, вернем деньги полностью."
              }
            ].map((faq, index) => (
              <motion.details
                key={index}
                className="bg-gray-50 rounded-lg p-6 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <summary className="font-semibold text-lg text-black cursor-pointer list-none flex justify-between items-center">
                  {faq.question}
                  <ChevronRight className="w-5 h-5 transform group-open:rotate-90 transition-transform duration-200" />
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">KICKORIGIN</h3>
            <p className="text-gray-400 mb-8">
              Оригинальные кроссовки с POIZON. Без переплат. Без фейков.
            </p>
            
            <div className="flex justify-center space-x-8 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white transition-colors">Условия использования</a>
              <a href="#" className="hover:text-white transition-colors">Контакты</a>
            </div>
            
            <p className="text-gray-500 text-sm mt-8">
              © 2024 KICKORIGIN. Все права защищены.
            </p>
          </div>
        </div>
      </footer>

      {/* Size Guide Modal */}
      <AnimatePresence>
        {showSizeGuide && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowSizeGuide(false)}
          >
            <motion.div
              className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[80vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-black">Таблица размеров</h3>
                <button 
                  onClick={() => setShowSizeGuide(false)}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4 font-semibold text-sm text-gray-600 border-b pb-2">
                  <div>US</div>
                  <div>EU</div>
                  <div>RU</div>
                </div>
                {sizeGuide.map((size, index) => (
                  <div key={index} className="grid grid-cols-3 gap-4 py-2 hover:bg-gray-50 rounded">
                    <div className="font-medium">{size.us}</div>
                    <div>{size.eu}</div>
                    <div>{size.ru}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Совет:</strong> Если сомневаетесь между размерами, выбирайте больший. 
                  Помните, что возврат невозможен.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;