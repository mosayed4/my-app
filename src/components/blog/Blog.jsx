import pages from  './pages.module.css'
import pic_one from '../../images/pexels-steve-3789885 1.png'

export const Blog = () => {
  return (
    <div className={pages.parent}>
        <p className={pages.title_head}>Our Blog & Articles</p>
        <p className={pages.desc_head}>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
        <div className={pages.cards}>
            <div className={pages.card}>
                <img src={pic_one} alt='food'/>
                <p className={pages.date}>January 3, 2023</p>
                <p className={pages.desc}>How to prepare a delicious gluten free sushi</p>


            </div>
            <div className={pages.card}>
                <img src={pic_one} alt='food'/>
                <p className={pages.date}>January 3, 2023</p>
                <p className={pages.desc}>How to prepare a delicious gluten free sushi</p>


            </div>
            <div className={pages.card}>
                <img src={pic_one} alt='food'/>
                <p className={pages.date}>January 3, 2023</p>
                <p className={pages.desc}>How to prepare a delicious gluten free sushi</p>


            </div>
            <div className={pages.card}>
                <img src={pic_one} alt='food'/>
                <p className={pages.date}>January 3, 2023</p>
                <p className={pages.desc}>How to prepare a delicious gluten free sushi</p>


            </div>
            <div className={pages.card}>
                <img src={pic_one} alt='food'/>
                <p className={pages.date}>January 3, 2023</p>
                <p className={pages.desc}>How to prepare a delicious gluten free sushi</p>


            </div>
            <div className={pages.card}>
                <img src={pic_one} alt='food'/>
                <p className={pages.date}>January 3, 2023</p>
                <p className={pages.desc}>How to prepare a delicious gluten free sushi</p>


            </div>
            <div className={pages.card}>
                <img src={pic_one} alt='food'/>
                <p className={pages.date}>January 3, 2023</p>
                <p className={pages.desc}>How to prepare a delicious gluten free sushi</p>


            </div>
            <div className={pages.card}>
                <img src={pic_one} alt='food'/>
                <p className={pages.date}>January 3, 2023</p>
                <p className={pages.desc}>How to prepare a delicious gluten free sushi</p>


            </div>
            <div className={pages.card}>
                <img src={pic_one} alt='food'/>
                <p className={pages.date}>January 3, 2023</p>
                <p className={pages.desc}>How to prepare a delicious gluten free sushi</p>


            </div>
         

        </div>



    </div>
  )
}