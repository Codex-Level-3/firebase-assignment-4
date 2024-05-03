import RealTimeDisplay from "./RealTimeDisplay";
import RealTimeForm from "./RealTimeForm";

export default function Home() {
  return (
    <main>
      <h1>Firestore Real-Time Data Messages</h1>
      <RealTimeForm />
      <RealTimeDisplay />
    </main>
  );
}
