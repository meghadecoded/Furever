import { useRouter } from "next/router";

export default function Breed() {
  const router = useRouter();
  const { breeds } = router.query;
  return (
    <div>
      <h2>More About {breeds}</h2>
    </div>
  );
}
