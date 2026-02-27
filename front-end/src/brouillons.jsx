/*  Services 

.services {
  padding-top: 100px;
  padding-bottom: 100px;
}

.services .container {
  width: 85%;
  margin: auto;
}

.services .container h3 {
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size: 30px;
  line-height: 30px;
  margin: 0;
  padding-bottom: 10px;
  position: relative;
  text-transform: uppercase;
}

.services .container h3::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 50px;
  background-color: #F9CA22;
}

.services .container .services-content {
  padding-top: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.services .container .service-img {
  width: 35%;
}

.services .container .service-img img {
  width: 100%;
  height: 100%;
  border-radius: 12px;
}

.services .container .service {
  width: 60%;
}

.services .container .service-description {
  display: flex;
  cursor: pointer;
}


.services .container .service .title {
  border-bottom: 1px solid rgb(255, 255, 255, 0.5);
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 20px;
  padding-top: 30px;
}

.services .container .service .title h4 {
  color: #F9CA22;
  font-family: 'Montserrat', sans-serif;
  font-size: 30px;
  line-height: 25px;
  margin: 0;
  font-weight: 500;
}

.services .container .service .title .content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.services .container .service .title .content p {
  max-width: 80%;
  color: white;
  font-family: "Open Sans", sans-serif;
  font-size: 15px;
  line-height: 25px;
  margin: 0;
  opacity: 0.7;
}

.services .container .service .title .content .icon {
  color: white;
  font-size: 30px;
  border: 1px solid white;
  padding: 20px;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.7;
  transition: all 0.2s ease-in;
}

.services .container .service-description:hover .content .icon {
  background-color: #F9CA22;
  border-color: #F9CA22;
  opacity: 1;
  transform: rotate(-45deg);
}

.services .container .service-description:hover .content p {
  opacity: 1;
}



.portfolio {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-top: 100px;
}

.portfolio .projet {
  width: 50%;
  margin-bottom: 100px;
  cursor: pointer;
  position: relative;
}

.portfolio .projet:hover a {
  display: flex;
}



.portfolio .projet img {
  width: 100%;
  height: 100%;
}

.portfolio .projet a {
  position: absolute;
  top: 50%;
  left: 40%;
  padding: 25px;
  background-color: #F9CA22;
  border-radius: 50%;
  display: flex;
  display: none;
}

.portfolio .projet a .link {
  font-size: 20px;
}

.portfolio .projet a::after {
  content: '';
  height: 0px;
}

.filters {
  display: flex;
  background-color: rgb(0, 0, 0,0.3);
  padding: 10px;
  border-radius: 12px;
}

.filters button {
  background: transparent;
  color: white;
  border: none;
  font-size: 16px;
  cursor: pointer;
  padding: 10px;
  position: relative;
  width: 100px;
}
.filters button.mixitup-control-active {
  background: #F9CA22;
  color: white;
  border-radius: 12px;
}




.services .stacks{
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 100px;
  gap: 50px;
}
.services .stacks .stack{
  width: 25%;
  height: 200px;
  background-color: rgb(42, 15, 15,0.2);
  border-radius: 12px;
  transform: all 0.5s ease-in;
  cursor: pointer;
}
.services .stacks .stack .icon-stacks{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  height: 100%;
}
.i-stack{
  color: white;
  font-size: 40px;
  opacity: 0.8;
}
.services .stacks p{
   font-size: 25px;
   color: white;
   font-weight: 500;
}
.services .stacks .stack:hover {
  box-shadow: 0 0 20px rgba(255, 69, 0, 0.8);
}
.services .stacks .stack:hover .i-stack{
  filter: drop-shadow(0 4px 20px #F9CA22);
}

*/

















{/* services 

      <div className="services">
        <div className="container">
          <h3>Services</h3>
          <div className="services-content">
            <div className="service-img">
              <img src="images/web.png" alt="" />
            </div>
            <div className="service">
              <div className="service-description">
                <div className="title">
                  <h4>Développement Web Front-End</h4>
                  <div className="content">
                    <p>Je conçois des interfaces web modernes, fluides et entièrement responsives en utilisant React.js.
                      Je transforme les maquettes (Figma, XD) en expériences utilisateur réelles, performantes et optimisées.</p>
                    <div className="img"></div>
                    <FaArrowRight className='icon' />
                  </div>
                </div>
              </div>

              <div className="service-description">
                <div className="title">
                  <h4>Développement Web Back-End</h4>
                  <div className="content">
                    <p>Je développe des APIs robustes et sécurisées avec Node.js, Express et des bases de données comme MySQL.
                      Mise en place de l’authentification, gestion des données (CRUD), optimisation des performances et structuration d’architectures fiables pour vos projets web.</p>
                    <div className="img"></div>
                    <FaArrowRight className='icon' />
                  </div>
                </div>
              </div>

              <div className="service-description">
                <div className="title">
                  <h4>Développement Mobile (Android & iOS)</h4>
                  <div className="content">
                    <p>Je crée des applications mobiles performantes et intuitives avec React Native et Expo.
                      Je réalise des apps multi-plateformes (Android & iOS), avec intégration d’APIs, gestion de la navigation, stockage local, optimisation des performances et déploiement sur différentes plateformes.</p>
                    <div className="img"></div>
                    <FaArrowRight className='icon' />
                  </div>
                </div>
              </div>

              <div className="service-description">
                <div className="title" style={{ border: "none" }}>
                  <h4>Optimisation SEO</h4>
                  <div className="content">
                    <p>J'améliore la visibilité des sites web sur Google grâce à des stratégies SEO efficaces :
                      optimisation du contenu, structure des pages, balises HTML, vitesse de chargement, indexation et bonnes pratiques techniques pour augmenter le trafic organique.</p>
                    <div className="img"></div>
                    <FaArrowRight className='icon' />
                  </div>
                </div>
              </div>




            </div>




          </div>
        </div>
      </div>

      A propos

      <div className="services">
        <div className="container">
          <h3>Qui suis-je ?</h3>
          <img src="images/abed.png" alt=""  />
        </div>
      </div>

      <div className="services">
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h3>Portfolio</h3>
            <div className="filters">
              <button data-filter="all">Tout</button>
              <button data-filter=".web">Web</button>
              <button data-filter=".mobile">Mobile</button>
            </div>
          </div>
          <div className="portfolio mix-container" ref={mixitupRef}>
            <div className="projet mix web">
              <img src="images/kafi.png" alt="" />
              <a href="https://violet-ibex-368210.hostingersite.com/" target='_blank'><CiLink className='link' /></a>
            </div>
            <div className="projet mix web">
              <img src="images/ufem.png" alt="" />
              <a href="http://ufem-association.com/" target='_blank'><CiLink className='link' /></a>
            </div>
            <div className="projet mix web">
              <img src="images/yadah.png" alt="" />
              <a href="https://forestgreen-dog-894166.hostingersite.com/" target='_blank'><CiLink className='link' /></a>
            </div>


          </div>
        </div>
      </div>

      <div className="services">
        <div className="container">
          <div>
            <h3>Sack technique</h3>
          </div>
          <div className="stacks">

            <div className="stack">
              <div className="icon-stacks">
                <SiVite className='i-stack' />
                <p>+</p>
                <RiReactjsFill className='i-stack' />
              </div>
            </div>

            <div className="stack">
              <div className="icon-stacks">
                <SiExpo className='i-stack' />
                <p>+</p>
                <RiReactjsFill className='i-stack' />
              </div>
            </div>

            <div className="stack">
              <div className="icon-stacks">
                <FaNodeJs className='i-stack' />
                <p>+</p>
                <SiMysql className='i-stack' size={50} />
              </div>
            </div>

            <div className="stack">
              <div className="icon-stacks">
                <FaHtml5 className='i-stack' />
                <p>+</p>
                <FaCss3Alt className='i-stack' />
                <p>+</p>
                <FaJs className='i-stack' />
              </div>
            </div>


            <div className="stack">
              <div className="icon-stacks">
                <FaPhp className='i-stack' size={50} />
                <p>+</p>
                <SiMysql className='i-stack' size={50} />
              </div>
            </div>

            <div className="stack">
              <div className="icon-stacks">
                <p>...</p>
              </div>
            </div>


          </div>
        </div>
      </div>*/}
