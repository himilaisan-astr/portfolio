import Navbar from "@/components/Navbar";

export const sections = ["skills", "educations", "works", "projects", "extras"]

export default function Home() {
    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
       <header className="items-center justify-items-center">
        <p 
          className="text-blue-200 font-bold text-2xl"
        >
          MY PORTFOLIO
          </p>

          <Navbar/>
       </header>


       {/* description */}
       <div className='items-center text-black justify-items-center text-center'>
            <div 
              className='
              bg-sky-700 border-solid border-4 border-sky-200 p-20
              items-center text-white justify-items-center text-center
            '>
                <p className="w-3/4">
                    This is my portfolio page about the projects that I have
                    been working on for the last couple of years, any follow-ups
                    please contact via whichever way more helpful to you, and I'll
                    try to respond in the order the inqueries was received.
                </p>
                {/* <p>alpha-numero-uno@hotmail.com</p> */}
                <div style={{display: "flex", flexDirection: "row", gap: 20}}>
                  <button><img src="/phone.svg" className="w-10"/></button>
                  <button><img src="/email.svg" className="w-10"/></button>
                  <button><img src="/twitter.svg" className="w-10"/></button>
                </div>
            </div>
  
          <br/>
          
          <section id={sections[0]} className='bg-blue-200 p-10' >
            <button className="font-bold text-2xl text-gray-500">Skills</button>
  
            <ul>
              <li>Programming Fullstack</li>
              <li>Project Management</li>
              <li>Financing Real Eastate</li>
              <li>Organic Augmentations</li>
              <li>Animal Control</li>
            </ul>
          </section>
  
          <br/>
  
  
          <section id={sections[1]} className='bg-blue-200 p-10'>
            <button className="font-bold text-2xl text-gray-500">Education</button>
  
            <ul>
              <li>University of Washington | 2022</li>
              <li>Bellevue College | 2020</li>
              <li>LIndbergh Heigh School 2019</li>
              <li>Nguyen Du Middle School</li>
              <li>Nguyen Hue Elementary</li>  
            </ul>  
          </section>
  
          <br/>
          <section id={sections[2]} className='bg-blue-200 p-10'>
            <button className="font-bold text-2xl text-gray-500">Work Experience</button>
  
            <ul>
              <li>Sunbytes Global | 2024-Present</li>
  
              <li>Dalat Hasfarm | 2023-2024 </li>
            </ul>
          </section>
  
          <br/>
  
          <section id={sections[3]} className='bg-blue-200 p-10'>
            <button className="font-bold text-2xl text-gray-500">Projects</button>
            <p>Given on inqueries</p>  
          </section>
  
          <br/>
  
          <section id={sections[4]} className='bg-blue-200 p-10'>
            <button className="font-bold text-2xl text-gray-500">Extracurricular</button>
            <p>Music</p>
            <p>Cigars + Whiskey</p>
            <p>Painting</p>
            <p>Yoga & Meditation</p>
            <p>Travelling</p>  
          </section>
  
       </div>
      </div>
    );
  }
  