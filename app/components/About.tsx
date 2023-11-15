import ImageProfile from '@/app/components/ImageProfile'
import SectionTitle from '@/app/components/SectionTitle'
import TabSection from '@/app/components/TabSection'
import { staggerContainer } from '@/app/utils/motion'
import { MotionDiv } from '@/app/components/frame'


const About = () => {
  return (
    <MotionDiv
      variants={staggerContainer(0.1, 2, 0.5)}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
    >
      <section
        id='about'
        className='max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8 px-5'
      >
        <div className='flex flex-col lgl:flex-row gap-16'>
          <div className='self-center lg:self-start lg:mt-10'>
            <ImageProfile />
          </div>

          <div
            className='w-full lgl:w-2/3 flex flex-col gap-4'>
            <SectionTitle title='About Me' titleNo='01' />
            <p className='text-base text-textDark font-normal'>

              As a <span className='text-textGreen'>results-oriented professional</span>,
              I thrive on the challenge of
              bringing goals and objectives to fruition. My career journey has
              been a <span className='text-textGreen'>diverse tapestry</span>,
              weaving through web development, project
              planning, product marketing, counseling, and
              recruiting. This varied experience has not only honed my skills
              but also enriched my approach to professional challenges.
            </p>
            <p className='text-base text-textDark font-normal'>
              I have a <span className='text-textGreen'>excitement for executing ideas</span>,
              especially within
              the constraints of real-world scenarios. While I trust my
              intuition, I strongly believe in backing decisions with solid
              data.
            </p>
            <p className='text-base text-textDark font-normal'>
              Winning is exhilarating, but what brings me the greatest joy is
              <span className='text-textGreen'> helping my team achieve collective success.</span> I
              have a knack for
              <span className='text-textGreen'> 'speaking tech'</span> with a
              dash of humor, making complex ideas
              accessible and engaging. My enthusiasm for new technology is not
              just about staying current; it's about constantly seeking ways to
              <span className='text-textGreen'> enhance efficiency and effectiveness</span> in
              the workplace.
            </p>
            <p className='text-base text-textDark font-normal'>
              Beyond my professional life, I find balance and refreshment in my
              personal interests. Whether it's playing badminton, cycling,
              hanging out with friends, or keeping up with the latest tech
              trends, these activities help me maintain a <span
              className='text-textGreen'>well-rounded
              perspective.</span>
            </p>
            <p className='text-base text-textDark font-normal'>Here are a few
              technologies I have been working with
              recently:</p>
            <TabSection />
          </div>
        </div>
      </section>
    </MotionDiv>
  )
}

export default About