import { useEffect } from "react";
import TextEditor from "../../reuseable/text-editor";
import { useTitle } from "../../../hooks/title";

export default function AboutUs() {
  const { setTitle, setSubtitle, title, subtitle } = useTitle();

  useEffect(() => {
    setTitle("About us");
    setSubtitle("You can see the about us section of your app from here.");
  }, [setTitle, setSubtitle]);
  // value={field.value} onChange={field.onChange}
  return (<div>
    <ul className="lg:hidden mb-3">
      <li className="text-2xl font-bold text-primary">{title}</li>
      <li className="text-sm text-gray-600">{subtitle}</li>
    </ul>
    <TextEditor />
  </div>);
}
