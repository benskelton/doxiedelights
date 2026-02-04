
import React, { useState, useCallback, useRef, useEffect } from 'react';
import { HERO_IMAGE, PRODUCTS, TESTIMONIALS } from './constants';
import { Product, ChatMessage } from './types';
import { getDoxieAdvice } from './services/geminiService';

// Header Component
const Header: React.FC = () => {
  return (
    <header className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-50 border-b border-primary/5">
      <div className="text-[#1b140d] dark:text-[#fcfaf8] flex size-12 shrink-0 items-center justify-center cursor-pointer hover:bg-primary/10 rounded-full transition-colors">
        <span className="material-symbols-outlined">menu</span>
      </div>
      <h2 className="text-[#1b140d] dark:text-[#fcfaf8] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">
        Doxie Delights
      </h2>
    </header>
  );
};

// Hero Component
const Hero: React.FC<{ onShop: () => void }> = ({ onShop }) => {
  return (
    <div className="@container">
      <div className="@[480px]:p-4">
        <div 
          className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-6 text-center shadow-lg"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%), url("${HERO_IMAGE}")`
          }}
        >
          <div className="flex flex-col gap-2">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl drop-shadow-md">
              Style Your Long Friend
            </h1>
            <p className="text-white text-base font-normal leading-normal max-w-[320px] mx-auto opacity-90 drop-shadow-sm">
              Premium accessories designed specifically for the unique shape of your dachshund.
            </p>
          </div>
          <button 
            onClick={onShop}
            className="flex min-w-[180px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:scale-105 active:scale-95 transition-all shadow-lg"
          >
            <span>Shop Collection</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// Newsletter Component
const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <div className="@container bg-white dark:bg-[#2d2216] my-6 mx-4 rounded-xl shadow-sm border border-primary/10 transition-all">
      <div className="flex flex-col justify-center gap-6 px-6 py-10 @[480px]:px-10 @[480px]:py-16">
        <div className="flex flex-col gap-3 text-center">
          <h2 className="text-[#1b140d] dark:text-[#fcfaf8] tracking-tight text-[28px] font-bold leading-tight @[480px]:text-3xl">
            {subscribed ? 'You\'re in the Club!' : 'Get 10% Off Your First Order'}
          </h2>
          <p className="text-[#9a734c] dark:text-[#c0a080] text-sm font-normal leading-normal max-w-[400px] mx-auto">
            {subscribed 
              ? 'Check your inbox for your exclusive code and a special pup-date from the team.' 
              : 'Join our newsletter for exclusive pup-dates, dachshund styling tips, and VIP early access to new collections.'
            }
          </p>
        </div>
        {!subscribed && (
          <form onSubmit={handleSubmit} className="flex flex-1 justify-center">
            <div className="flex flex-col w-full max-w-[400px] gap-3">
              <div className="flex w-full items-stretch rounded-xl h-14 bg-[#f3ede7] dark:bg-[#3d2e20] border-2 border-transparent focus-within:border-primary transition-all">
                <input 
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1b140d] dark:text-[#fcfaf8] focus:outline-0 focus:ring-0 border-none bg-transparent h-full placeholder:text-[#9a734c] px-4 text-base font-normal" 
                  placeholder="Enter your email" 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button 
                type="submit"
                className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 bg-primary text-white text-base font-bold leading-normal shadow-lg shadow-primary/20 hover:brightness-110 active:scale-[0.98] transition-all"
              >
                <span>Join the Club</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

// Best Sellers Product Grid
const ProductGrid: React.FC<{ products: Product[] }> = ({ products }) => {
  return (
    <section className="mb-10">
      <div className="px-4 pt-8 pb-1">
        <h2 className="text-[#1b140d] dark:text-[#fcfaf8] text-[24px] font-extrabold leading-tight tracking-[-0.015em]">
          Best Sellers
        </h2>
        <div className="h-1.5 w-16 bg-primary rounded-full mt-2"></div>
      </div>
      <div className="grid grid-cols-2 gap-4 p-4">
        {products.map(product => (
          <div key={product.id} className="flex flex-col gap-3 pb-3 group cursor-pointer">
            <div 
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl shadow-md group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300"
              style={{ backgroundImage: `url("${product.imageUrl}")` }}
            ></div>
            <div>
              <p className="text-[#1b140d] dark:text-[#fcfaf8] text-base font-bold leading-normal group-hover:text-primary transition-colors">
                {product.name}
              </p>
              <div className="flex justify-between items-center mt-1">
                <p className="text-terracotta font-semibold text-base">${product.price.toFixed(2)}</p>
                <p className="text-[#9a734c] dark:text-[#c0a080] text-[10px] font-bold uppercase tracking-widest bg-primary/10 px-2 py-0.5 rounded-full">
                  {product.tag}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Testimonials
const TestimonialsSection: React.FC = () => {
  return (
    <section className="px-4 py-12 bg-primary/5 dark:bg-primary/10 mb-10 rounded-3xl mx-4">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-1 text-primary">
          {[1, 2, 3, 4, 5].map(i => (
            <span key={i} className="material-symbols-outlined filled text-xl">star</span>
          ))}
        </div>
        <p className="italic text-lg text-[#1b140d] dark:text-[#fcfaf8] leading-relaxed font-medium">
          {TESTIMONIALS[0].text}
        </p>
        <div className="flex items-center gap-3">
          <div 
            className="size-12 rounded-full bg-cover border-2 border-white dark:border-[#2d2216] shadow-sm"
            style={{ backgroundImage: `url("${TESTIMONIALS[0].avatarUrl}")` }}
          ></div>
          <div>
            <p className="text-sm font-bold text-[#1b140d] dark:text-[#fcfaf8]">{TESTIMONIALS[0].author}</p>
            <p className="text-xs text-[#9a734c] dark:text-[#c0a080] font-medium">{TESTIMONIALS[0].role}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Expert Chat Feature
const DoxieExpert: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: inputValue, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    const advice = await getDoxieAdvice(inputValue);
    const modelMsg: ChatMessage = { role: 'model', text: advice, timestamp: new Date() };
    
    setIsTyping(false);
    setMessages(prev => [...prev, modelMsg]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="bg-white dark:bg-[#2d2216] w-80 h-[450px] shadow-2xl rounded-3xl flex flex-col overflow-hidden border border-primary/20 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-primary p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined">pets</span>
              <h3 className="font-bold">Doxie Expert</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 rounded-full p-1 transition-colors">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 && (
              <div className="text-center text-[#9a734c] py-10">
                <span className="material-symbols-outlined text-4xl mb-2 opacity-50">smart_toy</span>
                <p className="text-sm">Ask our AI Dachshund Expert anything about styling or care!</p>
              </div>
            )}
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user' 
                    ? 'bg-primary text-white rounded-tr-none' 
                    : 'bg-[#f3ede7] dark:bg-[#3d2e20] text-[#1b140d] dark:text-[#fcfaf8] rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-[#f3ede7] dark:bg-[#3d2e20] p-3 rounded-2xl rounded-tl-none">
                  <div className="flex gap-1">
                    <div className="size-1.5 bg-primary rounded-full animate-bounce"></div>
                    <div className="size-1.5 bg-primary rounded-full animate-bounce [animation-delay:-.3s]"></div>
                    <div className="size-1.5 bg-primary rounded-full animate-bounce [animation-delay:-.5s]"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="p-3 bg-white dark:bg-[#2d2216] border-t border-primary/10 flex gap-2">
            <input 
              type="text"
              placeholder="Type your question..."
              className="flex-1 bg-[#f3ede7] dark:bg-[#3d2e20] rounded-full border-none focus:ring-1 focus:ring-primary text-sm px-4"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button 
              onClick={handleSend}
              className="bg-primary text-white size-10 rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-md"
            >
              <span className="material-symbols-outlined text-xl">send</span>
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-primary text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:rotate-3 active:scale-90 transition-all group flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-2xl group-hover:animate-wiggle">chat_bubble</span>
          <span className="font-bold pr-1 hidden group-hover:inline">Ask an Expert</span>
        </button>
      )}
    </div>
  );
};

// Main App Layout
const App: React.FC = () => {
  const shopRef = useRef<HTMLDivElement>(null);

  const scrollToShop = useCallback(() => {
    shopRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden selection:bg-primary/30">
      <Header />
      
      <main className="flex-1">
        <Hero onShop={scrollToShop} />
        
        <Newsletter />
        
        <div ref={shopRef}>
          <ProductGrid products={PRODUCTS} />
        </div>
        
        <TestimonialsSection />
        
        {/* Quality Banner */}
        <div className="px-8 py-10 text-center flex flex-col items-center gap-4">
          <div className="size-16 bg-primary/20 rounded-full flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-4xl">check_circle</span>
          </div>
          <h3 className="text-xl font-bold">Tailored Perfection</h3>
          <p className="text-[#9a734c] max-w-sm text-sm">
            Every item is hand-crafted to provide a perfect ergonomic fit for the elongated spines of dachshunds.
          </p>
        </div>
      </main>

      <footer className="p-10 text-center border-t border-primary/10 bg-white dark:bg-[#2d2216]">
        <div className="flex flex-col gap-6">
          <div className="flex justify-center gap-6 text-primary">
            <a href="#" className="hover:scale-110 transition-transform"><span className="material-symbols-outlined">facebook</span></a>
            <a href="#" className="hover:scale-110 transition-transform"><span className="material-symbols-outlined">photo_camera</span></a>
            <a href="#" className="hover:scale-110 transition-transform"><span className="material-symbols-outlined">alternate_email</span></a>
          </div>
          <p className="text-sm font-medium text-[#9a734c]">© 2024 Doxie Delights. Made with ❤️ for long dogs.</p>
          <div className="flex justify-center gap-4 text-xs font-semibold uppercase tracking-widest text-[#9a734c]/60">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">Shipping</a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">FAQ</a>
          </div>
        </div>
      </footer>
      
      {/* Floating Action Component */}
      <DoxieExpert />

      {/* Spacing for mobile nav or reach */}
      <div className="h-10"></div>
    </div>
  );
};

export default App;
