//rfce
import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div>
      {/* Landing part */}
      <section style={{ width: '100%', height: '100vh', backgroundImage: "url('https://www.cpasitesolutions.com/cpa-websites/wp-content/uploads/2024/06/local-seo-for-bookeepers-1.png')", backgroundAttachment: 'fixed', backgroundPosition: 'top', backgroundSize: 'cover' }} className='d-flex justify-content-center align-items-center'>
        <div className='text-center shadow border py-5 rounded mt-5 px-5' style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}>
          <h3>Designed to get hired. <br />
            Your skills,your story, <br /> your next job - all in one.</h3>
          <Link to={'/resume'} className='btn text-white mt-3' style={{ backgroundColor: 'orange' }}>Make Your Resume</Link>
        </div>

      </section>
      {/* tools */}
      <section>
        <h3 className='text-center mt-4 fw-bold'>Tools</h3>
        <div className="container row align-items-center mx-4">
          <div className="col-md-6">
            <div>
              <h4>Resume</h4>
              <p>Create unlimited new resumes and easily edit them afterwrds.</p>
            </div>
            <div>
              <h4>Cover Letters</h4>
              <p>Easily write professional cover letter.</p>
            </div>
            <div>
              <h4>Jobs
              </h4>
              <p>Automatically receive new and relevant job postings.
              </p>
            </div>
            <div>
              <h4>Applications</h4>
              <p>Effortlessly manage and track your job applications in an organized manner.</p>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <img className='img-fluid' src="https://cdn-images.zety.com/images/zety/landings/builder/resume-builder-jumbotron-image@3x.png" alt="No image" />
          </div>





        </div>
      </section>
      {/* image */}
      <section style={{ height: '500px', width: '100%', backgroundImage: "url('https://talerang.com/wp-content/uploads/2018/06/Ace-your-meetings.jpg')", backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>

      </section>
      {/* testimony */}
      <section className="my-5 ms-5">
        <h3 className='fw-bold text-center mb-5'>Testimony</h3>
        <div className="row container">
          <div className="col-md-5">
            <h4 className='my-5'>Trusted by professionals worldwide.
            </h4>
            <p className='fs-5'>At LiveCareer, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.
            </p><br />
            <p className='fs-5'>In fact, users who used LiveCareer reported getting hired an average of 48 days faster.
            </p><br />
            <p className='fs-5'>Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out.</p>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-3">
                <img width={'100%'} src="https://i.pinimg.com/736x/8d/95/03/8d9503a77e4c21ebf0ced6c252819a0e.jpg" alt="person" />
              </div>
              <div className="col-3">
                <img width={'100%'} src="https://i.pinimg.com/736x/eb/76/a4/eb76a46ab920d056b02d203ca95e9a22.jpg" alt="person" />
              </div>
              <div className="col-3">
                <img width={'100%'} src="https://i.pinimg.com/736x/99/4a/6b/994a6baaba4349d93f606f8784fe235e.jpg" alt="person" />
              </div>
              <div className="col-3">
                <img width={'100%'} src="https://i.pinimg.com/736x/5e/87/00/5e8700424201eb225c9a7dea4c3ec7f4.jpg" alt="person" />
              </div>
            </div>
            <div className="row my-3">
              <div className="col-3">
                <img width={'100%'} src="https://i.pinimg.com/736x/5c/7f/77/5c7f7762a10d8d7f2d64249e6876c558.jpg" alt="person" />
              </div>
              <div className="col-3">
                <img width={'100%'} src="https://i.pinimg.com/736x/92/5d/a5/925da54f7cb05d1087230a70488c968f.jpg" alt="person" />
              </div>
              <div className="col-3">
                <img width={'100%'} src="https://i.pinimg.com/1200x/63/f3/a0/63f3a0fe0c318b623d9a431e2817b515.jpg" alt="person" />
              </div>
              <div className="col-3">
                <img width={'100%'} src="https://i.pinimg.com/736x/7c/64/af/7c64afa557cf85d000cfd2d97513c30e.jpg" alt="person" />
              </div>
            </div>
            <div className="row my-3">
              <div className="col-3">
                <img width={'100%'} src="https://i.pinimg.com/736x/f3/e2/73/f3e2736edfba1c349d4d25ac6cfbeebc.jpg" alt="person" />
              </div>
              <div className="col-3">
                <img width={'100%'} src="https://i.pinimg.com/1200x/65/de/d0/65ded07a4195769b10bb90567fd9c455.jpg" alt="person" />
              </div>
              <div className="col-3">
                <img width={'100%'} src="https://i.pinimg.com/736x/c1/3a/5d/c13a5dc4a416366048260a8e78100757.jpg" alt="person" />
              </div>
              <div className="col-3">
                <img width={'100%'} src="https://i.pinimg.com/736x/5e/80/14/5e8014c11374d2134b87b12879e7017e.jpg" alt="person" />
              </div>
            </div>
            <div className="row my-3">
              <div className="col-3">
                <img width={'100%'} src="https://i.pinimg.com/736x/4d/b9/22/4db922c80a4c52ff795d00116a7d2743.jpg" alt="person" />
              </div>
              <div className="col-3">
                <img width={'100%'} src="https://i.pinimg.com/736x/fb/b4/82/fbb482e15f681496778b990725172ab2.jpg" alt="person" />
              </div>
              <div className="col-3">
                <img width={'100%'} src="https://i.pinimg.com/736x/16/a1/56/16a156a369600f8cf3ab733243d214d5.jpg" alt="person" />
              </div>
              <div className="col-3">
                <img width={'100%'} src="https://i.pinimg.com/736x/a9/27/30/a927301bf41004840fb78c14a81ba836.jpg" alt="person" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage