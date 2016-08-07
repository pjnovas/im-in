import memoize from 'lru-memoize';
import { createValidator, required, maxLength, email } from '../../utils/validation';

const eventValidator = createValidator({
  title: [required, maxLength(100)],
  owner: [required, email]
});

export default memoize(10)(eventValidator);
