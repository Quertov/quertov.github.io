import styles from '@/styles/Home.module.css';

// components
import { Category } from '@/components/Category';
import { Hero } from '@/components/Hero';
import { Developments } from '@/components/Developments/Developments';
import { ScrollToTop } from '@/components/ScrollToTop';
import { Services } from '@/components/Services/Services';
import { About } from '@/components/About/About';
import { FAQ } from '@/components/FAQ/FAQ';
import { Worldwide } from '@/components/Worldwide';
import { Discuss } from '@/components/Discuss/Discuss';
import { Footer } from '@/components/Footer';

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'sk' }, { locale: 'uk' }]; // Add all possible locales
}

const Home = () => {

  return (
    <main className={ styles.root }>
      <Category>
        <Hero />
      </Category>

      <Category>
        <Developments />
      </Category>

      <Category>
        <Services />
      </Category>

      <Category>
        <About />
      </Category>

      <Category>
        <FAQ />
      </Category>

      <Category>
        <Worldwide />
      </Category>

      <Category>
        <Discuss />
      </Category>
      
      <Footer />

      <ScrollToTop />
    </main>
  )
};

export default Home;