import axios from '@/lib/axios';

export async function getSession() {
  try {
    await axios.get(`/sessions`);
  } catch (err) {
    throw Error('Failed to getSession');
  }
}
