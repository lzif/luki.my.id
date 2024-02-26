import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "Luki Zainur" },
    { name: "description", content: "Welcome to my website!" },
  ];
};

export default function Index() {
  return (
    <div>
      <h1>Namaku Luki Zainur</h1>
    </div>
  );
}
