import Hero from '../components/Hero'
import Features from '../components/Features'
import FAQ from '../components/FAQ'
import BlogSection from '../components/BlogSection'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return (
    <div className="pt-20">
      <Hero />
      <Features />
      <FAQ />
      <BlogSection />
      <Newsletter />
    </div>
  )
}

export default Home