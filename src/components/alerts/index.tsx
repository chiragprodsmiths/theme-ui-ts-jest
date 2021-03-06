import * as React from 'react';
import alerts from './alerts.json';

type AlertsProps = {};

const Alerts: React.FC<AlertsProps> = () => {
  return (
    <ul>
      {alerts.data.map((alert) => (
        <li key={String(alert.id)} data-testid={alert.id}>
          {alert.name}
        </li>
      ))}
    </ul>
  );
};

export default Alerts;
