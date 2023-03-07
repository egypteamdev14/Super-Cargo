/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
// import Image from "next/image";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Inter } from "@next/font/google";
import SimpleSlider from "@/components/Slider";
import { Container } from "react-bootstrap";

import { BiWorld } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { GiShipBow } from "react-icons/gi";
import { RiCustomerService2Fill } from "react-icons/ri";

import Button from "@/components/Button";
import Card from "@/components/Card";
import CardInfo from "@/components/CardInfo";
import PriceDetails from "@/components/PriceDetails";
// import SliderInfo from "@/components/SliderInfo";
import SliderPerson from "@/components/SliderPersons";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <>
      <Head>
        <title>Super Cargo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="home" >
        {/* slider */}
        <SimpleSlider />
        <div className="container cards-flex">
          <CardInfo image="../assets/Plane.jpg" title="Air Freight" className />
          <CardInfo
            image="../assets/small-car.jpg"
            title="Ocean Freight"
            className
          />
          <CardInfo
            image="../assets/train.jpg"
            title="Road Freight"
            className
          />
          <CardInfo
            image="../assets/carlarge.jpg"
            title="Train Freight"
            className
          />
          <CardInfo image="../assets/largeship.jpg" title="read" className />
          <CardInfo
            image="../assets/clearnes.jpg"
            title="Custom Clearance"
            className
          />
        </div>
        <h4
          style={{ textAlign: "center", marginTop: "20px", color: "#51CFED " }}
        >
         Pricing Plane
        </h4>

        <h1 style={{ textAlign: "center", marginTop: "20px" }}>
          Pefrect Pricing Plane
        </h1>
        <div className="container cards-flex">
          <PriceDetails title="Basic Plane" price="$ 49.00" />
          <PriceDetails title="Basic Plane" price="$ 49.00" />
          <PriceDetails title="Basic Plane" price="$ 49.00" />
        </div>
      
        <h4
          style={{ textAlign: "center", marginTop: "20px", color: "#51CFED " }}
        >
          Testimonial
        </h4>

        <h1 style={{ textAlign: "center", marginTop: "20px" }}>
          Our Clients Say!
        </h1>
        <div className="container" style={{ marginTop: "30px" }}>
          <SliderPerson />
        </div>
        {/* first container */}
        <Container className="about-us ">
          <div className="image-box">
            <img src="/about.jpg" alt="about" />
          </div>

          <div className="text-box">
            <h6>ABOUT US</h6>
            <h3>Quick Transport and Logistics Solutions</h3>
            <p>
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet
            </p>
            <div className="text-icon">
              <div>
                <BiWorld fontSize={55} color={"#2F3988"} />
                <h5>Global Coverage</h5>
                <p>
                  Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                  lorem diam justo.
                </p>
              </div>
              <div>
                <GiShipBow fontSize={55} color={"#2F3988"} />
                <h5>On Time Delivery</h5>
                <p>
                  Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                  lorem diam justo.
                </p>
              </div>
            </div>
            <Button
              width={"150px"}
              height={"45px"}
              color={"#fff"}
              bg={"#2F3988"}
              border={"none"}
            >
              Learn More
            </Button>
          </div>
        </Container>
        {/* second container */}
        <Container className=" second-section">
          <div className="text-box">
            <h6>SOME FACTS</h6>
            <h3>#1 Place To Manage All Of Your Shipments</h3>
            <p>
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet
            </p>

            <div>
              <RiCustomerService2Fill fontSize={55} color={"#2F3988"} />
              <h5>Global Coverage</h5>
              <p>
                Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem
                diam justo.
              </p>
            </div>
          </div>
          <div className="card-box">
            <Card
              bgColor={"#2F3988"}
              icon={<FaUsers color="#fff" fontSize={30} />}
              number={"1200"}
              title={"Happy Users"}
            />
            <div>
              <Card
                bgColor={"#198754"}
                icon={<FaUsers color="#fff" fontSize={30} />}
                number={"1200"}
                title={"Happy Users"}
              />
              <Card
                bgColor={"#51CFED"}
                icon={<FaUsers color="#fff" fontSize={30} />}
                number={"1200"}
                title={"Happy Users"}
              />
            </div>
          </div>
        </Container>
        <Container className="third-section">
          <div className="text-box">
            <h6>OUR FEATURES</h6>
            <h3>We Are Trusted Logistics Company Since 1990</h3>

            <div className="text-icon">
              <div className="icon">
                <BiWorld fontSize={55} color={"#2F3988"} />
                <div>
                  <h5>Worldwide Service</h5>
                  <p>
                    Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                    lorem diam justo.
                  </p>
                </div>
              </div>
              <div className="icon">
                <GiShipBow fontSize={55} color={"#2F3988"} />
                <div>
                  <h5>On Time Delivery</h5>
                  <p>
                    Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                    lorem diam justo.
                  </p>
                </div>
              </div>
              <div className="icon">
                <GiShipBow fontSize={55} color={"#2F3988"} />
                <div>
                  <h5>24/7 Telephone Support</h5>
                  <p>
                    Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                    lorem diam justo.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="image-box">
            <img src="/feature.jpg" alt="about" />
          </div>
        </Container>
      </main>
    </>
  );
}

// export  async function getServerSideProps({ locale }) {
//   return {
//     props: {
// 			locale: locale,
//       ...(await serverSideTranslations(locale, ["home", "common"])),
//     },
//   };
// }
