import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

type Props = {
  value?: string;
  onChange?: (value: string) => void;
};

const TextEditor = ({ value, onChange }: Props) => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }, { size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }],
      [{ align: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],
      ["blockquote", "code-block"],
      ["link"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "script",
    "align",
    "list",
    "indent",
    "blockquote",
    "code-block",
    "link",
    "clean",
  ];

  return (
    <div className="w-full space-y-1">
      <div className="rounded-t-xl border border-gray-300 bg-gray-50/80 p-2">
        <ReactQuill
          theme="snow"
          value={value}
          onChange={onChange}
          modules={modules}
          formats={formats}
          className="min-h-[280px] rounded-b-xl bg-white"
        />
      </div>
    </div>
  );
};

export default TextEditor;
