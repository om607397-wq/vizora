import { Hero } from "../sections/Hero";
import { PosterJourney } from "../sections/PosterJourney";
import { SpinWheel } from "../sections/SpinWheel";
import { Portfolio } from "../sections/Portfolio";
import { TransformationVideos } from "../sections/TransformationVideos";
import { Videos } from "../sections/Videos";
import { Pricing } from "../sections/Pricing";
import { Testimonials } from "../sections/Testimonials";
import { OrderFlow } from "../sections/OrderFlow";
import { ContactAndPayment } from "../sections/ContactAndPayment";

export default function Home() {
  return (
    <>
      <Hero />
      <PosterJourney />
      <SpinWheel />
      <Portfolio />
      <TransformationVideos />
      <Videos />
      <Pricing />
      <Testimonials />
      <OrderFlow />
      <ContactAndPayment />
    </>
  );
}
