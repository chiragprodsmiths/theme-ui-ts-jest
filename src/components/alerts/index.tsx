import * as React from 'react';
import alerts from './alerts.json';

export type AlertsProps = {};

export const Alerts: React.FC<AlertsProps> = () => {
  return (
    <ul>
      {alerts.data.map((alert) => (
        <li key={String(alert.id)} data-test-id={alert.id}>
          {alert.name}
        </li>
      ))}
    </ul>
  );
};

export default Alerts;
