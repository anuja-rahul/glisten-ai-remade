import WordMark from "@/components/WordMark";
import { createClient } from "@/prismicio";

export default async function Footer() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  return (
    <div>
      <WordMark />
    </div>
  );
}
