import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export default function Pre({children}) {
    console.log(children);
    let className = children[0].props.className || '';
    className = className.replace('language-', '');
    console.log(className);
    return (
        <SyntaxHighlighter language={className} style={oneDark}>
            {children[0].props.children[0].toString().replace('<code>', '').replace('</code>', '')}
        </SyntaxHighlighter>
    );
}