import Loader from "@/components/ui/Loader";
import Toast from "@/components/ui/Toast";

export default function DevPage() {
  return (
    <div style={{ padding: '40px', backgroundColor: '#111', minHeight: '100vh', color: 'white' }}>
      <h1>UI Kitchen Sink</h1>
      <hr style={{ margin: '20px 0', borderColor: '#333' }} />

      <section>

        <Toast message="Invalid username, email or password" iconType="bad" />
        <h2>Loading States</h2>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <div>
            <p>Small Default</p>
        
            <Loader />
            <Loader size="medium" /> 
            <Loader size="large" />
          </div>
          <div>
            <p>Large / Primary Color</p>
          </div>
          <div style={{ background: '#222', padding: '10px' }}>
            <p>Inside a Container</p>
            <Loader />
          </div>
        </div>
      </section>

      <hr style={{ margin: '40px 0', borderColor: '#333' }} />

      {/* --- Section: Buttons --- */}
      <section>
        <h2>Buttons</h2>
        <div style={{ display: 'flex', gap: '10px' }}>
        </div>
      </section>
    </div>
  );
}