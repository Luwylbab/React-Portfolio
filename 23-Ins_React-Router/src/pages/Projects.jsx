import pic1 from '../assets/images/react.svg'
const items = [
{
  title: 'pic1',
  image: pic1,
  link: 'google.com',
},
{
  title: 'project2',
  image: pic2,
  link: 'google.com',
}]
export default function Projects() {
  return (
    <div>
      <h1>Home Page</h1>
        {items.map(item => (
          <div>
            <h3>{item.title}</h3>
            <img src={item.image}></img>
          </div>
        ))}
    </div>
  );
}
