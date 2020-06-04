import * as React from 'react';
import { Text, Card } from 'theme-ui';
import DashboardBadge from './dashboard.badge';

type PropTypes = {
  active?: boolean;
  title?: string;
  value?: number;
  badgeValue?: number;
  status?: string;
};

/**
 * Dashboard Tab
 */
const DashboardCard: React.FC<PropTypes> = (props) => {
  return (
    <Card variant="dashboardTab" sx={{ opacity: props.active ? 1 : 0.5 }}>
      <DashboardBadge value={props.badgeValue} />
      <Text>{props.title}</Text>
      <Text
        sx={{
          fontSize: 6,
          lineHeight: 'normal',
          fontWeight: 'thin',
        }}>
        {props.value}
      </Text>
      <Text color="textLight">{props.status}</Text>
    </Card>
  );
};

DashboardCard.defaultProps = {};

export default DashboardCard;
