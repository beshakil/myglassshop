

import autoPlay from 'embla-carousel-autoplay'
import { Carousel } from 'keep-react'
import glassSlideOne from '../../media/glassSlideOne.webp'
import glassSlideTwo from '../../media/glassSlideTwo.webp'

const slideList = [
    {
        id: 1,
        img: glassSlideOne
    },
    {
        id: 2,
        img: glassSlideTwo
    },
]

export const CarouselComponent = () => {
  return (
    <Carousel plugins={[autoPlay()]}>
      <Carousel.Slides>
        {Array.from({ length: 2 }).map((_, index) => (
          <Carousel.Item key={index}>
            <div className="flex h-[320px] items-center justify-center rounded-xl border border-metal-100 bg-primary-25 pp-20">
              <img className="rounded-xl w-full h-full" src={slideList[index].img} alt="Carousel Item" />
            </div>
          </Carousel.Item>
        ))}
      </Carousel.Slides>
      <Carousel.Control>
        <Carousel.Buttons>
          <Carousel.PrevButton />
          <Carousel.NextButton />
        </Carousel.Buttons>
        <Carousel.Indicators />
      </Carousel.Control>
    </Carousel>
  )
}

export default CarouselComponent
