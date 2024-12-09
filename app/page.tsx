import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     <p>MY PORTFOLIO</p>

     {/* description */}
     <div className='justify-center text-center'>
        <p>
          This is my portfolio page about the projects that I have worked
          been working on for the last couple of years, any follow-ups
          please contact email 
        </p>
        <p>alpha-numero-uno@hotmail.com</p>
        {/* <img src="/email-white.svg" className="w-5"/> */}

        <br/>
        <section>
          <p className="underline">Skills</p>

          <ul>
            <li>Programming Fullstack</li>
            <li>Project Management</li>
            <li>Financing Real Eastate</li>
            <li>Organic Augmentations</li>
            <li>Animal Control</li>
          </ul>
        </section>

        <br/>


        <section>
          <p className="underline">Education</p>

          <ul>
            <li>University of Washington | 2022</li>
            <li>Bellevue College | 2020</li>
            <li>LIndbergh Heigh School 2019</li>
            <li>Nguyen Du Middle School</li>
            <li>Nguyen Hue Elementary</li>  
          </ul>  
        </section>

        <br/>
        <section>
          <p className="underline">Work Experience</p>

          <ul>
            <li>Sunbytes Global | 2024-Present</li>

            <li>Dalat Hasfarm | 2023-2024 </li>
          </ul>
        </section>

        <br/>

        <section>
          <p className="underline">Projects</p>
          <p>Given on inqueries</p>  
        </section>

        <br/>

        <section>
          <p className="underline">Extracurricular</p>
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
