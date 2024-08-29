import React from 'react';

const Hours = () => {
  const today = new Date();
  const day = today.getDay();
  const hours = (day >= 1 && day <= 5) ? '10 a.m. a 4 p.m.' : '9 a.m. a 8 p.m.';

  return (
    <div>
      <h2>Horario de apertura del refugio</h2>
      <p>Hoy estamos abiertos de {hours}</p>
    </div>
  );
};

export default Hours;
