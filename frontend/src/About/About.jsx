import React from 'react'
import './About.css'
import Footer from '../components/footer/Footer'

export default function About() {
  return (
    <>
      <div class="text-center p-8" id='about-main'>
    <div>
        <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>Welcome to <span>Indian Tutor Expert</span>,</h1>
        <p className='sm:text-lg mt-6'> At <span>Indian Tutor Expert</span> , we're not just another tutoring service. We're your trusted partner in education, dedicated to redefining the learning experience for students across India. Since our inception in 2017, we've been on a mission to bridge the gap between traditional education and the evolving needs of modern learners.</p>
    </div>
   

    <div class="flex flex-wrap items-center mt-20 text-left text-center">
        <div class="w-full md:w-3/5 lg:w-1/2 px-4">
            <img src="https://t4.ftcdn.net/jpg/06/13/33/21/360_F_613332177_rdl36d2CnlqC1tqGQE3CizEJdu9G2Ltj.jpg" alt="gem" class="inline-block rounded shadow-lg border border-merino-400"/>
        </div>
        <div class="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
            <h3 class="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
            Our Vision and Commitment:
            </h3>
            <p class="sm:text-lg mt-6">
            Founded with a vision to transform education, we are committed to providing high-quality, personalized tutoring services. With over 40 thousand highly experienced teachers, we ensure that every learner's unique requirements are met.
            </p>
        </div>
    </div>

    <div class="flex flex-wrap items-center mt-20 text-left text-center">
        <div class="w-full md:w-3/5 lg:w-1/2 px-4">
            <img src="https://www.leadsquared.com/wp-content/uploads/2023/03/student-journey-mapping.jpg" alt="project members" class="inline-block rounded shadow-lg border border-merino-400"/>
        </div>
        <div class="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
            <h3 class="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
            Understanding the Student Journey:
            </h3>
            <p class="sm:text-lg mt-6">
            We recognize that every student is unique, with distinct learning styles, strengths, and areas for improvement. That's why we offer a comprehensive range of online and offline tutoring services tailored to cater to diverse academic needs, from primary school to higher education.
            </p>
        </div>
    </div>

    <div class="flex flex-wrap items-center mt-20 text-left  text-center">
        <div class="w-full md:w-3/5 lg:w-1/2 px-4">
            <img src="https://lvivity.com/wp-content/uploads/2018/08/dedicated-team.jpg" alt="editor" class="inline-block rounded shadow-lg border border-merino-400"/>
        </div>
        <div class="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
            <h3 class="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
            Our Dedicated Team:


            </h3>
            <p class="sm:text-lg mt-6">
            Our team comprises experienced educators, subject matter experts, and dedicated mentors who are passionate about empowering students to reach their full potential. Whether it's mastering complex concepts, preparing for competitive exams, or seeking extra support to excel in school, our tutors are here to guide, motivate, and inspire.
            </p>
        </div>
    </div>

    <div class="flex flex-wrap items-center mt-20 text-left text-center">
        <div class="w-full md:w-3/5 lg:w-1/2 px-4">
            <img src="https://gaper.io/wp-content/uploads/2022/03/flexibility-and-creativity.webp" alt="bulk editing" class="inline-block rounded shadow-lg border border-merino-400"/>
        </div>
        <div class="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
            <h3 class="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
            Excellence, Innovation, and Flexibility:
            </h3>
            <p class="sm:text-lg mt-6">
            What sets us apart is our commitment to excellence, innovation, and flexibility. Through our interactive online platform, students can access learning resources anytime, anywhere, making education more accessible and convenient. Additionally, our offline tutoring sessions provide personalized attention and hands-on guidance to ensure optimal learning outcomes.
            </p>
        </div>
    </div>
    <div class="flex flex-wrap items-center mt-20 text-left text-center">
        <div class="w-full md:w-3/5 lg:w-1/2 px-4">
            <img src="https://edexec.co.uk/wp-content/uploads/2022/10/iStock-1181529836-670x381.jpg" alt="gem" class="inline-block rounded shadow-lg border border-merino-400"/>
        </div>
        <div class="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
            <h3 class="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
            Creating a Supportive Learning Environment:
            </h3>
            <p class="sm:text-lg mt-6">
            We believe that education is the key to unlocking endless opportunities. That's why we strive to create a supportive and nurturing learning environment where students can thrive academically and personally.
            </p>
        </div>
    </div>
    <div class="flex flex-wrap items-center mt-20 text-left text-center">
        <div class="w-full md:w-3/5 lg:w-1/2 px-4">
            <img src="https://t3.ftcdn.net/jpg/04/87/16/34/360_F_487163480_u4q13pQTIIbcVbolPiHKZFFlkfVrnVP3.jpg" alt="bulk editing" class="inline-block rounded shadow-lg border border-merino-400"/>
        </div>
        <div class="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
            <h3 class="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
            Join Us:


            </h3>
            <p class="sm:text-lg mt-6">
            Join us on this journey towards academic success, and let's make learning a rewarding and enjoyable experience together!
            </p>
            <button>Register Now</button>
        </div>
    </div>

</div>


<Footer/>
    </>
  )
}
