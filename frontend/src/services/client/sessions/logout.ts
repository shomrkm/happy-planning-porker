import axios from '@/lib/axios';
import { buildAuthorizationHeader } from '../util';

export async function logout() {
  try {
    await axios.delete('/logout');
  } catch (err) {
    throw Error('Failed to Logout');
  }
}
