import React from "react";

const myStyle = {
  backgroundColor: 'orange'
}

export default function Root(props) {
  return (
    <>
      <section style={myStyle}>
        <a href='/'>Home</a>
        <a href='/platform'>Platform</a>
        <a href='/appContent'>AppContent</a>
      </section>
    </>
  );
}
