import ArticleHeader from "./components/ArticleHeader";
import textJson from '@/app/assets/text/text.json'

export default function Home() {
  return (
    <div>
      <div>
        <ArticleHeader 
          article={{...textJson}} />
      </div>
    </div>
  )
}
