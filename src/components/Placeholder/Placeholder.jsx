// Este componente é apenas uma cópia de Home, e serve apenas para fins de demonstração
import './placeholder.scss'

export const Placeholder = () => {
  return (
    <div className='home'>
      <div className='text'>
        <p className='open'>Some tasty text</p>
        <p className='make'>Facts About <br />Random<span> Food</span></p>
        <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit et pariatur tenetur, odit iste cupiditate iusto itaque laudantium, rerum libero sint praesentium repudiandae, a adipisci porro vero aliquid rem magni?</p>
        <button className='start'>Do Nothing!</button>
      </div>
    </div>
  )
}