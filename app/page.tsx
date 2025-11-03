import textJson from '@/app/assets/text/text.json'
import GSAPContainer from "./components/gsap/Container";
import ArticleBody from "./components/ArticleBody";
import Logo from "./components/Logo";

export default function Home() {
  return (
    <div>
      <Logo />
      <GSAPContainer />
      <ArticleBody
        body={textJson['Introduction']} />
    </div>
  )
}
