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
  Heart,
  Circle
} from "lucide-react";
import "./App.css";

// Nothing Phone style products
const products = [
  {
    id: 1,
    name: "NIKE AIR FORCE 1",
    price: "19,500",
    image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb",
    status: "BESTSELLER",
    glyphPattern: "pattern-1"
  },
  {
    id: 2,
    name: "NIKE AIR MAX 1",
    price: "22,000", 
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    status: "VERIFIED",
    glyphPattern: "pattern-2"
  },
  {
    id: 3,
    name: "NIKE DUNK LOW",
    price: "18,500",
    image: "https://images.pexels.com/photos/20298285/pexels-photo-20298285.png",
    status: "BESTSELLER",
    glyphPattern: "pattern-3"
  },
  {
    id: 4,
    name: "AIR JORDAN 1 HIGH OG",
    price: "25,000",
    image: "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8",
    status: "VERIFIED", 
    glyphPattern: "pattern-4"
  }
];

// Nothing style testimonials
const testimonials = [
  {
    id: 1,
    name: "АЛЕКСАНДР К.",
    rating: 5,
    text: "Наконец-то нашел магазин, где не нужно сомневаться в качестве. Купил Air Force 1 — приехали точно такие, как на фото.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "МАРИЯ С.",
    rating: 5,
    text: "Кураторский подход — это именно то, что нужно. Не надо листать тысячи моделей, здесь только лучшее.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b96c2a9d?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "ДМИТРИЙ Л.", 
    rating: 5,
    text: "Заказ пришел через 12 дней. Упаковка идеальная, размер подошел точно. Качество на высоте.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  }
];

// Nothing style process steps
const processSteps = [
  {
    id: "01",
    title: "ПОДЛИННОСТЬ\nГАРАНТИРОВАНА",
    description: "КАЖДАЯ ПАРА ПРОХОДИТ МНОГОУРОВНЕВУЮ ПРОВЕРКУ НА POIZON — ПЛОЩАДКЕ, ГДЕ ПОДДЕЛКИ НЕВОЗМОЖНЫ В ПРИНЦИПЕ.",
    glyphColor: "#FF3B30"
  },
  {
    id: "02", 
    title: "БЫСТРАЯ ДОСТАВКА\nИЗ АЗИИ",
    description: "ПОСЛЕ ОПЛАТЫ ТВОЙ ЗАКАЗ ОТПРАВЛЯЕТСЯ В ТЕЧЕНИЕ 24 ЧАСОВ. БЕЗ ЗАДЕРЖЕК И НЕПОНЯТНЫХ СТАТУСОВ.",
    glyphColor: "#FF9500"
  },
  {
    id: "03",
    title: "10-20 ДНЕЙ\nВ ПУТИ",
    description: "ЧЁТКИЕ СРОКИ БЕЗ ПУСТЫХ ОБЕЩАНИЙ. ТЫ ВСЕГДА ЗНАЕШЬ, КОГДА ПОЛУЧИШЬ СВОИ КРОССОВКИ.",
    glyphColor: "#FFCC02"
  },
  {
    id: "04",
    title: "ОТСЛЕЖИВАНИЕ\nКАЖДОГО ШАГА",
    description: "ПОЛНЫЙ КОНТРОЛЬ НАД ДОСТАВКОЙ В РЕЖИМЕ РЕАЛЬНОГО ВРЕМЕНИ. ОТ СКЛАДА В АЗИИ ДО ТВОЕГО ГОРОДА.",
    glyphColor: "#34C759"
  },
  {
    id: "05",
    title: "ПОЛУЧЕНИЕ\nВ СДЭК",
    description: "ЗАБЕРИ СВОЙ ЗАКАЗ В БЛИЖАЙШЕМ ОТДЕЛЕНИИ СДЭК. БОЛЕЕ 3000 ПУНКТОВ ВЫДАЧИ ПО ВСЕЙ РОССИИ.",
    glyphColor: "#007AFF"
  }
];

function App() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [glyphAnimation, setGlyphAnimation] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  // Glyph animation cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setGlyphAnimation(prev => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Parallax scroll
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
    <div className="App nothing-universe">
      {/* Nothing Header */}
      <motion.header 
        className="nothing-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="nothing-container">
          <nav className="nothing-nav">
            <motion.div 
              className="nothing-logo"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <span className="logo-text">KICKORIGIN</span>
              <div className="logo-glyph">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="glyph-dot"
                    animate={{
                      opacity: glyphAnimation === i ? 1 : 0.3,
                      scale: glyphAnimation === i ? 1.2 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                ))}
              </div>
            </motion.div>
            <div className="nothing-lang">
              <Globe className="w-4 h-4" />
              <span>RU</span>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Nothing Hero */}
      <section className="nothing-hero">
        {/* Background with dot matrix */}
        <div 
          className="hero-background"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          <img 
            src="https://images.pexels.com/photos/20298285/pexels-photo-20298285.png"
            alt="Nike Dunk Low Panda"
            className="hero-image"
          />
          <div className="hero-overlay" />
          <div className="dot-matrix-overlay" />
        </div>

        {/* Glyph Interface Elements */}
        <div className="glyph-container">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className={`glyph-element glyph-${i + 1}`}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="nothing-container hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1 
              className="nothing-hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            >
              <span className="title-line">50</span>
              <span className="title-highlight">ГЛАВНЫХ</span>
              <span className="title-line">КРОССОВОК<br />ПЛАНЕТЫ</span>
            </motion.h1>
            
            <motion.p 
              className="nothing-hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              ПРОВЕРЕНО. ЗАДОКУМЕНТИРОВАНО.<br />
              ДАЛЬШЕ МОЖНО НЕ ИСКАТЬ.
            </motion.p>
            
            <motion.div
              className="hero-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <button className="nothing-cta-button">
                <span>ОТКРЫТЬ КОЛЛЕКЦИЮ</span>
                <div className="button-glyph">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Nothing Emotional Block */}
      <section className="nothing-emotional">
        <div className="nothing-container">
          <div className="emotional-grid">
            <motion.div
              className="emotional-content"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="nothing-section-title">
                <span className="title-accent">ДА,</span> ТЫ ИЗ ТЕХ,<br />
                КТО <span className="title-highlight">РАЗБИРАЕТСЯ</span>
              </h2>
              
              <motion.div 
                className="emotional-subtitle"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <p className="subtitle-text">
                  Ты листаешь сотни предложений и знаешь: где-то здесь твоя идеальная пара. 
                  Но каждый раз один и тот же вопрос — <span className="text-emphasis">действительно ли это оригинал? 
                  И почему такая цена?</span>
                </p>
              </motion.div>
              
              <div className="emotional-story">
                <motion.div 
                  className="story-block"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <p className="story-text">
                    Ты ценишь <span className="text-highlight">подлинные вещи</span>. 
                    Не потому что это модно — просто по-другому не умеешь. Фейки вызывают физический дискомфорт, 
                    а переплачивать за чужой маркетинг — против твоих принципов.
                  </p>
                </motion.div>

                <motion.div 
                  className="story-block"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <p className="story-text">
                    Ты знаешь, чего хочешь. Но когда открываешь очередной маркетплейс... 
                    <span className="text-frustration">Сотни моделей. Тысячи продавцов. Миллион вопросов без ответов.</span> 
                    И каждый раз следопытом — проверять, перепроверять, сомневаться.
                  </p>
                </motion.div>

                <motion.div 
                  className="pain-points"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h3 className="pain-title">Знакомо, когда:</h3>
                  <div className="pain-list">
                    {[
                      "Нашел идеальную модель, но сомневаешься в подлинности",
                      "Видишь явно завышенную цену и понимаешь, что платишь за чужую рекламу", 
                      "Открываешь каталог и через 15 минут закрываешь — глаза разбегаются",
                      "Чувствуешь себя одиноким в этом бесконечном поиске"
                    ].map((pain, index) => (
                      <motion.div
                        key={index}
                        className="pain-item"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="pain-bullet"></div>
                        <span className="pain-text">{pain}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div 
                  className="solution-moment"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                  viewport={{ once: true }}
                >
                  <div className="moment-highlight">
                    <h3 className="moment-title">
                      И вот здесь, в момент выбора,<br />
                      <span className="moment-accent">мы делаем всё по-другому.</span>
                    </h3>
                  </div>
                </motion.div>

                <motion.div 
                  className="solution-text"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.7 }}
                  viewport={{ once: true }}
                >
                  <p className="solution-description">
                    <span className="solution-emphasis">Хватит мучиться от бесконечного выбора.</span> 
                    Мы отбираем только те модели, которые действительно стоит носить. 
                    Никаких лишних вариантов, только <span className="text-highlight">кураторский подход</span>, 
                    который делает твой выбор лёгким и уверенным.
                  </p>
                </motion.div>

                <motion.div 
                  className="final-statement"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.9 }}
                  viewport={{ once: true }}
                >
                  <div className="statement-box">
                    <p className="statement-text">
                      <span className="statement-highlight">Мы такие же, как ты.</span> 
                      Мы создали то, чего сами не могли найти — место, где не нужно выбирать 
                      между оригинальностью и разумной ценой. Где каждая модель прошла отбор, 
                      и ты точно знаешь, за что платишь.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="section-cta"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 2.1 }}
                  viewport={{ once: true }}
                >
                  <button className="nothing-cta-button">
                    <span>ПОКАЗАТЬ КОЛЛЕКЦИЮ</span>
                    <div className="button-glyph">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </button>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div
              className="emotional-visual"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="visual-container">
                <img 
                  src="https://images.unsplash.com/photo-1562424995-2efe650421dd"
                  alt="Curated selection"
                  className="visual-image"
                />
                <div className="visual-glyph-overlay">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`visual-glyph visual-glyph-${i + 1}`}
                      animate={{
                        opacity: [0.3, 1, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        delay: i * 0.3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nothing Catalog */}
      <section className="nothing-catalog">
        <div className="nothing-container">
          <motion.div
            className="catalog-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="nothing-catalog-title">
              КАТАЛОГ<br />
              <span className="catalog-count">50 МОДЕЛЕЙ. ВСЁ ЗДЕСЬ.</span>
            </h2>
          </motion.div>

          <div className="nothing-grid">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                className="nothing-product"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="product-image-container">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                  <div className={`product-glyph ${product.glyphPattern}`}>
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="glyph-pixel"
                        animate={{
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 1.5,
                          delay: i * 0.1,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    ))}
                  </div>
                  <div className="product-status">
                    {product.status}
                  </div>
                </div>
                
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <div className="product-price">{product.price} ₽</div>
                  <div className="product-stock">В НАЛИЧИИ</div>
                  
                  <button className="product-buy-button">
                    <span>КУПИТЬ</span>
                    <div className="button-dot"></div>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nothing Process */}
      <section className="nothing-process">
        <div className="nothing-container">
          <motion.div
            className="process-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="nothing-section-title">
              ТВОЙ ПУТЬ К<br />
              <span className="title-highlight">ОРИГИНАЛЬНЫМ КРОССОВКАМ</span>
            </h2>
          </motion.div>

          <div className="process-grid">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                className="process-step"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="step-number" style={{ color: step.glyphColor }}>
                  {step.id}
                </div>
                <div className="step-glyph" style={{ borderColor: step.glyphColor }}>
                  <motion.div
                    className="glyph-indicator"
                    style={{ backgroundColor: step.glyphColor }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.7, 1],
                    }}
                    transition={{
                      duration: 2,
                      delay: index * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nothing Reviews */}
      <section className="nothing-reviews">
        <div className="nothing-container">
          <motion.div
            className="reviews-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="nothing-section-title">ОТЗЫВЫ</h2>
            <p className="reviews-subtitle">ЧТО ГОВОРЯТ ПОКУПАТЕЛИ</p>
          </motion.div>

          <div className="reviews-grid">
            {testimonials.map((review, index) => (
              <motion.div
                key={review.id}
                className="review-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="review-header">
                  <img 
                    src={review.avatar}
                    alt={review.name}
                    className="review-avatar"
                  />
                  <div className="review-info">
                    <h4 className="review-name">{review.name}</h4>
                    <div className="review-rating">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="star" />
                      ))}
                    </div>
                  </div>
                  <div className="review-glyph">
                    <motion.div
                      className="glyph-pulse"
                      animate={{
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        delay: index * 0.3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                </div>
                <p className="review-text">{review.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nothing Telegram */}
      <section className="nothing-telegram">
        <div className="telegram-background">
          <div className="telegram-glyph-pattern">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className={`telegram-glyph telegram-glyph-${i + 1}`}
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </div>

        <div className="nothing-container">
          <motion.div
            className="telegram-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="telegram-icon">
              <MessageCircle className="w-8 h-8" />
              <div className="icon-glyph">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="icon-dot"
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1.5,
                      delay: i * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            </div>
            
            <h2 className="telegram-title">TELEGRAM</h2>
            <p className="telegram-subtitle">
              СКИДКА 500₽ ЗА ПОДПИСКУ.<br />
              ПИШЕМ ПРО СНИКЕР-КУЛЬТУРУ
            </p>

            {!isSubmitted ? (
              <form onSubmit={handleNewsletterSubmit} className="telegram-form">
                <div className="form-container">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ВАШ EMAIL ДЛЯ ПОЛУЧЕНИЯ СКИДКИ"
                    className="telegram-input"
                    required
                  />
                  <button type="submit" className="telegram-submit">
                    <span>ПОЛУЧИТЬ СКИДКУ 500₽</span>
                    <div className="submit-glyph">
                      <motion.div
                        className="glyph-arrow"
                        animate={{
                          x: [0, 5, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </div>
                  </button>
                </div>
              </form>
            ) : (
              <motion.div
                className="telegram-success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <CheckCircle className="w-8 h-8" />
                <p>СПАСИБО! СКОРО ПРИШЛЕМ ССЫЛКУ НА TELEGRAM-КАНАЛ СО СКИДКОЙ 500₽</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Nothing Footer */}
      <footer className="nothing-footer">
        <div className="nothing-container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3 className="footer-logo">KICKORIGIN</h3>
              <p className="footer-tagline">
                50 ГЛАВНЫХ КРОССОВОК ПЛАНЕТЫ.<br />
                ПРОВЕРЕНО. ЗАДОКУМЕНТИРОВАНО.
              </p>
            </div>
            
            <div className="footer-links">
              <div className="footer-column">
                <h4>НАВИГАЦИЯ</h4>
                <a href="#">КАТАЛОГ</a>
                <a href="#">FAQ</a>
                <a href="#">КОНТАКТЫ</a>
              </div>
              
              <div className="footer-column">
                <h4>ПОДДЕРЖКА</h4>
                <a href="#">ДОСТАВКА</a>
                <a href="#">ГАРАНТИИ</a>
                <a href="#">ВОЗВРАТ</a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-glyph">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="footer-dot"
                  animate={{
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
            <p>© 2024 KICKORIGIN. ВСЕ ПРАВА ЗАЩИЩЕНЫ.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;