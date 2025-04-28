import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const PreviewJSX = ({ code }: { code: string }) => {
  return (
    <SyntaxHighlighter
      language="jsx"
      style={atomOneDark}
      showLineNumbers
      wrapLines
      customStyle={{
        borderRadius: "8px",
        padding: "16px",
        fontSize: "14px",
      }}
    >
      {code}
    </SyntaxHighlighter>
  );
};
