import Head from "next/head";
import Button from "../components/common/Button/Button";
import { useRouter } from "next/router";
import MainLayout from "../components/layouts/MainLayout";

export default function Home() {
  const router = useRouter();
  // 1 - MainLayout is a wrapper with common components in every routes
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
            onClick={
            // 2 - The click doesn't redirect to any place
            () => router.push("")}
            animate
          >
            Check simulator
          </Button>
        </div>
      </MainLayout>
      <style jsx>{`
        .margin-top {
          margin-top: 32px;
        }
        .social-list {
          padding: 0;
          margin: 0;
        }
        ul.social-list {
          display: flex;
          flex-flow: row wrap;
          justify-content: center;
          align-items: center;
        }
        .social-list li {
          display: inline-block;
          list-style: none;
          margin-right: 24px;
          margin-top: 12px;
        }
        .social-list span {
          margin-left: 12px;
          display: block;
          vertical-align: center;
          text-transform: uppercase;
        }
        .social-list a {
          display: flex;
          flex-flow: row nowrap;
          text-decoration: none;
          color: white;
          font-weight: bold;
        }
        .social-list a:hover span {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
