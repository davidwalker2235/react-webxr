import Head from "next/head";
import Button from "../components/common/Button/Button";
import { useRouter } from "next/router";
import MainLayout from "../components/layouts/MainLayout";
import HighScore from "../components/high-score/HighScore";
import useVR from "../hooks/useVR";

export default function Home() {
  const router = useRouter();
  // Use the useVR hook for VR detection
  const { supported: vrSupport } = useVR();
  return (
    <div>
      <Head>
        <title>ERNI Mole Attack - React WebXR PoC</title>
        <meta name="description" content="React WebXR PoC by ERNI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout>
        <div>
          <p>Welcome to &quot;Mole Attack&quot; simulator!</p>
          <p>
            This is the situation: We have a problem with some
            cute-but-not-friendly moles in our basement and we need your help.
          </p>
          <p>
            Our engineers have been looking at different ways to get rid off
            them and they have managed to build this &quot;simulator&quot; to
            help us get the best people on board to succeed in our mission.
          </p>
          <p>Are you up for this adventure?</p>
          <p>Good luck and be safe out there.</p>
        </div>

        <div className="margin-top">
          <Button
            onClick={() => router.push(vrSupport ? "/game-3d" : "/game-2d")}
            animate
          >
            Check simulator
          </Button>
        </div>
        <div className="margin-top">
          <HighScore />
        </div>
      </MainLayout>
      <style jsx>{`
        .margin-top {
          margin-top: 32px;
        }
      `}</style>
    </div>
  );
}
