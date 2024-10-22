import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function Wedding() {
    return (
        <>
            <div className="row w-100 mt-4">
                <div className="col-md-2"></div>
                <div className="col-md-8 ps-3 text-center">
                    <h4 className='text-dark mb-4 text-dark'>Award-Winning Riviera Maya Wedding Photographer | Destination Wedding Artist</h4>
                    <p className='text-dark' style={{ textAlign: 'justify' }}>Capture your special day with Evan, an award-winning Riviera Maya wedding photographer. With a rich background in destination portraits and wedding photography, Evan brings a unique blend of artistry and experience. Recognized by Couples Choice Awards 2024 and published by Rolex, Evan’s work is celebrated for its authenticity and creativity. Book your Riviera Maya wedding photographer today!

                    </p>
                </div>
                <div className="col-md-2"></div>
            </div>

            <div className='row w-100 mt-4'>
                <div className="col-md-2"></div>
                <div className="col-md-4 text-center ps-3 ">
                    <h5 className='text-dark'>M+C Grand Palladium Cancun 2024</h5>
                    <p className='mt-3 text-dark' style={{ textAlign: 'justify' }}>
                        “Evan and his team are absolutely incredible. We were blown away by the beautiful photos and videos that they were able to capture. These are memories that will last us a life time and we are so happy that we chose Arch wedding studios to capture our day. Evan and his team were so great to work with from the get go and really made everyone feel so comfortable. I highly recommend booking them for your big day!”

                    </p>
                </div>
                <div className="col-md-4 m-2 img1">
                    <img src="https://images.squarespace-cdn.com/content/v1/555b76fce4b00e0c19144cca/74027cc4-3786-4c16-b7cc-5fec5f548ca5/MaddyCody-446.jpg?format=1000w" alt="no image" className='img2 w-100' />
                </div>
                <div className="col-md-2"></div>
            </div>

            <div className='row w-100 mt-4'>
                <div className="col-md-2"></div>
                <div className="col-md-4 m-2 img1">
                    <img src="https://images.squarespace-cdn.com/content/v1/555b76fce4b00e0c19144cca/1696619981440-33ZZ0AA2W6QX2Y7A2YX5/PaulaArthur-257.jpg?format=750w" alt="no image" className='img2 w-100' />
                </div>
                <div className="col-md-4 text-center ps-3 animes">
                    <h5 className='text-dark'>A+P Grand Hyatt Playa Del Carmen 2024
                    </h5>
                    <p className='mt-3 text-dark' style={{ textAlign: 'justify' }}>
                        “We initially had a photographer booked for our wedding but about a month before the wedding day, he told us he wasn’t able to shoot due to a family emergency. So, I frantically started searching for wedding photographers in Playa Del Carmen and thanfully found Evan. We went over the wedding Moodboard and discussed fhe contract but just when we were about to sign, our initial photographer said he was available again.
                        Fast forward to the day before the wedding day, our photographer notified me that there was a big storm in Toronto and many flights had been canceled. He recommended that I started researching for another photographer. I immediately emailed Evan asking if he was available on our wedding day and somehow he was!! Evan was so responsive from the beginning and answered all my questions. He is SO professional and pleasant but also great energy and fun to be around. I loved photos and his ability to capture such moving and candid moments.”


                    </p>
                </div>

                <div className="col-md-2"></div>
            </div>

           <div className="row w-100 mt-5">
            <div className="col-md-1"></div>
            <div className=' col-md-10 '>
                <ImageList variant="masonry" cols={3} gap={8}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>

             
            </div>
            <div className="col-md-1"></div>
           </div>
        </>
    )
}

const itemData = [
    {
      img: 'https://images.squarespace-cdn.com/content/v1/555b76fce4b00e0c19144cca/418a646e-a726-44d5-855b-9024467138b5/DreamsNatura_Cancun_Wedding_Photographer-57-4bf4dc3748e6e11942172b85556ce146.jpg?format=750w',
      title: 'Bed',
    },
    {
      img: 'https://images.squarespace-cdn.com/content/v1/555b76fce4b00e0c19144cca/b31131c0-24cd-41bd-8460-66bd38cdb30a/DreamsNatura_Cancun_Wedding_Photographer-53-c645404dc65552cb7409cebc9d1cc7f0.jpg?format=750w',
      title: 'Kitchen',
    },
    {
      img: 'https://images.squarespace-cdn.com/content/v1/555b76fce4b00e0c19144cca/3dfbac45-5dfe-4ef9-9747-2ca89e74605f/DreamsNatura_Cancun_Wedding_Photographer-49-dbbb792b20ca33b8a0d4bc43868d9087.jpg?format=750w',
      title: 'Sink',
    },
    {
      img: 'https://images.squarespace-cdn.com/content/v1/555b76fce4b00e0c19144cca/b16b6237-b175-43c2-bdc6-d4eb3c632416/Villa_La_Joya_Wedding_Photographer_Playa_Del_Carmen1.jpg?format=750w',
      title: 'Books',
    },
    {
      img: 'https://images.squarespace-cdn.com/content/v1/555b76fce4b00e0c19144cca/bdca7a26-512d-4fe7-bbdc-cbac1e438cc3/Villa_La_Joya_Wedding_Photographer_Playa_Del_Carmen11.jpg?format=750w',
      title: 'Chairs',
    },
    {
      img: 'https://images.squarespace-cdn.com/content/v1/555b76fce4b00e0c19144cca/c7629629-899d-40af-81a4-0a14c66d84f8/Villa_La_Joya_Wedding_Photographer_Playa_Del_Carmen5.jpg?format=750w',
      title: 'Candle',
    },
    {
      img: 'https://images.squarespace-cdn.com/content/v1/555b76fce4b00e0c19144cca/9823ccb4-583b-4c40-95ae-77108a0ab1f1/Villa_La_Joya_Wedding_Photographer_Playa_Del_Carmen22.jpg?format=750w',
      title: 'Laptop',
    },
    {
      img: 'https://images.squarespace-cdn.com/content/v1/555b76fce4b00e0c19144cca/0930d74a-483f-4f08-bb34-21123e180b5b/Nigerian-Wedding-Dreams-Natura-Cancun-Photographer2.jpg?format=750w',
      title: 'Doors',
    },
    {
      img: 'https://images.squarespace-cdn.com/content/v1/555b76fce4b00e0c19144cca/69d94b40-3e15-4c91-bb89-c2cef48ac917/Villa_La_Joya_Wedding_Photographer_Playa_Del_carmen26-6239f5ff249ea05fc4bd206fcc3a86c5.jpg?format=750w',
      title: 'Coffee',
    },
    {
      img: 'https://images.squarespace-cdn.com/content/v1/555b76fce4b00e0c19144cca/129bcaed-4215-43f0-9d16-342d28ca230b/Grand_Palladium_Cancun_Beach_Wedding_Photographer37-6ff7a491a3c7dcdf27e1b40f72470006.jpg?format=750w',
      title: 'Storage',
    },
    {
      img: 'https://images.squarespace-cdn.com/content/v1/555b76fce4b00e0c19144cca/9652bd91-6cd0-493c-8d9c-622b7bb56bc1/%23Grand_Hyatt-%23Playa_del_Carmen-%23wedding_photographer-%23beach26-14e554609eeaa0abec1667381e648693.jpg?format=750w',
      title: 'Coffee table',
    },
    {
      img: 'https://images.squarespace-cdn.com/content/v1/555b76fce4b00e0c19144cca/f6c3c219-cd0b-4b70-a9e2-aec2e015c4e4/%23Grand_Palladium_Cancun_Beach_Wedding_Photographer5-f374c89c82b0e3979becba0429e7b517.jpg?format=750w',
      title: 'Blinds',
    }
  ];

export default Wedding
