import { useRouter } from "next/router";

export default function Petprofile() {
  const router = useRouter();
  const { petname } = router.query;
  return (
    <div>
      <h2>{petname}'s Profile Page</h2>
    </div>
  );
}
