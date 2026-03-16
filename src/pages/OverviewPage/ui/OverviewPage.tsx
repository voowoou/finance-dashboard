import { TransactionList } from '@/entities/Transaction';
import { Button, Card } from '@/shared/ui';

export const OverviewPage = () => {
  return (
    <section>
      <Button variant="text">Press me</Button>
      <Card description="This is it" title="Card" />
      <TransactionList />
    </section>
  );
};
