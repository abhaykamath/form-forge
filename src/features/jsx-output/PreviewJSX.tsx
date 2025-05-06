import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const PreviewJSX = ({ code }: { code: string }) => {
  return (
    <SyntaxHighlighter
      language="jsx"
      style={atomOneDark}
      // showLineNumbers
      wrapLines
      wrapLongLines
      customStyle={{
        borderRadius: "8px",
        padding: "16px",
        fontSize: "14px",
        minHeight: "320px",
        maxHeight: "500px",
      }}
    >
      {code}
    </SyntaxHighlighter>
  );
};

export default PreviewJSX;
