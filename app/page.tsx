import ArticleHeader from "./components/ArticleHeader";
import textJson from '@/app/assets/text/text.json'
import GSAPContainer from "./components/gsap/Container";
import ArticleBody from "./components/ArticleBody";
import Logo from "./components/Logo";

export default function Home() {
  return (
    <div>
      <Logo />
      <div>
        <GSAPContainer />
      </div>
    </div>
  )
}
