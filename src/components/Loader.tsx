export const Loader = () => {
    return (
      <section>
        <div
          style={{
            position: 'fixed',
            width: '100vw',
            height: '100vh',
            background: 'red',
            opacity: '0.3',
            top: '0',
          }}
        ></div>
        <h1 style={{ color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Loader.....</h1>
      </section>
    );
};