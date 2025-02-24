import styles from '@/styles/Home.module.css';

// components
import { Category } from '@/components/Category';
import { Hero } from '@/components/Hero';
import { Developments } from '@/components/Developments/Developments';
import { ScrollToTop } from '@/components/ScrollToTop';

const Home = () => {
  return (
    <main className={ styles.root }>
      <Category>
        <Hero />
      </Category>
      <Category>
        <Developments />
      </Category>
      <ScrollToTop />
    </main>
  )
};

export default Home;