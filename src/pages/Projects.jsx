import techBlog from '../assets/images/TechBlog.png'
import wishlist from '../assets/images/Wishlist.png'
import noteApp from '../assets/images/NoteTaker.png'
import dadJoke from '../assets/images/DadWeather.png'
import jsQuiz from '../assets/images/JSQuiz1.png'
import dayPlanner from '../assets/images/DayPlanner.png'


const items = [
{
  title: 'Tech Blog App',
  image: techBlog,
  link: 'https://luwylbab-tech-blog-f8fa230071a3.herokuapp.com/',
},
{
  title: 'Wishlist App',
  image: wishlist,
  link: 'https://giftpot-d834bfa62933.herokuapp.com/',
},
{
  title: 'Note Taker App',
  image: noteApp,
  link: 'https://lwb-note-taker-f50f5a1d4a61.herokuapp.com/',
},
{
  title: 'Dad Joke Weather App',
  image: dadJoke,
  link: 'https://luwylbab.github.io/Dadhumor-Incorporated/',
},
{
  title: 'JavaScript Quiz App',
  image: jsQuiz,
  link: 'https://luwylbab.github.io/JavaScript-Quiz/',
},
{
  title: 'Daily Planner',
  image: dayPlanner,
  link: 'https://luwylbab.github.io/Daily-Planner/',
},
]
export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <div className="row">
        {items.slice(0, 3).map((item, index) => (
          <div key={index} className="col">
            <h3>{item.title}</h3>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
            <img className="proj-images" src={item.image} alt={item.title} />
            </a>
          </div>
        ))}
      </div>
      <div className="row">
        {items.slice(3, 6).map((item, index) => (
          <div key={index} className="col">
            <h3>{item.title}</h3>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
            <img className="proj-images" src={item.image} alt={item.title} />
            </a>          </div>
        ))}
      </div>
    </div>
  );
}
