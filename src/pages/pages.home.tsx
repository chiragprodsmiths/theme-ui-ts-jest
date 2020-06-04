import * as React from 'react';
import { Flex, Box, Grid, Link, Divider, Button } from 'theme-ui';
import DashboardCard from 'components/dashboard/dashboard.cad';
import DashboardListItem from 'components/dashboard/dashboard.listItem';
import ChevronRight from 'components/icons/icon.chevronRight';

type PropTypes = {};

/**
 * Home Page
 */
const Home: React.FC<PropTypes> = () => {
  return (
    <>
      <Grid gap={3} columns={[2, '7fr 3fr']}>
        <Box sx={{ textAlign: 'center' }}>
          <Grid gap={3} columns={[2, null, 3]}>
            <DashboardCard title="Customers" value={120} status="Active" badgeValue={4} active />
            <DashboardCard title="Offers" value={100} status="Pipline" badgeValue={5} active />
            <DashboardCard title="Deliveries" value={34} status="Cars on Order" badgeValue={4} />
            <DashboardCard title="Activations" value={3} status="InProgress" badgeValue={10} />
            <DashboardCard title="Active Contracts" value={56} status="Running" badgeValue={4} />
            <DashboardCard title="Invoices" value={33} status="Billing" badgeValue={4} />
            <DashboardCard title="Payables" value={20} status="Expenses" badgeValue={4} />
            <DashboardCard title="Modifications" value={300} status="Contracts" badgeValue={4} />
            <DashboardCard title="Closures" value={14} status="Being Closed" badgeValue={4} />
          </Grid>
        </Box>
        <Box bg="white" px={6} py={4} sx={{ borderRadius: 'default' }}>
          <Flex>
            <Button variant="tabActive">Alerts</Button>
            <Button variant="tab">Notes</Button>
          </Flex>
          <Divider m={0} color="border" sx={{ borderWidth: '2px' }} />
          <DashboardListItem />
          <DashboardListItem />
          <DashboardListItem />
          <DashboardListItem />
          <DashboardListItem />
          <DashboardListItem />
          <Flex mt={5} sx={{ justifyContent: 'flex-end' }}>
            <Link href="#!" sx={{ fontWeight: 'medium' }} variant="iconLink">
              View All
              <ChevronRight color="black" sx={{ ml: 2 }} />
            </Link>
          </Flex>
        </Box>
      </Grid>
    </>
  );
};

export default Home;
