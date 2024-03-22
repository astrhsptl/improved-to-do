import { Text, useLang } from '@/shared/';
import { observer } from 'mobx-react-lite';

export const Some = observer(() => {
  const change = useLang();
  return (
    <div>
      <Text>login</Text>
      <button onClick={() => change()}>change lang</button>
    </div>
  );
});
