import memoize from 'lru-memoize';
import { createValidator, required, maxLength, email } from '../../utils/validation';

const meetingValidator = createValidator({
  title: [required, maxLength(100)],
  owner: [required, email]
});

export default memoize(10)(meetingValidator);
