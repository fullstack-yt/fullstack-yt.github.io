import Layout from "../home/layout";
import Introduction from "../home/introduction";
import Paragraph from "../home/paragraph";
import Awesome from "../home/awesome";
import SvgBackgroundSection from "../home/svg-background-section";
import flutter from "../assets/flutter.png";
import Heading from "../home/heading";
import Subheading from "../home/subheading";
import Head from "next/head";

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>Full Stack</title>
                <meta name="description" content="Full Stack - High-Quality Coding Content"/>
                <meta name="theme-color" content="#1e1e1e"/>
            </Head>
            <div className="intro">
                <Introduction/>
                <Paragraph offset>
                    This is a website to learn coding. You can immerse yourself
                    in rewarding, high-quality <span className="medium green">free</span> or
                    <span className="medium purple"> premium courses</span>,
                    read one of the <span className="medium white">many guides</span> or take a <span className="medium blue">focus class</span>.
                </Paragraph>
            </div>
            <Awesome/>
            <SvgBackgroundSection src={flutter}>
                <Paragraph offset>
                    That&apos;s what you might be thinking right now, but it&apos;s also the name of my <a className="blue"
                                                                                                           href="https://pub.dev/packages/awesome">Flutter
                    Package</a>
                </Paragraph>
                <Paragraph offset>
                    It&apos;s a collection of all the greatest UI components I created, and it&apos;s completely <span
                    className="purple medium">free to use</span>
                </Paragraph>
            </SvgBackgroundSection>
            <Heading offset>
                My other work
            </Heading>
            <Subheading start={"#61AFEF"} end={"#56B6C2"}>
                <a href={"https://tappy.cloud"}>tappy.cloud</a>
            </Subheading>
            <Paragraph>
                tappy.cloud is a file-sharing platform, that allows you to quickly transfer files
                between devices. <span className="hide">Currently only supported on iOS and the web.</span>
            </Paragraph>
            <Subheading start={"#5A4EF6"} end={"#EA5A6B"}>
                <a href={"https://tappy.cloud"}>Cool Kids</a>
            </Subheading>
            <Paragraph>
                Cool Kids is a social-media platform where users vote who they want
                to see on the app. Democracy.
            </Paragraph>
        </Layout>
    )
}
