import './App.css'
import './responsive.css'
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { CiLocationArrow1 } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { Typewriter } from 'react-simple-typewriter'
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { FaArrowRight } from "react-icons/fa6";
import { CiLink } from "react-icons/ci";
import mixitup from "mixitup";
import { SiVite, SiExpo, SiMysql } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaPhp, FaWhatsapp, FaReact, FaLinkedinIn, FaFacebookF, FaInstagram, FaLock, FaCheckSquare,FaCloudUploadAlt} from "react-icons/fa";
import { FaRegSquareCheck } from "react-icons/fa6";
import { CiGlobe, CiMobile1, CiDatabase, CiSearch, CiLocationOn } from "react-icons/ci";
import { MdArrowOutward, MdArrowForward } from "react-icons/md";
import { IoIosPhonePortrait, IoIosSettings } from "react-icons/io";
import { IoCheckmarkDoneSharp, IoCheckmarkOutline, IoPhonePortraitOutline } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import axios from "axios"
import Swal from "sweetalert2";





function App() {

  const nav = useRef()
  const { ref, inView } = useInView({ triggerOnce: true });
  const servicesRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [objet, setObjet] = useState("");
  const [message, setMessage] = useState("");

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const mixitupRef = useRef(null);
  const link1 = useRef(null);
  const link2 = useRef(null);
  const link3 = useRef(null);
  const link4 = useRef(null);
  const link5 = useRef(null);



  useEffect(() => {
    if (mixitupRef.current) {
      mixitup(mixitupRef.current, {
        animation: {
          duration: 400
        }
      });
    }
  }, []);

  /*useEffect(() => {
    console.log(name,email,tel,objet,message)

    return;
  }, [name,email,tel,objet,message]);*/








  useEffect(() => {
    const element = servicesRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting);
      },
      {
        threshold: 0.4,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);


  function sendmail(e) {
    e.preventDefault()
    //console.log(name, email, tel, objet, message)

    axios.post("https://abed-a21t.onrender.com/send-email", {
      name: name,
      email: email,
      tel: tel,
      objet: objet,
      message: message
    }).then((res) => {
      if (res.data === "Email envoyé") {
        Swal.fire({
          title: 'MESSAGE ENVOYÉ',
          text: 'Merci ! Nous avons bien reçu votre message, nous vous répondrons dans un bref délai.',
          icon: 'success',
          confirmButtonText: 'OK',
          background: "#0a0f15",
          color: "white",
          buttonsStyling: false,
          customClass: {
            confirmButton: 'my-custom-btn'
          }
        });
      } else {
        Swal.fire({
          title: 'ERREUR',
          text: "Une erreur s'est produite. Merci de réessayer !",
          icon: 'error',
          confirmButtonText: 'OK',
          customClass: {
            confirmButton: 'my-custom-btn'
          }
        });
      }
    }).catch((err) => {
      Swal.fire({
        title: 'ERREUR',
        text: "Une erreur s'est produite. Merci de réessayer !",
        icon: 'error',
        confirmButtonText: 'OK',
        customClass: {
          confirmButton: 'my-custom-btn'
        }
      });
    })
  }



  return (
    <div>

      {/* navbar */}

      <nav ref={nav}>
        <div className='container'>

          <div className='logo'><p><span>A</span>bed</p></div>

          <div className='link'>

            <ul>
              <li><a href="" onClick={(e) => { e.preventDefault(); link1.current.scrollIntoView({ behavior: "smooth" }) }}>Services</a></li>
              <li><a href="" onClick={(e) => { e.preventDefault(); link2.current.scrollIntoView({ behavior: "smooth" }) }}>A propos</a></li>
              <li><a href="" onClick={(e) => { e.preventDefault(); link3.current.scrollIntoView({ behavior: "smooth" }) }}>Portofolio</a></li>
              <li><a href="" class="disabled-link">Témoignages <FaLock /></a></li>
              <li><a href="" onClick={(e) => { e.preventDefault(); link4.current.scrollIntoView({ behavior: "smooth" }) }}>Contact</a></li>
            </ul>

          </div>

          <div className="btn-nav">
            <div className='btn-menu' onClick={toggleMenu}><HiMiniBars3BottomRight size={20} color='white' style={{ padding: 7, border: "1px solid white", borderRadius: 30, cursor: 'pointer' }} /></div>
            <div className="btn-contact"><a href="" onClick={(e) => { e.preventDefault(); link5.current.scrollIntoView({ behavior: "smooth" }) }}>Collaborons</a></div>
          </div>
        </div>

      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-header">
          <div className='logo'><p><span>A</span>bed</p></div>
          <div className="close-btn" onClick={toggleMenu}>
            <IoIosClose size={40} color='white' />
          </div>
        </div>

        <div className="mobile-menu-links">
          <ul>
            <li><a href="" onClick={(e) => { e.preventDefault(); link1.current.scrollIntoView({ behavior: "smooth" }); toggleMenu(); }}>Services</a></li>
            <li><a href="" onClick={(e) => { e.preventDefault(); link2.current.scrollIntoView({ behavior: "smooth" }); toggleMenu(); }}>A propos</a></li>
            <li><a href="" onClick={(e) => { e.preventDefault(); link3.current.scrollIntoView({ behavior: "smooth" }); toggleMenu(); }}>Portofolio</a></li>
            <li><a href="" class="disabled-link">Témoignages <FaLock /></a></li>
            <li><a href="" onClick={(e) => { e.preventDefault(); link4.current.scrollIntoView({ behavior: "smooth" }); toggleMenu(); }}>Contact</a></li>
          </ul>

          <div className="mobile-menu-btn">
            <a href="" onClick={(e) => { e.preventDefault(); link5.current.scrollIntoView({ behavior: "smooth" }); toggleMenu(); }}>Collaborons</a>
          </div>

        </div>
      </div>

      {/* Overlay */}
      <div className={`menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>

      {/* herosection */}

      <div className="herosection" ref={servicesRef}>

        <div className='container'>

          <div className='container_hero-section'>

            <h1>Développeur web<br />  & mobile</h1>

            <p>
              Je livre :{' '}
              <span>
                <Typewriter
                  words={['Des solutions innovantes qui font la différence', 'Des produits de qualité, pensés pour durer', 'Des sites web modernes et performants', 'Des applications mobiles intuitives et engageantes', 'Des solutions sur mesure adaptées à vos besoins']}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </p>


            <div className="cta">
              <a href="" onClick={(e) => { e.preventDefault(); link5.current.scrollIntoView({ behavior: "smooth" }) }} >Parlons de vos idées</a>
              <CiLocationArrow1 className='icon' />
            </div>

            <div className="reseaux">
              <a href="">Follow Us</a>
              <a href="">Behance</a>
              <a href="">Twitter</a>
            </div>

            <div className='nbr-projets' ref={ref}>
              <div onClick={(e) => { e.preventDefault(); link3.current.scrollIntoView({ behavior: "smooth" }) }}><span className='nbr'>{inView && <CountUp end={1} duration={2} />} <span className='plus'>+</span></span><p>an d’expérience</p></div>
              <div onClick={(e) => { e.preventDefault(); link3.current.scrollIntoView({ behavior: "smooth" }) }}><span className='nbr'>{inView && <CountUp end={4} duration={2} />} <span className='plus'>+</span></span><p>projets</p></div>
            </div>


          </div>

        </div>


      </div>


      <div className="services" ref={link1}>
        <div className="container">
          <h1 className='title'>Services</h1>
          <div className="cards">

            <div className="card">
              <CiGlobe className='i' />
              <h4>Développement Web Front-End</h4>
              <p>Je conçois des sites web modernes, fluides et entièrement responsives en utilisant React.js. Je transforme les maquettes (Figma, XD) en expériences utilisateur réelles, performantes et optimisées.</p>
            </div>

            <div className="card">
              <CiDatabase className='i' />
              <h4>Développement Web Back-End</h4>
              <p>Je développe des solutions backend performantes et sécurisées avec Node.js, Express et MySQL. J’assure l’authentification, la gestion des données (CRUD) et une architecture fiable et optimisée.</p>
            </div>

            <div className="card">
              <CiMobile1 className='i' />
              <h4>Développement Mobile (Android & iOS)</h4>
              <p>Je crée des applications mobiles performantes et intuitives avec React Native et Expo. Navigation fluide, optimisation des performances et expérience utilisateur optimale sur toutes les plateformes.</p>
            </div>

            <div className="card">
              <CiSearch className='i' />
              <h4>Optimisation SEO</h4>
              <p>J’améliore la visibilité des sites web sur Google grâce à des stratégies SEO efficaces : optimisation du contenu, structure technique et performances pour augmenter le trafic organique.</p>
            </div>

            <div className="card">
              <IoIosSettings className='i' />
              <h4>Intégration d’API & Services Tiers</h4>
              <p>J’intègre des APIs et services externes (paiement, authentification, notifications, géolocalisation…) dans vos applications web et mobiles en garantissant une communication sécurisée et optimisée entre front-end et back-end.</p>
            </div>

            <div className="card">
              <FaCloudUploadAlt className='i' />
              <h4>Déploiement & Mise en Production</h4>
              <p>Je mets en ligne vos applications web et mobiles en assurant la configuration serveur, l’hébergement et la sécurisation de l’environnement de production pour une solution stable et performante.</p>
            </div>

          </div>

        </div>
      </div>


      <div className="about" ref={link2}>
        <div className="container">
          <h1 className='title'>Qui suis-je ?</h1>
          <div className="presentation">
            <img src="images/abed.png" alt="" />
            <div className='txt'>
              <p>
                Je suis Abed-Négo Kodjaou, <span>développeur web et mobile</span> spécialisé en <span>React JS</span> et <span>React Native</span>.
                Passionné par la création d’<span>applications modernes, performantes et centrées sur l’utilisateur</span>,
                j’accompagne <span>entreprises et entrepreneurs</span> dans la transformation de leurs
                <span> idées en solutions digitales concrètes</span>.<br />

                Mon objectif principal est d’aider les <span>entreprises à renforcer leur présence en ligne</span> en créant des
                <span> solutions web et mobiles performantes</span> et adaptées à leurs besoins.
                Je privilégie <span>l’intégration fidèle de maquettes existantes</span> pour transformer des designs en
                <span> expériences utilisateur réelles</span>, tout en garantissant un
                <span> code propre, structuré et optimisé</span>.
              </p>
              <div className="skills">
                <div className="skill">
                  <FaRegSquareCheck className='i' /><p>1 +
                    an d’expérience</p>
                </div>
                <div className="skill">
                  <FaRegSquareCheck className='i' /><p>4 +
                    projets</p>
                </div>
              </div>
              <div className="btn-contact"><a href="">Télécharger mon cv</a></div>
            </div>
          </div>

          <div className="resume">

            {/* Section Compétences */}
            <div className="section">
              <div className="section-line">
                <div className="section-marker">
                  <div className="section-point"></div>
                  <h3>Skills</h3>
                </div>
              </div>

              <div className="section-content">
                <div className="skills-category">
                  <h4>Développement Web</h4>
                  <div className="skills-list">
                    <div className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">React Js</span>
                        <FaReact className="skill-icon" />
                      </div>
                      <div className="progress-bar">
                        <div className="progress-fill" style={{ width: '75%' }}></div>
                      </div>
                      <span className="skill-percentage">75%</span>
                    </div>

                    <div className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">Node Js</span>
                        <FaNodeJs className="skill-icon" />
                      </div>
                      <div className="progress-bar">
                        <div className="progress-fill" style={{ width: '75%' }}></div>
                      </div>
                      <span className="skill-percentage">75%</span>
                    </div>

                    <div className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">PHP</span>
                        <FaPhp className="skill-icon" />
                      </div>
                      <div className="progress-bar">
                        <div className="progress-fill" style={{ width: '80%' }}></div>
                      </div>
                      <span className="skill-percentage">80%</span>
                    </div>

                    <div className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">MySQL</span>
                        <SiMysql className="skill-icon" />
                      </div>
                      <div className="progress-bar">
                        <div className="progress-fill" style={{ width: '80%' }}></div>
                      </div>
                      <span className="skill-percentage">80%</span>
                    </div>
                  </div>
                </div>

                <div className="vertical-divider"></div>

                <div className="skills-category">
                  <h4>Développement Mobile</h4>
                  <div className="skills-list">
                    <div className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">React Native</span>
                        <FaReact className="skill-icon" />
                      </div>
                      <div className="progress-bar">
                        <div className="progress-fill" style={{ width: '75%' }}></div>
                      </div>
                      <span className="skill-percentage">75%</span>
                    </div>

                    <div className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">Expo</span>
                        <SiExpo className="skill-icon" />
                      </div>
                      <div className="progress-bar">
                        <div className="progress-fill" style={{ width: '75%' }}></div>
                      </div>
                      <span className="skill-percentage">75%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="portfolio" ref={link3}>
        <div className="container">
          <h1 className='title'>Mes réalisations</h1>

          <div className="presentation">
            <div className="container-btn-filters">
              <div className="filters">
                <button data-filter="all">Tout</button>
                <button data-filter=".web">Web</button>
                <button data-filter=".mobile">Mobile</button>
              </div>
            </div>
          </div>

          <div className="container-projects" ref={mixitupRef}>
            <div className="projet mix web">
              <div className="header"><div className="browser browser1"></div><div className="browser browser2"></div><div className="browser browser3"></div></div>
              <img src="/images/icc.png" alt="" />
              <div className="projet-name">
                <h2>ICC OCITANIE</h2>
                <a target='_blank' href="https://iccoccitanie.com/"><MdArrowForward className='icon' /></a>
              </div>
              <div className="tech">
                <div><p>HTML</p></div>
                <div><p>CSS</p></div>
                <div><p>JS</p></div>
              </div>
            </div>
            <div className="projet mix web">
              <div className="header"><div className="browser browser1"></div><div className="browser browser2"></div><div className="browser browser3"></div></div>
              <img src="/images/yadah.png" alt="" />
              <div className="projet-name">
                <h2>Yadah Records</h2>
                <a target='_blank' href="https://forestgreen-dog-894166.hostingersite.com"><MdArrowForward className='icon' /></a>
              </div>
              <div className="tech">
                <div><p>HTML</p></div>
                <div><p>CSS</p></div>
                <div><p>JS</p></div>
              </div>
            </div>
            <div className="projet mix web">
              <div className="header"><div className="browser browser1"></div><div className="browser browser2"></div><div className="browser browser3"></div></div>
              <img src="/images/onepiece.png" alt="" />
              <div className="projet-name">
                <h2>One Piece</h2>
                <a target='_blank' href="https://onepieceinvest.com"><MdArrowForward className='icon' /></a>
              </div>
              <div className="tech">
                <div><p>HTML</p></div>
                <div><p>CSS</p></div>
                <div><p>JS</p></div>
              </div>
            </div>
            <div className="projet mix web">
              <div className="header"><div className="browser browser1"></div><div className="browser browser2"></div><div className="browser browser3"></div></div>
              <img src="/images/ufem.png" alt="" />
              <div className="projet-name">
                <h2>Ufem</h2>
                <a target='_blank' href="http://ufem-association.com"><MdArrowForward className='icon' /></a>
              </div>
              <div className="tech">
                <div><p>HTML</p></div>
                <div><p>CSS</p></div>
                <div><p>JS</p></div>
              </div>
            </div>
            <div className="projet mix web">
              <div className="header"><div className="browser browser1"></div><div className="browser browser2"></div><div className="browser browser3"></div></div>
              <img src="/images/kafi.png" alt="" />
              <div className="projet-name">
                <h2>Kafi Express</h2>
                <a target='_blank' href="https://violet-ibex-368210.hostingersite.com"><MdArrowForward className='icon' /></a>
              </div>
              <div className="tech">
                <div><p>HTML</p></div>
                <div><p>CSS</p></div>
                <div><p>JS</p></div>
              </div>
            </div>
          </div>

        </div>
      </div>


      <div className="services vedette">
        <div className="container">
          <h1 className='title'>Services en vedette</h1>
          <div className="cards services-vedette">

            <div className="card">
              <CiGlobe className='i' />
              <h4>Intégration de maquettes Pixel-Perfect 🔥</h4>
              <p>Je transforme vos maquettes Figma en interfaces web fidèles au design initial.
                Chaque détail est respecté : typographie, couleurs , animation et responsive design,
                pour garantir une expérience utilisateur fluide, moderne et performante.</p>
            </div>





          </div>

        </div>
      </div>

      <div className="cta-bottom" ref={link5}>
        <h2>Votre projet mérite d'exister</h2>
        <p>Ne laissez pas votre idée dans un tiroir.<br className='br-cta' /> Ensemble, donnons-lui vie.</p>
        <a href="https://wa.me/2290168364255">Donner vie au projet</a>
      </div>

      <div className="contact">
        <div className="container">
          <h1 className='title'>Contactez-moi</h1>
          <form action="" onSubmit={sendmail}>
            <div className="input">
              <label htmlFor="">Nom & Prénoms</label>
              <input type="text" placeholder='Entrer votre nom et prénoms' onChange={(e) => { setName(e.target.value) }} required />
            </div>
            <div className="input">
              <label htmlFor="">Email</label>
              <input type="email" placeholder='Entrer votre addresse mail' onChange={(e) => { setEmail(e.target.value) }} required />
            </div>
            <div className="input">
              <label htmlFor="">Téléphone</label>
              <input type="tel" placeholder='Entrer votre numéro de téléphone' onChange={(e) => { setTel(e.target.value) }} required />
            </div>
            <div className="input">
              <label htmlFor="">Objet</label>
              <input type="text" placeholder='Objet de votre message' onChange={(e) => { setObjet(e.target.value) }} required />
            </div>
            <div className="input-txt">
              <label htmlFor="">Message</label>
              <textarea name="" id="" placeholder='Ecrivez votre message ici...' onChange={(e) => { setMessage(e.target.value) }} required></textarea>
            </div>
            <button type='submit'>Envoyer</button>
          </form>
        </div>
      </div>


      <footer  ref={link4}>
        <div className="container">
          <div className="content">
            <div className="content1">
              <h1>Abed</h1>
              <p>
                <span>Ma vision</span> est de transformer vos idées en solutions concrètes. <br />
                Sérieux, rigoureux et orienté résultat, je mets mes compétences au service de vos projets digitaux.</p>
            </div>

            <div className="content2">
              <h3>Liens rapides</h3>
              <a href="" onClick={(e) => { e.preventDefault(); link1.current.scrollIntoView({ behavior: "smooth" }) }}>Services</a>
              <a href="" onClick={(e) => { e.preventDefault(); link2.current.scrollIntoView({ behavior: "smooth" }) }}>A propos</a>
              <a href="" onClick={(e) => { e.preventDefault(); link3.current.scrollIntoView({ behavior: "smooth" }) }}>Portofolio</a>
              <a href="" class="disabled-link">Témoignages <FaLock /></a>
              <a href="" onClick={(e) => { e.preventDefault(); link4.current.scrollIntoView({ behavior: "smooth" }) }}>Contact</a>
            </div>

            <div className="content2">
              <h3>Contact</h3>
              <a href="mailto:abnegko@gmail.com"><BiLogoGmail />abnegko@gmail.com</a>
              <a href="tel:+2290168364255"><IoPhonePortraitOutline />+2290168364255</a>
              <a href="tel:+2290168364255"><CiLocationOn />Bénin Calavi-Acconville</a>
            </div>

            <div className="content3">
              <h3>Suivez-nous</h3>
              <div className="reseaux">
                <a href="mailto:abnegko@gmail.com"><FaLinkedinIn/></a>
                <a href="tel:+2290168364255"><FaFacebookF/></a>
                <a href="tel:+2290168364255"><FaInstagram/></a>
              </div>
            </div>
          </div>
          <p className='copyright'>©2026 Abed, tous droits réservés.</p>
        </div>
      </footer>



      <a href="https://wa.me/2290168364255" target='_blank'><div className={!isActive ? "cta-contact active" : "cta-contact"}><FaWhatsapp className='i' /></div></a>
    </div>
  )
}

export default App
