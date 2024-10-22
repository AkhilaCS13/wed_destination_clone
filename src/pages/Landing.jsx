import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <>
      <div id='Home' className='d-flex justify-content-center align-items-item'>
        <Link to={'/register'}><button className='p-3 bg-dark text-light'>LEARN MORE</button></Link>
        </div>
      <div className='row w-100 mt-4'>
        <div className="col-md-2"></div>
        <div className="col-md-4 m-2 img1">
          <img src="https://images.squarespace-cdn.com/content/v1/555b76fce4b00e0c19144cca/1680044836394-X8JMN1C7WEKML9XJJ9NN/preview-33.jpeg?format=1500w" alt="no image" className='img2 w-100' />
        </div>
        <div className="col-md-4 text-center p-3">
          <h3>Best Wedding Photography Services</h3>
          <p className='mt-3 text-dark'>From beautiful beaches to breathtaking sunsets, every moment is preserved. Unique destination wedding photography like no other. Our eye for detail tells your unique love story. A luxurious photography journey tailored to you.</p>

          <h5 className='mt-md-5'>Packages Starting at $3,800</h5>
          <Link to={'/wedding'}><button className=' btn bg-info text-light mt-md-4'>GALLERY</button></Link>
        </div>
        <div className="col-md-2"></div>
      </div>

      <div className='row w-100 mt-5'>
        <div className="col-md-2"></div>
        <div className="col-md-4 text-center p-3">
          <h3>Photography and Videography services</h3>
          <p className='mt-3 text-dark'>We capture and preserve your love story through engagement photography. Explore picturesque landscapes as we seek the perfect backdrop for your blossoming love.  Experience a photography journey tailored to your vision. Your engagement deserves to be remembered in all its beauty..</p>

          <h5 className='mt-md-5'>Prices Starting at $300</h5>
          <Link to={'/engage'}><button className=' btn bg-info text-light mt-md-4'>GALLERY</button></Link>
        </div>
        <div className="col-md-4 m-3 img1">
          <img src="https://images.squarespace-cdn.com/content/v1/555b76fce4b00e0c19144cca/1575557996229-K2UP1H4H6K4ICM3H3WBG/IMG_1111-Edit.jpg?format=1500w" alt="no image" className='img2 w-100' />
        </div>
        <div className="col-md-2"></div>
      </div>

      <div className='row w-100 mt-4'>
        <div className="col-md-2"></div>
        <div className="col-md-4 m-3 img1">
          <img src="https://images.squarespace-cdn.com/content/v1/555b76fce4b00e0c19144cca/1632081265826-CJ34GWUR3J05E3TIQPRE/IMG_4402-Edit.jpg?format=1500w" alt="no image" className='img2 w-100' />
        </div>
        <div className="col-md-4 text-center p-3">
          <h3>Best family/groups photographers</h3>
          <p className='mt-3 text-dark'>Capture every precious moment and create timeless family portraits in stunning landscapes. With a tailored photography journey, we highlight your family's unique spirit and create authentic and emotive photographs.

          </p>

          <h5 className='mt-md-5'>Prices Starting at $400
          </h5>
          <Link to={'/engage'}><button className='buttons btn bg-info text-light mt-md-4'>GALLERY</button></Link>
        </div>
        <div className="col-md-2"></div>
      </div>

      <div className='row w-100 mt-4'>
        <div className="col-md-2"></div>
        <div className="col-md-4 anime m-3">
          <img src="https://images.squarespace-cdn.com/content/v1/555b76fce4b00e0c19144cca/0a02e6a1-0c9c-4e7d-89bf-e047a98f9f41/PorchLight0212203132+2.jpg?format=1000w" alt="no image" className='w-100' />
        </div>
        <div className="col-md-4 animes text-center p-3">
          <h3>CEO & Founder</h3>
          <p className='mt-3 text-start  text-dark' style={{ fontFamily: '"Cormorant", serif',fontWeight:'500',fontSize:'18px' }}>I'm Evan Whitney, CEO of Arch Wedding Studio and your destination <b>Portrait</b> and <u>Wedding Photographer servicing</u> The Atlanta area, Riviera Maya, and Worldwide. With a passion for capturing beautiful moments, I discovered my talent in the scenic landscapes of southern North Carolina. Seeking more competitive and growth-oriented opportunities, I ventured to New York City, where I established my business. Now, I am excited to announce that I am available for weddings and willing to travel to create unforgettable memories for couples worldwide.
          </p>

          <p className='text-start text-dark' style={{ fontFamily: '"Cormorant", serif',fontWeight:'500',fontSize:'18px' }}>At Arch Wedding Studio We offer a comprehensive range of services to ensure that your wedding day is flawlessly captured and beautifully preserved. In addition to photography, my packages also include videography, a second photographer to capture every angle and precious moment, high-quality prints, physical photo albums that you can hold and cherish, and meticulous wedding day timeline coordination to ensure a seamless and stress-free experience.

          </p>
          <p className='text-start text-dark' style={{ fontFamily: '"Cormorant", serif',fontWeight:'500',fontSize:'18px' }}>For me, building meaningful connections with my subjects is paramount. I believe that the more comfortable you feel with your photographer, the more natural and stunning your images will be. It's not just about taking photographs; it's about capturing the essence of your love story and preserving it for a lifetime.

          </p>

        </div>
        <div className="col-md-2"></div>
      </div>

      <div className='row w-100 mt-4'>
        <div className="col-md-2"></div>
        <div className="col-md-4 ">        </div>
        <div className="animes col-md-4 text-center p-3">
          <h3>A+P Grand Hyatt Playa Del Carmen 2024</h3>
          <p className='mt-3 text-start text-dark' style={{ fontFamily: '"Cormorant", serif',fontWeight:'500',fontSize:'18px' }}>We initially had a photographer booked for our wedding but about a month before the wedding day, he told us he wasn’t able to shoot due to a family emergency. So, I frantically started searching for wedding photographers in Playa Del Carmen and thankfully found Evan. We went over the wedding Moodboard and discussed the contract but just when we were about to sign, our initial photographer said he was available again.

          </p>

          <p className='text-start text-dark' style={{ fontFamily: '"Cormorant", serif',fontWeight:'500',fontSize:'18px' }}>
            Fast forward to the day before the wedding day, our photographer notified me that there was a big storm in Toronto and many flights had been canceled. He recommended that I start researching for another photographer. I immediately emailed Evan asking if he was available on our wedding day and somehow he was!! Evan was so responsive from the beginning and answered all my questions. He is so professional and pleasant but also great energy and fun to be around. I loved photos and his ability to capture such moving and candid moments.

          </p>

        </div>
        <div className="col-md-2"></div>
      </div>

      <div className='row w-100 mt-5'>
        <div className="col-md-2"></div>
        <div className="anime col-md-4 text-center p-3">
          <h3>R&Z Grand Palladium Cancun 2024          </h3>
          <p className='mt-3 text-start text-dark' style={{ fontFamily: '"Cormorant", serif',fontWeight:'500',fontSize:'18px' }}>
            Evan was our saving grace for our wedding day. After realizing our hotel resort's photographer had an aesthetic that was posed and over-edited, I went to Instagram to find someone who could capture the candid moments of our special day. I stumbled on Evan's page and fell in love with his nature style of photography. On the day of the wedding, he combined my photography brief with his creative vision for the day. He could sense moments that would make a picture-perfect photo and was right there to capture it. I just received our album and we're blown away with the photos. You can feel the love. Thank you, Evan!


          </p>
        </div>
        <div className="col-md-4 p-3">
        </div>
        <div className="col-md-2"></div>
      </div>

      <div className='row w-100 mt-4'>
        <div className="col-md-2"></div>
        <div className="col-md-4 ">        </div>
        <div className="animes col-md-4 text-center p-3">
          <h3>B&D Ambre & Espices Tulum 2024
          </h3>
          <p className='mt-3 text-start text-dark' style={{ fontFamily: '"Cormorant", serif',fontWeight:'500',fontSize:'18px' }}>
            STOP RIGHT NOW! Your search is over - Evan is IT! We had a gorgeous experience with Evan and his team!! He photographed our destination wedding in Tulum and my husband and I (as well as the rest of my family) agreed to keep him and his people on standby for all of our life events. He is well worth the investment!! Everyone keeps telling us that our pictures look like they should be in a magazine! AND OMG HE PHOTOGRAPHS VARYING SKIN TONES SOOOO WELL!!! This was one of my biggest concerns about choosing a photographer because of my mixed family. He made everyone look their absolute best in every lighting (sunlight, dim light, everything)!

          </p>
          <p className='text-start text-dark' style={{ fontFamily: '"Cormorant", serif',fontWeight:'500',fontSize:'18px' }}>
            He and his team were so professional and easy/lovely to work with. They got all these beautiful photos and I feel like they weren’t posed, they just really knew how to intentionally capture moments and emotion in their purest form. They gave the perfect amount of direction - so if you’re a little awkward behind the camera they wouldn’t leave you hangin, but they also balanced that with letting you exist in the moment(s) and just capturing all of it really well. Don’t even get me started on the wedding video!! I am so in love with every single part of how our wedding day was captured. On top of that, we got a physical photo album delivered to our house when it was all said and done. Evan can sometimes take a few days to respond, but in my wedding planning I found that a couple of the more seasoned vendors were so on top of everything that they took a more relaxed approach to the day so don’t be alarmed. He was also very willing to set up a call at any time if you’re more of the “talk it out over the phone” type of folk. These guys are amazing in every way a true dream team. If you’re struggling to decide, just take this as a sign that Evan is your guy. I cannot thank them enough. My heart remains so full.
          </p>

        </div>
        <div className="col-md-2"></div>
      </div>


    </>
  )
}

export default Landing
