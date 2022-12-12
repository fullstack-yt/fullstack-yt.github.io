import Title from "../../components/title";
import styles from './Post.module.scss';
import Layout from "../../home/layout";
import ReactMarkdown from "react-markdown";
import Subtitle from "../../components/subtitle";
import InlineCode from "../../components/inline-code";
import CodeHeading from "../../components/code-heading";
import Pre from "../../components/pre";
import Ol from "../../components/ol";
import Highlight from "../../components/highlight";
import Link from "../../components/link";
import { useEffect, useState } from "react";

function Post() {
    const [postData, setPostData] = useState();
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        async function load() {
            setLoading(true);
            const res = await fetch(`https://fullstack-cms.herokuapp.com/api/articles?filters[slug][$eq]=${params.id}`);
            const data = await res.json();

            const postData ={
                id: params.id,
                ...data.data[0].attributes,
            };

            setPostData(postData);
            setLoading(false);
        }
        load();
    }, []);

    if (isLoading) return <div>Loading...</div>
    if (!postData) return <div>Not found</div>

    return (
        <Layout>
            <main className={styles.main}>
                <Title title={postData.title} />
                <ReactMarkdown components={{
                    h2: Subtitle,
                    code: InlineCode,
                    h3: CodeHeading,
                    pre: Pre,
                    ol: Ol,
                    strong: Highlight,
                    hr: () => <hr style={{marginTop: "3rem"}} />,
                    a: Link,
                }}>
                    {postData.content}
                </ReactMarkdown>
            </main>
        </Layout>
    );
}

export default Post;